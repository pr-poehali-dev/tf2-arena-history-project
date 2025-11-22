import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);

  const characters = [
    {
      name: "Scout",
      role: "Offense",
      description: "Быстрый бостонец с битой и дерзким характером. Младший из восьми братьев, мечтающий доказать свою значимость.",
      icon: "Zap",
      backstory: "Джереми родился в Бостоне, младшим из восьми братьев. Всю жизнь ему приходилось бороться за внимание, что сделало его быстрым, дерзким и невероятно раздражающим. Когда Mann Co. искала наёмников, Scout увидел шанс доказать, что он не просто 'младший братик'. Его скорость и умение увернуться от пуль сделали его идеальным для разведки и захвата точек. Единственное, что он ценит больше победы — это возможность потом об этом рассказать."
    },
    {
      name: "Soldier",
      role: "Offense",
      description: "Патриотичный американец с ракетницей. Никогда не служил в армии, но это его не останавливает.",
      icon: "Rocket",
      backstory: "Джейн Доу хотел служить во Второй мировой войне, но его не взяли из-за психического состояния. Вместо этого он купил билет в Европу и начал самостоятельно 'воевать' с нацистами... в 1949 году, через 4 года после окончания войны. Когда Mann Co. нашла его блуждающим по Польше с ракетницей, его немедленно наняли. Soldier верит, что воюет за Америку, хотя RED и BLU — частные корпорации."
    },
    {
      name: "Pyro",
      role: "Offense",
      description: "Загадочная фигура в противогазе с огнемётом. Видит мир через призму радуги и единорогов.",
      icon: "Flame",
      backstory: "Никто не знает, кто скрывается под маской Pyro. Всё, что известно — это фигура в асбестовом костюме, которая видит мир через искажённую призму: огонь для Pyro — это радуга и мыльные пузыри, враги — милые создания, а поджигание — акт дружбы. Mann Co. наняла Pyro за способность эффективно устранять проблемы и не задавать вопросов. Среди наёмников ходят теории: кто-то говорит, что это женщина, кто-то — что это пришелец, но все согласны — не стоит снимать маску."
    },
    {
      name: "Demoman",
      role: "Defense",
      description: "Шотландский подрывник с любовью к взрывчатке и виски. Потерял глаз в детском эксперименте.",
      icon: "Bomb",
      backstory: "Таविш ДеГрут родился в семье подрывников из Шотландии. В возрасте 6 лет он потерял глаз, пытаясь создать взрывчатку по семейному рецепту. Это не остановило его — он стал лучшим подрывником в мире, работая на три королевы одновременно. Когда Mann Co. предложила зарплату, которая могла покрыть его счета за виски, он согласился. Несмотря на постоянное опьянение, его мастерство владения липучими бомбами и гранатомётом непревзойдённо. Его девиз: 'Если я был трезв, когда закладывал бомбу, значит я делал это неправильно'."
    },
    {
      name: "Heavy",
      role: "Defense",
      description: "Огромный русский с пулемётом 'Саша'. Имеет степень PhD по русской литературе.",
      icon: "User",
      backstory: "Михаил родился в сибирском гулаге, где его семья была заключена. В 1941 году, когда ему было 12 лет, он в одиночку сжёг лагерь и убил всех охранников, освободив свою семью. С тех пор он стал наёмником, чтобы обеспечить сестёр и мать. Несмотря на внешность безжалостного убийцы, Heavy — высокообразованный человек с PhD по русской литературе. Его пулемёт 'Саша' стоит 400,000$ и весит 150 кг. Mann Co. платит ему 60,000$ в год, большую часть из которых он тратит на патроны."
    },
    {
      name: "Engineer",
      role: "Defense",
      description: "Техасский инженер с 11 учёными степенями. Строит турели и телепорты для команды.",
      icon: "Wrench",
      backstory: "Делл Конахер — гений из Техаса с 11 учёными степенями в области инженерии. Его дед, Рэдфорд Конахер, работал на Зефанию Манна и изобрёл машину продления жизни, которая поддерживает Редмонда и Блютарха уже 150 лет. Делл унаследовал талант изобретателя и построил телепорт, турели и раздатчики боеприпасов. Mann Co. наняла его не только за технический гений, но и за умение играть на гитаре во время боя. Его протез-рука на самом деле — хирургическая модификация, которую он сделал сам, чтобы носить с собой больше инструментов."
    },
    {
      name: "Medic",
      role: "Support",
      description: "Безумный немецкий врач, потерявший медицинскую лицензию. Продал душу дьяволу за бессмертие.",
      icon: "Cross",
      backstory: "Людвиг потерял медицинскую лицензию после того, как украл скелет пациента во время операции на сердце. С тех пор он проводит эксперименты на своих товарищах по команде: вживил Heavy второе сердце, заменил часть мозга Scout'а на тыквенную бомбу, и превратил скелет Soldier в металл. В какой-то момент он заключил сделку с дьяволом, продав души всей команды за бессмертие. Когда дьявол пришёл забирать свою плату, оказалось, что у Medic осталось ещё 8 душ про запас. Mann Co. держит его, потому что он единственный, кто может воскрешать людей с помощью 'Уберзаряда'."
    },
    {
      name: "Sniper",
      role: "Support",
      description: "Профессиональный новозеландец-австралиец со снайперской винтовкой. Следует кодексу чести убийцы.",
      icon: "Target",
      backstory: "Мундай родился в Новой Зеландии, но был отправлен в ракете на Австралию перед затоплением страны. Австралийские родители вырастили его в глубинке, где он стал профессиональным охотником. Когда Mann Co. предложила работу снайпера, родители были против — они хотели, чтобы он стал врачом. Мундай решил доказать, что быть профессиональным убийцей — это достойная профессия. Он следует строгому кодексу: быть вежливым, быть эффективным, иметь план убить каждого, кого встречаешь. Живёт в фургоне на базе и пишет письма родителям, приукрашивая свою работу."
    },
    {
      name: "Spy",
      role: "Support",
      description: "Французский шпион-мастер маскировки. Отец Scout'а, хотя тот об этом не знает.",
      icon: "Eye",
      backstory: "Французский шпион, чьё настоящее имя неизвестно, работает на обе стороны одновременно. Мастер маскировки и обмана, он может принять облик любого врага и убить ножом в спину. В прошлом у него был роман с матерью Scout'а, и он — биологический отец Джереми, но никогда ему об этом не говорил. Spy считает себя джентльменом: курит дорогие сигареты, носит костюмы-тройки и смотрит свысока на остальных наёмников. Mann Co. платит ему двойную зарплату: одну от RED, другую от BLU, и он предаёт обе стороны по настроению. Его величайший страх — что Scout узнает правду."
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
        <p className="text-center text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
          Психопаты, социопаты и просто странные личности, готовые убивать за деньги
        </p>
        <p className="text-center text-primary text-sm mb-16 animate-pulse">
          Нажми на карточку, чтобы узнать историю персонажа
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {characters.map((char, index) => (
            <Card 
              key={char.name}
              onClick={() => setSelectedCharacter(index)}
              className="bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover:scale-105 group cursor-pointer"
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

      <Dialog open={selectedCharacter !== null} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedCharacter !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-primary/20 rounded-lg">
                    <Icon name={characters[selectedCharacter].icon as any} size={48} className="text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="text-3xl">{characters[selectedCharacter].name}</DialogTitle>
                    <Badge variant="outline" className="mt-2">
                      {characters[selectedCharacter].role}
                    </Badge>
                  </div>
                </div>
                <DialogDescription className="text-base text-muted-foreground mb-4">
                  {characters[selectedCharacter].description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">История попадания на арену</h3>
                <p className="text-foreground leading-relaxed">
                  {characters[selectedCharacter].backstory}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
