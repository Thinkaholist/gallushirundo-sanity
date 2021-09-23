export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    // },
    {
      name: 'netlify',
      options: {
        title: 'A generált weboldal állapota a Netlify-on',
        description:
          'A weboldalad azért tud olyan gyors lenni, mert előre elkészül a szerveren (ún. build folyamat), statikus. Ha kész vagy a változtatásokkal, a "Deploy" gombbal szükséges egy új "oldalépítést" (build) generálnod. (Elég egyszer megnyomni a gombot). A Netlify badge sárgára fog változni (Building). Pár perc az egész! Ha a Netlify gomb ismét zöld lesz (Success), az oldalépítés sikeres volt, és a változtatásokat látnod kell a weboldaladon. Ha esetleg az építés sikertelen volt, a gomb pirosra változik(Failed), ebben az esetben semmilyen változás nem történik a weboldaladon, a régi verzió ugyanúgy él tovább. Szólj, és megnézzük, hol a hiba. A "view" link a weboldalra visz, az "admin"-ra kattintva pedig a Netlify build folyamatot lehet nyomon követni.',
        sites: [
          {
            title: 'Weboldal',
            apiId: '247875ae-d5c6-4ef4-a8d9-9df35f71fdd6',
            buildHookId: '614cc708b6a0ee0b174fc263',
            name: 'gallusandhirundo',
          },
        ],
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last Edited Documents',
        order: '_updatedAt desc',
        types: ['post', 'event', 'artist', 'agency', 'category'],
      },
      layout: {
        width: 'medium',
        height: 'auto',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Upcoming Events',
        query: '*[_type == "event" && date >= $now] | order(date asc) [0...10]',
      },
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Sanity repo',
            value: 'https://github.com/Thinkaholist/gallushirundo-sanity',
            category: 'Code',
          },
          {
            title: 'Gatsby repo',
            value: 'https://github.com/Thinkaholist/gallushirundo-frontend',
            category: 'Code',
          },
          {
            title: 'Frontend Deploy',
            value: 'https://gallus.netlify.app/',
            category: 'apps',
          },
        ],
      },
      layout: {
        width: 'medium',
        height: 'auto',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'cats',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
  ],
};
