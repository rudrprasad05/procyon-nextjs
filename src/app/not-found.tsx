import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="bg-procyon-purple h-[75vh] relative flex flex-col items-center justify-center text-white">
        <img
          src="/images/ufo.webp"
          alt=""
          className="float w-3/4 md:w-1/5 glowufo"
        />
        <h1 className="text-4xl font-extrabold italic tracking-wider text-center p-2">
          Error 404: Page Not Found
        </h1>
      </main>
    </>
  );
}
