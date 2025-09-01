import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Confirmation | Paradise Law AZ",
  description: "Your payment was processed successfully.",
  robots: { index: false, follow: false },
};

export default function PaymentConfirmationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-navy mb-4">Payment Confirmed</h1>
          <p className="text-gray-700 mb-6">A receipt has been sent to your email.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/thank-you/" className="bg-gold text-white hover:bg-gold-dark px-6 py-3 rounded-md font-semibold">Continue</Link>
            <Link href="/" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-md font-semibold">Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

