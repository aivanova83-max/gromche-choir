import { Link } from "react-router-dom";

export default function Zapis() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center pt-16 px-4">
      <h1 className="text-4xl font-semibold text-warm-text mb-4">Запись на занятие</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Выберите удобное время и запишитесь на первое занятие — это бесплатно.
      </p>
      {/* Виджет MoyKlass рендерится в #SiteWidgetMoyklass133029 в index.html, вне React */}
      <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors mt-8">
        ← На главную
      </Link>
    </main>
  );
}
