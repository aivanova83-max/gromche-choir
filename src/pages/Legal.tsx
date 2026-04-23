import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-semibold text-warm-text">Правовые документы</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Раздел с юридическими документами хора «Громче» — в разработке.
      </p>
      <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
        ← На главную
      </Link>
    </main>
  );
}
