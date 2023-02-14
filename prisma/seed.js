import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  await createKanban();

  process.exit(0);
}

const kanbanObjectData = {
  columnOne: {
    name: 'Nowe słowa',
    items: [
      {
        id: '7d7aa7e5-8ac3-477b-867f-9672d0ca5df3',
        past: {
          past_ja_fem: 'potrwałam',
          past_my_fem: 'potrwałałyśmy',
          past_ty_fem: 'potrwałaś',
          past_wy_fem: 'potrwałałyście',
          past_ja_masc: 'potrwałem',
          past_my_masc: 'potrawaliśmy',
          past_on_masc: 'potrwał',
          past_ona_fem: 'potrwała',
          past_one_fem: 'potrwałały',
          past_ty_masc: 'potrwałeś',
          past_wy_masc: 'potrwaliście',
          past_oni_masc: 'potrwali',
        },
        notes:
          'Jak długo może to potrwać?\nBez obawy, ból potrwa tylko chwilę.\nMoje bankructwo potrwałoby 18 miesięcy. \nMój kurs trwał sześć miesięcy. Cieszę się, że to się skończyło, bo nie sądziłem, że wytrzymam.\nAngielski tekst do przetłumaczenia\n\n',
        present: {
          present_ja: 'potrwam',
          present_my: 'potrwamy',
          present_ty: 'potrwasz',
          present_wy: 'potrwacie',
          present_oni_one: 'potrwają',
          present_on_ona_ono: 'potrwa',
        },
        gram_case: {
          case: 'Biernik',
          color: '#ff2233',
          aspect: 'Dokonany',
        },
        future_fem: {
          future_fem_ja: 'potrwam',
          future_fem_my: 'potrwamy',
          future_fem_ty: 'potrwasz',
          future_fem_wy: 'potrwacie',
          future_fem_ona: 'potrwa',
          future_fem_one: 'potrwają',
        },
        imp_future: {
          imp_future_ja: '',
          imp_future_my: '',
          imp_future_ty: '',
          imp_future_wy: '',
          imp_future_oni_one: ' ',
          imp_future_on_ona_ono: '',
        },
        word_image: {
          image_url:
            'https://thumbs.dreamstime.com/b/time-control-retro-cartoon-design-running-man-clock-background-schedule-grey-gears-vector-illustration-86568744.jpg',
          polish_word: 'Potrwać',
          english_word: 'To last',
        },
        future_masc: {
          future_masc_ja: 'potrwam',
          future_masc_my: 'potrwamy',
          future_masc_on: 'potrwa',
          future_masc_ty: 'potrwasz',
          future_masc_wy: 'potrwacie',
          future_masc_oni: 'potrwają',
        },
      },
      {
        id: 'd509237d-6e00-4da9-ae33-80fcd41c2485',
        past: {
          past_ja_fem: 'tworzyłam',
          past_my_fem: 'tworzyłyśmy',
          past_ty_fem: 'tworzyłaś',
          past_wy_fem: 'tworzyłyście',
          past_ja_masc: 'tworzyłem',
          past_my_masc: 'tworzyliśmy',
          past_on_masc: 'tworzył',
          past_ona_fem: 'tworzyły',
          past_one_fem: 'tworzyły',
          past_ty_masc: 'tworzyłeś',
          past_wy_masc: 'tworzyliście',
          past_oni_masc: 'tworzyli',
        },
        notes:
          'Uwielbiam tworzyć nowe i ekscytujące narzędzia, które pomogą mi w nauce języka polskiego.',
        present: {
          present_ja: 'tworzę',
          present_my: 'tworyzmy',
          present_ty: 'tworzysz',
          present_wy: 'tworzycie',
          present_oni_one: 'tworzą',
          present_on_ona_ono: 'tworzy',
        },
        gram_case: {
          case: 'Biernik',
          color: '#ff2233',
          aspect: 'Dokonany',
        },
        future_fem: {
          future_fem_ja: 'będę tworzyła',
          future_fem_my: 'będziemy tworzyły',
          future_fem_ty: 'będziesz tworzyła',
          future_fem_wy: 'będziecie tworzyły',
          future_fem_ona: 'będzie tworzyła',
          future_fem_one: 'będą tworzyły',
        },
        imp_future: {
          imp_future_ja: 'będą tworzyć',
          imp_future_my: 'będziemy tworzyć',
          imp_future_ty: 'będziesz tworzyć',
          imp_future_wy: 'będziecie tworzyć',
          imp_future_oni_one: 'będą tworzyć',
          imp_future_on_ona_ono: 'będzie tworzyć',
        },
        word_image: {
          image_url:
            'https://www.cqu.edu.au/__data/assets/image/0022/146407/create-concept.jpg',
          polish_word: 'Tworzyć',
          english_word: 'To create',
        },
        future_masc: {
          future_masc_ja: 'będę tworzył',
          future_masc_my: 'będziemy tworzyli',
          future_masc_on: 'będzie tworzył',
          future_masc_ty: 'będziesz tworzył',
          future_masc_wy: 'będziecie tworzyli',
          future_masc_oni: 'będą tworzyli',
        },
      },
    ],
  },
  columnTwo: {
    name: 'Przeszły',
    items: [
      {
        id: '76ff3352-e572-4468-9f1a-649390b19dcf',
        past: {
          past_ja_fem: 'używałam',
          past_my_fem: 'używałyśmy',
          past_ty_fem: 'używałaś',
          past_wy_fem: 'używałyście',
          past_ja_masc: 'używałem',
          past_my_masc: 'używaliśmy',
          past_on_masc: 'używał',
          past_ona_fem: 'używała',
          past_one_fem: 'używały',
          past_ty_masc: 'używałeś',
          past_wy_masc: 'używaliście',
          past_oni_masc: 'używali',
        },
        notes:
          'Nie zgadzam się, moja Niuńcia kładzie się jak kula na podłodze jak się ubieram , mizia się koło nóg chce jeszcze więcej głaskania. A jak tylko wchodze do domu spowrotem to biegnie jak małe dziecko i od razu na rączki i się wtula.\nMyślę, że muszę dziś jechać własnym samochodem do miasta.',
        present: {
          present_ja: 'używam  ',
          present_my: 'używamy',
          present_ty: 'używasz',
          present_wy: 'używacie',
          present_oni_one: 'używają',
          present_on_ona_ono: 'używa',
        },
        gram_case: {
          case: 'Biernik',
          color: '#ff2233',
          aspect: 'Dokonany',
        },
        future_fem: {
          future_fem_ja: 'będę używała',
          future_fem_my: 'będziemy używały',
          future_fem_ty: 'będziesz używała',
          future_fem_wy: 'będziecie używały',
          future_fem_ona: 'będzie używała',
          future_fem_one: 'będą używały',
        },
        imp_future: {
          imp_future_ja: 'będę używać',
          imp_future_my: 'będziemy używać',
          imp_future_ty: 'będziesz używać',
          imp_future_wy: 'będziecie używać',
          imp_future_oni_one: 'będą używać',
          imp_future_on_ona_ono: 'będzie używać',
        },
        word_image: {
          image_url:
            'https://media.istockphoto.com/vectors/guy-hipster-sits-on-toilet-bowl-with-phone-in-hands-vector-id612244494?s=170667a',
          polish_word: 'Używać',
          english_word: 'To use',
        },
        future_masc: {
          future_masc_ja: 'będę używał',
          future_masc_my: 'będziemy używali',
          future_masc_on: 'będzie używał',
          future_masc_ty: 'będziesz używał',
          future_masc_wy: 'będziecie używali',
          future_masc_oni: 'będą używali',
        },
      },
    ],
  },
  columnThree: {
    name: 'Przyszły',
    items: [],
  },
  columnFour: {
    name: 'Stare słowa',
    items: [
      {
        id: '4909d92e-ff69-4c80-bb13-23d2f9788c71',
        past: {
          past_ja_fem: '',
          past_my_fem: '',
          past_ty_fem: '',
          past_wy_fem: '',
          past_ja_masc: 'sprawdziłem',
          past_my_masc: 'sprawdzaliśmy',
          past_on_masc: 'sprawdził',
          past_ona_fem: '',
          past_one_fem: '',
          past_ty_masc: 'sprawdziłeś',
          past_wy_masc: 'sprawdziliście',
          past_oni_masc: '',
        },
        notes: '',
        present: {
          present_ja: 'sprawdzę',
          present_my: 'sprawdzimy',
          present_ty: 'sprawdzisz',
          present_wy: 'sprawdzicie',
          present_oni_one: 'sprawdzą',
          present_on_ona_ono: 'sprawdzi',
        },
        gram_case: {
          case: 'Celownik',
          color: '#ff2233',
          aspect: 'Niedokonany',
        },
        future_fem: {
          future_fem_ja: 'będę ',
          future_fem_my: 'będziemy ',
          future_fem_ty: 'będziesz ',
          future_fem_wy: 'będziecie ',
          future_fem_ona: 'będzie ',
          future_fem_one: 'będą ',
        },
        imp_future: {
          imp_future_ja: 'będę ',
          imp_future_my: 'będziemy ',
          imp_future_ty: 'będziesz ',
          imp_future_wy: 'będziecie ',
          imp_future_oni_one: 'będą ',
          imp_future_on_ona_ono: 'będzie ',
        },
        word_image: {
          image_url:
            'https://www.cqu.edu.au/__data/assets/image/0022/146407/create-concept.jpg',
          polish_word: 'Sprawdzić',
          english_word: 'To check',
        },
        future_masc: {
          future_masc_ja: 'będę ',
          future_masc_my: 'będziemy ',
          future_masc_on: 'będzie ',
          future_masc_ty: 'będziesz ',
          future_masc_wy: 'będziecie ',
          future_masc_oni: 'będą ',
        },
      },
    ],
  },
};

async function createKanban() {
  const id = 62687556626;
  const kanban = await prisma.kanban.create({
    data: { kanbanObject: kanbanObjectData, userId: id },
  });

  console.log('kanban created', kanban);

  return kanban;
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));
