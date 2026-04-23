import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// TODO: заменить на реальные отзывы участниц
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Я пришла с нулевым опытом и жутким страхом петь вслух. Уже через месяц я пела соло на репетиции. Здесь не оценивают — здесь поддерживают.",
    name: "Мария",
    detail: "в хоре 8 месяцев",
  },
  {
    id: 2,
    quote:
      "Думала, что в 45 лет поздно начинать. Оказалось — самое время. Нашла подруг, нашла себя. Каждая репетиция — праздник.",
    name: "Елена",
    detail: "в хоре 1,5 года",
  },
  {
    id: 3,
    quote:
      "После рабочего дня приходишь сюда — и все стрессы уходят. Это не занятия, это терапия голосом и теплом.",
    name: "Ольга",
    detail: "в хоре 6 месяцев",
  },
  {
    id: 4,
    quote:
      "Меня с детства убеждали, что мне медведь на ухо наступил. Здесь научили слышать — себя и других. Я пою!",
    name: "Светлана",
    detail: "в хоре 1 год",
  },
  {
    id: 5,
    quote:
      "Сначала пришла за компанию с подругой, осталась ради себя. Хор стал любимой частью недели.",
    name: "Наталья",
    detail: "в хоре 2 года",
  },
  {
    id: 6,
    quote:
      "Голос — это то, что всегда с тобой. Здесь меня научили им пользоваться и не бояться звучать.",
    name: "Анна",
    detail: "в хоре 4 месяца",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-text mb-4">
            Что говорят участницы
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Они тоже когда-то сомневались. Теперь поют.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full flex flex-col bg-card border-border shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="pt-6 flex flex-col gap-4 h-full">
                  <span className="text-4xl text-primary leading-none select-none">&ldquo;</span>
                  <p className="text-foreground leading-relaxed flex-1">{item.quote}</p>
                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-warm-text">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
