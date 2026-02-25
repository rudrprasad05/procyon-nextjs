import React from "react";

export default function FixedCont({ children }: { children: React.ReactNode }) {
  return <div className="fixed top-10 right-10">{children}</div>;
}
