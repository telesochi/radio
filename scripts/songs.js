let songs = [
  {
    name: "Вести ФМ",
    cover:
      "./img/vesti-fm.jpg",
    artist: "новостное радио",
    audio: "https://icecast-vgtrk.cdnvideo.ru/vestifm_aac_32kbps",
    id: 0,
  },
  {
    name: "Космомольская правда",
    cover:
      "./img/kpravda.webp",
    artist: "новостное радио",
    audio: "https://fed.fmplay.ru:8000/kpravda-32.aac",
    id: 1,
  },
  {
    name: "Quran2",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Hakim Omari2",
    audio: null,
    id: 2,
  },
  {
    name: "Quran3",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Hakim Omari3",
    audio: null,
    id: 3,
  },
  {
    name: "Quran4",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Hakim Omari4",
    audio: null,
    id: 4,
  },
  {
    name: "Quran5",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Hakim Omari5",
    audio: null,
    id: 5,
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
  .child("https://italo.italo.nu/fantasy")
  .getDownloadURL()
  .then((url) => {
    songs[1].audio = url;
  });
storageRef
  .child("default")
  .child("https://italo.italo.nu/fantasy#.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[2].audio = url;
  });
storageRef
  .child("default")
  .child("https://italo.italo.nu/fantasy#.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[3].audio = url;
  });
storageRef
  .child("default")
  .child("quran4.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[4].audio = url;
  });
storageRef
  .child("default")
  .child("")
  .getDownloadURL("https://italo.italo.nu/fantasy")
  .then((url) => {
    songs[5].audio = url;
  });
