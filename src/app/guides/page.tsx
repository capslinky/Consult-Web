"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GuidesRedirectPage() {
  useEffect(() => {
    // Client-side redirect to resources/guides
    window.location.replace("/resources/guides/");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">This page has moved</h1>
        <p className="text-gray-600">Redirecting to our guides...</p>
        <p className="mt-4">
          If you are not redirected, <Link href="/resources/guides/" className="text-[#3b82f6] underline">click here</Link>.
        </p>
      </div>
    </main>
  );
}

