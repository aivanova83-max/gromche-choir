import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// TODO: заменить на реальные вопросы/ответы
const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Я никогда не пела — справлюсь?",
    answer:
      "Абсолютно. «Громче» — хор без профессионального ценза. Мы принимаем всех, кто хочет петь: с опытом и без, с медицинским слухом и с убеждением, что «медведь наступил». Наш дирижёр умеет работать с любым уровнем, а первое занятие — пробное и бесплатное.",
  },
  {
    id: "q2",
    question: "Нужен ли музыкальный слух?",
    answer:
      "Хороший слух — не условие поступления, а результат занятий. Большинство наших участниц пришли без музыкального образования. Мы учим слышать и себя, и ансамбль — это навык, который развивается с практикой.",
  },
  {
    id: "q3",
    question: "Есть ли ограничения по возрасту?",
    answer:
      "Никаких. У нас поют женщины от 20 до 65+ лет. Хор — это не спорт с возрастными нормативами. Голос не стареет так, как мышцы; с правильными упражнениями он только становится богаче.",
  },
  {
    id: "q4",
    question: "Как часто проходят занятия и где?",
    answer:
      "Репетиции проходят раз в неделю. Актуальное расписание и адрес всегда можно найти в нашем расписании или уточнить при записи через виджет. Мы находимся в Москве и Московской области.",
  },
  {
    id: "q5",
    question: "Сколько стоит участие и как оплачивать?",
    answer:
      "Первое занятие — пробное, бесплатно. Дальнейшее участие оплачивается абонементом через систему MoyKlass: выбираете удобный вариант при записи. Стоимость актуального абонемента указана в форме записи.",
  },
  {
    id: "q6",
    question: "Что взять на первое занятие?",
    answer:
      "Ничего особенного: удобную одежду, воду и хорошее настроение. Ноты и материалы предоставляем мы. Если есть вопросы до первого занятия — напишите нам, мы всё расскажем.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-text mb-4">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы слышали эти сомнения — и рады развеять каждое.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-base font-medium text-warm-text hover:no-underline hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Остались вопросы? Просто приходите на пробное занятие.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-hero text-primary-foreground font-semibold px-8 shadow-warm hover:opacity-90 transition-opacity"
          >
            <Link to="/zapis">Записаться бесплатно</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
