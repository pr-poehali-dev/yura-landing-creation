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

const ApplicationForm = () => {
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

  return (
    <>
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Оставить заявку на обучение
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Заполните форму, и мы свяжемся с вами в ближайшее время для уточнения деталей
          </p>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">
                    ФИО <span className="text-accent">*</span>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Часто задаваемые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                Какие документы нужны для зачисления?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Для зачисления необходимы: паспорт гражданина РФ, медицинская справка установленного образца, 
                фотографии 3×4 (2 шт.). Для участников СВО и членов их семей — подтверждающий документ.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                Сколько длится обучение?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Стандартный курс обучения составляет от 2 месяцев. Для участников СВО возможны ускоренные 
                программы и индивидуальный график занятий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                Можно ли приостановить обучение?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Да, для участников СВО предусмотрен бессрочный академический отпуск. Вы можете прервать обучение 
                в любой момент и продолжить его позже без дополнительных платежей.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                Как действует скидка для участников СВО?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Скидка 5000₽ предоставляется автоматически при предъявлении документа, подтверждающего участие в СВО 
                или родство с участником. Скидка распространяется на супругов, родителей и детей участников СВО.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                Могу ли я учиться дистанционно?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Да, теоретическая часть доступна в онлайн-формате. Вы можете изучать материалы из любой точки мира 
                и сдавать экзамены дистанционно. Практические занятия проводятся очно в удобном для вас филиале.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
    </>
  );
};

export default ApplicationForm;
