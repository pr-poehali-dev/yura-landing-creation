import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    isSVO: false,
    comment: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время"
    });
    setFormData({
      name: "",
      phone: "",
      category: "",
      isSVO: false,
      comment: "",
      consent: false
    });
  };

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/e1306666-0b52-4996-b9a1-6d44a4b51ef8.png" 
                alt="ГОСАВТОШКОЛА" 
                className="h-12"
              />
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-white text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <div>
                  <div>Пн-Пт: 10:00-18:30</div>
                  <div className="text-xs text-gray-300">Обед: 13:30-14:00</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-accent" />
                <a href="tel:+79789937015" className="hover:text-accent transition-colors font-semibold text-lg">
                  +7 (978) 993 70 15
                </a>
              </div>
              
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                onClick={scrollToForm}
              >
                ЗАПИСАТЬСЯ НА ОБУЧЕНИЕ
              </Button>
            </div>
          </div>
          
          <nav className="flex items-center gap-8 py-4 text-white overflow-x-auto">
            <a href="https://автошкола92.рф/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
              Главная
            </a>
            <a href="https://автошкола92.рф/o-gosavtoshkole/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
              О ГОСавтошколе
            </a>
            <a href="https://автошкола92.рф/aktsii/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
              Спецпредложения
            </a>
            <a href="https://автошкола92.рф/raspisanie/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors whitespace-nowrap font-medium">
              Расписание
            </a>
          </nav>
        </div>
      </header>

      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(66, 63, 48, 0.85), rgba(45, 48, 38, 0.85)), url('https://cdn.poehali.dev/projects/0ef760dc-6cc5-49e2-9400-9dd830dad74c/files/4f46b67b-2366-47a2-8f2e-ef67edc45e15.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ваши преимущества – <br/>наш вклад в Победу
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-semibold">
            Особые условия для защитников Отечества и их семей
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-lg font-semibold"
            onClick={scrollToForm}
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Участники СВО и члены их семей!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Получите водительское удостоверение в лучшей автошколе Севастополя и Республики Крым. 
              Обучаем быстро, качественно, с индивидуальным подходом. Работаем официально.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-lg mb-2">О НАС</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Лидеры автомобильного образования Крыма
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              ГОСавтошкола — это не просто имя, это знак качества. Мы единственная автошкола в регионе, 
              которая гарантирует высокий процент сдачи экзаменов с первого раза.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/e5f3910b-fac3-458b-8226-68a36f420325.jpg" 
                alt="Современный автопарк" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Современный автопарк</h3>
                <p className="text-gray-600">Автомобили с автоматической и механической коробкой передач</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/2de10932-52b9-4f0e-aea8-7618fab2fc93.jpg" 
                alt="Лицензированные инструкторы" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Аккредитованные инструкторы</h3>
                <p className="text-gray-600">Опыт работы от 10 лет, профессиональный подход</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/9479273d-ea11-4d64-be66-503c1cb1f547.jpeg" 
                alt="Удобные филиалы" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Удобные филиалы</h3>
                <p className="text-gray-600">По Симферополю и Севастополю — выбирайте ближайший</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-lg mb-2">ПОЧЕМУ МЫ?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              3 причины, почему участники СВО выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">СКОРОСТЬ</h3>
              <p className="text-gray-200 leading-relaxed">
                Сжатые сроки обучения. Вам не нужно ждать — мы формируем группы под ваш график. 
                Сдадите экзамен в ГИБДД без очередей и волокиты.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Award" size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">СТАВКА НА КАЧЕСТВО</h3>
              <p className="text-gray-200 leading-relaxed">
                Никакой «воды». Только актуальные правила, закрытые площадки и отработка реальных 
                городских маршрутов Симферополя и Севастополя.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Users" size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">ЗАБОТА О СЕМЬЕ</h3>
              <p className="text-gray-200 leading-relaxed">
                Ваши родители, супруги и дети могут пройти курс на особых условиях. 
                Вместе учиться — выгодно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-lg mb-2">ЧТО МЫ ПРЕДЛАГАЕМ?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Полный спектр услуг для будущих водителей
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Категория «B» (МКПП/АКПП)</h3>
                    <p className="text-gray-600">Самая популярная категория для города</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Bike" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Категория «A» (мотоциклы)</h3>
                    <p className="text-gray-600">Свобода передвижения на двух колёсах</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="RefreshCw" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Переподготовка</h3>
                    <p className="text-gray-600">С «B» на «C», с «C» на «B» и другие категории в короткие сроки</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="RotateCcw" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Восстановление навыков</h3>
                    <p className="text-gray-600">Если права были, но потеряли уверенность за рулем — мы поможем</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 font-semibold">
              Мы предоставляем учебные автомобили с дублирующими педалями, соответствующие всем нормам безопасности.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Ваши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">СКОРОСТЬ</h3>
                <p className="text-gray-700 font-semibold mb-2">Обучение от 2х месяцев</p>
                <p className="text-gray-600">Возможность ускоренного получения прав</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Repeat" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">ГИБКОСТЬ</h3>
                <p className="text-gray-700 font-semibold mb-2">Приостановка обучения в случае необходимости</p>
                <p className="text-gray-600">Академический отпуск без срока давности (бессрочный)</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Laptop" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">ТЕХНОЛОГИИ</h3>
                <p className="text-gray-700 font-semibold mb-2">Дистанционное изучение теории (из любой точки)</p>
                <p className="text-gray-600">Дистанционная сдача теории (онлайн-экзамен)</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">НАДЕЖНОСТЬ</h3>
                <p className="text-gray-700 font-semibold mb-2">Гарантия окончания автошколы</p>
                <p className="text-gray-600">Подробности в договоре</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Подробности специального предложения
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="speed" className="bg-white rounded-lg border-2">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Zap" className="text-accent" size={24} />
                  СКОРОСТЬ: Обучение за 2 месяца
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Мы предлагаем интенсивную программу обучения, позволяющую получить водительское удостоверение всего за 2 месяца. 
                Ускоренный курс разработан специально для тех, кому важно быстро освоить навыки вождения. 
                График занятий составляется индивидуально, с учетом ваших возможностей и потребностей.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="flexibility" className="bg-white rounded-lg border-2">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Repeat" className="text-accent" size={24} />
                  ГИБКОСТЬ: Академический отпуск
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Понимаем, что обстоятельства могут меняться. Вы можете приостановить обучение в любой момент 
                и вернуться к занятиям, когда будет удобно. Академический отпуск предоставляется без ограничений по срокам – 
                вы продолжите с того места, где остановились, даже спустя длительное время.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech" className="bg-white rounded-lg border-2">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Laptop" className="text-accent" size={24} />
                  ТЕХНОЛОГИИ: Дистанционное обучение
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Теоретическая часть курса доступна полностью в онлайн-формате. Вы можете изучать материалы 
                из любой точки мира, где есть интернет. Экзамен по теории также сдается дистанционно через нашу 
                онлайн-платформу. Практические занятия по вождению проводятся в удобном для вас филиале.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reliability" className="bg-white rounded-lg border-2">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-accent" size={24} />
                  НАДЕЖНОСТЬ: Гарантия окончания
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Мы гарантируем, что вы получите все необходимые знания и навыки для успешной сдачи экзаменов. 
                В случае неудачи с первого раза, предоставляются дополнительные занятия до получения результата. 
                Все детали гарантий прописаны в договоре обучения.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="mt-8 border-accent border-2 bg-gradient-to-r from-accent/5 to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Gift" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Специальная скидка для семей участников СВО</h3>
                  <p className="text-gray-800 font-semibold text-lg mb-2">
                    Скидка 5000₽ на все тарифы, кроме "Базового"
                  </p>
                  <p className="text-gray-700">
                    Обучение на категорию "А" (мотоциклы) также доступно по спецусловиям
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-gray-600 mt-6 text-sm">
            * Предложение ограничено. Подробности уточняйте у менеджеров.
          </p>
        </div>
      </section>

      <section id="application-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Оставить заявку
          </h2>
          
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">
                    Имя <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Телефон <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-2"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-base font-semibold">
                    Категория прав <span className="text-accent">*</span>
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({...formData, category: value})}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="B">Категория B (легковые автомобили)</SelectItem>
                      <SelectItem value="A">Категория A (мотоциклы)</SelectItem>
                      <SelectItem value="BA">Категории B+A</SelectItem>
                      <SelectItem value="other">Другие категории</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <Checkbox
                    id="svo"
                    checked={formData.isSVO}
                    onCheckedChange={(checked) => setFormData({...formData, isSVO: checked as boolean})}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="svo" className="font-semibold cursor-pointer">
                      Являюсь участником СВО / членом семьи участника СВО
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      При выборе данной опции применяется скидка 5000₽
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment" className="text-base font-semibold">
                    Комментарий (необязательно)
                  </Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="mt-2"
                    placeholder="Укажите дополнительную информацию, если необходимо"
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    required
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm cursor-pointer">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-accent hover:underline font-semibold">
                      политикой конфиденциальности
                    </a>{" "}
                    <span className="text-accent">*</span>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg font-semibold"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <Icon name="Phone" size={24} className="text-accent" />
              <span className="text-lg">+7 978 993 70 15</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={24} className="text-accent" />
              <span className="text-lg">9921111@mail.ru</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={24} className="text-accent" />
              <div className="text-left">
                <div className="text-lg">Пн-Пт: 10:00-18:30</div>
                <div className="text-sm text-gray-300">Обед: 13:30-14:00</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <img 
              src="https://cdn.poehali.dev/projects/0ef760dc-6cc5-49e2-9400-9dd830dad74c/bucket/848e3cdb-e899-4c8e-89cb-7a7e0c6e46d2.png" 
              alt="ГОСАВТОШКОЛА" 
              className="h-20 mx-auto opacity-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;