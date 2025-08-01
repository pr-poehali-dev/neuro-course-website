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
      title: "Введение",
      icon: "PlayCircle",
      lessons: [
        "Знакомство с платформой",
        "Примеры работ выпускников"
      ]
    },
    {
      title: "Полезная информация",
      icon: "Info",
      lessons: [
        "Оплата подписок",
        "Где брать референсы"
      ]
    },
    {
      title: "ChatGPT",
      icon: "MessageSquare",
      lessons: [
        "Введение в работу с ChatGPT",
        "Работа с телефоном",
        "Создание постов",
        "Создание качественных промтов",
        "Продвинутое создание промтов",
        "Создание изображения к посту",
        "Создание изображений с логотипом",
        "Создание логотипа",
        "Редактирование логотипа",
        "Создание обложек для видео",
        "Создание фото с одеждой",
        "Создание фото с предметами",
        "Создание личных фото с помощью ChatGPT",
        "Создание изображений",
        "Генерация в различных стилях"
      ]
    },
    {
      title: "Krea",
      icon: "Image",
      lessons: [
        "Введение в Krea",
        "Создание аватара",
        "Генерация изображений",
        "Создание реалистичных изображений",
        "Создание видео из промта и фото",
        "Создание реалистичных видео с человеком",
        "Создание изображение с одеждой",
        "Создание видео с одеждой",
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
        "Создание аватара",
        "Создание фото",
        "Создание видео",
        "Генерация голоса",
        "Клонирование голоса",
        "VEO 3",
        "Создание видео с товаром"
      ]
    },
    {
      title: "Gamma",
      icon: "FileText",
      lessons: [
        "Введение",
        "Создание файлов и презентаций с ИИ",
        "Создание документов",
        "Создание презентаций",
        "Создание каруселей",
        "Генерация изображений"
      ]
    },
    {
      title: "Flyvi",
      icon: "Zap",
      lessons: [
        "Введение",
        "Создание дизайнов",
        "Редактирование изображений",
        "Обзор дизайнов"
      ]
    },





    {
      title: "Монтаж",
      icon: "Scissors",
      lessons: [
        "Редактирование фото",
        "Редактирование видео"
      ]
    },
    {
      title: "Аватар",
      icon: "User",
      lessons: [
        "Создание ИИ клона"
      ]
    },
    {
      title: "База",
      icon: "Database",
      lessons: [
        "Референсы для себя",
        "Референсы для экспертов",
        "Промты"
      ]
    },
    {
      title: "Монетизация",
      icon: "DollarSign",
      lessons: [
        "Как правильно создавать визуал своего профиля",
        "6 Способов заработка на нейроконтенте",
        "Где продавать свои услуги",
        "Как создать портфолио",
        "Общение с заказчиками",
        "Как продавать свои услуги через соц.сети",
        "Создание аккакунта с монетизацией в TikTok",
        "Как подключить монетизацию в TikTok",
        "Создание воронок",
        "Создание воронок с телеграмм-ботом"
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
    },
    {
      icon: "Users",
      title: "Клонирование себя",
      description: "Создайте цифровую копию",
      detail: "Работайте 24/7 через ИИ-клона"
    },
    {
      icon: "Bot",
      title: "Автоматизация",
      description: "Автоматизируйте все процессы",
      detail: "Telegram-боты и воронки продаж"
    },
    {
      icon: "Video",
      title: "Вирусный контент",
      description: "Создавайте хиты в TikTok",
      detail: "Алгоритмы для миллионных просмотров"
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
      content: "За месяц увеличила количество клиентов в 3 раза. Мой ИИ-клон работает круглосуточно и привлекает клиентов даже ночью.",
      result: "Доход: 30к → 280к",
      avatar: "👩‍💼"
    },
    {
      name: "Михаил Козлов", 
      role: "Фрилансер-дизайнер",
      content: "Создал ИИ-сервис для генерации логотипов. Теперь зарабатываю пассивно, пока сплю. TikTok-канал приносит 150к в месяц.",
      result: "Доход: 80к → 580к",
      avatar: "👨‍🎨"
    },
    {
      name: "Елена Смирнова",
      role: "Владелица онлайн-школы",
      content: "Telegram-бот автоматически продает мои курсы. Личное ведение помогло запустить онлайн-школу с нуля. ИИ ведет 90% клиентов.",
      result: "Доход: 120к → 890к",
      avatar: "👩‍💻"
    },
    {
      name: "Дмитрий Волков",
      role: "TikTok-блогер",
      content: "Мои видео с ИИ набирают миллионы просмотров. Клонированный голос позволяет создавать контент на 5 языках одновременно.",
      result: "Доход: 45к → 420к",
      avatar: "🎬"
    },
    {
      name: "Мария Кузнецова",
      role: "Владелица агентства",
      content: "Автоматизировала всё агентство через ИИ. Теперь у меня 15 ИИ-сотрудников, которые работают без перерывов и отпусков.",
      result: "Прибыль: +670%",
      avatar: "💼"
    },
    {
      name: "Алексей Морозов",
      role: "ИИ-предприниматель",
      content: "Запустил 7 ИИ-сервисов за 3 месяца. Каждый приносит пассивный доход. Личное ведение - это бесценно!",
      result: "Доход: 0 → 1.2млн",
      avatar: "🚀"
    }
  ];

  const pricing = [
    {
      name: "AI с нуля",
      originalPrice: "9,990",
      price: "5,490", 
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
      price: "15,490",
      features: [
        "Доступ ко всем 11 модулям (6 мес)",
        "Чат с учениками и кураторами", 
        "Растущая база промтов и референсов",
        "Все ИИ-инструменты (ChatGPT, Krea, Gamma, Flyvi)",
        "Полная программа монетизации",
        "Создание ИИ-клона себя",
        "Базовые Telegram-боты"
      ],
      popular: true,
      modules: "11 модулей"
    },
    {
      name: "AI эксклюзив",
      originalPrice: "99,990", 
      price: "49,990",
      features: [
        "🔥 Бессрочный доступ ко всем 11 модулям",
        "👨‍🏫 Личное ведение эксперта на 2 месяца",
        "💬 Приоритетный чат с учениками", 
        "📚 Растущая база промтов (пожизненно)",
        "🤖 Продвинутые Telegram-боты с воронками",
        "📱 Полная монетизация TikTok с нуля",
        "💰 Индивидуальная стратегия заработка",
        "👤 ИИ-клон + профессиональное клонирование голоса",
        "🎨 Midjourney Pro + Stable Diffusion",
        "📊 Готовые шаблоны для всех ниш",
        "⚡ Приоритетная техподдержка 24/7",
        "🎯 Персональная стратегия развития"
      ],
      popular: false,
      modules: "11 модулей + менторство"
    }
  ];

  const faq = [
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Достаточно 30-60 минут в день. Многие ученики уже через неделю получают первые результаты и окупают курс. В эксклюзивном тарифе личный ментор поможет оптимизировать ваше время."
    },
    {
      question: "Подойдёт ли курс полному новичку?",
      answer: "Да! 70% наших учеников - новички без опыта. Курс построен от простого к сложному с практическими примерами. Эксклюзивный тариф включает персональное ведение."
    },
    {
      question: "Что если не получится заработать?",
      answer: "У нас 98% успешных кейсов. Если через месяц вы не увеличите доход - вернём все деньги без вопросов. В эксклюзивном тарифе гарантируем результат или работаем до победного."
    },
    {
      question: "Нужно ли покупать дополнительные программы?",
      answer: "Нет! Все ИИ-инструменты имеют бесплатные тарифы. Дополнительно ничего покупать не нужно. Мы даже дарим готовые шаблоны и промты."
    },
    {
      question: "Чем отличается эксклюзивный тариф?",
      answer: "Эксклюзивный тариф включает бессрочный доступ, личное ведение на 2 месяца, продвинутые модули по TikTok и Telegram-ботам, профессиональное клонирование голоса и персональную стратегию заработка."
    },
    {
      question: "Можно ли получить возврат после покупки?",
      answer: "Да, у нас гарантия возврата 30 дней без вопросов. Если курс не подошёл - вернём деньги полностью."
    }
  ];

  const bonuses = [
    {
      title: "🎁 База из 1000+ готовых промтов",
      description: "Для всех популярных ниш",
      value: "19,990₽"
    },
    {
      title: "💼 Готовые сценарии продаж",
      description: "Конвертирующие воронки",
      value: "12,990₽"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">


      {/* About Me Section */}
      <section 
        className="py-20 px-4 relative bg-black"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/e478c754-7852-4f27-aecb-b3755945589d.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">

              
              <h1 className="text-3xl md:text-4xl font-light text-white mb-6">OLGA 
VSTORIES AI</h1>
              
              <div className="space-y-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <div className="text-left">
                  <h3 className="text-white font-medium mb-4 text-lg">Мой опыт:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span>Создание ИИ-сервисов с оборотом более 50 млн рублей</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span>Запуск 15+ успешных онлайн-школ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span>Разработка автоматизированных систем продаж через Telegram-ботов</span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-center">
                    <strong className="text-white">Моя миссия</strong> — показать, что каждый может зарабатывать 
                    с помощью ИИ, даже без технического образования.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Кому подходит */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
            Кому подходит курс
          </h2>
          <p className="text-lg text-center text-gray-300 mb-16">
            Этот курс создан для тех, кто хочет изменить свою жизнь с помощью ИИ
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center mb-4">
                  <Icon name="User" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Новичкам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">Даже если вы никогда не работали с Искусственным интеллектом, курс построен от простого к сложному. 70% наших учеников - полные новички.</p>
              </CardContent>
            </Card>

            <Card className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Фрилансерам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Автоматизируйте рутинные задачи, увеличьте скорость работы в 10 раз 
                  и берите в 3 раза больше заказов.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center mb-4">
                  <Icon name="Building" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Владельцам бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">Сократите расходы на персонал, автоматизируйте маркетинг и увеличьте прибыль до 200-500%.</p>
              </CardContent>
            </Card>

            <Card className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center mb-4">
                  <Icon name="Palette" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Дизайнерам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Создавайте уникальные работы за минуты, а не часы. 
                  Генерируйте идеи и концепты мгновенно.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">SMM-щикам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Создавайте вирусный контент, автоматизируйте TikTok 
                  и ведите клиентов через ИИ-ботов.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Амбициозным</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Хотите построить ИИ-империю и зарабатывать миллионы? 
                  Этот курс - ваш трамплин к успеху.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-4 mb-6">
            <Badge className="bg-black border border-white text-white border-0">
              Доступ к курсу — бессрочно
            </Badge>
            <Badge className="bg-black border border-white text-white border-0">
              Чат с другими учениками
            </Badge>
            <Badge className="bg-black border border-white text-white border-0">
              Личное ведение эксперта на 2 месяца
            </Badge>
            <Badge className="bg-black border border-white text-white border-0">
              Растущая база промтов и референсов
            </Badge>
            <Badge className="bg-black border border-white text-white border-0">
              11 модулей
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            Зарабатывайте с ИИ<br/>
            <span className="font-normal text-white">в 5 раз больше</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">Освойте все ИИ-инструменты, создайте клона себя, запустите Telegram-боты
и TikTok-каналы. Увеличьте доход до 200%-500%.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-black border-2 border-white hover:bg-gray-900 text-white px-8 py-4"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать обучение за 5,490₽
            </Button>
            <Button 
              size="lg" 
              className="bg-black border-2 border-white hover:bg-gray-900 text-white px-8 py-4"
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть программу
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
            Что даст вам полный курс
          </h2>
          <p className="text-lg text-center text-gray-300 mb-16">
            Все инструменты для создания ИИ-империи
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black border border-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={benefit.icon as any} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-2">{benefit.description}</p>
                <p className="text-sm text-white">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
            Полная программа курса
          </h2>
          <p className="text-lg text-center text-gray-300 mb-16">
            Структура курса
          </p>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="border border-white/30 bg-gray-900 hover:bg-gray-800 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-black border border-white rounded-lg flex items-center justify-center mb-4">
                    <Icon name={module.icon as any} className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-medium text-white">{module.title}</CardTitle>
                  <CardDescription className="text-sm text-white">
                    {module.lessons.length} уроков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                        <Icon name="Check" className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
            Эксклюзивные бонусы
          </h2>
          <p className="text-lg text-center text-gray-300 mb-16">
            Получите в подарок при покупке курса
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
                <CardHeader>
                  <CardTitle className="text-white text-base">{bonus.title}</CardTitle>
                  <CardDescription className="text-gray-300">{bonus.description}</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-16">
            Результаты учеников
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-white/30 bg-gradient-to-br from-gray-900 to-black">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black border border-white rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-white text-base font-medium">{testimonial.name}</CardTitle>
                      <CardDescription className="text-white text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <Badge className="bg-black border border-white text-white border-0 text-xs">
                    {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-4">
            Выберите тариф
          </h2>
          <p className="text-lg text-center text-gray-300 mb-16">
            Каждый тариф окупится в первую неделю
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`border ${plan.popular ? 'border-white bg-gray-800' : 'border-white/30 bg-gray-900'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black border border-white text-white border-0 px-3 py-1">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-medium text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-sm text-gray-400 line-through">{plan.originalPrice}₽</span>
                  </div>
                  <div className="text-3xl font-light text-white mb-2">
                    {plan.price}₽
                  </div>
                  <Badge className="bg-black border border-white text-white border-0 text-xs">
                    {plan.modules}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-gray-200">
                        <Icon name="Check" className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? 'bg-black border-2 border-white hover:bg-gray-900' : 'bg-black border-2 border-white hover:bg-gray-900'} text-white`}>
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">Рассрочка до 12 месяцев • Сертификат о прохождении • Поддержка куратора</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-16">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-white/30 rounded-lg bg-gradient-to-r from-gray-900 to-black px-6">
                <AccordionTrigger className="text-white hover:text-white py-6 text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Начните зарабатывать<br/>больше уже завтра
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Присоединяйтесь к 2,847 ученикам, которые изменили свою жизнь с помощью ИИ
          </p>


          <Button size="lg" className="bg-black border-2 border-white hover:bg-gray-900 text-white px-12 py-4 text-lg mb-8">Получить доступ за 5 490₽</Button>
          
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="w-4 h-4 text-white" />
              <span>Сертификат о прохождении</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="w-4 h-4 text-white" />
              <span>Мгновенный доступ</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" className="w-4 h-4 text-white" />
              <span>Рассрочка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-white font-medium text-lg mb-2">Курс "ИИ для заработка"</h3>
              <p className="text-gray-400">Зарабатывайте больше, работайте меньше</p>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </div>
          </div>
          {/* Privacy & Data Protection FAQ */}
          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-light text-white mb-6 text-center">
              Защита данных и конфиденциальность
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="privacy" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-gray-300">
                  Как защищены мои персональные данные?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Мы соблюдаем требования 152-ФЗ "О персональных данных". Все данные шифруются и хранятся на защищенных серверах. Мы не передаем вашу информацию третьим лицам без вашего согласия.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="payment" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-gray-300">
                  Безопасна ли оплата?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, мы работаем только с проверенными платежными системами (ЮKassa, Сбербанк). Все транзакции защищены SSL-сертификатом. Ваши банковские данные не сохраняются.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="refund" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-gray-300">
                  Можно ли вернуть деньги?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, у вас есть 7 дней с момента покупки для возврата средств согласно закону о защите прав потребителей. Для возврата напишите в поддержку с указанием причины.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="support" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-gray-300">
                  Как связаться с поддержкой?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Техподдержка доступна 24/7 через Telegram-бот @vstories_support или email: support@vstories.ru. Средний ответ - до 2 часов.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="certificates" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-gray-300">
                  Выдается ли сертификат?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, после прохождения курса и выполнения практических заданий вы получите именной сертификат о прохождении обучения по программе "ИИ для заработка".
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border-t border-white/30 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Курс "ИИ для заработка" от Ольги. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}