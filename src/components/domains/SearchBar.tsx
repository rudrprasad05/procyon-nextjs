"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import RequestAccess from "./Request";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [domains, setDomains] = useState<string[]>([]);

  async function handleClick() {
    if (!name) return;
    const res = await axios.post("/api/dns", {
      name: name,
    });
    const data = res.data;
    console.log(data.data.results);
    setDomains(() => data.data.results);
  }

  useEffect(() => {
    console.log(domains);
  }, [domains]);

  return (
    <div>
      <div className="flex mt-12 items-center gap-3 text-white">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter domain name"
          className="grow text-white/80 placeholder:text-white/80 bg-transparent border border-solid border-purple-500"
          name="domain"
        />
        <Button
          onClick={async () => await handleClick()}
          className="bg-orange-500 "
        >
          Search
        </Button>
      </div>
      {domains.length > 0 && (
        <div className="text-white/80 mt-3">
          Dont see a domain you like?{" "}
          <RequestAccess name="">
            <span className="text-orange-500 cursor-pointer">
              Request special access
            </span>
          </RequestAccess>
        </div>
      )}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {domains.map((domain) => (
          <DomainCard key={domain} name={domain} value={true} />
        ))}
      </div>
    </div>
  );
}

function DomainCard({ name, value }: { name: string; value: boolean }) {
  if (!value) return null;
  return (
    <div className="flex justify-between items-center bg-purple-800 p-4 rounded-md">
      <div className="text-purple-200">{name}</div>
      <div className="flex items-center gap-3">
        <div className="text-green-400">Available</div>
        <Button className="border-1 bg-purple-800 text-orange-500 border-orange-500">
          Register
        </Button>
      </div>
    </div>
  );
}
