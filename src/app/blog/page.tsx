"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BlogRedirectPage() {
  useEffect(() => {
    // Client-side redirect to resources/blog
    window.location.replace("/resources/blog/");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">This page has moved</h1>
        <p className="text-gray-600">Redirecting to our blog...</p>
        <p className="mt-4">
          If you are not redirected, <Link href="/resources/blog/" className="text-[#3b82f6] underline">click here</Link>.
        </p>
      </div>
    </main>
  );
}

