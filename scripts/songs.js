let songs = [
  {
    name: "Вести ФМ",
    cover:
      "./img/vesti.webp",
    artist: "Первое новостное радио",
    audio: "https://icecast-vgtrk.cdnvideo.ru/vestifm_aac_32kbps",
    id: 0,
  },
  {
    name: "Комсомольская правда",
    cover:
      "./img/kpravda.webp",
    artist: "Новости",
    audio: "https://fed.fmplay.ru:8000/kpravda-32.aac",
    id: 1,
  },
  {
    name: "Звезда",
    cover:
      "./img/zvezda.webp",
    artist: "Военное радио, новости",
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
    name: "Ретро ФМ",
    cover:
      "./img/retrofm.webp",
    artist: "Музыкальное",
    audio: "https://fed.fmplay.ru:8000/retro-32.aac",
    id: 6,
  },

{
    name: "Best Disco 80S",
    cover:
      "./img/dennis.jpg",
    artist: "denis.101.ru",
    audio: "https://pub0102.101.ru:8443/stream/personal/aacp/64/1781512?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiIwNjBhYzBkMDMzZDExZjg0NTFhM2NiNjlmOTA1NTlkYyIsIklQIjoiMTg4LjE2Mi4xNDIuMTk4IiwiVUEiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTAzLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cLzEwMS5ydVwvIiwidWlkX2NoYW5uZWwiOiIxNzgxNTEyIiwidHlwZV9jaGFubmVsIjoicGVyc29uYWwiLCJ0eXBlRGV2aWNlIjoiUEMiLCJCcm93c2VyIjoiQ2hyb21lIiwiQnJvd3NlclZlcnNpb24iOiIxMDMuMC4wLjAiLCJTeXN0ZW0iOiJXaW5kb3dzIDEwIiwiZXhwIjoxNjU3NTg0Mzg3fQ.BeKQXembGRdmwlOYGJyWyZJnKDgjqU7LHt6gVHtcaMo#.mp3",
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
    name: "Макс FM",
    cover:
      "./img/maxfm.webp",
    artist: "Сочинское радио",
    audio: "https://maksfm.hostingradio.ru/maksfm320.mp3",
    id: 9,
  },



{
    name: "СоловьёвFM",
    cover:
      "./img/solovey.jpg",
    artist: "Новости, разговорное",
    audio: "https://solovievfm.hostingradio.ru/solovievfm128.aacp",
    id: 10,
  },

{
    name: "Radio/LA",
    cover:
      "./img/radiola.png",
    artist: "Культовые хиты рубежа 90х-00х",
    audio: "https://radiola.hostingradio.ru/radiola_srt_64.aac",
    id: 11,
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













