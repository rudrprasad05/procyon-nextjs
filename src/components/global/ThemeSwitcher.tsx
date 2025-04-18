"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid rehydration errors
  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <Sun className="h-3 w-3  md:h-[1.2rem] md:w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <Moon className="h-3 w-3  md:h-[1.2rem] md:w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger
          className="hidden md:block"
          value="system"
          onClick={() => setTheme("system")}
        >
          <Laptop className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
