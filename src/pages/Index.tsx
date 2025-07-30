import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 23, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      title: "ChatGPT",
      icon: "MessageCircle",
      lessons: [
        "Введение в работу с ChatGPT",
        "Работа с телефоном", 
        "Создание постов за минуты",
        "Создание качественных промтов",
        "Продвинутое создание промтов",
        "Создание логотипов и обложек",
        "Создание фото с одеждой и предметами",
        "Создание личных фото с помощью ChatGPT",
        "Генерация в различных стилях"
      ]
    },
    {
      title: "Krea",
      icon: "Palette",
      lessons: [
        "Введение в Krea",
        "Создание аватара",
        "Генерация изображений", 
        "Создание реалистичных изображений",
        "Создание видео из промта и фото",
        "Создание реалистичных видео с человеком",
        "Создание контента с одеждой",
        "Создание фото по стилю",
        "Как исправить недочёты"
      ]
    },
    {
      title: "ИИ-бот",
      icon: "Bot",
      lessons: [
        "Введение в работу с ИИ-ботом",
        "Оплата подписки",
        "Создание аватара и фото",
        "Создание видео", 
        "Генерация и клонирование голоса",
        "VEO 3 - новейшая технология",
        "Создание видео с товарами"
      ]
    },
    {
      title: "Gamma",
      icon: "FileText",
      lessons: [
        "Создание презентаций с ИИ",
        "Создание документов",
        "Создание каруселей",
        "Генерация изображений в презентациях"
      ]
    },
    {
      title: "Flyvi",
      icon: "Sparkles",
      lessons: [
        "Создание дизайнов",
        "Редактирование изображений",
        "Обзор готовых дизайнов",
        "Экспорт и использование"
      ]
    }
  ];

  const benefits = [
    {
      icon: "Clock",
      title: "Экономия времени",
      description: "Создавайте контент в 10 раз быстрее",
      detail: "15 минут вместо 5 часов на пост"
    },
    {
      icon: "DollarSign",
      title: "Снижение затрат",
      description: "Откажитесь от дорогих подрядчиков",
      detail: "Экономия до 500,000₽ в месяц"
    },
    {
      icon: "TrendingUp",
      title: "Рост доходов",
      description: "Увеличьте прибыль на 200%",
      detail: "Средний результат наших учеников"
    }
  ];

  const stats = [
    { value: "2,847", label: "Выпускников", icon: "Users" },
    { value: "127%", label: "Рост дохода", icon: "TrendingUp" },
    { value: "15 мин", label: "На создание поста", icon: "Zap" },
    { value: "98%", label: "Довольных учеников", icon: "Star" }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "SMM-специалист",
      content: "За месяц увеличила количество клиентов в 3 раза. Работаю теперь 6 часов вместо 12.",
      result: "Доход: 30к → 180к",
      avatar: "👩‍💼"
    },
    {
      name: "Михаил Козлов", 
      role: "Фрилансер-дизайнер",
      content: "Перестал тратить ночи на рендеры. Беру в 2 раза больше заказов благодаря ИИ.",
      result: "Доход: 80к → 380к",
      avatar: "👨‍🎨"
    },
    {
      name: "Елена Смирнова",
      role: "Владелица бизнеса",
      content: "Уволила команду дизайнеров. Делаю всё сама быстрее и качественнее.",
      result: "Экономия: 400к/мес",
      avatar: "👩‍💻"
    }
  ];

  const pricing = [
    {
      name: "Старт",
      originalPrice: "9,990",
      price: "4,990", 
      features: [
        "Доступ к базовым модулям (6 мес)",
        "Чат с поддержкой",
        "База промтов и референсов",
        "3 основных ИИ-инструмента",
        "Основы монетизации"
      ],
      popular: false,
      modules: "3 модуля"
    },
    {
      name: "AI в бизнесе",
      originalPrice: "24,990",
      price: "12,990",
      features: [
        "Доступ ко всем 11 модулям (6 мес)",
        "Чат с учениками и кураторами", 
        "Растущая база промтов и референсов",
        "Все ИИ-инструменты (ChatGPT, Krea, Gamma, Flyvi)",
        "Полная программа монетизации",
        "Создание ИИ-клона себя"
      ],
      popular: true,
      modules: "11 модулей"
    },
    {
      name: "AI эксклюзив",
      originalPrice: "49,990", 
      price: "24,990",
      features: [
        "Бессрочный доступ ко всем 11 модулям",
        "Личное ведение эксперта на 2 месяца",
        "Приоритетный чат с учениками", 
        "Растущая база промтов (пожизненно)",
        "Воронки продаж с Telegram-ботами",
        "Монетизация TikTok с нуля",
        "Индивидуальная стратегия заработка",
        "ИИ-клон + клонирование голоса"
      ],
      popular: false,
      modules: "11 модулей + менторство"
    }
  ];

  const faq = [
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Достаточно 30-60 минут в день. Многие ученики уже через неделю получают первые результаты и окупают курс."
    },
    {
      question: "Подойдёт ли курс полному новичку?",
      answer: "Да! 70% наших учеников - новички без опыта. Курс построен от простого к сложному с практическими примерами."
    },
    {
      question: "Что если не получится заработать?",
      answer: "У нас 98% успешных кейсов. Если через месяц вы не увеличите доход - вернём все деньги без вопросов."
    },
    {
      question: "Нужно ли покупать дополнительные программы?",
      answer: "Нет! Все ИИ-инструменты имеют бесплатные тарифы. Дополнительно ничего покупать не нужно."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Bar */}
      <div className="bg-black text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          ⏰ Скидка действует ещё: {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-gray-100 text-gray-800 border-0">
            Курс по нейросетям • 2,847 выпускников
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Зарабатывайте с ИИ<br/>
            <span className="font-normal">в 5 раз больше</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Освойте ChatGPT, Krea, Gamma и другие ИИ-инструменты.<br/>
            Увеличьте доход на 200% за месяц или вернём деньги.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
              Начать обучение за 4,990₽
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4">
              Посмотреть программу
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Icon name={stat.icon as any} className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <div className="text-2xl font-light text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-4">
            Что даст вам курс
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16">
            Конкретные результаты, которые вы получите
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Icon name={benefit.icon as any} className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-2">{benefit.description}</p>
                <p className="text-sm text-gray-500">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-4">
            Программа курса
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16">
            11 модулей практических навыков
          </p>
          
          <div className="grid lg:grid-cols-5 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={module.icon as any} className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg font-medium text-gray-900">{module.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {module.lessons.length} уроков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {module.lessons.slice(0, 3).map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        {lesson}
                      </li>
                    ))}
                    {module.lessons.length > 3 && (
                      <li className="text-gray-400 text-sm">
                        +{module.lessons.length - 3} уроков
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16">
            Результаты учеников
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 text-base font-medium">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-500 text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <Badge className="bg-gray-100 text-gray-700 border-0 text-xs">
                    {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-4">
            Выберите тариф
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16">
            Каждый тариф окупится в первую неделю
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`border ${plan.popular ? 'border-gray-900 shadow-lg' : 'border-gray-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white border-0 px-3 py-1">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-medium text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-sm text-gray-400 line-through">{plan.originalPrice}₽</span>
                  </div>
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    {plan.price}₽
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 border-0 text-xs">
                    {plan.modules}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-gray-700">
                        <Icon name="Check" className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? 'bg-black hover:bg-gray-800' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              Рассрочка до 12 месяцев • Гарантия возврата 30 дней
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg bg-white px-6">
                <AccordionTrigger className="text-gray-900 hover:text-gray-700 py-6 text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
            Начните зарабатывать<br/>больше уже завтра
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Присоединяйтесь к 2,847 ученикам, которые изменили свою жизнь с помощью ИИ
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10 inline-block">
            <div className="text-lg font-medium text-gray-900 mb-1">
              Цена вырастет через: {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
            </div>
            <div className="text-gray-600 text-sm">
              Осталось мест: 12 из 100
            </div>
          </div>

          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg mb-8">
            Получить доступ за 4,990₽
          </Button>
          
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="w-4 h-4" />
              <span>Гарантия 30 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="w-4 h-4" />
              <span>Мгновенный доступ</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" className="w-4 h-4" />
              <span>Рассрочка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-gray-900 font-medium text-lg mb-2">Курс "ИИ для заработка"</h3>
              <p className="text-gray-500">Зарабатывайте больше, работайте меньше</p>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
                <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Курс "ИИ для заработка". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}