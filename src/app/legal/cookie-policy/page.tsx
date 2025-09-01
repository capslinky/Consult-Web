import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Paradise Law AZ",
  description: "Use of cookies and tracking technologies on this site.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          Cookie policy content will be added here before launch.
        </div>
      </section>
    </main>
  );
}

