// components/Layout.tsx
import React from "react";
import { Header, WebTitle } from "@/components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      < WebTitle/>
      <Header />

      <main className="flex-grow container mx-auto py-4">{children}</main>
    </div>
  );
}
