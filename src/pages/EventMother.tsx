import { Link } from "react-router-dom";

export default function EventMother() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-semibold text-warm-text">Концерт ко Дню матери</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Страница мероприятия — в разработке.
      </p>
      <Link to="/events" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
        ← В афишу
      </Link>
    </main>
  );
}
