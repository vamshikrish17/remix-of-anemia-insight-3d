export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold">
            Hemo<span className="text-primary">Scan</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © 2026 HemoScan. AI-powered anemia detection platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
