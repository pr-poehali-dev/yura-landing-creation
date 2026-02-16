import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <>
      <section className="py-16 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-0">
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

      <section className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
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
                    <Icon name="Gift" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">ЛЬГОТЫ</h3>
                <p className="text-gray-700 font-semibold mb-2">Скидка 5000₽ для участников СВО</p>
                <p className="text-gray-600">Действует и для членов их семей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;