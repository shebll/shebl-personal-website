import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 px-4 pt-40 pb-20 text-center grainy-bg">
      <h1 className="text-6xl font-bold tracking-tighter">404</h1>
      <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
        This page could not be found.
      </p>
      <Link href="/" className="btn primary">
        ← Back to Home
      </Link>
    </main>
  );
}
