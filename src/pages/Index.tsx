import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/img/4be58471-f8a8-4500-b15f-ea18dcfa0841.jpg')",
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Мастерская
            <br />
            <span className="text-accent">Печатных Машинок</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Ремонтируем раритетные машинки до 1950 года
            <br />
            Долго, дорого, но с душой и гарантией
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              <Icon name="Wrench" className="mr-2" size={20} />
              Заказать ремонт
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* О мастерской */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">О нашей мастерской</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы специализируемся на ремонте и реставрации печатных машинок
              довоенного периода. Каждая машинка для нас — это история, которую
              мы бережно возвращаем к жизни.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаем с раритетными печатными машинками с 2009 года
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Только до 1950 года</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Специализируемся исключительно на довоенных и
                  раннепослевоенных моделях
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2 года гарантии на все виды ремонта и реставрации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр работ по восстановлению печатных машинок
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Settings" size={24} className="text-accent mb-2" />
                <CardTitle className="text-lg">Диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Полная диагностика механизмов и определение объёма работ
                </p>
                <Badge variant="secondary">Бесплатно</Badge>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Sparkles" size={24} className="text-accent mb-2" />
                <CardTitle className="text-lg">Чистка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Глубокая чистка всех механизмов и корпуса
                </p>
                <Badge variant="secondary">от 3 500₽</Badge>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Wrench" size={24} className="text-accent mb-2" />
                <CardTitle className="text-lg">Ремонт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Восстановление работоспособности всех узлов
                </p>
                <Badge variant="secondary">от 8 000₽</Badge>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Palette" size={24} className="text-accent mb-2" />
                <CardTitle className="text-lg">Реставрация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Полное восстановление первоначального вида
                </p>
                <Badge variant="secondary">от 15 000₽</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Мастера */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Наши мастера</h2>
            <p className="text-xl text-muted-foreground">
              Команда профессионалов с глубоким пониманием винтажной механики
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Анатолий Петрович</CardTitle>
                <CardDescription className="text-lg">
                  Главный мастер
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  20 лет опыта работы с раритетными печатными машинками.
                  Специалист по немецким и американским моделям 1920-1940 годов.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge>Olympia</Badge>
                  <Badge>Underwood</Badge>
                  <Badge>Royal</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Мария Сергеевна</CardTitle>
                <CardDescription className="text-lg">
                  Мастер-реставратор
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Художник-реставратор с 12-летним стажем. Занимается
                  восстановлением покрытий, декоративных элементов и
                  эстетического вида машинок.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge>Ремингтон</Badge>
                  <Badge>Континенталь</Badge>
                  <Badge>Торпедо</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">
              Честные цены за качественную работу
            </p>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Базовая диагностика
                  </h3>
                  <p className="text-muted-foreground">
                    Осмотр, выявление неисправностей, смета работ
                  </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  Бесплатно
                </Badge>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Профилактическая чистка
                  </h3>
                  <p className="text-muted-foreground">
                    Разборка, чистка, смазка, настройка
                  </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  3 500 - 7 000₽
                </Badge>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Средний ремонт</h3>
                  <p className="text-muted-foreground">
                    Замена изношенных деталей, восстановление механизмов
                  </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  8 000 - 15 000₽
                </Badge>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Капитальная реставрация
                  </h3>
                  <p className="text-muted-foreground">
                    Полное восстановление с покраской и полировкой
                  </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  15 000 - 35 000₽
                </Badge>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Изготовление деталей
                  </h3>
                  <p className="text-muted-foreground">
                    Воссоздание утраченных элементов
                  </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  по договорённости
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Как нас найти</h2>
            <p className="text-xl text-muted-foreground">
              Работаем по предварительной записи
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес мастерской</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Типографская, д. 15, стр. 2<br />
                      Подвал, вход со двора
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@typewriter-workshop.ru
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 10:00 - 18:00
                      <br />
                      Сб: 11:00 - 16:00
                      <br />
                      Вс: выходной
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Заказать звонок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Оставьте заявку, и мы свяжемся с вами в течение часа для
                  обсуждения деталей
                </p>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Заказать обратный звонок
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Icon name="MessageSquare" className="mr-2" size={20} />
                    Написать в Telegram
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Отправить email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Мастерская Печатных Машинок
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Возвращаем к жизни истории, заключённые в металле и чернилах
          </p>
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Icon name="Phone" className="mr-2" size={16} />
              +7 (495) 123-45-67
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Icon name="Mail" className="mr-2" size={16} />
              info@typewriter-workshop.ru
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Мастерская Печатных Машинок. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
