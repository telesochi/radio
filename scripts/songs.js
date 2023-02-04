let songs = [
  {
    name: "Вести ФМ",
    cover:
      "./img/vesti.webp",
    artist: "Вести FM — входит в топ-5 популярных радиостанций Москвы. Когда хотят узнать новости, послушать интервью с экспертами, аналитический обзор или специальный репортаж, то выбирают этот канал.",
    audio: "https://icecast-vgtrk.cdnvideo.ru/vestifm_aac_32kbps",
    id: 0,
  },
  {
    name: "Комсомольская правда",
    cover:
      "./img/kpravda.webp",
    artist: "Общественно-политическая радиостанция с FM-вещанием более чем в 400 населенных пунктах России — от Калининграда до Петропавловска-Камчатского. Занимает 2 место в рейтинге «Медиалогии» среди самых цитируемых станций РФ. Аудитория радио «Комсомольская правда»: более 2 миллионов слушателей в сутки.",
    audio: "https://fed.fmplay.ru:8000/kpravda-32.aac",
    id: 1,
  },
  {
    name: "Звезда",
    cover:
      "./img/zvezda.webp",
    artist: "ОАО «Телерадиокомпания Вооруженных Сил Российской Федерации»",
    audio: "https://fed.fmplay.ru:8000/zvezda-32.aac",
    id: 2,
  },
  {
    name: "Маяк",
    cover:
      "./img/mayak.webp",
    artist: "Новости, разговорное",
    audio: "https://fed.fmplay.ru:8000/mayak-32.aac",
    id: 3,
  },
  {
    name: "Sputnik",
    cover:
      "./img/sputnik.webp",
    artist: "Новости, разговорное",
    audio: "https://fed.fmplay.ru:8000/sputnik-32.aac",
    id: 4,
  },
  {
    name: "Радио России",
    cover:
      "./img/radio-russia.webp",
    artist: "Новости, разговорное",
    audio: "https://icecast-vgtrk.cdnvideo.ru/rrzonam",
    id: 5,
  },

 {

    name: "СоловьёвFM",
    cover:
      "./img/solovey.jpg",
    artist: "Слушаем он лайн звук тв канала СоловьёвLIVE. Главные события внешней политики, освещение событий СВО на Украине. Эксперты разных областей в прямом эфире.",
    audio: "https://solovievfm.hostingradio.ru/solovievfm128.aacp",
    id: 6,
  },



{
    name: "Культура",
    cover:
      "./img/kultura.jpg",
    artist: "Радио Культура - одна из самых интересных и познавательных радиостанций в Москве. Вещает на частоте 91,6 FM с 1 ноября 2004 г. из Пятой студии на Малой Никитской. В эфире звучит разнообразная информация о событиях культурной жизни, радиотеатр, аналитические программы о музыке и многое другое.",
    audio: "https://icecast-vgtrk.cdnvideo.ru/kulturafm_mp3_192kbps",
    id: 7,
  },





{
    name: "АвтоРадио",
    cover:
      "./img/avtoradio.webp",
    artist: "Сочи 101.1 FM",
    audio: "https://pub0101.101.ru:8443/stream/air/mp3/256/100",
    id: 8,
  },



{
    name: "Русское радио",
    cover:
      "./img/rusradio.webp",
    artist: "«Русское радио» — российская радиостанция, вещающая в некоторых странах СНГ и дальнего зарубежья как международная. Отличается от других станций трансляцией песен только на русском языке",
    audio: "https://rusradio.hostingradio.ru/rusradio128.mp3",
    id: 9,
  },



{


    name: "Ретро ФМ",
    cover:
      "./img/retrofm.webp",
    artist: "Музыкальное",
    audio: "https://fed.fmplay.ru:8000/retro-32.aac",
    id: 10,
  },

{
    name: "Новая волна",
    cover:
      "./img/newwave.png",
    artist: "Радио Новая волна уделяет внимание не только именитым артистам, но и исполнителям, чьи песни призваны стать хитами! Мы уверены, что у музыки нет формата. У музыки есть душа!",
    audio: "https://s01.radio-tochka.com:4845/radio",
    id: 11,
  },



{
    name: "RMI New Generation",
    cover:
      "./img/new.png",
    artist: "Italo Disco новой генерации. Современное техно Italo",
    audio: "http://fred.torontocast.com:2330/stream#.mp3",
    id: 12,
  },


{
    name: "Chilla FM",
    cover:
      "./img/chilla.jpg",
    artist: "lounge, deep, chillout, джаз и даже хип-хоп. Если вы трудитесь в офисе, то обязательно включайте Chilla FM на работе. Радиостанция специально создана, чтобы звучать фоном в течении всего трудового дня.",
    audio: "https://chilla.amgradio.ru/ChillaFM",
    id: 13,
  },

{
    name: "Маруся ФМ",
    cover:
      "./img/marusa.webp",
    artist: "Только лучшее, только горячее. Танцевальные хиты.",
    audio: "https://radio-holding.ru:9433/marusya_default",
    id: 14,
  },

{
    name: "Европа Плюс",
    cover:
      "./img/europaplus.webp",
    artist: "«Европа Плюс» — первая в СССР и России негосударственная коммерческая радиостанция. Вещает в формате CHR. Начала вещание 30 апреля 1990 года. Страны вещания: Россия, Украина, Киргизия, Казахстан, Молдавия, а также Таджикистан. Занимает лидирующую позицию среди радиосетей России.",
    audio: "https://fed.fmplay.ru:8000/europaplus-32.aac",
    id: 15,
  },


{
    name: "NEON",
    cover:
      "./img/neon.png",
    artist: "Высококачественная электронная музыка из Сочи. Внимание! - 128kbps а это 56 МБ в час.",
    audio: "https://listen7.myradio24.com/5790",
    id: 16,
  },




];
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[0].audio = url;
  });

storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[1].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[2].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[3].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[4].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[5].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[6].audio = url;
  });

storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[7].audio = url;
  });

storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[8].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[9].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[10].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL()
  .then((url) => {
    songs[11].audio = url;
  });













