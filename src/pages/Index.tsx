import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-40" />
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-foreground/80 uppercase tracking-widest text-sm mb-4 font-medium"
        >
          Женский хор · Москва и МО
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Ты можешь{" "}
          <span className="italic">громче!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Хор «Громче» — место, где поют без оценок, без требований, без страха.
          Только радость, поддержка и ваш голос.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary font-semibold px-8 text-base shadow-warm hover:bg-primary-foreground/90 transition-colors"
          >
            <Link to="/zapis">Записаться на пробное</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 text-base"
          >
            <a href="#about">Узнать больше</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function AboutSection() {
  const features = [
    {
      icon: Music,
      title: "Без профессиональных требований",
      text: "Не нужно уметь петь, читать ноты или иметь музыкальное образование. Нужно только желание.",
    },
    {
      icon: Calendar,
      title: "Раз в неделю",
      text: "Занятия проходят по расписанию — одна репетиция в неделю, чтобы легко вписалось в ритм жизни.",
    },
    {
      icon: MapPin,
      title: "Москва и МО",
      text: "Удобное расположение в черте города. Точный адрес — в расписании и при записи.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-text mb-4">
            О хоре «Громче»
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Мы — женский хор без профессионального ценза. Поём не ради сцены, а ради жизни:
            ради ощущения, когда твой голос звучит в унисон с другими, и это тебя наполняет.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-warm-cream border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-warm-text text-lg">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Schedule ─────────────────────────────────────────────────────────────────

function ScheduleSection() {
  return (
    <section className="py-16 bg-warm-cream">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-text mb-4">Расписание</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Актуальное расписание и запись — через виджет на странице записи.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-hero text-primary-foreground font-semibold px-8 shadow-warm hover:opacity-90 transition-opacity"
          >
            <Link to="/zapis">Смотреть расписание</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Готова попробовать?
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
            Первое занятие — бесплатно. Без обязательств. Просто приходи и пой.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary font-semibold px-10 py-6 text-lg shadow-warm hover:bg-primary-foreground/90 transition-colors animate-pulse-subtle"
          >
            <Link to="/zapis">Записаться бесплатно</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-warm-text tracking-tight">
          Хор «Громче»
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">О хоре</a>
          <Link to="/events" className="hover:text-foreground transition-colors">Афиша</Link>
          <Link
            to="/zapis"
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Записаться
          </Link>
        </nav>
        <Link
          to="/zapis"
          className="md:hidden bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium"
        >
          Записаться
        </Link>
      </div>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2025 Хор «Громче». Москва и МО.</p>
        <nav className="flex gap-6">
          <Link to="/events" className="hover:text-foreground transition-colors">Афиша</Link>
          <Link to="/zapis" className="hover:text-foreground transition-colors">Запись</Link>
          <Link to="/legal" className="hover:text-foreground transition-colors">Документы</Link>
        </nav>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
