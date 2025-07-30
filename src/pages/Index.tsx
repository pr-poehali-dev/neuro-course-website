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
      ],
      color: "from-green-500 to-emerald-600"
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
      ],
      color: "from-purple-500 to-violet-600"
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
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Gamma",
      icon: "FileText",
      lessons: [
        "Создание презентаций с ИИ",
        "Создание документов",
        "Создание каруселей",
        "Генерация изображений в презентациях"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Flyvi",
      icon: "Sparkles",
      lessons: [
        "Создание дизайнов",
        "Редактирование изображений",
        "Обзор готовых дизайнов",
        "Экспорт и использование"
      ],
      color: "from-pink-500 to-rose-600"
    }
  ];

  const painPoints = [
    {
      icon: "Clock",
      problem: "Тратите 5+ часов на каждый пост?",
      oldWay: "Обычный способ: поиск идей, съемка, обработка",
      newWay: "С ИИ: 15 минут на готовый контент",
      saving: "Экономия: 300+ часов в месяц",
      money: "= 150,000₽ свободного времени"
    },
    {
      icon: "DollarSign", 
      problem: "Платите дизайнерам 50-200к в месяц?",
      oldWay: "Обычный способ: найти дизайнера, ждать, править",
      newWay: "С ИИ: создаете сами за минуты",
      saving: "Экономия: до 500,000₽ в месяц",
      money: "= 6,000,000₽ в год!"
    },
    {
      icon: "TrendingDown",
      problem: "Конкуренты обходят вас по цене?",
      oldWay: "Обычный способ: высокие расходы на подрядчиков",
      newWay: "С ИИ: себестоимость в 10 раз ниже",
      saving: "Прибыль: +200% к доходу",
      money: "= Полное преимущество на рынке"
    }
  ];

  const results = [
    { number: "2,847", label: "Довольных учеников", icon: "Users" },
    { number: "127%", label: "Средний рост дохода", icon: "TrendingUp" },
    { number: "15 мин", label: "На создание поста", icon: "Zap" },
    { number: "500к₽", label: "Экономия в месяц", icon: "PiggyBank" }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "SMM-специалист",
      before: "Работала по 12 часов, еле сводила концы с концами",
      after: "За месяц увеличила количество клиентов в 3 раза. Работаю 6 часов в день!",
      income: "Было: 30к → Стало: 180к",
      time: "Было: 12ч → Стало: 6ч",
      avatar: "👩‍💼"
    },
    {
      name: "Михаил Козлов", 
      role: "Фрилансер-дизайнер",
      before: "Конкуренты демпили, заказов становилось меньше",
      after: "Перестал тратить ночи на рендеры. Беру в 2 раза больше заказов!",
      income: "Было: 80к → Стало: 380к",
      time: "Было: 14ч → Стало: 8ч", 
      avatar: "👨‍🎨"
    },
    {
      name: "Елена Смирнова",
      role: "Владелица бизнеса",
      before: "Команда дизайнеров съедала весь бюджет",
      after: "Уволила команду дизайнеров. Делаю всё сама быстрее и лучше!",
      income: "Экономия: 400к/мес",
      time: "Скорость работ: +500%",
      avatar: "👩‍💻"
    }
  ];

  const targetAudience = [
    {
      icon: "GraduationCap",
      title: "Новички без опыта",
      pain: "Хотят зарабатывать в интернете, но не знают с чего начать",
      solution: "Получите конкретные навыки для заработка 20-80к уже через месяц",
      result: "От 0 до первых денег за 2 недели"
    },
    {
      icon: "Camera", 
      title: "Блогеры и контент-мейкеры",
      pain: "Тратят всё время на создание контента, выгорают",
      solution: "Автоматизируйте создание постов, фото и видео в 10 раз",
      result: "В 5 раз больше контента за то же время"
    },
    {
      icon: "Briefcase",
      title: "Фрилансеры и дизайнеры", 
      pain: "Конкуренция растёт, цены падают, работать приходится больше",
      solution: "Ускорьте работу в 10 раз, предлагайте новые ИИ-услуги",
      result: "Доход +50-200% при меньшей нагрузке"
    },
    {
      icon: "Building",
      title: "Предприниматели и бизнес",
      pain: "Дорогие дизайнеры, долгое ожидание, высокие расходы на креатив",
      solution: "Создавайте рекламу и контент самостоятельно за копейки",
      result: "Экономия 100-500к в месяц на подрядчиках"
    }
  ];

  const bonuses = [
    {
      title: "Монтаж",
      icon: "Film",
      items: ["Редактирование фото", "Редактирование видео"]
    },
    {
      title: "ИИ-аватар",
      icon: "User", 
      items: ["Создание ИИ клона себя", "Настройка голоса"]
    },
    {
      title: "База материалов",
      icon: "Database", 
      items: ["Референсы для себя и экспертов", "Растущая база промтов"]
    },
    {
      title: "Монетизация Pro",
      icon: "DollarSign",
      items: ["6 способов заработка на нейроконтенте", "Где продавать услуги", "Создание портфолио", "Воронки продаж с Telegram-ботами", "Монетизация TikTok"]
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
      savings: "Сэкономите: 5,000₽",
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
      savings: "Сэкономите: 12,000₽",
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
      savings: "Сэкономите: 25,000₽",
      modules: "11 модулей + менторство"
    }
  ];

  const faq = [
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Достаточно 30-60 минут в день. Многие ученики уже через неделю получают первые результаты и окупают курс. Полный курс можно пройти за 2-4 недели."
    },
    {
      question: "Подойдёт ли курс полному новичку?",
      answer: "Да! 70% наших учеников - новички без опыта. Курс построен от простого к сложному с практическими примерами. Начинаем с самых основ."
    },
    {
      question: "Что если не получится заработать?",
      answer: "У нас 98% успешных кейсов. Если через месяц вы не увеличите доход или не окупите курс - вернём все деньги без вопросов. Гарантия 30 дней."
    },
    {
      question: "Нужно ли покупать дополнительные программы?",
      answer: "Нет! Все ИИ-инструменты имеют бесплатные тарифы. Мы покажем, как получить максимум даже без платных подписок. Дополнительно ничего покупать не нужно."
    },
    {
      question: "Сколько можно заработать с этими навыками?",
      answer: "Наши ученики зарабатывают от 30к до 500к в месяц. Всё зависит от ниши и усилий. Средний рост дохода - 127% за первые 3 месяца."
    },
    {
      question: "Есть ли техническая поддержка?",
      answer: "Конечно! У вас будет доступ к чату поддержки, где отвечают в течение 2-4 часов. Плюс закрытый чат с другими учениками для обмена опытом."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 font-bold text-sm md:text-base">
          🔥 ПОСЛЕДНИЕ 12 МЕСТ! Цена вырастет через: {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl"></div>
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0 mb-4 font-bold px-4 py-2">
              🏆 ТОП-1 курс по нейросетям в СНГ • 2,847 выпускников
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Пока конкуренты работают <span className="text-red-400">по 12 часов</span>,<br/>
            вы будете зарабатывать <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">в 5 раз больше</span><br/>
            за 2 часа в день
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-yellow-400">Увеличьте доход на 200% уже через месяц</strong> с помощью ChatGPT, Krea, Gamma, Flyvi и других ИИ-инструментов.<br/>
            Или вернём <strong className="text-white">каждую копейку</strong> + 10,000₽ сверху за потраченное время.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-8 py-6 font-bold">
              <Icon name="Zap" className="mr-2" />
              ХОЧУ ЗАРАБАТЫВАТЬ БОЛЬШЕ ЗА 4,990₽
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" />
              Посмотреть результаты учеников
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur border border-white/10">
                <Icon name={stat.icon as any} className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-red-950/40 to-orange-950/40">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
            Хватит терять деньги каждый день!
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Каждый час промедления = потерянные тысячи рублей прибыли
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-red-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full"></div>
                <CardHeader>
                  <Icon name={point.icon as any} className="w-12 h-12 text-red-400 mb-4" />
                  <CardTitle className="text-red-200 text-lg">{point.problem}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-red-900/30 rounded-lg border border-red-500/20">
                    <p className="text-red-300 text-sm">❌ {point.oldWay}</p>
                  </div>
                  <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/20">
                    <p className="text-green-300 text-sm">✅ {point.newWay}</p>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-yellow-400 font-bold text-lg">{point.saving}</p>
                    <p className="text-green-400 font-bold text-xl">{point.money}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              💰 Итого за год экономии: 6,000,000+ рублей
            </h3>
            <p className="text-white">А курс стоит всего 4,990₽. Окупается за первый же заказ!</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Для кого этот курс создан
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Если вы узнаете себя хотя бы в одном пункте - курс точно для вас
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Icon name={audience.icon as any} className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{audience.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                    <p className="text-red-300 text-sm">😣 <strong>Ваша проблема:</strong> {audience.pain}</p>
                  </div>
                  <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                    <p className="text-green-300 text-sm">💡 <strong>Решение:</strong> {audience.solution}</p>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20">
                    <p className="text-blue-300 text-sm font-bold">🎯 <strong>Результат:</strong> {audience.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Before/After */}
      <section className="px-4 py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Реальные результаты наших учеников
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Было ↔️ Стало. Цифры не врут!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 border-green-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-slate-400">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                    <p className="text-red-300 text-sm">😔 <strong>Было:</strong> {testimonial.before}</p>
                  </div>
                  <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/20">
                    <p className="text-green-300 text-sm">🚀 <strong>Стало:</strong> {testimonial.after}</p>
                  </div>
                  <div className="flex justify-between text-center">
                    <div>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                        💰 {testimonial.income}
                      </Badge>
                    </div>
                    <div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-xs">
                        ⏰ {testimonial.time}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              📈 Средний результат: +127% к доходу за 3 месяца
            </h3>
            <p className="text-white">И это только начало! Многие ученики показывают результат +300-500%</p>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Что вы освоите за 30 дней
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            11 модулей практических навыков, которые принесут деньги уже на первой неделе
          </p>
          
          <div className="grid lg:grid-cols-5 gap-6 mb-12">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`w-full h-20 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center mb-4`}>
                    <Icon name={module.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{module.title}</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">
                    {module.lessons.length} практических уроков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {module.lessons.slice(0, 4).map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-2 text-slate-300 text-xs">
                        <Icon name="CheckCircle" className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                        {lesson}
                      </li>
                    ))}
                    {module.lessons.length > 4 && (
                      <li className="text-slate-400 text-xs">
                        ...и ещё {module.lessons.length - 4} уроков
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bonus Modules */}
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-6 border border-yellow-500/30 mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 text-center mb-6">
              🎁 Бонусные модули в подарок
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {bonuses.map((bonus, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Icon name={bonus.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{bonus.title}</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    {bonus.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Выберите свой путь к финансовой свободе
          </h2>
          <p className="text-xl text-center text-slate-300 mb-12">
            Любой тариф окупится в первую же неделю использования
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`${plan.popular ? 'ring-2 ring-yellow-500 scale-105 bg-gradient-to-br from-yellow-900/20 to-orange-900/20' : 'bg-gradient-to-br from-slate-900 to-slate-800'} border-slate-700 relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-4 py-2">
                      🔥 ВЫБОР БОЛЬШИНСТВА
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-sm text-slate-400 line-through">{plan.originalPrice}₽</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {plan.price}₽
                  </div>
                  <Badge className="bg-green-500 text-white border-0 text-xs mb-2">
                    {plan.savings}
                  </Badge>
                  <Badge className="bg-blue-500 text-white border-0 text-xs">
                    {plan.modules}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-slate-300">
                        <Icon name="Check" className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full font-bold text-sm py-4 ${plan.popular ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'}`}>
                    {plan.popular ? '🚀 ХОЧУ ЛУЧШИЙ РЕЗУЛЬТАТ' : 'Выбрать тариф'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 text-lg">
              💳 Рассрочка до 12 месяцев • 🔒 Гарантия возврата 30 дней • 🎯 Результат или деньги обратно + 10,000₽
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Ответы на частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-700 rounded-lg bg-slate-800/30">
                <AccordionTrigger className="text-white hover:text-blue-400 px-6 py-4 text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-6 pb-4 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 blur-3xl"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ваши конкуренты уже<br/>зарабатывают с ИИ!
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Пока вы читаете это, кто-то уже получил первый заказ с помощью навыков из курса.<br/>
            <strong className="text-red-400">Каждый день промедления = упущенная прибыль</strong>
          </p>
          
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="text-3xl font-bold text-white mb-2">
              ⚡ Осталось мест: 12 из 100
            </div>
            <div className="text-red-300 text-xl">
              Цена вырастет до 19,990₽ через: {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
            </div>
          </div>

          <div className="mb-8">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-2xl px-12 py-8 font-bold">
              <Icon name="Zap" className="mr-3" />
              НАЧАТЬ ЗАРАБАТЫВАТЬ ЗА 4,990₽
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <Icon name="Shield" className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-bold">Гарантия 30 дней</p>
              <p className="text-slate-400 text-sm">или возврат + 10,000₽</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <Icon name="Zap" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-bold">Мгновенный доступ</p>
              <p className="text-slate-400 text-sm">после оплаты</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <Icon name="CreditCard" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-bold">Рассрочка</p>
              <p className="text-slate-400 text-sm">до 12 месяцев</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-8 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-white font-bold text-lg mb-2">Курс "ИИ для заработка"</h3>
              <p className="text-slate-400">Зарабатывайте больше, работайте меньше</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <Icon name="Mail" className="w-5 h-5 mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Telegram
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-6 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Курс "ИИ для заработка". Все права защищены. • Политика конфиденциальности • Договор оферты
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}