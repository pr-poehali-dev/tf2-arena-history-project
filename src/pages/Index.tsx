import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const characters = [
    {
      name: "Scout",
      role: "Offense",
      description: "Быстрый бостонец с битой и дерзким характером. Младший из восьми братьев, мечтающий доказать свою значимость.",
      icon: "Zap"
    },
    {
      name: "Soldier",
      role: "Offense", 
      description: "Патриотичный американец с ракетницей. Никогда не служил в армии, но это его не останавливает.",
      icon: "Rocket"
    },
    {
      name: "Pyro",
      role: "Offense",
      description: "Загадочная фигура в противогазе с огнемётом. Видит мир через призму радуги и единорогов.",
      icon: "Flame"
    },
    {
      name: "Demoman",
      role: "Defense",
      description: "Шотландский подрывник с любовью к взрывчатке и виски. Потерял глаз в детском эксперименте.",
      icon: "Bomb"
    },
    {
      name: "Heavy",
      role: "Defense",
      description: "Огромный русский с пулемётом 'Саша'. Имеет степень PhD по русской литературе.",
      icon: "User"
    },
    {
      name: "Engineer",
      role: "Defense",
      description: "Техасский инженер с 11 учёными степенями. Строит турели и телепорты для команды.",
      icon: "Wrench"
    },
    {
      name: "Medic",
      role: "Support",
      description: "Безумный немецкий врач, потерявший медицинскую лицензию. Продал душу дьяволу за бессмертие.",
      icon: "Cross"
    },
    {
      name: "Sniper",
      role: "Support",
      description: "Профессиональный новозеландец-австралиец со снайперской винтовкой. Следует кодексу чести убийцы.",
      icon: "Target"
    },
    {
      name: "Spy",
      role: "Support",
      description: "Французский шпион-мастер маскировки. Отец Scout'а, хотя тот об этом не знает.",
      icon: "Eye"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/c5a83f6c-70e1-412e-8979-44852c4b407a/files/8fe355e7-69de-4396-86bb-29bdca72aa2c.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <Badge className="mb-4 text-lg px-4 py-2" variant="destructive">
            EST. 1968
          </Badge>
          <h1 className="text-7xl md:text-9xl font-bold text-foreground mb-6 tracking-tight">
            TEAM FORTRESS 2
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            История бессмысленной войны между RED и BLU
          </p>
          <div className="flex gap-4 justify-center items-center text-primary">
            <Icon name="Swords" size={32} />
            <span className="text-4xl font-bold">VS</span>
            <Icon name="Shield" size={32} />
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold mb-8 text-center">
            История создания <span className="text-primary">Arena</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              В 1850-х годах богатый землевладелец Зефания Манн купил участок бесполезной земли в Нью-Мексико. 
              После его смерти земля была разделена между двумя сыновьями — <span className="text-primary font-semibold">Редмондом</span> и <span className="text-blue-500 font-semibold">Блютархом</span>.
            </p>
            <p>
              Братья ненавидели друг друга и каждый хотел владеть всей территорией. Так началась война, 
              которая продолжается уже более века. Они нанимают наёмников для бесконечных сражений 
              за контроль над бесполезными участками гравия.
            </p>
            <p>
              За кулисами этой войны стоит таинственная <span className="text-primary font-semibold">Администратор</span> — 
              женщина, которая управляет конфликтом и держит братьев в вечной вражде ради своих целей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center">
            Бесконечная <span className="text-primary">Война</span>
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-2xl mx-auto">
            Каждый день. Одни и те же точки. Один и тот же гравий. Бессмысленность возведённая в абсолют.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-primary/10 border-primary/20 hover:scale-105 transition-transform">
              <CardContent className="pt-6 text-center">
                <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3">Control Points</h3>
                <p className="text-muted-foreground">
                  Захватывай точки, которые не имеют стратегического значения
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20 hover:scale-105 transition-transform">
              <CardContent className="pt-6 text-center">
                <Icon name="Flag" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3">Capture the Flag</h3>
                <p className="text-muted-foreground">
                  Укради портфель с секретными документами о... гравии
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20 hover:scale-105 transition-transform">
              <CardContent className="pt-6 text-center">
                <Icon name="Package" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-3">Payload</h3>
                <p className="text-muted-foreground">
                  Толкай бомбу к базе противника. Она взорвётся. Снова.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Девять <span className="text-primary">Наёмников</span>
        </h2>
        <p className="text-center text-muted-foreground text-xl mb-16 max-w-2xl mx-auto">
          Психопаты, социопаты и просто странные личности, готовые убивать за деньги
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {characters.map((char, index) => (
            <Card 
              key={char.name}
              className="bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Icon name={char.icon as any} size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{char.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {char.role}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg mb-2">
            "Мы оба получаем то, что хотим: ты — мёртв, я — богат!"
          </p>
          <p className="text-sm">— The Spy</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;