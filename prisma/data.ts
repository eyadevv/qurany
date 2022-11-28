type Surahs = {
  id: number;
  name: string;
  arabicName: string;
  place: string;
  ayahs: number;
}[];
export const data: {
  id: number;
  name: string;
  arabicName: string;
  image: string;
  country: string;
  surahs: Surahs;
}[] = [
  {
    id: 1,
    name: "islam subhi",
    arabicName: "اسلام صبحي",
    image:
      "https://ucarecdn.com/d4ad123b-f301-43eb-a458-056f52c00161/islamsubhi.jpg",
    country: "Egypt",
    surahs: [
      {
        id: 1,
        name: "Al-Fatihah",
        arabicName: "الفاتحة",
        place: "Mecca",
        ayahs: 7,
      },
      {
        id: 2,
        name: "Al-Baqarah",
        arabicName: "البقرة",
        place: "Medina",
        ayahs: 286,
      },
    ],
  },
  {
    id: 2,
    name: "Abdul Rahman Al-Sudais",
    arabicName: "عبد الرحمن السديس",
    image:
      "https://ucarecdn.com/66d832da-6ef2-4ffa-b582-d0354095dfef/abdulrahmansudais.jpg",
    country: "Saudi Arabia",
    surahs: [
      {
        id: 1,
        name: "Al-Fatihah",
        arabicName: "الفاتحة",
        place: "Mecca",
        ayahs: 7,
      },
      {
        id: 2,
        name: "Al-Baqarah",
        arabicName: "البقرة",
        place: "Medina",
        ayahs: 286,
      },
    ],
  },
  {
    id: 3,
    name: "Abdul Basit Abdul Samad",
    arabicName: "عبد الباسط عبد الصمد",
    image:
      "https://ucarecdn.com/dfa52cfe-a703-47eb-9138-718c1ecd65a1/abdulbasitabdulsamad.jpg",
    country: "Saudi Arabia",
    surahs: [
      {
        id: 1,
        name: "Al-Fatihah",
        arabicName: "الفاتحة",
        place: "Mecca",
        ayahs: 7,
      },
      {
        id: 2,
        name: "Al-Baqarah",
        arabicName: "البقرة",
        place: "Medina",
        ayahs: 286,
      },
    ],
  },
  {
    id: 4,
    name: "Abdullah Awad Al Juhany",
    arabicName: "عبد الله عوض الجهني",
    image:
      "https://ucarecdn.com/cef1e822-64a5-46d2-90e3-d15658e7fa3f/abdullahjuhany.jpg",
    country: "Saudi Arabia",
    surahs: [
      {
        id: 1,
        name: "Al-Fatihah",
        arabicName: "الفاتحة",
        place: "Mecca",
        ayahs: 7,
      },
      {
        id: 2,
        name: "Al-Baqarah",
        arabicName: "البقرة",
        place: "Medina",
        ayahs: 286,
      },
    ],
  },
];
