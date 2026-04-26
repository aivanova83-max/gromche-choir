import { Link } from "react-router-dom";

export default function Events() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-semibold text-warm-text">Афиша</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Скоро здесь появятся анонсы концертов и мероприятий хора «Громче».
      </p>
      <Link to="/events/mother" className="text-primary underline underline-offset-4">
        Концерт ко Дню матери →
      </Link>
      <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
        ← На главную
      </Link>
    </main>
  );
}
