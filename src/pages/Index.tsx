import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const courseModules = [
    {
      title: "ChatGPT",
      icon: "Bot",
      lessons: ["Введение в работу с ChatGPT", "Работa с телефоном", "Создание постов", "Создание качественных промтов", "Создание личных фото", "Создание изображений", "Генерация в различных стилях"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Krea",
      icon: "Sparkles",
      lessons: ["Введение в Krea", "Создание аватара", "Генерация изображений", "Создание реалистичных изображений", "Создание видео", "Создание реалистичных видео с человеком", "Создание фото по стилю"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "ИИ-бот",
      icon: "MessageSquare",
      lessons: ["Введение в работу с ИИ-ботом", "Оплата подписки", "Создание аватара", "Создание фото", "Создание видео"],
      color: "from-blue-400 to-purple-500"
    }
  ];

  const pricing = [
    {
      name: "Базовый",
      price: "4 990",
      features: ["Доступ к основным модулям", "Базовые материалы", "Поддержка 30 дней", "Сертификат о прохождении"],
      popular: false
    },
    {
      name: "Профи",
      price: "7 990",
      features: ["Все материалы курса", "Персональные консультации", "Доступ к закрытому чату", "Бонусные модули", "Поддержка 90 дней", "Сертификат о прохождении"],
      popular: true
    },
    {
      name: "Эксперт",
      price: "12 990",
      features: ["Полный доступ ко всем материалам", "Индивидуальный наставник", "Разбор ваших работ", "Помощь в монетизации", "Пожизненная поддержка", "Именной сертификат"],
      popular: false
    }
  ];

  const faq = [
    {
      question: "Нужен ли опыт работы с ИИ?",
      answer: "Нет, курс рассчитан на новичков. Мы начинаем с самых основ и постепенно переходим к продвинутым техникам."
    },
    {
      question: "Сколько времени занимает обучение?",
      answer: "Курс можно пройти за 2-4 недели при занятиях по 1-2 часа в день. Доступ к материалам остается навсегда."
    },
    {
      question: "Какое оборудование потребуется?",
      answer: "Достаточно компьютера или смартфона с интернетом. Все инструменты работают в браузере."
    },
    {
      question: "Предоставляется ли сертификат?",
      answer: "Да, после успешного завершения курса вы получите сертификат о прохождении обучения."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float">
                <Icon name="Brain" size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Курс по <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">нейросетям</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Освойте ChatGPT, Krea и другие ИИ-инструменты за 2-4 недели
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg">
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                Смотреть программу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Кому подходит курс</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "GraduationCap", title: "Новичкам", desc: "Без опыта работы с ИИ" },
              { icon: "Briefcase", title: "Фрилансерам", desc: "Желающим освоить ИИ-инструменты" },
              { icon: "Camera", title: "Блогерам", desc: "И контент-мейкерам" },
              { icon: "Palette", title: "Дизайнерам", desc: "Изучающим ИИ-генерацию" }
            ].map((item, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-300">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Программа курса</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className={`w-full h-32 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name={module.icon} size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center text-gray-300">
                        <Icon name="Check" size={16} className="text-green-400 mr-2 flex-shrink-0" />
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

      {/* Results */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Что получите в результате</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Target", title: "Практические навыки", desc: "Умение работать с ChatGPT, Krea и ИИ-ботами" },
              { icon: "DollarSign", title: "Новые возможности заработка", desc: "Создание контента и услуг с помощью ИИ" },
              { icon: "Rocket", title: "Ускорение работы", desc: "Автоматизация рутинных задач в 10 раз" },
              { icon: "Users", title: "Комьюнити", desc: "Доступ к закрытому чату выпускников" },
              { icon: "BookOpen", title: "База знаний", desc: "Промты, референсы и шаблоны" },
              { icon: "Award", title: "Сертификат", desc: "Подтверждение ваших навыков" }
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit">
                  <Icon name={result.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
                <p className="text-gray-300">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Тарифы</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''} bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-all duration-300`}>
                <CardHeader className="text-center">
                  {plan.popular && <Badge className="mb-4 bg-purple-500">Популярный</Badge>}
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-white mt-4">
                    {plan.price} <span className="text-lg text-gray-400">₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Icon name="Check" size={16} className="text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'} text-white`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-600">
                  <AccordionTrigger className="text-white hover:text-purple-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы освоить нейросети?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь с помощью ИИ
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-xl">
            Начать обучение сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Mail" size={20} className="mr-2" />
              Контакты
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Поддержка
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Users" size={20} className="mr-2" />
              Сообщество
            </Button>
          </div>
          <p className="text-gray-400">© 2024 Курс по нейросетям. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;