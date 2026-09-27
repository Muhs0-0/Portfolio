export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium text-ink">Muhsin Hassan</p>
        <p className="text-sm text-muted">Software Developer &amp; Founder</p>
        <p className="mt-2 text-sm italic text-faint">
          &ldquo;Building the systems Africa needs.&rdquo;
        </p>
        <p className="mt-4 text-xs text-faint">
          &copy; {year} Muhsin Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
