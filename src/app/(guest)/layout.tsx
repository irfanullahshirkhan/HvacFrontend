import React from "react";
import { Toaster } from "sonner";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-16">{children}</div>
      <Toaster />
    </>
  );
}
