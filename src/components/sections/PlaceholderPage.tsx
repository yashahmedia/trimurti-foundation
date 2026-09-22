import { ArrowLeft, ArrowUpRight, HeartHandshake } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-[#ba773e] hover:text-[#173b39]"
          >
            <ArrowLeft size={16} /> Back home
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ba773e]">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[.98] tracking-[-0.04em] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#52716b]">
            {description}
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#173b39] px-6 py-3.5 font-bold text-[#f8f7f2] hover:bg-[#ba773e]"
          >
            Start a conversation <ArrowUpRight size={18} />
          </Link>
          <div className="mt-16 flex items-center gap-3 text-sm text-[#52716b]">
            <HeartHandshake size={22} className="text-[#ba773e]" /> More details
            are coming soon.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
