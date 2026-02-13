import Link from "next/link";
import { ROUTES } from "@/lib/constants";

/**
 * Quiz Layout
 * Minimal layout without full navigation to reduce distractions
 */
export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      {/* Minimal header - just logo */}
      <header className="px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <Link
            href={ROUTES.HOME}
            className="inline-block font-display text-xl font-semibold text-neutral-900"
          >
            Instituut Leanne
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        {children}
      </main>

      {/* Minimal footer */}
      <footer className="px-4 py-4 text-center text-sm text-neutral-500">
        <Link
          href={ROUTES.PRIVACY}
          className="hover:text-neutral-700 hover:underline"
        >
          Privacybeleid
        </Link>
      </footer>
    </div>
  );
}
