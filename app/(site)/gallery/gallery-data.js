// ============================================================
// GALLERY CONTENT — edit these three lists to add/remove items.
// ============================================================
//
// VIDEOS / REELS: use the YouTube video ID (the part after `v=` or `/shorts/`).
//   e.g. https://www.youtube.com/watch?v=MIBoIxNjfXM  -> id: 'MIBoIxNjfXM'
//        https://www.youtube.com/shorts/r4KTSRpp17s   -> id: 'r4KTSRpp17s'
//   Thumbnails are fetched from YouTube automatically. Add `thumb: '/assets/x.jpg'`
//   to override with your own frame.
//
// IMAGES: put files in public/assets/ and reference them as '/assets/name.jpg'
//   (or use a full https:// URL). `tall: true` makes the card portrait in the grid.
//
// `category` powers the filter chips on each tab — use any short label.

export const VIDEOS = [
  { id: 'MIBoIxNjfXM', title: 'Pratap & Supriya — The Wedding Film', category: 'Wedding Film', featured: true },
  { id: 'BApJaloacXg', title: 'Sanjeeb & Asha — Full Wedding Film', category: 'Wedding Film' },
  { id: 'jEFML86Tk7g', title: 'Gobinda & Mamuni — Wedding Film', category: 'Wedding Film' },
  { id: 'EUB8I5jshbI', title: 'Swarup & Soumya — A Royal Celebration', category: 'Wedding Film' },
  { id: 'ywVU5sfR5Ao', title: 'Piyush & Dipti', category: 'Wedding Film' },
  { id: 'NI94Lry-Llo', title: 'Pratyush & Mitali', category: 'Wedding Film' },
  { id: '8NngCj7b_uA', title: 'Alisha Dash', category: 'Wedding Film' },
  { id: '5LP3Ic7RVpw', title: 'So Called Cinematic Wedding', category: 'Wedding Film' },
  { id: 'tFyz_XO2naA', title: 'Subhashree — Teaser', category: 'Teaser' },
  { id: 'LbZdGXwFpg4', title: 'Pratyush & Mitali — Pre-Wedding Teaser', category: 'Teaser' },
  { id: 'ELOK2RXqbuc', title: 'Bikash & Akanksha — Safar, Part 2', category: 'Pre-Wedding' },
  { id: 'k5D1tdXx4rE', title: 'Sibhani as Apsara', category: 'Concept Film' },
  { id: '71sezFct5YQ', title: "Sulagna — A Bride's Perspective", category: 'Bridal Film' },
];

export const IMAGES = [
  { src: '/assets/service-wedding-films.jpg', title: 'Chandelier Baraat', category: 'Wedding' },
  { src: '/assets/service-wedding-photography.jpg', title: 'The Bride, Framed', category: 'Bridal', tall: true },
  { src: '/assets/service-prewedding-films.jpg', title: 'Lake Palace Twilight', category: 'Pre-Wedding' },
  { src: '/assets/service-engagement-stories.jpg', title: 'A Quiet Promise', category: 'Engagement' },
  { src: '/assets/service-cinematic-reels.jpg', title: 'Flower Shower', category: 'Wedding', tall: true },
  { src: '/assets/service-drone-coverage.jpg', title: 'Palace From Above', category: 'Aerial' },
  { src: '/assets/step-capture.jpg', title: 'Mandap Lights', category: 'Wedding' },
  { src: '/assets/step-meet.jpg', title: 'First Conversations', category: 'Behind the Scenes' },
  { src: '/assets/step-create.jpg', title: 'The Grading Suite', category: 'Behind the Scenes', tall: true },
  { src: '/assets/hardware-soundstage.jpg', title: 'Sound Stage', category: 'Behind the Scenes' },
  { src: '/assets/step-deliver.jpg', title: 'The Archive Box', category: 'Behind the Scenes' },
  { src: '/assets/abhishek-anand.jpg', title: 'Abhishek Anand', category: 'Studio', tall: true },
];

export const REELS = [
  { id: 'r4KTSRpp17s', title: 'Dillu & Dikshya', category: 'Pre-Wedding' },
  { id: '6GrJci58sFQ', title: 'Abhishek & Neha', category: 'Engagement' },
  { id: 'YomPpYhVIws', title: 'Niharika & Chandan', category: 'Pre-Wedding' },
  { id: 'wJE3qiRBVyY', title: 'Manisha & Swagat', category: 'Engagement' },
];
