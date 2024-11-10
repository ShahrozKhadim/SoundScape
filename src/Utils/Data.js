import {Images} from '../Assets/Images';

const {
  userAvatar,
  headphone,
  headset,
  airpods,
  headsetTwo,
  headsetThree,
  headsetFour,
} = Images;
/**
 *
 * @type {[{image: {}, price: number, name: string, id: number},{image: {}, price: number, name: string, id: number},{image: {}, price: number, name: string, id: number},{image: {}, price: number, name: string, id: number},{image: {}, price: number, name: string, id: number},null,null,null,null]}
 */
export const product = [
  {
    id: 1,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 2,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 3,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 4,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 5,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 6,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 7,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 8,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
  {
    id: 9,
    name: 'TMA-2 Modular Headphone',
    price: 350,
    image: headphone,
  },
];
export const categoryList = [
  'All',
  'HeadPhone',
  'HeadBand',
  'earPads',
  'Cable',
];

export const filterOptions = ['Popularity', 'Newest', 'Expensive'];
export const sortOptions = [
  'Popularity',
  'Newest',
  'Oldest',
  'High Price',
  'Low Price',
  'Review',
];
export const popularProduct = [
  {
    id: 1,
    name: 'TMA-2 Comfort Wireless',
    price: 350,
    image: headphone,
  },
  {
    id: 2,
    name: 'TMA-2 DJ',
    price: 350,
    image: headphone,
  },
  {
    id: 3,
    name: 'TMA-2 Comfort Wireless',
    price: 350,
    image: headphone,
  },
];
export const productOverViewData = [
  {id: '1', image: headset},
  {id: '2', image: airpods},
  {id: '3', image: headsetTwo},
  {id: '4', image: headsetThree},
  {id: '5', image: headsetFour},
];
export const productReviews = [
  {
    id: '1',
    userName: 'SoundFanatic',
    stars: 5,
    review:
      "Sound Scape is a paradise for audio enthusiasts. I'm loving every moment with my new ear pods!",
    time: '2023-07-25',
  },
  {
    id: '2',
    userName: 'TechSavvyUser',
    stars: 4,
    review:
      'The wireless headset I bought from Sound Scape is great, though I wish the battery life was a bit longer. Still, awesome sound quality!',
    time: '2023-07-20',
  },
  {
    id: '3',
    userName: 'HappyCustomer23',
    stars: 5,
    review:
      'Exceptional service! Ordered my headphones and they arrived the next day. Super impressed with the efficiency.',
    time: '2023-07-15',
  },
  {
    id: '4',
    userName: 'AudiophilePro',
    stars: 5,
    review:
      "I've been a loyal Sound Scape customer for years. The quality and variety of products are unmatched.",
    time: '2023-07-10',
  },
  {
    id: '5',
    userName: 'MusicIsLife',
    stars: 4,
    review:
      "Sound Scape's app is user-friendly, but I'd love to see more personalized recommendations based on my music preferences.",
    time: '2023-07-05',
  },
  {
    id: '6',
    userName: 'AudioExplorer',
    stars: 5,
    review:
      "I discovered Sound Scape recently, and I'm impressed. Their handfree collection is a hidden gem!",
    time: '2023-06-30',
  },
  {
    id: '7',
    userName: 'TechGuru123',
    stars: 4,
    review:
      'Sound Scape has a great range of options, but their prices could be more competitive.',
    time: '2023-06-25',
  },
  {
    id: '8',
    userName: 'MusicalMaverick',
    stars: 5,
    review:
      'Sound Scape helps me find unique and innovative audio products. The experience is always delightful!',
    time: '2023-06-20',
  },
  {
    id: '9',
    userName: 'EarsInHeaven',
    stars: 5,
    review:
      "Just got my new ear pods, and they're heavenly! The sound quality is out of this world.",
    time: '2023-06-15',
  },
  {
    id: '10',
    userName: 'GadgetGuru88',
    stars: 4,
    review:
      "I'm a repeat customer, and Sound Scape hasn't disappointed me yet. Keep up the good work!",
    time: '2023-06-10',
  },
];
export const productFeatures = {
  product: {
    id: '1',
    title: 'Premium Wireless Headphones',
    description:
      "Experience exceptional audio quality with our Premium Wireless Headphones. These headphones are designed to provide you with an immersive listening experience, whether you're enjoying music, podcasts, or taking calls.",
  },
  features: [
    {
      id: '1',
      featureTitle: 'High-Definition Sound',
      featureDescription:
        'Enjoy crystal-clear audio with our advanced audio drivers, delivering rich and dynamic sound.',
      image: 'image_url1.jpg',
    },
    {
      id: '2',
      featureTitle: 'Wireless Connectivity',
      featureDescription:
        'Connect effortlessly to your devices via Bluetooth, eliminating the hassle of tangled cables.',
      image: 'image_url2.jpg',
    },
    {
      id: '3',
      featureTitle: 'Long Battery Life',
      featureDescription:
        'With up to 30 hours of playback time on a single charge, you can enjoy your music all day long.',
      image: 'image_url3.jpg',
    },
    {
      id: '4',
      featureTitle: 'Comfortable Design',
      featureDescription:
        'Our headphones feature plush ear cushions and an adjustable headband for all-day comfort.',
      image: 'image_url4.jpg',
    },
    {
      id: '5',
      featureTitle: 'Built-in Microphone',
      featureDescription:
        'Stay connected with the built-in microphone for hands-free calls and voice assistant support.',
      image: 'image_url5.jpg',
    },
    {
      id: '6',
      featureTitle: 'Noise Isolation',
      featureDescription:
        'Immerse yourself in your music without distractions, thanks to advanced noise isolation technology.',
      image: 'image_url6.jpg',
    },
    {
      id: '7',
      featureTitle: 'Sleek and Durable',
      featureDescription:
        'The modern design complements your style, and the headphones are built to withstand daily use.',
      image: 'image_url7.jpg',
    },
    {
      id: '8',
      featureTitle: 'Easy Controls',
      featureDescription:
        'Intuitive touch controls allow you to adjust volume, skip tracks, and take calls with ease.',
      image: 'image_url8.jpg',
    },
    {
      id: '9',
      featureTitle: 'Compact and Portable',
      featureDescription:
        'Foldable and lightweight, these headphones are perfect for on-the-go lifestyles.',
      image: 'image_url9.jpg',
    },
    {
      id: '10',
      featureTitle: 'Universal Compatibility',
      featureDescription:
        'Our headphones work seamlessly with smartphones, tablets, laptops, and more.',
      image: 'image_url10.jpg',
    },
  ],
};

/**
 * @type {[{
 *   specs: {
 *     "Driver Size": string,
 *     "Color Options": string,
 *     "Battery Life": string,
 *     Connection: string,
 *     Weight: string
 *   },
 *   features: [
 *     {description: string, title: string},
 *     {description: string, title: string},
 *     {description: string, title: string}
 *   ],
 *   quantity: number,
 *   price: number,
 *   review: string,
 *   name: string,
 *   rating: string,
 *   description: string,
 *   id: string,
 *   availability: string,
 *   category: string,
 *   publicationDate: string
 * },{
 *   specs: {
 *     "Driver Size": string,
 *     "Color Options": string,
 *     "Battery Life": string,
 *     Connection: string,
 *     Weight: string
 *   },
 *   features: [
 *     {description: string, title: string},
 *     {description: string, title: string},
 *     {description: string, title: string}
 *   ],
 *   quantity: number,
 *   price: number,
 *   review: string,
 *   name: string,
 *   rating: string,
 *   description: string,
 *   id: string,
 *   availability: string,
 *   category: string,
 *   publicationDate: string
 * },{
 *   specs: {
 *     "Color Options": string,
 *     "Battery Life": string,
 *     "Water Resistance": string,
 *     Connection: string,
 *     "Charging Time": string
 *   },
 *   features: [
 *     {description: string, title: string},
 *     {description: string, title: string},
 *     {description: string, title: string}
 *   ],
 *   quantity: number,
 *   price: number,
 *   review: string,
 *   name: string,
 *   rating: string,
 *   description: string,
 *   id: string,
 *   availability: string,
 *   category: string,
 *   publicationDate: string
 * },{
 *   specs: {
 *     "Color Options": string,
 *     Microphone: string,
 *     "Battery Life": string,
 *     Connection: string
 *   },
 *   features: [
 *     {description: string, title: string},
 *     {description: string, title: string},
 *     {description: string, title: string}
 *   ],
 *   quantity: number,
 *   price: number,
 *   review: string,
 *   name: string,
 *   rating: string,
 *   description: string,
 *   id: string,
 *   availability: string,
 *   category: string,
 *   publicationDate: string
 * },{
 *   specs: {
 *     "Color Options": string,
 *     "Battery Life": string,
 *     "Water Resistance": string,
 *     "Charging Case": string,
 *     Connection: string
 *   },
 *   features: [
 *     {description: string, title: string},
 *     {description: string, title: string},
 *     {description: string, title: string}
 *   ],
 *   quantity: number,
 *   price: number,
 *   review: string,
 *   name: string,
 *   rating: string,
 *   description: string,
 *   id: string,
 *   availability: string,
 *   category: string,
 *   publicationDate: string
 * }]
 */
export const products = [
  {
    id: 'CrGygeXT17NnBEsI2UlUj',
    name: 'Noise-Canceling In-Ear Earbuds',
    price: 79.99,
    description:
      'Experience immersive sound with these noise-canceling in-ear earbuds.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 10 hours',
      'Color Options': 'Black, Red, Blue',
      'Driver Size': '9mm',
      Weight: '15g',
    },
    category: 'earPads',
    features: [
      {
        title: 'Active Noise Cancellation',
        description: 'Block out distractions and enjoy pure music.',
      },
      {
        title: 'Sweat-Resistant',
        description: 'Perfect for workouts and active lifestyles.',
      },
      {
        title: 'Quick Charge',
        description: 'Get 2 hours of playback with just a 15-minute charge.',
      },
    ],
    availability: 'In-stack',
    quantity: 153,
    rating: '1.0726652246731494',
    publicationDate: '1618523991',
    review: '77.03325800392568',
  },
  {
    id: 'hBhyXdNsbA-2kjefzxu7y',
    name: 'Wireless On-Ear Headphones',
    price: 129.99,
    description:
      'Enjoy high-fidelity audio with these comfortable wireless on-ear headphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 25 hours',
      'Color Options': 'Black, Brown, White',
      'Driver Size': '50mm',
      Weight: '300g',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Hi-Res Audio',
        description: 'Experience music as the artist intended.',
      },
      {
        title: 'Touch Controls',
        description: 'Easily manage playback and calls with touch gestures.',
      },
      {
        title: 'Collapsible Design',
        description: 'Conveniently fold for storage and travel.',
      },
    ],
    availability: 'In-stack',
    quantity: 59,
    rating: '0.8061971315551564',
    publicationDate: '1629459272',
    review: '2724.7918495889116',
  },
  {
    id: 'pBEnYdXPuIGJcXsHH1JoG',
    name: 'Bluetooth Neckband Earphones',
    price: 59.99,
    description:
      'Stay connected on the go with these stylish Bluetooth neckband earphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 12 hours',
      'Color Options': 'Black, Blue, Pink',
      'Water Resistance': 'IPX5',
      'Charging Time': '1.5 hours',
    },
    category: 'earPads',
    features: [
      {
        title: 'Neckband Design',
        description: 'Keeps your earphones secure and easily accessible.',
      },
      {
        title: 'Magnetic Earbuds',
        description:
          'Attach them together when not in use to prevent tangling.',
      },
      {
        title: 'Dual-Device Connectivity',
        description: 'Connect to two devices simultaneously.',
      },
    ],
    availability: 'In-stack',
    quantity: 23,
    rating: '2.079852034177576',
    publicationDate: '1606403253',
    review: '930.040929704276',
  },
  {
    id: '8WyW5WvRueAj_uLR9CCKr',
    name: 'Wireless Gaming Headset',
    price: 89.99,
    description:
      'Immerse yourself in the gaming world with this wireless gaming headset.',
    specs: {
      Connection: 'Wireless (2.4GHz)',
      'Battery Life': 'Up to 15 hours',
      'Color Options': 'Black, Red',
      Microphone: 'Noise-Canceling',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Low Latency',
        description: 'Enjoy lag-free audio for a competitive edge.',
      },
      {
        title: 'RGB Lighting',
        description: "Customize your headset's look with vibrant RGB lighting.",
      },
      {
        title: 'Comfortable Fit',
        description: 'Ergonomic design for long gaming sessions.',
      },
    ],
    availability: 'In-stack',
    quantity: 93,
    rating: '3.5767577798855554',
    publicationDate: '1581009317',
    review: '602.781085757815',
  },
  {
    id: 'QuUgS7xzUUedvjg9Zlevs',
    name: 'Sports Wireless Earbuds',
    price: 69.99,
    description:
      'Achieve your fitness goals with these sports wireless earbuds.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 8 hours',
      'Color Options': 'Black, Green, Orange',
      'Water Resistance': 'IPX7',
      'Charging Case': 'Included',
    },
    category: 'earPads',
    features: [
      {
        title: 'Secure Fit',
        description: 'Designed to stay in place during intense workouts.',
      },
      {
        title: 'Heart Rate Monitor',
        description: 'Track your heart rate for optimal training.',
      },
      {
        title: 'Quick Pairing',
        description: 'Connect to your device in seconds.',
      },
    ],
    availability: 'In-stack',
    quantity: 39,
    rating: '1.3951387367170698',
    publicationDate: '1663733871',
    review: '504.4682909062397',
  },
  {
    id: 'MZET9nP_rKkRuuwSwlFD9',
    name: 'Bluetooth Car Hands-Free Kit',
    price: 29.99,
    description:
      'Stay safe on the road with this Bluetooth car hands-free kit.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      Compatibility: 'Universal',
      'Voice Assistant Support': 'Yes',
      Installation: 'Clip-On',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Hands-Free Calling',
        description:
          'Make and receive calls without taking your hands off the wheel.',
      },
      {
        title: 'Voice Commands',
        description: 'Control your phone and navigate with voice commands.',
      },
      {
        title: 'Noise Reduction',
        description: 'Enhance call quality by reducing background noise.',
      },
    ],
    availability: 'In-stack',
    quantity: 139,
    rating: '1.5161366023094924',
    publicationDate: '1610352227',
    review: '1566.9193863281569',
  },
  {
    id: 'iShiezY-SgKSWSi1GFtQi',
    name: 'Wireless In-Ear Sport Earphones',
    price: 49.99,
    description:
      'Get motivated with these wireless in-ear sport earphones designed for active lifestyles.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 9 hours',
      'Color Options': 'Black, Blue, Yellow',
      'Water Resistance': 'IPX6',
    },
    category: 'earPads',
    features: [
      {
        title: 'Sweatproof Design',
        description: 'Ideal for intense workouts and outdoor activities.',
      },
      {
        title: 'Customizable EQ',
        description: 'Adjust the sound profile to suit your preferences.',
      },
      {
        title: 'Secure Fit Hooks',
        description: 'Stay in place no matter how rigorous your workout.',
      },
    ],
    availability: 'In-stack',
    quantity: 11,
    rating: '3.0457632679854707',
    publicationDate: '1604397367',
    review: '360.2922031564961',
  },
  {
    id: 'nSHHu29E8nHh7Nb5_dr3r',
    name: 'On-Ear DJ Headphones',
    price: 199.99,
    description:
      'Experience powerful bass and crisp sound with these on-ear DJ headphones.',
    specs: {
      Connection: 'Wired (3.5mm)',
      'Cable Length': '3 meters',
      'Color Options': 'Black, Silver',
      'Driver Size': '50mm',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Professional Sound',
        description: 'Perfect for DJs and audio enthusiasts.',
      },
      {
        title: 'Swivel Earcups',
        description: 'Easily monitor the mix with swiveling earcups.',
      },
      {
        title: 'Noise Isolation',
        description: 'Block out external noise for precise listening.',
      },
    ],
    availability: 'In-stack',
    quantity: 199,
    rating: '0.8021933357302446',
    publicationDate: '1656471784',
    review: '1417.742959429576',
  },
  {
    id: 'ffzMNrtxsKKfIdCXi76lU',
    name: 'Bluetooth Motorcycle Helmet Headset',
    price: 79.99,
    description:
      'Stay connected while riding with this Bluetooth motorcycle helmet headset.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 10 hours',
      Compatibility: 'Universal',
      'Helmet Type': 'Full-Face, Open-Face',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Helmet Integration',
        description: 'Seamlessly fits into your motorcycle helmet.',
      },
      {
        title: 'Wind Noise Reduction',
        description: 'Enhance communication clarity while riding.',
      },
      {
        title: 'Group Intercom',
        description: 'Connect with fellow riders for group conversations.',
      },
    ],
    availability: 'In-stack',
    quantity: 157,
    rating: '4.818413557846303',
    publicationDate: '1601630695',
    review: '1908.9340111257393',
  },
  {
    id: '8C9WorU6Jt5QnzMec_z_x',
    name: 'Wireless Gaming Earbuds',
    price: 79.99,
    description:
      'Elevate your gaming experience with these wireless gaming earbuds.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 8 hours',
      'Color Options': 'Black, Green, Red',
      'Low Latency': 'Yes',
      Microphone: 'Detachable',
    },
    category: 'earPads',
    features: [
      {
        title: 'Immersive Audio',
        description: 'Enjoy 3D audio and pinpoint accuracy in games.',
      },
      {
        title: 'Customizable EQ',
        description: 'Fine-tune audio settings for your gaming style.',
      },
      {
        title: 'Detachable Mic',
        description: 'Switch between gaming and everyday use easily.',
      },
    ],
    availability: 'In-stack',
    quantity: 131,
    rating: '4.4856349845312184',
    publicationDate: '1608104335',
    review: '210.78109238023757',
  },
  {
    id: 'Uf3ORVfkviv8XPZFiPe8P',
    name: 'Noise-Canceling On-Ear Headphones',
    price: 149.99,
    description:
      'Block out the world and immerse yourself in music with these noise-canceling on-ear headphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 30 hours',
      'Color Options': 'Black, Silver, Rose Gold',
      'Driver Size': '40mm',
      Weight: '280g',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Active Noise Cancellation',
        description: 'Eliminate distractions for a pure listening experience.',
      },
      {
        title: 'Extended Battery Life',
        description: 'Enjoy hours of music without interruptions.',
      },
      {
        title: 'Foldable Design',
        description: 'Compact and portable for travel.',
      },
    ],
    availability: 'In-stack',
    quantity: 177,
    rating: '4.515932704569218',
    publicationDate: '1652010337',
    review: '1140.935837984066',
  },
  {
    id: '3864bfWUH-bz9IW027KW7',
    name: 'Wireless In-Ear Sports Headphones',
    price: 59.99,
    description:
      'Stay motivated during workouts with these wireless in-ear sports headphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 10 hours',
      'Color Options': 'Black, Blue, Orange',
      'Water Resistance': 'IPX4',
    },
    category: 'earPads',
    features: [
      {
        title: 'Secure Fit',
        description: 'Designed to stay in place during rigorous exercise.',
      },
      {
        title: 'Sweatproof',
        description: 'Withstand your toughest workouts.',
      },
      {
        title: 'Quick Charge',
        description: 'Get an hour of playback with just a 10-minute charge.',
      },
    ],
    availability: 'In-stack',
    quantity: 149,
    rating: '1.3652382065545254',
    publicationDate: '1661413383',
    review: '534.8260430959928',
  },
  {
    id: 'yH3p9_BGlNV8tZtmSHIZs',
    name: 'Bluetooth Conference Speaker',
    price: 99.99,
    description:
      'Enhance your virtual meetings with this Bluetooth conference speaker.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 15 hours',
      'Microphone Range': '20 feet',
      Compatibility: 'Universal',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Crystal-Clear Sound',
        description: 'Ensure everyone hears and is heard clearly.',
      },
      {
        title: '360° Coverage',
        description: 'No dead zones in your meeting room.',
      },
      {
        title: 'Easy Setup',
        description: 'Connect and start your conference in seconds.',
      },
    ],
    availability: 'In-stack',
    quantity: 30,
    rating: '2.4143955797541174',
    publicationDate: '1609885241',
    review: '82.97418483948161',
  },
  {
    id: 'hebBqS0J2b7MDkhsy_xoJ',
    name: 'High-Fidelity DJ Earphones',
    price: 129.99,
    description: 'Perfect your mixes with these high-fidelity DJ earphones.',
    specs: {
      Connection: 'Wired (3.5mm)',
      'Cable Length': '2 meters',
      'Color Options': 'Black, Silver',
      'Driver Size': '8mm',
    },
    category: 'earPads',
    features: [
      {
        title: 'Professional Sound Quality',
        description: 'Hear every detail of your music.',
      },
      {
        title: 'Gold-Plated Connector',
        description: 'Ensures a stable connection for DJing.',
      },
      {
        title: 'Noise Isolation',
        description: 'Block out ambient noise in loud venues.',
      },
    ],
    availability: 'In-stack',
    quantity: 133,
    rating: '1.226120037405234',
    publicationDate: '1664423519',
    review: '1433.992388822359',
  },
  {
    id: 'cjxd5G4A4idbL3ri4DlY7',
    name: 'Wireless Desk Phone Headset',
    price: 69.99,
    description: 'Increase productivity with this wireless desk phone headset.',
    specs: {
      Connection: 'Wireless (DECT 6.0)',
      'Battery Life': 'Up to 12 hours',
      Compatibility: 'Desk Phones',
      'Noise-Canceling Microphone': 'Yes',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Hands-Free Calling',
        description: 'Answer and end calls with ease.',
      },
      {
        title: 'Comfortable Fit',
        description: 'Perfect for long office calls.',
      },
      {
        title: 'DECT Technology',
        description: 'No interference with Wi-Fi networks.',
      },
    ],
    availability: 'In-stack',
    quantity: 156,
    rating: '1.097223641345747',
    publicationDate: '1659692757',
    review: '370.1351146935101',
  },
  {
    id: 'wm7h1L5el7-rsVqKZrROB',
    name: 'Bone Conduction Headphones',
    price: 89.99,
    description:
      'Experience open-ear listening with these bone conduction headphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 8 hours',
      'Color Options': 'Black, Gray, Blue',
      'Water Resistance': 'IP55',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Unique Listening Experience',
        description: 'Hear your surroundings while enjoying music.',
      },
      {
        title: 'Secure Fit',
        description: 'Perfect for outdoor activities and running.',
      },
      {
        title: 'Noise Reduction Mic',
        description: 'Clear calls even in noisy environments.',
      },
    ],
    availability: 'In-stack',
    quantity: 165,
    rating: '2.2447542468733395',
    publicationDate: '1590042944',
    review: '5.152664669065166',
  },
  {
    id: 'L5WpxkoktBgosLyDVazGb',
    name: 'True Wireless Noise-Canceling Earbuds',
    price: 169.99,
    description:
      'Immerse yourself in music with these true wireless noise-canceling earbuds.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 12 hours (with case)',
      'Color Options': 'Black, White, Gold',
      'Noise Cancellation': 'Hybrid ANC',
    },
    category: 'earPads',
    features: [
      {
        title: 'Advanced Noise Cancellation',
        description: 'Block out all distractions for ultimate focus.',
      },
      {
        title: 'Touch Controls',
        description: 'Easily control playback and calls with gestures.',
      },
      {
        title: 'Wireless Charging',
        description: 'Conveniently charge your earbuds.',
      },
    ],
    availability: 'In-stack',
    quantity: 154,
    rating: '4.659975631121117',
    publicationDate: '1607984769',
    review: '117.8370778314961',
  },
  {
    id: 'rJpxQHDBQAZWbbYyD3PsE',
    name: 'Bluetooth Home Theater Soundbar',
    price: 199.99,
    description:
      'Upgrade your home entertainment with this Bluetooth home theater soundbar.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Total Power Output': '120W',
      'Sound Modes': 'Movie, Music, Game',
      'Wall Mountable': 'Yes',
    },
    category: 'HeadBand',
    features: [
      {
        title: 'Immersive Sound',
        description: 'Transform your living room into a theater.',
      },
      {
        title: 'Multiple Sound Modes',
        description: 'Optimize audio for different content.',
      },
      {
        title: 'Easy Setup',
        description: 'Connect to your TV and start enjoying enhanced sound.',
      },
    ],
    availability: 'In-stack',
    quantity: 72,
    rating: '0.31014680622590274',
    publicationDate: '1601477008',
    review: '1881.7820989850543',
  },
  {
    id: 'Zwu_U4PtfF1E6_jE3iD-y',
    name: 'Wireless Bluetooth Ear Muffs',
    price: 39.99,
    description:
      'Stay warm and connected with these wireless Bluetooth ear muffs.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 8 hours',
      'Color Options': 'Black, Gray, Pink',
      Material: 'Faux Fur',
    },
    category: 'earPads',
    features: [
      {
        title: 'Winter Essential',
        description: 'Keep your ears warm while enjoying music.',
      },
      {
        title: 'Hands-Free Calling',
        description: 'Answer calls without removing the ear muffs.',
      },
      {
        title: 'Foldable Design',
        description: 'Easy to pack and carry.',
      },
    ],
    availability: 'In-stack',
    quantity: 113,
    rating: '1.3689549170838422',
    publicationDate: '1670172008',
    review: '776.0565683855749',
  },
  {
    id: 'ObQ_ja2MXW1UQi7uFWkS1',
    name: 'Smart Bluetooth Sunglasses',
    price: 129.99,
    description:
      'Combine style and technology with these smart Bluetooth sunglasses.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 4 hours',
      'Lens Type': 'Polarized',
      'Frame Material': 'Acetate',
    },
    category: 'earPads',
    features: [
      {
        title: 'Built-in Speakers',
        description: 'Listen to music discreetly through the frames.',
      },
      {
        title: 'Hands-Free Calling',
        description: 'Take calls with a touch of a button.',
      },
      {
        title: 'UV Protection',
        description: 'Protect your eyes while staying connected.',
      },
    ],
    availability: 'In-stack',
    quantity: 150,
    rating: '1.3091951213505082',
    publicationDate: '1584536930',
    review: '1003.9325646502643',
  },
  {
    id: 'UyMhKBxIR7XPNj_uvHB5t',
    name: 'Rugged Outdoor Bluetooth Speaker',
    price: 79.99,
    description:
      'Take your music anywhere with this rugged outdoor Bluetooth speaker.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 20 hours',
      'Water Resistance': 'IPX7',
      'Drop Resistance': 'Yes',
    },
    category: 'earPads',
    features: [
      {
        title: 'Durable Design',
        description: 'Built to withstand outdoor adventures.',
      },
      {
        title: '360° Sound',
        description: 'Fill the space with powerful, omnidirectional sound.',
      },
      {
        title: 'Built-in Power Bank',
        description: 'Charge your devices on the go.',
      },
    ],
    availability: 'In-stack',
    quantity: 124,
    rating: '1.2837992848257263',
    publicationDate: '1671524276',
    review: '1802.9307550269098',
  },
  {
    id: 'TSLeFBNqBA43juXL-G7xk',
    name: 'Wireless Charging Dock for Smartphones',
    price: 29.99,
    description:
      'Simplify charging with this wireless charging dock for smartphones.',
    specs: {
      Connection: 'Wireless (Qi)',
      Compatibility: 'Universal',
      'Charging Ports': '2',
      Material: 'Plastic',
    },
    category: 'HeadBand',
    features: [
      {
        title: 'Dual Charging',
        description: 'Charge two devices simultaneously.',
      },
      {
        title: 'Compact Design',
        description: 'Fits neatly on any desk or bedside table.',
      },
      {
        title: 'Overheat Protection',
        description: 'Safe and efficient charging.',
      },
    ],
    availability: 'In-stack',
    quantity: 138,
    rating: '0.9474722896083443',
    publicationDate: '1661726301',
    review: '1360.317987835444',
  },
  {
    id: 'Dufjvcewc6gW4rOrrusIy',
    name: 'Portable Wireless Karaoke Microphone',
    price: 49.99,
    description:
      'Unleash your inner rockstar with this portable wireless karaoke microphone.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 5 hours',
      'Color Options': 'Gold, Rose Gold, Black',
    },
    category: 'earPads',
    features: [
      {
        title: 'Karaoke Anywhere',
        description: 'Sing your heart out at parties and gatherings.',
      },
      {
        title: 'Echo Effect',
        description: 'Add studio-quality echo to your vocals.',
      },
      {
        title: 'Recording Function',
        description: 'Record your performances for playback.',
      },
    ],
    availability: 'In-stack',
    quantity: 60,
    rating: '2.7879898152001834',
    publicationDate: '1670360655',
    review: '2579.438944745331',
  },
  {
    id: 'Y4IMTUDZnNhMagAAF4QPN',
    name: 'Wireless Bluetooth Beanie',
    price: 29.99,
    description: 'Stay warm and connected with this wireless Bluetooth beanie.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 6 hours',
      'Color Options': 'Black, Gray, Navy',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Built-in Headphones',
        description:
          'Listen to music and take calls while keeping your head warm.',
      },
      {
        title: 'Washable Fabric',
        description: 'Easily remove the electronics for washing.',
      },
      {
        title: 'One-Size-Fits-All',
        description: 'Stretchable material for a comfortable fit.',
      },
    ],
    availability: 'In-stack',
    quantity: 140,
    rating: '2.741324660994829',
    publicationDate: '1584662067',
    review: '2799.228287732053',
  },
  {
    id: 'W7dv1lAEa9Hs5vsiH0H4E',
    name: 'Portable Bluetooth Turntable',
    price: 149.99,
    description:
      'Experience vinyl on the go with this portable Bluetooth turntable.',
    specs: {
      Connection: 'Wireless (Bluetooth), Wired (RCA)',
      'Battery Life': 'Up to 4 hours',
      'Color Options': 'Black, White, Red',
    },
    category: 'earPads',
    features: [
      {
        title: 'Vinyl Anywhere',
        description: 'Enjoy your vinyl collection without the bulk.',
      },
      {
        title: 'Built-in Speakers',
        description: 'No need for external speakers.',
      },
      {
        title: 'Bluetooth Streaming',
        description: 'Connect to wireless speakers or headphones.',
      },
    ],
    availability: 'In-stack',
    quantity: 67,
    rating: '4.386109045474496',
    publicationDate: '1619612662',
    review: '194.95209093400146',
  },
  {
    id: 'pe2A6LrYlDKG31iZiiuYr',
    name: 'Bluetooth FM Transmitter for Cars',
    price: 19.99,
    description: "Upgrade your car's audio with this Bluetooth FM transmitter.",
    specs: {
      Connection: 'Wireless (Bluetooth), FM Radio',
      Compatibility: 'Universal',
      'USB Ports': '2',
    },
    category: 'Cable',
    features: [
      {
        title: 'Hands-Free Calling',
        description: 'Take calls and stream music in your car.',
      },
      {
        title: 'Quick Charge',
        description: 'Charge your devices while on the road.',
      },
      {
        title: 'Large Display',
        description: 'Easy-to-read screen for FM tuning and call info.',
      },
    ],
    availability: 'In-stack',
    quantity: 145,
    rating: '1.1382219028809692',
    publicationDate: '1646464607',
    review: '590.4610036794862',
  },
  {
    id: 'zmnacQQ_kWxvTnTXGHf7d',
    name: 'Wireless Noise-Canceling Neckband Earphones',
    price: 119.99,
    description:
      'Enjoy peace and great sound with these wireless noise-canceling neckband earphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 15 hours',
      'Color Options': 'Black, Blue, Rose Gold',
      'Water Resistance': 'IPX5',
    },
    category: 'earPads',
    features: [
      {
        title: 'Active Noise Cancellation',
        description: 'Block out distractions for a premium audio experience.',
      },
      {
        title: 'Neckband Design',
        description: 'Conveniently wear them around your neck when not in use.',
      },
      {
        title: 'Quick Charge',
        description: 'Get hours of playback with a short charging time.',
      },
    ],
    availability: 'In-stack',
    quantity: 65,
    rating: '0.9586495546959939',
    publicationDate: '1608581333',
    review: '1782.0958286786572',
  },
  {
    id: 'ieykkjVjCL_G_ToQg8Xgf',
    name: 'Wireless Charging Stand with LED Desk Lamp',
    price: 49.99,
    description:
      'Charge your devices and illuminate your workspace with this wireless charging stand and desk lamp.',
    specs: {
      Compatibility: 'Qi-Enabled Devices',
      'Adjustable Brightness': '3 Levels',
      'Color Options': 'White, Black',
    },
    category: 'earPads',
    features: [
      {
        title: 'Multi-Functional',
        description: 'Combines wireless charging and lighting.',
      },
      {
        title: 'Flexible Neck',
        description: 'Adjust the lamp to your preferred angle.',
      },
      {
        title: 'LED Display',
        description: 'Shows charging status and time.',
      },
    ],
    availability: 'In-stack',
    quantity: 116,
    rating: '4.145380660714524',
    publicationDate: '1622108754',
    review: '511.83245923068085',
  },
  {
    id: '9mBeZVtqHoTVMDd09MD6Y',
    name: 'Bluetooth Sleep Mask with Built-in Headphones',
    price: 29.99,
    description:
      'Drift off to peaceful sleep with this Bluetooth sleep mask featuring built-in headphones.',
    specs: {
      Connection: 'Wireless (Bluetooth)',
      'Battery Life': 'Up to 10 hours',
      Material: 'Soft Fabric',
    },
    category: 'HeadBand',
    features: [
      {
        title: 'Comfortable Sleep Aid',
        description: 'Block out light and enjoy relaxing music or white noise.',
      },
      {
        title: 'Adjustable Strap',
        description: 'Fits most head sizes comfortably.',
      },
      {
        title: 'Washable Fabric',
        description: 'Easily remove and wash the mask.',
      },
    ],
    availability: 'In-stack',
    quantity: 196,
    rating: '1.4924353761291276',
    publicationDate: '1624688499',
    review: '503.6543143962398',
  },
  {
    id: 'HxI3tzJnPyTYJ9jggqWDX',
    name: 'High-Capacity Power Bank',
    price: 49.99,
    description:
      'Stay powered up on the go with this high-capacity power bank.',
    specs: {
      Capacity: '20,000mAh',
      'Charging Ports': '3 (USB-A), 1 (USB-C)',
    },
    category: 'Cable',
    features: [
      {
        title: 'Fast Charging',
        description: 'Charge multiple devices quickly.',
      },
      {
        title: 'LCD Display',
        description: 'Monitor remaining battery power.',
      },
      {
        title: 'Safe and Reliable',
        description:
          'Built-in protection against overcharging and overheating.',
      },
    ],
    availability: 'In-stack',
    quantity: 195,
    rating: '3.4298222050532754',
    publicationDate: '1630365520',
    review: '339.88637457977444',
  },
  {
    id: '-KYG4m6F_8_URXAgX_mZ-',
    name: 'Premium Over-Ear Headphones',
    price: 149.99,
    description:
      'Experience studio-quality sound with our premium over-ear headphones. Perfect for music enthusiasts.',
    specs: {
      'Driver Size': '50mm',
      'Frequency Response': '20Hz - 20kHz',
      Impedance: '32 Ohms',
      Connectivity: 'Wired',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Noise Cancellation',
        description:
          'Advanced noise-canceling technology for an immersive audio experience.',
      },
      {
        title: 'Comfortable Design',
        description:
          'Padded ear cups and adjustable headband for long-lasting comfort.',
      },
    ],
    availability: 'In-stack',
    quantity: 68,
    rating: '0.5758112062120546',
    publicationDate: '1606714575',
    review: '1389.8679042127276',
  },
  {
    id: 'yFoloeIkLoTuwoLVdmESu',
    name: 'Wireless Bluetooth Earbuds',
    price: 79.99,
    description:
      'Enjoy wireless freedom with our Bluetooth earbuds. Perfect for on-the-go music and calls.',
    specs: {
      'Battery Life': 'Up to 6 hours',
      'Bluetooth Version': '5.0',
      'Charging Case': 'Included',
    },
    category: 'earPads',
    features: [
      {
        title: 'True Wireless',
        description: 'No wires or cables for a tangle-free experience.',
      },
      {
        title: 'Built-in Mic',
        description: 'Make and receive calls with the integrated microphone.',
      },
    ],
    availability: 'In-stack',
    quantity: 57,
    rating: '4.059910586570571',
    publicationDate: '1616812483',
    review: '546.6876594792078',
  },
  {
    id: 'Tsk7sEjh9g14UTF8bs02r',
    name: 'Sports In-Ear Headphones',
    price: 39.99,
    description:
      'Designed for athletes, these in-ear headphones stay in place during workouts and deliver high-quality sound.',
    specs: {
      'Sweat Resistance': 'Yes',
      'Cable Length': '1.2 meters',
      Connector: '3.5mm',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Secure Fit',
        description:
          "Stay-put design ensures headphones won't fall out during exercise.",
      },
      {
        title: 'Sweatproof',
        description:
          'Resistant to sweat and moisture, making them perfect for workouts.',
      },
    ],
    availability: 'In-stack',
    quantity: 194,
    rating: '4.295608912302221',
    publicationDate: '1609123471',
    review: '1242.0332943308501',
  },
  {
    id: 'AeFmZ-kfzZDwNK2N98LCl',
    name: 'Noise-Canceling Wireless Headphones',
    price: 199.99,
    description:
      'Immerse yourself in your music without distractions. These wireless headphones offer top-tier noise cancellation.',
    specs: {
      'Noise Cancellation': 'Active Noise Canceling (ANC)',
      'Battery Life': 'Up to 20 hours',
      Connectivity: 'Bluetooth 5.0',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Top-tier Noise Cancellation',
        description:
          'Block out ambient noise for a truly immersive listening experience.',
      },
      {
        title: 'Long Battery Life',
        description:
          'Enjoy your music for hours on end with extended battery life.',
      },
    ],
    availability: 'In-stack',
    quantity: 16,
    rating: '2.741073088444239',
    publicationDate: '1603552808',
    review: '1123.642378495214',
  },
  {
    id: 'pjDJvwyDGM43WduPa9deB',
    name: 'Wireless Gaming Headset',
    price: 129.99,
    description:
      'Get a competitive edge with our wireless gaming headset, featuring high-quality audio and a comfortable fit.',
    specs: {
      Compatibility: 'PC, Xbox, PlayStation',
      'Battery Life': 'Up to 15 hours',
      'Surround Sound': 'Yes',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Immersive Gaming Audio',
        description:
          'Experience every detail of your game with immersive surround sound.',
      },
      {
        title: 'Wireless Freedom',
        description: 'No cords to hinder your gaming performance.',
      },
    ],
    availability: 'In-stack',
    quantity: 61,
    rating: '2.1235887154772373',
    publicationDate: '1634166378',
    review: '1517.384392312726',
  },
  {
    id: '6XH6KIusMgXHWMeqld3KM',
    name: 'Premium Bluetooth Speaker',
    price: 129.99,
    description:
      "Take your music anywhere with our premium Bluetooth speaker. It's small in size but big on sound.",
    specs: {
      'Battery Life': 'Up to 10 hours',
      'Bluetooth Range': '30 feet',
      Dimensions: '6 x 3 x 2 inches',
    },
    category: 'HeadBand',
    features: [
      {
        title: 'Compact and Portable',
        description: 'Easily carry it in your bag for music on the go.',
      },
      {
        title: 'High-Quality Sound',
        description: 'Crystal-clear audio in a small package.',
      },
    ],
    availability: 'In-stack',
    quantity: 162,
    rating: '2.4254074708003714',
    publicationDate: '1598125259',
    review: '1182.0003616666977',
  },
  {
    id: '8Vl-cshUAvrYIeMun0qxw',
    name: 'In-Ear Noise-Canceling Earphones',
    price: 89.99,
    description:
      'Block out the world with these in-ear noise-canceling earphones. Perfect for travel and commutes.',
    specs: {
      'Noise Cancellation': 'Active Noise Canceling (ANC)',
      'Battery Life': 'Up to 8 hours',
      Connector: '3.5mm',
    },
    category: 'earPads',
    features: [
      {
        title: 'Compact and Portable',
        description: 'Take them anywhere for peace and quiet on the go.',
      },
      {
        title: 'Long Battery Life',
        description: 'Enjoy extended listening without interruptions.',
      },
    ],
    availability: 'In-stack',
    quantity: 10,
    rating: '1.3638585984839235',
    publicationDate: '1660978307',
    review: '1366.62384634993',
  },
  {
    id: '_q3LVwhnSs4VM9TLl3bcG',
    name: 'Bluetooth Sport Earbuds',
    price: 59.99,
    description:
      "Stay motivated during workouts with these Bluetooth sport earbuds. They're sweatproof and comfortable.",
    specs: {
      'Sweat Resistance': 'Yes',
      'Battery Life': 'Up to 7 hours',
      'Bluetooth Version': '4.2',
    },
    category: 'earPads',
    features: [
      {
        title: 'Sweatproof Design',
        description: 'Resistant to sweat and moisture for intense workouts.',
      },
      {
        title: 'Secure Fit',
        description: 'Designed to stay in place during active pursuits.',
      },
    ],
    availability: 'In-stack',
    quantity: 179,
    rating: '1.0747319882794626',
    publicationDate: '1588776138',
    review: '2320.3015490175817',
  },
  {
    id: 'P6EzYL8ZYZEOk5wmtS5Zd',
    name: 'High-End Studio Headphones',
    price: 299.99,
    description:
      'For professional musicians and audiophiles, our high-end studio headphones deliver uncompromising sound quality.',
    specs: {
      'Driver Size': '40mm',
      'Frequency Response': '5Hz - 40kHz',
      Impedance: '64 Ohms',
      Connectivity: 'Wired',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Studio-Grade Sound',
        description:
          'Hear your music as it was intended with precise audio reproduction.',
      },
      {
        title: 'Comfortable for Long Sessions',
        description:
          'Padded ear cups and adjustable headband for extended listening sessions.',
      },
    ],
    availability: 'In-stack',
    quantity: 137,
    rating: '2.808336261734732',
    publicationDate: '1623462968',
    review: '2934.0111549656826',
  },
  {
    id: 'hGNuLTQgiVUrqUeQ1c77t',
    name: 'Wireless Noise-Canceling Headphones',
    price: 179.99,
    description:
      'Experience premium wireless audio with active noise cancellation. Perfect for travel and relaxation.',
    specs: {
      'Noise Cancellation': 'Active Noise Canceling (ANC)',
      'Battery Life': 'Up to 25 hours',
      'Bluetooth Version': '5.0',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Wireless Freedom',
        description: 'No cords, no distractions, just pure sound.',
      },
      {
        title: 'Long-Lasting Battery',
        description: 'Enjoy hours of uninterrupted listening.',
      },
    ],
    availability: 'In-stack',
    quantity: 190,
    rating: '4.2324848093187875',
    publicationDate: '1602725246',
    review: '1646.3933486791072',
  },
  {
    id: 'O3SoybfmDz1io2MFPmK93',
    name: 'Premium Wireless In-Ear Monitors',
    price: 249.99,
    description:
      'Experience professional-grade audio with our wireless in-ear monitors, perfect for musicians and audio enthusiasts.',
    specs: {
      'Driver Type': 'Balanced Armature',
      'Frequency Response': '10Hz - 20kHz',
      'Wireless Technology': 'Bluetooth 5.0',
    },
    category: 'earPads',
    features: [
      {
        title: 'Studio-Quality Sound',
        description:
          'Hear every nuance of your music with high-fidelity audio.',
      },
      {
        title: 'Customizable Fit',
        description:
          'Comes with multiple ear tip options for a personalized fit.',
      },
    ],
    availability: 'In-stack',
    quantity: 34,
    rating: '1.4550781966917425',
    publicationDate: '1607541509',
    review: '270.9744754190779',
  },
  {
    id: 'j2gDBkR4hUqe2uX_i8m7l',
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    description:
      "Take your music anywhere with our portable Bluetooth speaker. It's compact, lightweight, and delivers impressive sound.",
    specs: {
      'Battery Life': 'Up to 12 hours',
      'Bluetooth Range': '33 feet',
      Dimensions: '4 x 4 x 6 inches',
    },
    category: 'HeadBand',
    features: [
      {
        title: 'Compact and Travel-Friendly',
        description: 'Easily fits in your bag for music on the move.',
      },
      {
        title: 'Rich Sound',
        description: 'Surprisingly powerful audio for its size.',
      },
    ],
    availability: 'In-stack',
    quantity: 175,
    rating: '2.9907987256627044',
    publicationDate: '1584858491',
    review: '1018.5661188183221',
  },
  {
    id: '_citTGkcGSwYHP7F355e-',
    name: 'Noise-Canceling On-Ear Headphones',
    price: 159.99,
    description:
      'Block out distractions with our noise-canceling on-ear headphones, perfect for work and travel.',
    specs: {
      'Noise Cancellation': 'Active Noise Canceling (ANC)',
      'Battery Life': 'Up to 20 hours',
      Connectivity: 'Bluetooth 4.2',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Superior Noise Cancellation',
        description: 'Enjoy peace and quiet wherever you go.',
      },
      {
        title: 'Foldable Design',
        description: 'Compact and easy to carry in the included case.',
      },
    ],
    availability: 'In-stack',
    quantity: 100,
    rating: '2.593446290320215',
    publicationDate: '1617985118',
    review: '888.6590329804434',
  },
  {
    id: 'qCbZpgwup573Wv4AKWi84',
    name: 'Waterproof Wireless Earbuds',
    price: 89.99,
    description:
      "Don't let rain or sweat stop your music. These waterproof wireless earbuds are perfect for outdoor activities.",
    specs: {
      'Waterproof Rating': 'IPX7',
      'Battery Life': 'Up to 8 hours',
      'Bluetooth Version': '5.1',
    },
    category: 'earPads',
    features: [
      {
        title: 'Waterproof and Sweatproof',
        description:
          'Designed to withstand water and sweat for worry-free use.',
      },
      {
        title: 'Secure Fit',
        description: 'Ergonomically designed to stay in place during workouts.',
      },
    ],
    availability: 'In-stack',
    quantity: 81,
    rating: '2.9430614236098798',
    publicationDate: '1623129402',
    review: '776.8623820677958',
  },
  {
    id: '6nWPQkiKV2dZPPDtsTHSe',
    name: 'Wireless Neckband Headphones',
    price: 69.99,
    description:
      'Enjoy the convenience of wireless audio with our neckband-style headphones. Great for on-the-go listening.',
    specs: {
      'Battery Life': 'Up to 10 hours',
      'Bluetooth Version': '4.1',
      'Neckband Design': 'Flexible and Lightweight',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Comfortable Neckband',
        description: 'Lightweight and flexible for all-day comfort.',
      },
      {
        title: 'Hands-Free Calling',
        description: 'Built-in microphone for taking calls on the go.',
      },
    ],
    availability: 'In-stack',
    quantity: 68,
    rating: '1.5681650264534708',
    publicationDate: '1579226709',
    review: '1457.5870587745767',
  },
  {
    id: 'xDZpVLLF0xNN46dv9BZCM',
    name: 'DJ Style Over-Ear Headphones',
    price: 129.99,
    description:
      'For DJs and music enthusiasts, these over-ear headphones offer powerful bass and excellent sound isolation.',
    specs: {
      'Driver Size': '50mm',
      'Frequency Response': '10Hz - 25kHz',
      'Foldable Design': 'Yes',
    },
    category: 'HeadPhone',
    features: [
      {
        title: 'Powerful Bass',
        description: 'Feel the beat with deep, thumping bass.',
      },
      {
        title: 'Swiveling Ear Cups',
        description: 'Easily monitor your audio and fold them for storage.',
      },
    ],
    availability: 'In-stack',
    quantity: 6,
    rating: '2.9948616829074295',
    publicationDate: '1592903118',
    review: '2167.316408073238',
  },
  {
    id: '5pP7XS6g3P_vEm8GJXI-T',
    name: 'Wireless Noise-Canceling Headphones',
    price: 199.99,
    description:
      'Experience premium sound quality with these wireless noise-canceling headphones. Perfect for immersive music or focused work.',
    specs: 'Bluetooth 5.0, Active Noise Cancellation, 20-hour battery life',
    category: 'HeadPhone',
    features: [
      {
        title: 'Active Noise Cancellation',
        description:
          'Blocks out ambient noise for a superior listening experience.',
      },
      {
        title: 'Long Battery Life',
        description: 'Enjoy up to 20 hours of playback on a single charge.',
      },
    ],
    availability: 'In-stack',
    quantity: 41,
    rating: '0.799603022542873',
    publicationDate: '1668455934',
    review: '786.5359595436155',
  },
  {
    id: 'RPNd2qYx-5jr36_XIer5J',
    name: 'True Wireless Earbuds with Charging Case',
    price: 79.99,
    description:
      'Enjoy the freedom of true wireless technology with these comfortable and stylish earbuds.',
    specs: 'Bluetooth 5.2, 5-hour battery life, IPX7 waterproof rating',
    category: 'earPads',
    features: [
      {
        title: 'Waterproof Design',
        description:
          'These earbuds can withstand heavy rain and sweat, making them ideal for workouts.',
      },
      {
        title: 'Secure Fit',
        description:
          'Ergonomically designed for a secure and comfortable fit during long listening sessions.',
      },
    ],
    availability: 'In-stack',
    quantity: 166,
    rating: '2.383237476898742',
    publicationDate: '1644001874',
    review: '1327.0549803551744',
  },
  {
    id: '_KGREgt3OdqHXItxTFJRQ',
    name: 'Gaming Earbuds with Mic',
    price: 49.99,
    description:
      'Immerse yourself in your gaming world with these high-quality gaming earbuds featuring a built-in microphone.',
    specs: '3.5mm audio jack, noise-canceling microphone, in-line controls',
    category: 'earPads',
    features: [
      {
        title: 'Crystal Clear Mic',
        description:
          'Coordinate with your team effectively using the noise-canceling microphone.',
      },
      {
        title: 'In-Line Controls',
        description:
          'Easily adjust volume and mute your mic without leaving the game.',
      },
    ],
    availability: 'In-stack',
    quantity: 67,
    rating: '4.653998618166937',
    publicationDate: '1611273684',
    review: '1109.789223921353',
  },
  {
    id: 'KN8XCkEPVTfqRedCNbm_P',
    name: 'Smart Wireless Headphones with Voice Assistant',
    price: 149.99,
    description:
      'Stay connected and entertained on the go with these smart wireless headphones featuring built-in voice assistant support.',
    specs: 'Bluetooth 5.1, Voice Assistant integration, touch controls',
    category: 'HeadPhone',
    features: [
      {
        title: 'Voice Assistant Integration',
        description:
          'Access your favorite voice assistant with a simple touch or voice command.',
      },
      {
        title: 'Touch Controls',
        description:
          'Easily control playback and calls with intuitive touch gestures.',
      },
    ],
    availability: 'In-stack',
    quantity: 107,
    rating: '1.62249798036737',
    publicationDate: '1631260377',
    review: '2639.4143100072138',
  },
  {
    id: 'yShoza_zVcfhlM5cBzhKG',
    name: 'Audiophile Over-Ear Headphones',
    price: 499.99,
    description:
      'For the discerning audiophile, these over-ear headphones deliver unparalleled sound quality and comfort.',
    specs: 'High-resolution audio support, premium materials, ergonomic design',
    category: 'HeadPhone',
    features: [
      {
        title: 'High-Resolution Audio',
        description:
          'Experience music in its purest form with support for high-resolution audio formats.',
      },
      {
        title: 'Luxurious Comfort',
        description:
          'Enjoy long listening sessions with plush, ergonomic ear cushions.',
      },
    ],
    availability: 'In-stack',
    quantity: 184,
    rating: '0.9996598911789778',
    publicationDate: '1606214868',
    review: '1109.5421134102114',
  },
  {
    id: 'F9GGnM7F3vZPAmNY23wCH',
    name: 'Bone Conduction Headphones for Active Lifestyles',
    price: 129.99,
    description:
      'Experience open-ear listening with these bone conduction headphones, ideal for outdoor activities.',
    specs:
      'Bone conduction technology, sweat-resistant design, 8-hour battery life',
    category: 'HeadPhone',
    features: [
      {
        title: 'Open-Ear Listening',
        description:
          'Hear your surroundings while enjoying your favorite music during workouts.',
      },
      {
        title: 'Sweat-Resistant',
        description:
          'Designed to withstand sweat and moisture during intense activities.',
      },
    ],
    availability: 'In-stack',
    quantity: 39,
    rating: '1.3502080798130367',
    publicationDate: '1622630314',
    review: '883.7593335237881',
  },
  {
    id: '-8MjO7npnx6j8XqWG1xpz',
    name: 'Communication Headset for Professionals',
    price: 89.99,
    description:
      'Stay connected and productive with this communication headset designed for professionals.',
    specs:
      'Noise-canceling microphone, adjustable headband, USB-A and 3.5mm connectivity',
    category: 'HeadBand',
    features: [
      {
        title: 'Crystal Clear Calls',
        description:
          'Ensure clear and uninterrupted communication with the noise-canceling microphone.',
      },
      {
        title: 'Versatile Connectivity',
        description:
          'Switch between USB and 3.5mm connections for maximum compatibility.',
      },
    ],
    availability: 'In-stack',
    quantity: 61,
    rating: '3.3362547365157793',
    publicationDate: '1645514523',
    review: '1330.4337153878741',
  },
  {
    id: 'IDRYZxNJBSM7SdukUvlFf',
    name: 'Sport and Fitness Earphones with Heart Rate Monitor',
    price: 69.99,
    description:
      'Track your workouts and listen to your favorite tunes with these sport and fitness earphones equipped with a heart rate monitor.',
    specs: 'Heart rate monitor, sweat-resistant, secure fit',
    category: 'HeadBand',
    features: [
      {
        title: 'Heart Rate Monitoring',
        description:
          'Monitor your heart rate during workouts for better fitness tracking.',
      },
      {
        title: 'Secure Fit',
        description:
          'Stay comfortable and focused on your workout with a secure earbud design.',
      },
    ],
    availability: 'In-stack',
    quantity: 108,
    rating: '2.2966087271459346',
    publicationDate: '1590435457',
    review: '2483.552386381449',
  },
  {
    id: 'x309-d4ZA7Xlp3aDIyHgz',
    name: 'Premium Gaming Headset with 7.1 Surround Sound',
    price: 149.99,
    description:
      'Elevate your gaming experience with this premium gaming headset featuring immersive 7.1 surround sound.',
    specs: '7.1 surround sound, noise-canceling microphone, RGB lighting',
    category: 'HeadBand',
    features: [
      {
        title: 'Immersive Audio',
        description:
          'Experience games like never before with 7.1 surround sound.',
      },
      {
        title: 'Customizable RGB Lighting',
        description:
          'Personalize your gaming setup with dynamic RGB lighting effects.',
      },
    ],
    availability: 'In-stack',
    quantity: 2,
    rating: '0.5975993678369029',
    publicationDate: '1599983667',
    review: '1155.5586602814542',
  },
  {
    id: '8dgGZnoGgOkvpmecxqjrY',
    name: 'Premium Wireless In-Ear Monitors',
    price: 249.99,
    description:
      'Experience high-quality sound monitoring with these premium wireless in-ear monitors for musicians and audio professionals.',
    specs: 'Dual-driver design, 20Hz-20kHz frequency response, Bluetooth 5.0',
    category: 'earPads',
    features: [
      {
        title: 'Dual-Driver Design',
        description:
          'Get accurate sound representation with dual drivers in each earpiece.',
      },
      {
        title: 'Wireless Convenience',
        description:
          'Enjoy freedom of movement with Bluetooth 5.0 connectivity.',
      },
    ],
    availability: 'In-stack',
    quantity: 68,
    rating: '4.6292702279357325',
    publicationDate: '1608016129',
    review: '1332.7540151590147',
  },
  {
    id: 'ISZTy_1XE7itatqRVz3ph',
    name: 'Sweatproof Sport Earbuds with Built-In MP3 Player',
    price: 89.99,
    description:
      'Stay motivated during workouts with these sweatproof sport earbuds featuring a built-in MP3 player for music on the go.',
    specs:
      'Built-in 8GB MP3 player, IPX6 sweatproof rating, 10-hour battery life',
    category: 'earPads',
    features: [
      {
        title: 'Built-In MP3 Player',
        description:
          'No need for an external device; store and play your music directly from the earbuds.',
      },
      {
        title: 'Sweatproof Design',
        description:
          'Designed to withstand intense workouts and heavy sweating.',
      },
    ],
    availability: 'In-stack',
    quantity: 158,
    rating: '3.8975463818982847',
    publicationDate: '1648763472',
    review: '1011.5832988458475',
  },
  {
    id: 'w9eX_9tKF80YprdktfVUm',
    name: 'Wireless Gaming Headset with Mic Monitoring',
    price: 129.99,
    description:
      'Gain a competitive edge with this wireless gaming headset featuring mic monitoring and crystal-clear audio.',
    specs: 'Wireless connectivity, mic monitoring, 15-hour battery life',
    category: 'HeadBand',
    features: [
      {
        title: 'Mic Monitoring',
        description:
          'Hear your own voice in real-time to avoid shouting during intense gaming sessions.',
      },
      {
        title: 'Long Battery Life',
        description:
          'Enjoy extended gaming sessions with up to 15 hours of battery life.',
      },
    ],
    availability: 'In-stack',
    quantity: 37,
    rating: '0.027424315079810357',
    publicationDate: '1621074913',
    review: '2660.8624243485838',
  },
  {
    id: 'Nve81jMUfmQWoBaXeG6Kt',
    name: 'Open-Back Audiophile Headphones',
    price: 399.99,
    description:
      'For audiophiles seeking an expansive soundstage, these open-back headphones deliver exceptional clarity and detail.',
    specs: 'Open-back design, high-fidelity drivers, detachable cable',
    category: 'HeadPhone',
    features: [
      {
        title: 'Expansive Soundstage',
        description:
          'Experience a wide and immersive soundstage for a lifelike listening experience.',
      },
      {
        title: 'Detachable Cable',
        description:
          'Easily replace or upgrade cables to suit your preferences.',
      },
    ],
    availability: 'In-stack',
    quantity: 86,
    rating: '3.3506430694510545',
    publicationDate: '1601077120',
    review: '1864.7242484608716',
  },
  {
    id: '9EdIHOMyAU5qowHgS_PRN',
    name: 'Bluetooth Bone Conduction Glasses',
    price: 199.99,
    description:
      'Combine fashion with audio technology with these Bluetooth bone conduction glasses that deliver sound through vibrations.',
    specs: 'Bluetooth 5.0, open-ear design, UV protection',
    category: 'HeadPhone',
    features: [
      {
        title: 'Fashion Meets Function',
        description:
          'Stay stylish while listening to music and taking calls with these smart glasses.',
      },
      {
        title: 'UV Protection',
        description:
          'Protect your eyes from harmful UV rays while enjoying your outdoor activities.',
      },
    ],
    availability: 'In-stack',
    quantity: 185,
    rating: '1.3730505709825347',
    publicationDate: '1656545204',
    review: '2641.288681035123',
  },
  {
    id: '3NuG484D8ZmKGI4agF_M9',
    name: 'Noise-Canceling Communication Headset',
    price: 109.99,
    description:
      'Maximize productivity in noisy environments with this noise-canceling communication headset for professionals.',
    specs:
      'Active noise cancellation, adjustable boom microphone, USB-C connectivity',
    category: 'HeadPhone',
    features: [
      {
        title: 'Active Noise Cancellation',
        description:
          'Block out distractions and focus on your calls with ANC technology.',
      },
      {
        title: 'Crystal Clear Calls',
        description:
          'Ensure clear communication with an adjustable boom microphone.',
      },
    ],
    availability: 'In-stack',
    quantity: 75,
    rating: '0.4476104735374675',
    publicationDate: '1582558212',
    review: '8.53785425866671',
  },
  {
    id: 'F7R_14A8LCDYsL9xoUdK4',
    name: 'Wireless Gaming Earbuds with Low Latency',
    price: 79.99,
    description:
      'Get a competitive edge in mobile gaming with these wireless gaming earbuds featuring low-latency audio.',
    specs:
      'Low-latency Bluetooth, dual-microphone design, 10-hour battery life',
    category: 'earPads',
    features: [
      {
        title: 'Low Latency Gaming',
        description:
          'Experience lag-free audio for seamless gaming performance.',
      },
      {
        title: 'Dual Microphone Design',
        description:
          'Coordinate with your team effectively with two microphones for noise cancellation.',
      },
    ],
    availability: 'In-stack',
    quantity: 138,
    rating: '0.5690179453648558',
    publicationDate: '1618567288',
    review: '1915.1143040579764',
  },
  {
    id: '7kANDXuF2LWzAi0EHCZ2e',
    name: 'Premium Over-Ear Headphones with Wood Finish',
    price: 299.99,
    description:
      'Elevate your audio experience with these premium over-ear headphones featuring a luxurious wood finish.',
    specs: 'High-fidelity drivers, genuine wood earcups, detachable cable',
    category: 'HeadPhone',
    features: [
      {
        title: 'Exquisite Wood Finish',
        description:
          'Enhance your style with genuine wood earcups that provide both beauty and acoustic benefits.',
      },
      {
        title: 'High-Fidelity Sound',
        description: 'Enjoy pristine audio quality with high-fidelity drivers.',
      },
    ],
    availability: 'In-stack',
    quantity: 76,
    rating: '4.114726791760623',
    publicationDate: '1667556210',
    review: '2165.4034123759398',
  },
  {
    id: 'u1CCcw28RjZ8xAwqD2thO',
    name: 'Wireless Smart Headphones with Health Monitoring',
    price: 179.99,
    description:
      'Stay connected and track your health with these wireless smart headphones featuring built-in health monitoring sensors.',
    specs: 'Health monitoring sensors, Bluetooth 5.1, touch controls',
    category: 'HeadPhone',
    features: [
      {
        title: 'Health Tracking',
        description:
          'Monitor your heart rate, steps, and more for a holistic view of your well-being.',
      },
      {
        title: 'Intuitive Touch Controls',
        description:
          'Easily control music playback and access health data with touch gestures.',
      },
    ],
    availability: 'In-stack',
    quantity: 101,
    rating: '3.494859106370888',
    publicationDate: '1579237311',
    review: '2589.100952518639',
  },
  {
    id: '81kMkBC9LMJtdLj4-45ua',
    name: 'Premium Wireless Gaming Headset with 3D Audio',
    price: 199.99,
    description:
      'Experience next-level gaming immersion with this premium wireless gaming headset featuring 3D audio technology.',
    specs:
      '3D audio support, noise-canceling microphone, customizable RGB lighting',
    category: 'HeadBand',
    features: [
      {
        title: '3D Audio Immersion',
        description:
          'Hear every detail with 3D audio for a truly immersive gaming experience.',
      },
      {
        title: 'Customizable RGB Lighting',
        description:
          'Personalize your gaming setup with dynamic RGB lighting effects.',
      },
    ],
    availability: 'In-stack',
    quantity: 2,
    rating: '1.0923372133933773',
    publicationDate: '1578781848',
    review: '1605.3483101246477',
  },
  {
    id: '7O0fs446GkyUfWhzCDzSM',
    name: 'Professional Studio Monitor Speakers',
    price: 799.99,
    description:
      'Achieve studio-quality sound with these professional studio monitor speakers, ideal for music producers and audio engineers.',
    specs:
      'Bi-amped design, 6.5-inch woofer, 1-inch tweeter, frequency response: 45Hz-20kHz',
    category: 'earPads',
    features: [
      {
        title: 'Precise Sound Reproduction',
        description:
          'Hear your audio as it was intended with these high-quality studio monitor speakers.',
      },
      {
        title: 'Bi-Amped Design',
        description:
          'Separate amplifiers for the woofer and tweeter deliver exceptional clarity and accuracy.',
      },
    ],
    availability: 'In-stack',
    quantity: 60,
    rating: '3.631564962359054',
    publicationDate: '1618813832',
    review: '2751.096653488389',
  },
  {
    id: 'XLq4fiY90Xnud4NZLWHCd',
    name: 'Wireless Noise-Canceling Earbuds',
    price: 149.99,
    description:
      'Enjoy peace and quiet on the go with these wireless noise-canceling earbuds, perfect for commuting or travel.',
    specs: 'Bluetooth 5.2, ANC technology, 15-hour battery life',
    category: 'HeadPhone',
    features: [
      {
        title: 'Advanced Noise Cancellation',
        description:
          'Block out distractions with advanced ANC technology for a serene listening experience.',
      },
      {
        title: 'Extended Battery Life',
        description:
          'Travel confidently with up to 15 hours of battery life on a single charge.',
      },
    ],
    availability: 'In-stack',
    quantity: 27,
    rating: '2.4179171058419726',
    publicationDate: '1592072531',
    review: '2489.8971364852973',
  },
  {
    id: '05ATEjrX_hqUf3kj9tFXV',
    name: 'Wireless Fitness Tracker Earbuds',
    price: 129.99,
    description:
      'Stay motivated during workouts with these wireless fitness tracker earbuds that monitor your heart rate and activity.',
    specs: 'Heart rate monitoring, step tracking, Bluetooth 5.1',
    category: 'earPads',
    features: [
      {
        title: 'Health and Fitness Tracking',
        description:
          'Track your heart rate, steps, and calories burned while listening to music.',
      },
      {
        title: 'Stay Connected',
        description:
          'Easily take calls and control music playback during your workouts.',
      },
    ],
    availability: 'In-stack',
    quantity: 67,
    rating: '3.745224486569294',
    publicationDate: '1603167181',
    review: '1849.4080611221987',
  },
  {
    id: 'wuQqRpvbvbB8W6Xhh-zDt',
    name: 'Professional Noise-Canceling Aviation Headset',
    price: 499.99,
    description:
      'Experience crystal-clear communication in noisy aviation environments with this professional noise-canceling aviation headset.',
    specs:
      'Active noise cancellation, noise-canceling microphone, comfortable ear cushions',
    category: 'HeadPhone',
    features: [
      {
        title: 'Aviation-Grade Noise Cancellation',
        description:
          'Ensure clear communication in the cockpit with advanced noise cancellation technology.',
      },
      {
        title: 'Comfortable Fit',
        description:
          'Stay comfortable during long flights with plush ear cushions and an adjustable headband.',
      },
    ],
    availability: 'In-stack',
    quantity: 188,
    rating: '2.16816088495848',
    publicationDate: '1646388060',
    review: '1345.6226125139717',
  },
  {
    id: 'mJitu4lNnoPx-THUZASdO',
    name: 'Hi-Res Audio In-Ear Monitors',
    price: 179.99,
    description:
      'Deliver studio-quality audio to your ears with these high-resolution audio in-ear monitors for audiophiles and musicians.',
    specs:
      'High-resolution audio support, detachable MMCX cable, 20Hz-40kHz frequency response',
    category: 'earPads',
    features: [
      {
        title: 'High-Resolution Audio',
        description:
          'Experience music with incredible detail and clarity thanks to high-resolution audio support.',
      },
      {
        title: 'Detachable Cable',
        description:
          'Easily replace or upgrade your cable for a customized listening experience.',
      },
    ],
    availability: 'In-stack',
    quantity: 179,
    rating: '3.456413488259855',
    publicationDate: '1628447831',
    review: '1792.3726942640822',
  },
  {
    id: '69p0A6p4yvc6kzz8FMesS',
    name: 'Premium On-Ear Headphones with ANC',
    price: 279.99,
    description:
      'Enjoy your music without distractions with these premium on-ear headphones featuring active noise cancellation.',
    specs: 'Active noise cancellation, premium materials, 30-hour battery life',
    category: 'HeadPhone',
    features: [
      {
        title: 'Immersive Sound',
        description:
          'Experience your music in stunning detail with active noise cancellation.',
      },
      {
        title: 'All-Day Battery Life',
        description:
          'Listen for extended periods with up to 30 hours of battery life.',
      },
    ],
    availability: 'In-stack',
    quantity: 3,
    rating: '4.300459075796111',
    publicationDate: '1633382729',
    review: '751.6745813854006',
  },
  {
    id: 'xIZsffDv7ajVgipdtfAsY',
    name: 'Wireless Bone Conduction Headband',
    price: 119.99,
    description:
      'Combine comfort and sound quality with this wireless bone conduction headband, perfect for relaxation and audio enjoyment.',
    specs: 'Bluetooth 5.0, bone conduction technology, washable fabric',
    category: 'HeadPhone',
    features: [
      {
        title: 'Comfortable Design',
        description:
          'Experience audio in comfort with this soft, washable fabric headband.',
      },
      {
        title: 'Bone Conduction Technology',
        description:
          'Enjoy music without covering your ears, allowing you to stay aware of your surroundings.',
      },
    ],
    availability: 'In-stack',
    quantity: 108,
    rating: '1.8876434834360512',
    publicationDate: '1602697430',
    review: '2347.8893669202293',
  },
  {
    id: 'm6_hiae6R_GWB9i4kKpyr',
    name: 'Smart Noise-Canceling Headphones with Gesture Control',
    price: 199.99,
    description:
      'Experience cutting-edge technology with these smart noise-canceling headphones featuring gesture control and AI-powered noise cancellation.',
    specs:
      'AI noise cancellation, touch gesture controls, voice assistant integration',
    category: 'HeadPhone',
    features: [
      {
        title: 'AI Noise Cancellation',
        description:
          'Adaptive noise cancellation adjusts to your environment for the best listening experience.',
      },
      {
        title: 'Gesture Controls',
        description:
          'Control playback, calls, and settings with intuitive touch gestures.',
      },
    ],
    availability: 'In-stack',
    quantity: 133,
    rating: '3.447199005459108',
    publicationDate: '1598024252',
    review: '2345.1518732771233',
  },
  {
    id: '87Eu5dN-wLaekdcJKr-Bv',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    description:
      'Experience crystal-clear sound with our premium wireless headphones.',
    specs: 'Bluetooth 5.0, 40mm drivers, 20-hour battery life',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. High-quality audio\n2. Comfortable fit\n3. Long-lasting battery',
    },
    availability: 'In-stack',
    quantity: 61,
    rating: '4.755206361892484',
    publicationDate: '1598233090',
    review: '1979.4384884254252',
  },
  {
    id: '8PnbQgKMCyC8GGoCWzb5u',
    name: 'Noise-Cancelling Headphones',
    price: 249.99,
    description:
      'Block out distractions and immerse yourself in your music with noise-cancelling headphones.',
    specs: 'Active noise cancellation, 50mm drivers, 30-hour battery life',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. Superior noise cancellation\n2. Premium build\n3. Extended battery life',
    },
    availability: 'In-stack',
    quantity: 134,
    rating: '3.3011975650686107',
    publicationDate: '1609768518',
    review: '2762.7279230359345',
  },
  {
    id: 'Tuk62WZYlMHB6q1NiGq3P',
    name: 'Sports Headband with Bluetooth',
    price: 29.99,
    description:
      'Stay motivated during workouts with our sports headband featuring integrated Bluetooth speakers.',
    specs: 'Bluetooth 4.2, moisture-wicking fabric, 8-hour battery life',
    category: 'HeadBand',
    features: {
      title: 'Key Features',
      description:
        '1. Sweat-resistant design\n2. Wire-free music\n3. Secure fit',
    },
    availability: 'In-stack',
    quantity: 159,
    rating: '2.4395873892646325',
    publicationDate: '1610557777',
    review: '1124.4795182905184',
  },
  {
    id: 'gHgtWiJO3P31HCVsAQWjy',
    name: 'Memory Foam Earpads',
    price: 19.99,
    description:
      'Upgrade your headphones with these plush memory foam earpads for added comfort.',
    specs: 'Compatible with most headphones, soft velour cover',
    category: 'earPads',
    features: {
      title: 'Key Features',
      description:
        '1. Enhanced comfort\n2. Easy installation\n3. Improved sound isolation',
    },
    availability: 'In-stack',
    quantity: 67,
    rating: '4.629414027724193',
    publicationDate: '1612491675',
    review: '1093.8901210120118',
  },
  {
    id: 'ZorIJJ3zcCRgJjIyCqHRt',
    name: 'Braided Audio Cable',
    price: 9.99,
    description:
      'Replace your worn-out headphone cable with this durable and tangle-free braided cable.',
    specs: '3.5mm audio jack, 1.2 meters length',
    category: 'Cable',
    features: {
      title: 'Key Features',
      description:
        '1. High-quality audio transmission\n2. Tangle-free design\n3. Universal compatibility',
    },
    availability: 'In-stack',
    quantity: 127,
    rating: '3.4113313798768177',
    publicationDate: '1632371956',
    review: '1923.7078715668276',
  },
  {
    id: 'cyYI_HHhJONKKrGepk7EZ',
    name: 'Wireless Over-Ear Headphones',
    price: 179.99,
    description:
      'Immerse yourself in music without the hassle of wires with our wireless over-ear headphones.',
    specs: 'Bluetooth 5.0, 45mm drivers, 25-hour battery life',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. Wireless convenience\n2. Premium sound quality\n3. All-day comfort',
    },
    availability: 'In-stack',
    quantity: 90,
    rating: '3.353578682369782',
    publicationDate: '1651787558',
    review: '1081.411736437649',
  },
  {
    id: 'dqmtVaoX0XrNrXJJME_Ak',
    name: 'Sweatproof Workout Headband',
    price: 19.99,
    description:
      'Stay focused during intense workouts with our sweatproof workout headband.',
    specs: 'Moisture-wicking fabric, secure fit',
    category: 'HeadBand',
    features: {
      title: 'Key Features',
      description:
        '1. Stay dry and comfortable\n2. Secure and adjustable fit\n3. Lightweight design',
    },
    availability: 'In-stack',
    quantity: 58,
    rating: '1.0970426017055857',
    publicationDate: '1609139609',
    review: '2794.6048409782175',
  },
  {
    id: 'YrTil8GfHVwG1SPOKW4B4',
    name: 'Replacement Ear Cushions',
    price: 14.99,
    description:
      'Give your headphones a new lease of life with these replacement ear cushions.',
    specs: 'Compatible with select models, soft leatherette material',
    category: 'earPads',
    features: {
      title: 'Key Features',
      description:
        '1. Restore comfort\n2. Easy to install\n3. Durable material',
    },
    availability: 'In-stack',
    quantity: 30,
    rating: '0.7573726315319518',
    publicationDate: '1614880497',
    review: '354.4712477210559',
  },
  {
    id: 'EN3dBsrNTGne3p6FYMtFj',
    name: 'Premium AUX Audio Cable',
    price: 7.99,
    description:
      'Connect your devices with this high-quality premium AUX audio cable for crisp sound.',
    specs: '3.5mm audio jack, 1.5 meters length',
    category: 'Cable',
    features: {
      title: 'Key Features',
      description:
        '1. Premium audio quality\n2. Long and durable\n3. Gold-plated connectors',
    },
    availability: 'In-stack',
    quantity: 188,
    rating: '1.5421951851445614',
    publicationDate: '1579990013',
    review: '78.04200663537553',
  },
  {
    id: 'fbd60q0r6GZ5IUo_u1WRU',
    name: 'On-Ear Foldable Headphones',
    price: 99.99,
    description:
      'Enjoy music on the go with these foldable on-ear headphones featuring a compact design.',
    specs: '40mm drivers, foldable design, 15-hour battery life',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. Portable and foldable\n2. Crisp audio\n3. Long-lasting battery',
    },
    availability: 'In-stack',
    quantity: 174,
    rating: '2.4184338714605644',
    publicationDate: '1657221404',
    review: '2256.2232776654464',
  },
  {
    id: 'yrl63-SnGWWE3F1kjUCxx',
    name: 'Wireless Gaming Headset',
    price: 129.99,
    description:
      'Experience immersive gaming audio with our wireless gaming headset.',
    specs: '2.4GHz wireless, 50mm drivers, 15-hour battery life',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. Low latency gaming\n2. Crystal-clear communication\n3. Comfortable for long gaming sessions',
    },
    availability: 'In-stack',
    quantity: 99,
    rating: '4.512728220637512',
    publicationDate: '1627703156',
    review: '2038.5006673705382',
  },
  {
    id: 'czyMrHK0IieFtG2rpXP5l',
    name: 'Bluetooth Sleep Headband',
    price: 39.99,
    description:
      'Enjoy your favorite soothing tunes as you drift off to sleep with our Bluetooth sleep headband.',
    specs: 'Bluetooth 5.0, ultra-thin speakers, machine-washable fabric',
    category: 'HeadBand',
    features: {
      title: 'Key Features',
      description:
        '1. Sleep-friendly design\n2. Easy to clean\n3. Wireless and comfortable',
    },
    availability: 'In-stack',
    quantity: 69,
    rating: '4.080677104040148',
    publicationDate: '1650471056',
    review: '850.0174861876009',
  },
  {
    id: 'wE9osMBHM8MrmZKRPWbg-',
    name: 'Memory Foam Ear Tips',
    price: 9.99,
    description:
      'Upgrade your in-ear headphones with memory foam ear tips for a secure and comfortable fit.',
    specs: 'Universal fit, memory foam material',
    category: 'earPads',
    features: {
      title: 'Key Features',
      description:
        '1. Enhanced in-ear comfort\n2. Noise isolation\n3. Easy to replace',
    },
    availability: 'In-stack',
    quantity: 158,
    rating: '2.28053666840509',
    publicationDate: '1618367146',
    review: '193.08865767344875',
  },
  {
    id: 'Qx9FKt1CaQBCpuJ5eUAoH',
    name: 'Braided USB-C Charging Cable',
    price: 12.99,
    description:
      'Charge your devices quickly and reliably with our braided USB-C charging cable.',
    specs: 'USB-C connector, 1.2 meters length',
    category: 'Cable',
    features: {
      title: 'Key Features',
      description: '1. Fast charging\n2. Tangle-resistant\n3. Durable build',
    },
    availability: 'In-stack',
    quantity: 57,
    rating: '1.078629670339336',
    publicationDate: '1601425352',
    review: '2484.8362691833286',
  },
  {
    id: 'G5Z00BPaaKuDCGbOMP_Dq',
    name: 'Studio Quality Over-Ear Headphones',
    price: 299.99,
    description:
      'Get studio-quality sound with our over-ear headphones designed for audiophiles.',
    specs: 'Hi-Res audio, 50mm drivers, detachable cable',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. High-fidelity audio\n2. Comfortable and durable\n3. Detachable and replaceable cables',
    },
    availability: 'In-stack',
    quantity: 192,
    rating: '2.2606923352213237',
    publicationDate: '1628655112',
    review: '198.72239620634556',
  },
  {
    id: 'q0PRV98XtqsxB83du-94s',
    name: 'Reflective Running Headband',
    price: 14.99,
    description:
      'Stay safe during nighttime runs with our reflective running headband.',
    specs: 'High-visibility reflective material, moisture-wicking',
    category: 'HeadBand',
    features: {
      title: 'Key Features',
      description: '1. Increased visibility\n2. Sweat-resistant\n3. Secure fit',
    },
    availability: 'In-stack',
    quantity: 158,
    rating: '3.878036729030039',
    publicationDate: '1641590018',
    review: '2103.6766599687985',
  },
  {
    id: 'fzWOq998YXv3prLennPCZ',
    name: 'Wireless Earbuds',
    price: 79.99,
    description:
      'Enjoy wireless freedom with our compact and stylish wireless earbuds.',
    specs: 'Bluetooth 5.0, 6-hour battery life, charging case included',
    category: 'earPads',
    features: {
      title: 'Key Features',
      description:
        '1. True wireless convenience\n2. Portable charging case\n3. Crisp audio',
    },
    availability: 'In-stack',
    quantity: 59,
    rating: '2.6886158093878043',
    publicationDate: '1601098424',
    review: '2865.5460902000023',
  },
  {
    id: 'fxqqxt-aHAbhSvpCfIWfi',
    name: 'HDMI 2.1 High-Speed Cable',
    price: 19.99,
    description:
      'Experience high-quality video and audio with our HDMI 2.1 high-speed cable.',
    specs: 'HDMI 2.1, 4K and 8K support, gold-plated connectors',
    category: 'Cable',
    features: {
      title: 'Key Features',
      description:
        '1. 4K and 8K resolution support\n2. High-speed data transfer\n3. Durable and corrosion-resistant',
    },
    availability: 'In-stack',
    quantity: 163,
    rating: '2.4353957761088783',
    publicationDate: '1615345817',
    review: '1069.3616588090574',
  },
  {
    id: 'Zt_NvPgDtrDKhTDYx5XJM',
    name: 'Wireless Neckband Headphones',
    price: 59.99,
    description:
      'Enjoy music on the go with our wireless neckband headphones featuring a comfortable design.',
    specs: 'Bluetooth 4.2, 12-hour battery life, neckband style',
    category: 'HeadPhone',
    features: {
      title: 'Key Features',
      description:
        '1. Comfortable neckband design\n2. Long-lasting battery\n3. Clear audio',
    },
    availability: 'In-stack',
    quantity: 191,
    rating: '0.18426935504856523',
    publicationDate: '1651382211',
    review: '2264.9870559433643',
  },
  {
    id: 'a8fPlz_o1SvT_6pSd35Xq',
    name: 'Universal Power Adapter',
    price: 29.99,
    description:
      'Power up your devices anywhere in the world with our universal power adapter.',
    specs: 'Compatible with multiple plug types, surge protection',
    category: 'Cable',
    features: {
      title: 'Key Features',
      description:
        '1. Worldwide compatibility\n2. Surge protection\n3. Compact and portable',
    },
    availability: 'In-stack',
    quantity: 53,
    rating: '1.0153436166407537',
    publicationDate: '1633014349',
    review: '373.89665144719044',
  },
];
/**
 *
 * @type {string[]}
 */
export const CountryCodeList = [
  'AF',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'BE',
  'BZ',
  'BJ',
  'BM',
  'BT',
  'BO',
  'BA',
  'BW',
  'BV',
  'BR',
  'IO',
  'VG',
  'BN',
  'BG',
  'BF',
  'BI',
  'KH',
  'CM',
  'CA',
  'CV',
  'BQ',
  'KY',
  'CF',
  'TD',
  'CL',
  'CN',
  'CX',
  'CC',
  'CO',
  'KM',
  'CK',
  'CR',
  'HR',
  'CU',
  'CW',
  'CY',
  'CZ',
  'CD',
  'DK',
  'DJ',
  'DM',
  'DO',
  'EC',
  'EG',
  'SV',
  'GQ',
  'ER',
  'EE',
  'SZ',
  'ET',
  'FK',
  'FO',
  'FJ',
  'FI',
  'FR',
  'GF',
  'PF',
  'TF',
  'GA',
  'GM',
  'GE',
  'DE',
  'GH',
  'GI',
  'GR',
  'GL',
  'GD',
  'GP',
  'GU',
  'GT',
  'GG',
  'GN',
  'GW',
  'GY',
  'HT',
  'HM',
  'HN',
  'HU',
  'IS',
  'IN',
  'ID',
  'IR',
  'IQ',
  'IE',
  'IM',
  'IL',
  'IT',
  'CI',
  'JM',
  'JP',
  'JE',
  'JO',
  'KZ',
  'KE',
  'XK',
  'KW',
  'KG',
  'LA',
  'LV',
  'LB',
  'LS',
  'LR',
  'LY',
  'LI',
  'LT',
  'LU',
  'MO',
  'MK',
  'MG',
  'MW',
  'MY',
  'MV',
  'ML',
  'MT',
  'MH',
  'MQ',
  'MR',
  'MU',
  'YT',
  'MX',
  'FM',
  'MD',
  'MC',
  'MN',
  'ME',
  'MS',
  'MA',
  'MZ',
  'MM',
  'NA',
  'NR',
  'NP',
  'NL',
  'NC',
  'NZ',
  'NI',
  'NE',
  'NG',
  'NU',
  'NF',
  'KP',
  'MP',
  'NO',
  'OM',
  'PK',
  'PW',
  'PS',
  'PA',
  'PG',
  'PY',
  'PE',
  'PH',
  'PN',
  'PL',
  'PT',
  'PR',
  'QA',
  'CG',
  'RO',
  'RU',
  'RW',
  'RE',
  'BL',
  'SH',
  'KN',
  'LC',
  'MF',
  'PM',
  'VC',
  'WS',
  'SM',
  'SA',
  'SN',
  'RS',
  'SC',
  'SL',
  'SG',
  'SX',
  'SK',
  'SI',
  'SB',
  'SO',
  'ZA',
  'GS',
  'KR',
  'SS',
  'ES',
  'LK',
  'SD',
  'SR',
  'SJ',
  'SE',
  'CH',
  'SY',
  'ST',
  'TW',
  'TJ',
  'TZ',
  'TH',
  'TL',
  'TG',
  'TK',
  'TO',
  'TT',
  'TN',
  'TR',
  'TM',
  'TC',
  'TV',
  'UG',
  'UA',
  'AE',
  'GB',
  'US',
  'UM',
  'VI',
  'UY',
  'UZ',
  'VU',
  'VA',
  'VE',
  'VN',
  'WF',
  'EH',
  'YE',
  'ZM',
  'ZW',
  'KI',
  'HK',
  'AX',
];
/**
 *
 * @type {string[]}
 */
export const RegionList = [
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
];
/**
 *
 * @type {string[]}
 */
export const SubregionList = [
  'Southern Asia',
  'Southern Europe',
  'Northern Africa',
  'Polynesia',
  'Middle Africa',
  'Caribbean',
  'South America',
  'Western Asia',
  'Australia and New Zealand',
  'Western Europe',
  'Eastern Europe',
  'Central America',
  'Western Africa',
  'North America',
  'Southern Africa',
  'Eastern Africa',
  'South-Eastern Asia',
  'Eastern Asia',
  'Northern Europe',
  'Melanesia',
  'Micronesia',
  'Central Asia',
  'Central Europe',
];
export const TranslationLanguageCodeList = [
  'common',
  'cym',
  'deu',
  'fra',
  'hrv',
  'ita',
  'jpn',
  'nld',
  'por',
  'rus',
  'spa',
  'svk',
  'fin',
  'zho',
  'isr',
];
export const isCountryCode = str => {
  return CountryCodeList.some(code => code === str);
};

/**
 * @type {[{
 *   countryCode3: string,
 *   capital: string,
 *   subregion: string,
 *   name: string,
 *   region: string,
 *   countryCode2: string,
 *   states: [
 *     {subdivision: null, countryCode: string, name: string},
 *     {subdivision: null, countryCode: string, name: string},
 *     {subdivision: null, countryCode: string, name: string},
 *     {subdivision: null, countryCode: string, name: string},
 *     // Add more state objects here
 *   ]
 * },{
 *   countryCode3: string,
 *   capital: string,
 *   subregion: string,
 *   name: string,
 *   region: string,
 *   countryCode2: string,
 *   states: [] // Array of states can be empty
 * },{
 *   countryCode3: string,
 *   capital: string,
 *   subregion: string,
 *   name: string,
 *   region: string,
 *   countryCode2: string,
 *   states: [
 *     {subdivision: null, countryCode: string, name: string},
 *     // More state objects if needed
 *   ]
 * }]
 */

export const COUNTRIES = [
  {
    countryCode2: 'AF',
    countryCode3: 'AFG',
    name: 'Afghanistan',
    capital: 'Kabul',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: 'BDS',
        name: 'Badakhshān',
        subdivision: null,
      },
      {
        countryCode: 'BGL',
        name: 'Baghlān',
        subdivision: null,
      },
      {
        countryCode: 'BAL',
        name: 'Balkh',
        subdivision: null,
      },
      {
        countryCode: 'BDG',
        name: 'Bādghīs',
        subdivision: null,
      },
      {
        countryCode: 'BAM',
        name: 'Bāmyān',
        subdivision: null,
      },
      {
        countryCode: 'DAY',
        name: 'Dāykundī',
        subdivision: null,
      },
      {
        countryCode: 'FRA',
        name: 'Farāh',
        subdivision: null,
      },
      {
        countryCode: 'FYB',
        name: 'Fāryāb',
        subdivision: null,
      },
      {
        countryCode: 'GHA',
        name: 'Ghaznī',
        subdivision: null,
      },
      {
        countryCode: 'GHO',
        name: 'Ghōr',
        subdivision: null,
      },
      {
        countryCode: 'HEL',
        name: 'Helmand',
        subdivision: null,
      },
      {
        countryCode: 'HER',
        name: 'Herāt',
        subdivision: null,
      },
      {
        countryCode: 'JOW',
        name: 'Jowzjān',
        subdivision: null,
      },
      {
        countryCode: 'KAN',
        name: 'Kandahār',
        subdivision: null,
      },
      {
        countryCode: 'KHO',
        name: 'Khōst',
        subdivision: null,
      },
      {
        countryCode: 'KNR',
        name: 'Kunar',
        subdivision: null,
      },
      {
        countryCode: 'KDZ',
        name: 'Kunduz',
        subdivision: null,
      },
      {
        countryCode: 'KAB',
        name: 'Kābul',
        subdivision: null,
      },
      {
        countryCode: 'KAP',
        name: 'Kāpīsā',
        subdivision: null,
      },
      {
        countryCode: 'LAG',
        name: 'Laghmān',
        subdivision: null,
      },
      {
        countryCode: 'LOG',
        name: 'Lōgar',
        subdivision: null,
      },
      {
        countryCode: 'NAN',
        name: 'Nangarhār',
        subdivision: null,
      },
      {
        countryCode: 'NIM',
        name: 'Nīmrōz',
        subdivision: null,
      },
      {
        countryCode: 'NUR',
        name: 'Nūristān',
        subdivision: null,
      },
      {
        countryCode: 'PIA',
        name: 'Paktiyā',
        subdivision: null,
      },
      {
        countryCode: 'PKA',
        name: 'Paktīkā',
        subdivision: null,
      },
      {
        countryCode: 'PAN',
        name: 'Panjshayr',
        subdivision: null,
      },
      {
        countryCode: 'PAR',
        name: 'Parwān',
        subdivision: null,
      },
      {
        countryCode: 'SAM',
        name: 'Samangān',
        subdivision: null,
      },
      {
        countryCode: 'SAR',
        name: 'Sar-e Pul',
        subdivision: null,
      },
      {
        countryCode: 'TAK',
        name: 'Takhār',
        subdivision: null,
      },
      {
        countryCode: 'URU',
        name: 'Uruzgān',
        subdivision: null,
      },
      {
        countryCode: 'WAR',
        name: 'Wardak',
        subdivision: null,
      },
      {
        countryCode: 'ZAB',
        name: 'Zābul',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AX',
    countryCode3: 'ALA',
    name: 'Åland Islands',
    capital: 'Mariehamn',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [],
  },
  {
    countryCode2: 'AL',
    countryCode3: 'ALB',
    name: 'Albania',
    capital: 'Tirana',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Berat',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Dibër',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Durrës',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Elbasan',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Fier',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Gjirokastër',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Korçë',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Kukës',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Lezhë',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Shkodër',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Tiranë',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Vlorë',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'DZ',
    countryCode3: 'DZA',
    name: 'Algeria',
    capital: 'Algiers',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [
      {
        countryCode: '01',
        name: 'Adrar',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Alger',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Annaba',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Aïn Defla',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Aïn Témouchent',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Batna',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Biskra',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Blida',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Bordj Bou Arréridj',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Bouira',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Boumerdès',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Béchar',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Béjaïa',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Chlef',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Constantine',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Djelfa',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'El Bayadh',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'El Oued',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'El Tarf',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Ghardaïa',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Guelma',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Illizi',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Jijel',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Khenchela',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Laghouat',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Mascara',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Mila',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Mostaganem',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Msila',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Médéa',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Naama',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Oran',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Ouargla',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Oum el Bouaghi',
        subdivision: null,
      },
      {
        countryCode: '48',
        name: 'Relizane',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Saïda',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Sidi Bel Abbès',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Skikda',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Souk Ahras',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Sétif',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Tamanghasset',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Tiaret',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'Tindouf',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Tipaza',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Tissemsilt',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Tizi Ouzou',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Tlemcen',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Tébessa',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AS',
    countryCode3: 'ASM',
    name: 'American Samoa',
    capital: 'Pago Pago',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'AD',
    countryCode3: 'AND',
    name: 'Andorra',
    capital: 'Andorra la Vella',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '07',
        name: 'Andorra la Vella',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Canillo',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Encamp',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Escaldes-Engordany',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'La Massana',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Ordino',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Sant Julià de Lòria',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AO',
    countryCode3: 'AGO',
    name: 'Angola',
    capital: 'Luanda',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'BGO',
        name: 'Bengo',
        subdivision: null,
      },
      {
        countryCode: 'BGU',
        name: 'Benguela',
        subdivision: null,
      },
      {
        countryCode: 'BIE',
        name: 'Bié',
        subdivision: null,
      },
      {
        countryCode: 'CAB',
        name: 'Cabinda',
        subdivision: null,
      },
      {
        countryCode: 'CNN',
        name: 'Cunene',
        subdivision: null,
      },
      {
        countryCode: 'HUA',
        name: 'Huambo',
        subdivision: null,
      },
      {
        countryCode: 'HUI',
        name: 'Huíla',
        subdivision: null,
      },
      {
        countryCode: 'CCU',
        name: 'Kuando Kubango',
        subdivision: null,
      },
      {
        countryCode: 'CNO',
        name: 'Kwanza Norte',
        subdivision: null,
      },
      {
        countryCode: 'CUS',
        name: 'Kwanza Sul',
        subdivision: null,
      },
      {
        countryCode: 'LUA',
        name: 'Luanda',
        subdivision: null,
      },
      {
        countryCode: 'LNO',
        name: 'Lunda Norte',
        subdivision: null,
      },
      {
        countryCode: 'LSU',
        name: 'Lunda Sul',
        subdivision: null,
      },
      {
        countryCode: 'MAL',
        name: 'Malange',
        subdivision: null,
      },
      {
        countryCode: 'MOX',
        name: 'Moxico',
        subdivision: null,
      },
      {
        countryCode: 'NAM',
        name: 'Namibe',
        subdivision: null,
      },
      {
        countryCode: 'UIG',
        name: 'Uíge',
        subdivision: null,
      },
      {
        countryCode: 'ZAI',
        name: 'Zaire',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AI',
    countryCode3: 'AIA',
    name: 'Anguilla',
    capital: 'The Valley',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'AQ',
    countryCode3: 'ATA',
    name: 'Antarctica',
    capital: '',
    region: 'Polar',
    subregion: '',
    states: [],
  },
  {
    countryCode2: 'AG',
    countryCode3: 'ATG',
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '10',
        name: 'Barbuda',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Redonda',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Saint George',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Saint John',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Saint Mary',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Saint Paul',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Saint Peter',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Saint Philip',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AR',
    countryCode3: 'ARG',
    name: 'Argentina',
    capital: 'Buenos Aires',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'B',
        name: 'Buenos Aires',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Catamarca',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: 'Chaco',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Chubut',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Ciudad Autónoma de Buenos Aires',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Corrientes',
        subdivision: null,
      },
      {
        countryCode: 'X',
        name: 'Córdoba',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Entre Ríos',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Formosa',
        subdivision: null,
      },
      {
        countryCode: 'Y',
        name: 'Jujuy',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'La Pampa',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'La Rioja',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Mendoza',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Misiones',
        subdivision: null,
      },
      {
        countryCode: 'Q',
        name: 'Neuquén',
        subdivision: null,
      },
      {
        countryCode: 'R',
        name: 'Río Negro',
        subdivision: null,
      },
      {
        countryCode: 'A',
        name: 'Salta',
        subdivision: null,
      },
      {
        countryCode: 'J',
        name: 'San Juan',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'San Luis',
        subdivision: null,
      },
      {
        countryCode: 'Z',
        name: 'Santa Cruz',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Santa Fe',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Santiago del Estero',
        subdivision: null,
      },
      {
        countryCode: 'V',
        name: 'Tierra del Fuego',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Tucumán',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AM',
    countryCode3: 'ARM',
    name: 'Armenia',
    capital: 'Yerevan',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AG',
        name: 'Aragac̣otn',
        subdivision: null,
      },
      {
        countryCode: 'AR',
        name: 'Ararat',
        subdivision: null,
      },
      {
        countryCode: 'AV',
        name: 'Armavir',
        subdivision: null,
      },
      {
        countryCode: 'ER',
        name: 'Erevan',
        subdivision: null,
      },
      {
        countryCode: 'GR',
        name: "Geġark'unik'",
        subdivision: null,
      },
      {
        countryCode: 'KT',
        name: "Kotayk'",
        subdivision: null,
      },
      {
        countryCode: 'LO',
        name: 'Loṙi',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: "Syunik'",
        subdivision: null,
      },
      {
        countryCode: 'TV',
        name: 'Tavuš',
        subdivision: null,
      },
      {
        countryCode: 'VD',
        name: 'Vayoć Jor',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Širak',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AW',
    countryCode3: 'ABW',
    name: 'Aruba',
    capital: 'Oranjestad',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'AU',
    countryCode3: 'AUS',
    name: 'Australia',
    capital: 'Canberra',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    states: [
      {
        countryCode: 'ACT',
        name: 'Australian Capital Territory',
        subdivision: null,
      },
      {
        countryCode: 'NSW',
        name: 'New South Wales',
        subdivision: null,
      },
      {
        countryCode: 'NT',
        name: 'Northern Territory',
        subdivision: null,
      },
      {
        countryCode: 'QLD',
        name: 'Queensland',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'South Australia',
        subdivision: null,
      },
      {
        countryCode: 'TAS',
        name: 'Tasmania',
        subdivision: null,
      },
      {
        countryCode: 'VIC',
        name: 'Victoria',
        subdivision: null,
      },
      {
        countryCode: 'WA',
        name: 'Western Australia',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AT',
    countryCode3: 'AUT',
    name: 'Austria',
    capital: 'Vienna',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'B',
        name: 'Burgenland',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Kärnten',
        subdivision: null,
      },
      {
        countryCode: 'NÖ',
        name: 'Niederösterreich',
        subdivision: null,
      },
      {
        countryCode: 'OÖ',
        name: 'Oberösterreich',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Salzburg',
        subdivision: null,
      },
      {
        countryCode: 'ST',
        name: 'Steiermark',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Tirol',
        subdivision: null,
      },
      {
        countryCode: 'V',
        name: 'Vorarlberg',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Wien',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AZ',
    countryCode3: 'AZE',
    name: 'Azerbaijan',
    capital: 'Baku',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'NX',
        name: 'Naxçıvan',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BS',
    countryCode3: 'BHS',
    name: 'The Bahamas',
    capital: 'Nassau',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: 'AK',
        name: 'Acklins',
        subdivision: null,
      },
      {
        countryCode: 'BY',
        name: 'Berry Islands',
        subdivision: null,
      },
      {
        countryCode: 'BI',
        name: 'Bimini',
        subdivision: null,
      },
      {
        countryCode: 'BP',
        name: 'Black Point',
        subdivision: null,
      },
      {
        countryCode: 'CI',
        name: 'Cat Island',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'Central Abaco',
        subdivision: null,
      },
      {
        countryCode: 'CS',
        name: 'Central Andros',
        subdivision: null,
      },
      {
        countryCode: 'CE',
        name: 'Central Eleuthera',
        subdivision: null,
      },
      {
        countryCode: 'FP',
        name: 'City of Freeport',
        subdivision: null,
      },
      {
        countryCode: 'CK',
        name: 'Crooked Island and Long Cay',
        subdivision: null,
      },
      {
        countryCode: 'EG',
        name: 'East Grand Bahama',
        subdivision: null,
      },
      {
        countryCode: 'EX',
        name: 'Exuma',
        subdivision: null,
      },
      {
        countryCode: 'GC',
        name: 'Grand Cay',
        subdivision: null,
      },
      {
        countryCode: 'HI',
        name: 'Harbour Island',
        subdivision: null,
      },
      {
        countryCode: 'HT',
        name: 'Hope Town',
        subdivision: null,
      },
      {
        countryCode: 'IN',
        name: 'Inagua',
        subdivision: null,
      },
      {
        countryCode: 'LI',
        name: 'Long Island',
        subdivision: null,
      },
      {
        countryCode: 'MC',
        name: 'Mangrove Cay',
        subdivision: null,
      },
      {
        countryCode: 'MG',
        name: 'Mayaguana',
        subdivision: null,
      },
      {
        countryCode: 'MI',
        name: 'Moores Island',
        subdivision: null,
      },
      {
        countryCode: 'NO',
        name: 'North Abaco',
        subdivision: null,
      },
      {
        countryCode: 'NS',
        name: 'North Andros',
        subdivision: null,
      },
      {
        countryCode: 'NE',
        name: 'North Eleuthera',
        subdivision: null,
      },
      {
        countryCode: 'RI',
        name: 'Ragged Island',
        subdivision: null,
      },
      {
        countryCode: 'RC',
        name: 'Rum Cay',
        subdivision: null,
      },
      {
        countryCode: 'SS',
        name: 'San Salvador',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'South Abaco',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'South Andros',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'South Eleuthera',
        subdivision: null,
      },
      {
        countryCode: 'SW',
        name: 'Spanish Wells',
        subdivision: null,
      },
      {
        countryCode: 'WG',
        name: 'West Grand Bahama',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BH',
    countryCode3: 'BHR',
    name: 'Bahrain',
    capital: 'Manama',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: '14',
        name: 'Al Janūbīyah',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Al Manāmah',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Al Muḩarraq',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Al Wusţá',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Ash Shamālīyah',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BD',
    countryCode3: 'BGD',
    name: 'Bangladesh',
    capital: 'Dhaka',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: 'A',
        name: 'Barisal',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Chittagong',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Dhaka',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Khulna',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Rajshahi',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Rangpur',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Sylhet',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BB',
    countryCode3: 'BRB',
    name: 'Barbados',
    capital: 'Bridgetown',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '01',
        name: 'Christ Church',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Saint Andrew',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Saint George',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Saint James',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Saint John',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Saint Joseph',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Saint Lucy',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Saint Michael',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Saint Peter',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Saint Philip',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Saint Thomas',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BY',
    countryCode3: 'BLR',
    name: 'Belarus',
    capital: 'Minsk',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'BR',
        name: "Brestskaya voblasts'",
        subdivision: null,
      },
      {
        countryCode: 'HO',
        name: "Homyel'skaya voblasts'",
        subdivision: null,
      },
      {
        countryCode: 'HM',
        name: 'Horad Minsk',
        subdivision: null,
      },
      {
        countryCode: 'HR',
        name: "Hrodzenskaya voblasts'",
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: "Mahilyowskaya voblasts'",
        subdivision: null,
      },
      {
        countryCode: 'MI',
        name: "Minskaya voblasts'",
        subdivision: null,
      },
      {
        countryCode: 'VI',
        name: "Vitsyebskaya voblasts'",
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BE',
    countryCode3: 'BEL',
    name: 'Belgium',
    capital: 'Brussels',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'BRU',
        name: 'Brussels Hoofdstedelijk Gewest',
        subdivision: null,
      },
      {
        countryCode: 'WAL',
        name: 'Région Wallonne',
        subdivision: null,
      },
      {
        countryCode: 'VLG',
        name: 'Vlaams Gewest',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BZ',
    countryCode3: 'BLZ',
    name: 'Belize',
    capital: 'Belmopan',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'BZ',
        name: 'Belize',
        subdivision: null,
      },
      {
        countryCode: 'CY',
        name: 'Cayo',
        subdivision: null,
      },
      {
        countryCode: 'CZL',
        name: 'Corozal',
        subdivision: null,
      },
      {
        countryCode: 'OW',
        name: 'Orange Walk',
        subdivision: null,
      },
      {
        countryCode: 'SC',
        name: 'Stann Creek',
        subdivision: null,
      },
      {
        countryCode: 'TOL',
        name: 'Toledo',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BJ',
    countryCode3: 'BEN',
    name: 'Benin',
    capital: 'Porto-Novo',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'AL',
        name: 'Alibori',
        subdivision: null,
      },
      {
        countryCode: 'AK',
        name: 'Atakora',
        subdivision: null,
      },
      {
        countryCode: 'AQ',
        name: 'Atlantique',
        subdivision: null,
      },
      {
        countryCode: 'BO',
        name: 'Borgou',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'Collines',
        subdivision: null,
      },
      {
        countryCode: 'DO',
        name: 'Donga',
        subdivision: null,
      },
      {
        countryCode: 'KO',
        name: 'Kouffo',
        subdivision: null,
      },
      {
        countryCode: 'LI',
        name: 'Littoral',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Mono',
        subdivision: null,
      },
      {
        countryCode: 'OU',
        name: 'Ouémé',
        subdivision: null,
      },
      {
        countryCode: 'PL',
        name: 'Plateau',
        subdivision: null,
      },
      {
        countryCode: 'ZO',
        name: 'Zou',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BM',
    countryCode3: 'BMU',
    name: 'Bermuda',
    capital: 'Hamilton',
    region: 'Americas',
    subregion: 'Northern America',
    states: [],
  },
  {
    countryCode2: 'BT',
    countryCode3: 'BTN',
    name: 'Bhutan',
    capital: 'Thimphu',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: '33',
        name: 'Bumthang',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Chhukha',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Dagana',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'Gasa',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Ha',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Lhuentse',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Monggar',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Paro',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Pemagatshel',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Punakha',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Samdrup Jongkha',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Samtse',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Sarpang',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Thimphu',
        subdivision: null,
      },
      {
        countryCode: 'TY',
        name: 'Trashi Yangtse',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Trashigang',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Trongsa',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Tsirang',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Wangdue Phodrang',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Zhemgang',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BO',
    countryCode3: 'BOL',
    name: 'Bolivia',
    capital: 'Sucre',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'H',
        name: 'Chuquisaca',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Cochabamba',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'El Beni',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'La Paz',
        subdivision: null,
      },
      {
        countryCode: 'O',
        name: 'Oruro',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Pando',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Potosí',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Santa Cruz',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Tarija',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BQ',
    countryCode3: 'BES',
    name: 'Bonaire',
    capital: 'Kralendijk',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'BA',
    countryCode3: 'BIH',
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: 'BRC',
        name: 'Brčko distrikt',
        subdivision: null,
      },
      {
        countryCode: 'BIH',
        name: 'Federacija Bosna i Hercegovina',
        subdivision: null,
      },
      {
        countryCode: 'SRP',
        name: 'Republika Srpska',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BW',
    countryCode3: 'BWA',
    name: 'Botswana',
    capital: 'Gaborone',
    region: 'Africa',
    subregion: 'Southern Africa',
    states: [
      {
        countryCode: 'CE',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'CH',
        name: 'Chobe',
        subdivision: null,
      },
      {
        countryCode: 'FR',
        name: 'Francistown',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'Gaborone',
        subdivision: null,
      },
      {
        countryCode: 'GH',
        name: 'Ghanzi',
        subdivision: null,
      },
      {
        countryCode: 'JW',
        name: 'Jwaneng',
        subdivision: null,
      },
      {
        countryCode: 'KG',
        name: 'Kgalagadi',
        subdivision: null,
      },
      {
        countryCode: 'KL',
        name: 'Kgatleng',
        subdivision: null,
      },
      {
        countryCode: 'KW',
        name: 'Kweneng',
        subdivision: null,
      },
      {
        countryCode: 'LO',
        name: 'Lobatse',
        subdivision: null,
      },
      {
        countryCode: 'NE',
        name: 'North-East',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'North-West',
        subdivision: null,
      },
      {
        countryCode: 'SP',
        name: 'Selibe Phikwe',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'South-East',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Southern',
        subdivision: null,
      },
      {
        countryCode: 'ST',
        name: 'Sowa Town',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BV',
    countryCode3: 'BVT',
    name: 'Bouvet Island',
    capital: '',
    region: '',
    subregion: '',
    states: [],
  },
  {
    countryCode2: 'BR',
    countryCode3: 'BRA',
    name: 'Brazil',
    capital: 'Brasília',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'AC',
        name: 'Acre',
        subdivision: null,
      },
      {
        countryCode: 'AL',
        name: 'Alagoas',
        subdivision: null,
      },
      {
        countryCode: 'AP',
        name: 'Amapá',
        subdivision: null,
      },
      {
        countryCode: 'AM',
        name: 'Amazonas',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Bahia',
        subdivision: null,
      },
      {
        countryCode: 'CE',
        name: 'Ceará',
        subdivision: null,
      },
      {
        countryCode: 'DF',
        name: 'Distrito Federal',
        subdivision: null,
      },
      {
        countryCode: 'ES',
        name: 'Espírito Santo',
        subdivision: null,
      },
      {
        countryCode: 'GO',
        name: 'Goiás',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Maranhão',
        subdivision: null,
      },
      {
        countryCode: 'MT',
        name: 'Mato Grosso',
        subdivision: null,
      },
      {
        countryCode: 'MS',
        name: 'Mato Grosso do Sul',
        subdivision: null,
      },
      {
        countryCode: 'MG',
        name: 'Minas Gerais',
        subdivision: null,
      },
      {
        countryCode: 'PR',
        name: 'Paraná',
        subdivision: null,
      },
      {
        countryCode: 'PB',
        name: 'Paraíba',
        subdivision: null,
      },
      {
        countryCode: 'PA',
        name: 'Pará',
        subdivision: null,
      },
      {
        countryCode: 'PE',
        name: 'Pernambuco',
        subdivision: null,
      },
      {
        countryCode: 'PI',
        name: 'Piauí',
        subdivision: null,
      },
      {
        countryCode: 'RN',
        name: 'Rio Grande do Norte',
        subdivision: null,
      },
      {
        countryCode: 'RS',
        name: 'Rio Grande do Sul',
        subdivision: null,
      },
      {
        countryCode: 'RJ',
        name: 'Rio de Janeiro',
        subdivision: null,
      },
      {
        countryCode: 'RO',
        name: 'Rondônia',
        subdivision: null,
      },
      {
        countryCode: 'RR',
        name: 'Roraima',
        subdivision: null,
      },
      {
        countryCode: 'SC',
        name: 'Santa Catarina',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'Sergipe',
        subdivision: null,
      },
      {
        countryCode: 'SP',
        name: 'São Paulo',
        subdivision: null,
      },
      {
        countryCode: 'TO',
        name: 'Tocantins',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IO',
    countryCode3: 'IOT',
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [],
  },
  {
    countryCode2: 'UM',
    countryCode3: 'UMI',
    name: 'United States Minor Outlying Islands',
    capital: '',
    region: 'Americas',
    subregion: 'Northern America',
    states: [
      {
        countryCode: '81',
        name: 'Baker Island',
        subdivision: null,
      },
      {
        countryCode: '84',
        name: 'Howland Island',
        subdivision: null,
      },
      {
        countryCode: '86',
        name: 'Jarvis Island',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Johnston Atoll',
        subdivision: null,
      },
      {
        countryCode: '89',
        name: 'Kingman Reef',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: 'Midway Islands',
        subdivision: null,
      },
      {
        countryCode: '76',
        name: 'Navassa Island',
        subdivision: null,
      },
      {
        countryCode: '95',
        name: 'Palmyra Atoll',
        subdivision: null,
      },
      {
        countryCode: '79',
        name: 'Wake Island',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'VG',
    countryCode3: 'VGB',
    name: 'Virgin Islands (British)',
    capital: 'Road Town',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'VI',
    countryCode3: 'VIR',
    name: 'Virgin Islands (U.S.)',
    capital: 'Charlotte Amalie',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'BN',
    countryCode3: 'BRN',
    name: 'Brunei',
    capital: 'Bandar Seri Begawan',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: 'BE',
        name: 'Belait',
        subdivision: null,
      },
      {
        countryCode: 'BM',
        name: 'Brunei-Muara',
        subdivision: null,
      },
      {
        countryCode: 'TE',
        name: 'Temburong',
        subdivision: null,
      },
      {
        countryCode: 'TU',
        name: 'Tutong',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BG',
    countryCode3: 'BGR',
    name: 'Bulgaria',
    capital: 'Sofia',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Blagoevgrad',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Burgas',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Dobrich',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Gabrovo',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Haskovo',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Kardzhali',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Kyustendil',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Lovech',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Montana',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Pazardzhik',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Pernik',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Pleven',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Plovdiv',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Razgrad',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Ruse',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Shumen',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Silistra',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Sliven',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Smolyan',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Sofia',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Sofia-Grad',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Stara Zagora',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Targovishte',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Varna',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Veliko Tarnovo',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Vidin',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Vratsa',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Yambol',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BF',
    countryCode3: 'BFA',
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: '01',
        name: 'Boucle du Mouhoun',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Cascades',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Centre',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Centre-Est',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Centre-Nord',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Centre-Ouest',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Centre-Sud',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Est',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Hauts-Bassins',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Nord',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Plateau-Central',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Sahel',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Sud-Ouest',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BI',
    countryCode3: 'BDI',
    name: 'Burundi',
    capital: 'Bujumbura',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'BB',
        name: 'Bubanza',
        subdivision: null,
      },
      {
        countryCode: 'BM',
        name: 'Bujumbura Mairie',
        subdivision: null,
      },
      {
        countryCode: 'BL',
        name: 'Bujumbura Rural',
        subdivision: null,
      },
      {
        countryCode: 'BR',
        name: 'Bururi',
        subdivision: null,
      },
      {
        countryCode: 'CA',
        name: 'Cankuzo',
        subdivision: null,
      },
      {
        countryCode: 'CI',
        name: 'Cibitoke',
        subdivision: null,
      },
      {
        countryCode: 'GI',
        name: 'Gitega',
        subdivision: null,
      },
      {
        countryCode: 'KR',
        name: 'Karuzi',
        subdivision: null,
      },
      {
        countryCode: 'KY',
        name: 'Kayanza',
        subdivision: null,
      },
      {
        countryCode: 'KI',
        name: 'Kirundo',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Makamba',
        subdivision: null,
      },
      {
        countryCode: 'MU',
        name: 'Muramvya',
        subdivision: null,
      },
      {
        countryCode: 'MY',
        name: 'Muyinga',
        subdivision: null,
      },
      {
        countryCode: 'MW',
        name: 'Mwaro',
        subdivision: null,
      },
      {
        countryCode: 'NG',
        name: 'Ngozi',
        subdivision: null,
      },
      {
        countryCode: 'RT',
        name: 'Rutana',
        subdivision: null,
      },
      {
        countryCode: 'RY',
        name: 'Ruyigi',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KH',
    countryCode3: 'KHM',
    name: 'Cambodia',
    capital: 'Phnom Penh',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '2',
        name: 'Baat Dambang',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Banteay Mean Chey',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Kampong Chaam',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Kampong Chhnang',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Kampong Spueu',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Kampong Thum',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Kampot',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Kandaal',
        subdivision: null,
      },
      {
        countryCode: '9',
        name: 'Kaoh Kong',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Kracheh',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Krong Kaeb',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Krong Pailin',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Krong Preah Sihanouk',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Mondol Kiri',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Otdar Mean Chey',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Phnom Penh',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Pousaat',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Preah Vihear',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Prey Veaeng',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Rotanak Kiri',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Siem Reab',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Stueng Traeng',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Svaay Rieng',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Taakaev',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CM',
    countryCode3: 'CMR',
    name: 'Cameroon',
    capital: 'Yaoundé',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'AD',
        name: 'Adamaoua',
        subdivision: null,
      },
      {
        countryCode: 'CE',
        name: 'Centre',
        subdivision: null,
      },
      {
        countryCode: 'ES',
        name: 'East',
        subdivision: null,
      },
      {
        countryCode: 'EN',
        name: 'Far North',
        subdivision: null,
      },
      {
        countryCode: 'LT',
        name: 'Littoral',
        subdivision: null,
      },
      {
        countryCode: 'NO',
        name: 'North',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'North-West',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'South',
        subdivision: null,
      },
      {
        countryCode: 'SW',
        name: 'South-West',
        subdivision: null,
      },
      {
        countryCode: 'OU',
        name: 'West',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CA',
    countryCode3: 'CAN',
    name: 'Canada',
    capital: 'Ottawa',
    region: 'Americas',
    subregion: 'Northern America',
    states: [
      {
        countryCode: 'AB',
        name: 'Alberta',
        subdivision: 'province',
      },
      {
        countryCode: 'BC',
        name: 'British Columbia',
        subdivision: 'province',
      },
      {
        countryCode: 'MB',
        name: 'Manitoba',
        subdivision: 'province',
      },
      {
        countryCode: 'NB',
        name: 'New Brunswick',
        subdivision: 'province',
      },
      {
        countryCode: 'NL',
        name: 'Newfoundland and Labrador',
        subdivision: 'province',
      },
      {
        countryCode: 'NS',
        name: 'Nova Scotia',
        subdivision: 'province',
      },
      {
        countryCode: 'ON',
        name: 'Ontario',
        subdivision: 'province',
      },
      {
        countryCode: 'PE',
        name: 'Prince Edward Island',
        subdivision: 'province',
      },
      {
        countryCode: 'QC',
        name: 'Quebec',
        subdivision: 'province',
      },
      {
        countryCode: 'SK',
        name: 'Saskatchewan',
        subdivision: 'province',
      },
      {
        countryCode: 'NT',
        name: 'Northwest Territories',
        subdivision: 'territory',
      },
      {
        countryCode: 'NU',
        name: 'Nunavut',
        subdivision: 'territory',
      },
      {
        countryCode: 'YT',
        name: 'Yukon',
        subdivision: 'territory',
      },
    ],
  },
  {
    countryCode2: 'CV',
    countryCode3: 'CPV',
    name: 'Cape Verde',
    capital: 'Praia',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'B',
        name: 'Ilhas de Barlavento',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Ilhas de Sotavento',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KY',
    countryCode3: 'CYM',
    name: 'Cayman Islands',
    capital: 'George Town',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'CF',
    countryCode3: 'CAF',
    name: 'Central African Republic',
    capital: 'Bangui',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'BB',
        name: 'Bamingui-Bangoran',
        subdivision: null,
      },
      {
        countryCode: 'BGF',
        name: 'Bangui',
        subdivision: null,
      },
      {
        countryCode: 'BK',
        name: 'Basse-Kotto',
        subdivision: null,
      },
      {
        countryCode: 'KB',
        name: 'Gribingui',
        subdivision: null,
      },
      {
        countryCode: 'HM',
        name: 'Haut-Mbomou',
        subdivision: null,
      },
      {
        countryCode: 'HK',
        name: 'Haute-Kotto',
        subdivision: null,
      },
      {
        countryCode: 'HS',
        name: 'Haute-Sangha / Mambéré-Kadéï',
        subdivision: null,
      },
      {
        countryCode: 'KG',
        name: 'Kémo-Gribingui',
        subdivision: null,
      },
      {
        countryCode: 'LB',
        name: 'Lobaye',
        subdivision: null,
      },
      {
        countryCode: 'MB',
        name: 'Mbomou',
        subdivision: null,
      },
      {
        countryCode: 'NM',
        name: 'Nana-Mambéré',
        subdivision: null,
      },
      {
        countryCode: 'MP',
        name: 'Ombella-Mpoko',
        subdivision: null,
      },
      {
        countryCode: 'UK',
        name: 'Ouaka',
        subdivision: null,
      },
      {
        countryCode: 'AC',
        name: 'Ouham',
        subdivision: null,
      },
      {
        countryCode: 'OP',
        name: 'Ouham-Pendé',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'Sangha',
        subdivision: null,
      },
      {
        countryCode: 'VK',
        name: 'Vakaga',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TD',
    countryCode3: 'TCD',
    name: 'Chad',
    capital: "N'Djamena",
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'BA',
        name: 'Al Baṭḩah',
        subdivision: null,
      },
      {
        countryCode: 'LC',
        name: 'Al Buḩayrah',
        subdivision: null,
      },
      {
        countryCode: 'BG',
        name: 'Baḩr al Ghazāl',
        subdivision: null,
      },
      {
        countryCode: 'BO',
        name: 'Būrkū',
        subdivision: null,
      },
      {
        countryCode: 'EN',
        name: 'Innīdī',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Kānim',
        subdivision: null,
      },
      {
        countryCode: 'LO',
        name: 'Lūqūn al Gharbī',
        subdivision: null,
      },
      {
        countryCode: 'LR',
        name: 'Lūqūn ash Sharqī',
        subdivision: null,
      },
      {
        countryCode: 'ND',
        name: 'Madīnat Injamīnā',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Māndūl',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Māyū Kībbī al Gharbī',
        subdivision: null,
      },
      {
        countryCode: 'ME',
        name: 'Māyū Kībbī ash Sharqī',
        subdivision: null,
      },
      {
        countryCode: 'GR',
        name: 'Qīrā',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Salāmāt',
        subdivision: null,
      },
      {
        countryCode: 'CB',
        name: 'Shārī Bāqirmī',
        subdivision: null,
      },
      {
        countryCode: 'MC',
        name: 'Shārī al Awsaṭ',
        subdivision: null,
      },
      {
        countryCode: 'SI',
        name: 'Sīlā',
        subdivision: null,
      },
      {
        countryCode: 'TI',
        name: 'Tibastī',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tānjilī',
        subdivision: null,
      },
      {
        countryCode: 'OD',
        name: 'Waddāy',
        subdivision: null,
      },
      {
        countryCode: 'WF',
        name: 'Wādī Fīrā',
        subdivision: null,
      },
      {
        countryCode: 'HL',
        name: 'Ḥajjar Lamīs',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CL',
    countryCode3: 'CHL',
    name: 'Chile',
    capital: 'Santiago',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'AI',
        name: 'Aisén del General Carlos Ibañez del Campo',
        subdivision: null,
      },
      {
        countryCode: 'AN',
        name: 'Antofagasta',
        subdivision: null,
      },
      {
        countryCode: 'AR',
        name: 'Araucanía',
        subdivision: null,
      },
      {
        countryCode: 'AP',
        name: 'Arica y Parinacota',
        subdivision: null,
      },
      {
        countryCode: 'AT',
        name: 'Atacama',
        subdivision: null,
      },
      {
        countryCode: 'BI',
        name: 'Bío-Bío',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'Coquimbo',
        subdivision: null,
      },
      {
        countryCode: 'LI',
        name: "Libertador General Bernardo O'Higgins",
        subdivision: null,
      },
      {
        countryCode: 'LL',
        name: 'Los Lagos',
        subdivision: null,
      },
      {
        countryCode: 'LR',
        name: 'Los Ríos',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Magallanes',
        subdivision: null,
      },
      {
        countryCode: 'ML',
        name: 'Maule',
        subdivision: null,
      },
      {
        countryCode: 'RM',
        name: 'Región Metropolitana de Santiago',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tarapacá',
        subdivision: null,
      },
      {
        countryCode: 'VS',
        name: 'Valparaíso',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CN',
    countryCode3: 'CHN',
    name: 'China',
    capital: 'Beijing',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [
      {
        countryCode: '45',
        name: 'Guangxi',
        subdivision: 'Autonomous region',
      },
      {
        countryCode: '15',
        name: 'Nei Mongol',
        subdivision: 'Autonomous region',
      },
      {
        countryCode: '64',
        name: 'Ningxia',
        subdivision: 'Autonomous region',
      },
      {
        countryCode: '65',
        name: 'Xinjiang',
        subdivision: 'Autonomous region',
      },
      {
        countryCode: '54',
        name: 'Xizang',
        subdivision: 'Autonomous region',
      },
      {
        countryCode: '11',
        name: 'Beijing',
        subdivision: 'Municipality',
      },
      {
        countryCode: '50',
        name: 'Chongqing',
        subdivision: 'Municipality',
      },
      {
        countryCode: '31',
        name: 'Shanghai',
        subdivision: 'Municipality',
      },
      {
        countryCode: '12',
        name: 'Tianjin',
        subdivision: 'Municipality',
      },
      {
        countryCode: '34',
        name: 'Anhui',
        subdivision: 'Province',
      },
      {
        countryCode: '35',
        name: 'Fujian',
        subdivision: 'Province',
      },
      {
        countryCode: '62',
        name: 'Gansu',
        subdivision: 'Province',
      },
      {
        countryCode: '44',
        name: 'Guangdong',
        subdivision: 'Province',
      },
      {
        countryCode: '52',
        name: 'Guizhou',
        subdivision: 'Province',
      },
      {
        countryCode: '46',
        name: 'Hainan',
        subdivision: 'Province',
      },
      {
        countryCode: '13',
        name: 'Hebei',
        subdivision: 'Province',
      },
      {
        countryCode: '23',
        name: 'Heilongjiang',
        subdivision: 'Province',
      },
      {
        countryCode: '41',
        name: 'Henan',
        subdivision: 'Province',
      },
      {
        countryCode: '42',
        name: 'Hubei',
        subdivision: 'Province',
      },
      {
        countryCode: '43',
        name: 'Hunan',
        subdivision: 'Province',
      },
      {
        countryCode: '32',
        name: 'Jiangsu',
        subdivision: 'Province',
      },
      {
        countryCode: '36',
        name: 'Jiangxi',
        subdivision: 'Province',
      },
      {
        countryCode: '22',
        name: 'Jilin',
        subdivision: 'Province',
      },
      {
        countryCode: '21',
        name: 'Liaoning',
        subdivision: 'Province',
      },
      {
        countryCode: '63',
        name: 'Qinghai',
        subdivision: 'Province',
      },
      {
        countryCode: '61',
        name: 'Shaanxi',
        subdivision: 'Province',
      },
      {
        countryCode: '37',
        name: 'Shandong',
        subdivision: 'Province',
      },
      {
        countryCode: '14',
        name: 'Shanxi',
        subdivision: 'Province',
      },
      {
        countryCode: '51',
        name: 'Sichuan',
        subdivision: 'Province',
      },
      {
        countryCode: '71',
        name: 'Taiwan',
        subdivision: 'Province',
      },
      {
        countryCode: '53',
        name: 'Yunnan',
        subdivision: 'Province',
      },
      {
        countryCode: '33',
        name: 'Zhejiang',
        subdivision: 'Province',
      },
      {
        countryCode: '91',
        name: 'Hong Kong',
        subdivision: 'Special administrative region',
      },
      {
        countryCode: '92',
        name: 'Macao',
        subdivision: 'Special administrative region',
      },
      {
        countryCode: '',
        name: 'Hong Kong Island',
        subdivision: 'Special administrative region',
      },
      {
        countryCode: 'KOWLOON',
        name: 'Kowloon',
        subdivision: 'Special administrative region',
      },
      {
        countryCode: 'NEW TERRITORIES',
        name: 'New Territories',
        subdivision: 'Special administrative region',
      },
    ],
  },
  {
    countryCode2: 'CX',
    countryCode3: 'CXR',
    name: 'Christmas Island',
    capital: 'Flying Fish Cove',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    states: [],
  },
  {
    countryCode2: 'CC',
    countryCode3: 'CCK',
    name: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    states: [],
  },
  {
    countryCode2: 'CO',
    countryCode3: 'COL',
    name: 'Colombia',
    capital: 'Bogotá',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'AMA',
        name: 'Amazonas',
        subdivision: null,
      },
      {
        countryCode: 'ANT',
        name: 'Antioquia',
        subdivision: null,
      },
      {
        countryCode: 'ARA',
        name: 'Arauca',
        subdivision: null,
      },
      {
        countryCode: 'ATL',
        name: 'Atlántico',
        subdivision: null,
      },
      {
        countryCode: 'BOL',
        name: 'Bolívar',
        subdivision: null,
      },
      {
        countryCode: 'BOY',
        name: 'Boyacá',
        subdivision: null,
      },
      {
        countryCode: 'CAL',
        name: 'Caldas',
        subdivision: null,
      },
      {
        countryCode: 'CAQ',
        name: 'Caquetá',
        subdivision: null,
      },
      {
        countryCode: 'CAS',
        name: 'Casanare',
        subdivision: null,
      },
      {
        countryCode: 'CAU',
        name: 'Cauca',
        subdivision: null,
      },
      {
        countryCode: 'CES',
        name: 'Cesar',
        subdivision: null,
      },
      {
        countryCode: 'CHO',
        name: 'Chocó',
        subdivision: null,
      },
      {
        countryCode: 'CUN',
        name: 'Cundinamarca',
        subdivision: null,
      },
      {
        countryCode: 'COR',
        name: 'Córdoba',
        subdivision: null,
      },
      {
        countryCode: 'DC',
        name: 'Distrito Capital de Bogotá',
        subdivision: null,
      },
      {
        countryCode: 'GUA',
        name: 'Guainía',
        subdivision: null,
      },
      {
        countryCode: 'GUV',
        name: 'Guaviare',
        subdivision: null,
      },
      {
        countryCode: 'HUI',
        name: 'Huila',
        subdivision: null,
      },
      {
        countryCode: 'LAG',
        name: 'La Guajira',
        subdivision: null,
      },
      {
        countryCode: 'MAG',
        name: 'Magdalena',
        subdivision: null,
      },
      {
        countryCode: 'MET',
        name: 'Meta',
        subdivision: null,
      },
      {
        countryCode: 'NAR',
        name: 'Nariño',
        subdivision: null,
      },
      {
        countryCode: 'NSA',
        name: 'Norte de Santander',
        subdivision: null,
      },
      {
        countryCode: 'PUT',
        name: 'Putumayo',
        subdivision: null,
      },
      {
        countryCode: 'QUI',
        name: 'Quindío',
        subdivision: null,
      },
      {
        countryCode: 'RIS',
        name: 'Risaralda',
        subdivision: null,
      },
      {
        countryCode: 'SAP',
        name: 'San Andrés, Providencia y Santa Catalina',
        subdivision: null,
      },
      {
        countryCode: 'SAN',
        name: 'Santander',
        subdivision: null,
      },
      {
        countryCode: 'SUC',
        name: 'Sucre',
        subdivision: null,
      },
      {
        countryCode: 'TOL',
        name: 'Tolima',
        subdivision: null,
      },
      {
        countryCode: 'VAC',
        name: 'Valle del Cauca',
        subdivision: null,
      },
      {
        countryCode: 'VAU',
        name: 'Vaupés',
        subdivision: null,
      },
      {
        countryCode: 'VID',
        name: 'Vichada',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KM',
    countryCode3: 'COM',
    name: 'Comoros',
    capital: 'Moroni',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'A',
        name: 'Anjouan',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Grande Comore',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Mohéli',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CG',
    countryCode3: 'COG',
    name: 'Republic of the Congo',
    capital: 'Brazzaville',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: '11',
        name: 'Bouenza',
        subdivision: null,
      },
      {
        countryCode: 'BZV',
        name: 'Brazzaville',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Cuvette',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Cuvette-Ouest',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Kouilou',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Likouala',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'Lékoumou',
        subdivision: null,
      },
      {
        countryCode: '9',
        name: 'Niari',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Plateaux',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Pointe-Noire',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Pool',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Sangha',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CD',
    countryCode3: 'COD',
    name: 'Democratic Republic of the Congo',
    capital: 'Kinshasa',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'BN',
        name: 'Bandundu',
        subdivision: null,
      },
      {
        countryCode: 'BC',
        name: 'Bas-Congo',
        subdivision: null,
      },
      {
        countryCode: 'KW',
        name: 'Kasai-Occidental',
        subdivision: null,
      },
      {
        countryCode: 'KE',
        name: 'Kasai-Oriental',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Katanga',
        subdivision: null,
      },
      {
        countryCode: 'KN',
        name: 'Kinshasa',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Maniema',
        subdivision: null,
      },
      {
        countryCode: 'NK',
        name: 'Nord-Kivu',
        subdivision: null,
      },
      {
        countryCode: 'OR',
        name: 'Orientale',
        subdivision: null,
      },
      {
        countryCode: 'SK',
        name: 'Sud-Kivu',
        subdivision: null,
      },
      {
        countryCode: 'EQ',
        name: 'Équateur',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CK',
    countryCode3: 'COK',
    name: 'Cook Islands',
    capital: 'Avarua',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'CR',
    countryCode3: 'CRI',
    name: 'Costa Rica',
    capital: 'San José',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'A',
        name: 'Alajuela',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Cartago',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Guanacaste',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: 'Heredia',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Limón',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Puntarenas',
        subdivision: null,
      },
      {
        countryCode: 'SJ',
        name: 'San José',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'HR',
    countryCode3: 'HRV',
    name: 'Croatia',
    capital: 'Zagreb',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '07',
        name: 'Bjelovarsko-bilogorska županija',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Brodsko-posavska županija',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Dubrovačko-neretvanska županija',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Grad Zagreb',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Istarska županija',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Karlovačka županija',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Koprivničko-križevačka županija',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Krapinsko-zagorska županija',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Ličko-senjska županija',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Međimurska županija',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Osječko-baranjska županija',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Požeško-slavonska županija',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Primorsko-goranska županija',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Sisačko-moslavačka županija',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Splitsko-dalmatinska županija',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Varaždinska županija',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Virovitičko-podravska županija',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Vukovarsko-srijemska županija',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Zadarska županija',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Zagrebačka županija',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Šibensko-kninska županija',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CU',
    countryCode3: 'CUB',
    name: 'Cuba',
    capital: 'Havana',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '15',
        name: 'Artemisa',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Camagüey',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Ciego de Ávila',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Cienfuegos',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Granma',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Guantánamo',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Holguín',
        subdivision: null,
      },
      {
        countryCode: '99',
        name: 'Isla de la Juventud',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'La Habana',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Las Tunas',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Matanzas',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Mayabeque',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Pinar del Río',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Sancti Spíritus',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Santiago de Cuba',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Villa Clara',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CW',
    countryCode3: 'CUW',
    name: 'Curaçao',
    capital: 'Willemstad',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'CY',
    countryCode3: 'CYP',
    name: 'Cyprus',
    capital: 'Nicosia',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '04',
        name: 'Ammochostos',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Keryneia',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Larnaka',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Lefkosia',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Lemesos',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Pafos',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CZ',
    countryCode3: 'CZE',
    name: 'Czech Republic',
    capital: 'Prague',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'JM',
        name: 'Jihomoravský kraj',
        subdivision: null,
      },
      {
        countryCode: 'JC',
        name: 'Jihočeský kraj',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Karlovarský kraj',
        subdivision: null,
      },
      {
        countryCode: 'KR',
        name: 'Královéhradecký kraj',
        subdivision: null,
      },
      {
        countryCode: 'LI',
        name: 'Liberecký kraj',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Moravskoslezský kraj',
        subdivision: null,
      },
      {
        countryCode: 'OL',
        name: 'Olomoucký kraj',
        subdivision: null,
      },
      {
        countryCode: 'PA',
        name: 'Pardubický kraj',
        subdivision: null,
      },
      {
        countryCode: 'PL',
        name: 'Plzeňský kraj',
        subdivision: null,
      },
      {
        countryCode: 'PR',
        name: 'Praha, hlavní město',
        subdivision: null,
      },
      {
        countryCode: 'ST',
        name: 'Středočeský kraj',
        subdivision: null,
      },
      {
        countryCode: 'VY',
        name: 'Vysočina',
        subdivision: null,
      },
      {
        countryCode: 'ZL',
        name: 'Zlínský kraj',
        subdivision: null,
      },
      {
        countryCode: 'US',
        name: 'Ústecký kraj',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'DK',
    countryCode3: 'DNK',
    name: 'Denmark',
    capital: 'Copenhagen',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: '84',
        name: 'Hovedstaden',
        subdivision: null,
      },
      {
        countryCode: '82',
        name: 'Midtjylland',
        subdivision: null,
      },
      {
        countryCode: '81',
        name: 'Nordjylland',
        subdivision: null,
      },
      {
        countryCode: '85',
        name: 'Sjælland',
        subdivision: null,
      },
      {
        countryCode: '83',
        name: 'Syddanmark',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'DJ',
    countryCode3: 'DJI',
    name: 'Djibouti',
    capital: 'Djibouti',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'AS',
        name: 'Ali Sabieh',
        subdivision: null,
      },
      {
        countryCode: 'AR',
        name: 'Arta',
        subdivision: null,
      },
      {
        countryCode: 'DI',
        name: 'Dikhil',
        subdivision: null,
      },
      {
        countryCode: 'DJ',
        name: 'Djibouti',
        subdivision: null,
      },
      {
        countryCode: 'OB',
        name: 'Obock',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tadjourah',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'DM',
    countryCode3: 'DMA',
    name: 'Dominica',
    capital: 'Roseau',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '02',
        name: 'Saint Andrew',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Saint David',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Saint George',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Saint John',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Saint Joseph',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Saint Luke',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Saint Mark',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Saint Patrick',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Saint Paul',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Saint Peter',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'DO',
    countryCode3: 'DOM',
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '33',
        name: 'Cibao Nordeste',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Cibao Noroeste',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Cibao Norte',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Cibao Sur',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'El Valle',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Enriquillo',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Higuamo',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Ozama',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Valdesia',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Yuma',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'EC',
    countryCode3: 'ECU',
    name: 'Ecuador',
    capital: 'Quito',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'A',
        name: 'Azuay',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Bolívar',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Carchi',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Cañar',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: 'Chimborazo',
        subdivision: null,
      },
      {
        countryCode: 'X',
        name: 'Cotopaxi',
        subdivision: null,
      },
      {
        countryCode: 'O',
        name: 'El Oro',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Esmeraldas',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Galápagos',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Guayas',
        subdivision: null,
      },
      {
        countryCode: 'I',
        name: 'Imbabura',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Loja',
        subdivision: null,
      },
      {
        countryCode: 'R',
        name: 'Los Ríos',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Manabí',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Morona-Santiago',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Napo',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Orellana',
        subdivision: null,
      },
      {
        countryCode: 'Y',
        name: 'Pastaza',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Pichincha',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'Santa Elena',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Santo Domingo de los Tsáchilas',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Sucumbíos',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Tungurahua',
        subdivision: null,
      },
      {
        countryCode: 'Z',
        name: 'Zamora-Chinchipe',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'EG',
    countryCode3: 'EGY',
    name: 'Egypt',
    capital: 'Cairo',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [
      {
        countryCode: 'DK',
        name: 'Ad Daqahlīyah',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Al Baḩr al Aḩmar',
        subdivision: null,
      },
      {
        countryCode: 'BH',
        name: 'Al Buḩayrah',
        subdivision: null,
      },
      {
        countryCode: 'FYM',
        name: 'Al Fayyūm',
        subdivision: null,
      },
      {
        countryCode: 'GH',
        name: 'Al Gharbīyah',
        subdivision: null,
      },
      {
        countryCode: 'ALX',
        name: 'Al Iskandarīyah',
        subdivision: null,
      },
      {
        countryCode: 'IS',
        name: 'Al Ismāٰīlīyah',
        subdivision: null,
      },
      {
        countryCode: 'GZ',
        name: 'Al Jīzah',
        subdivision: null,
      },
      {
        countryCode: 'MN',
        name: 'Al Minyā',
        subdivision: null,
      },
      {
        countryCode: 'MNF',
        name: 'Al Minūfīyah',
        subdivision: null,
      },
      {
        countryCode: 'KB',
        name: 'Al Qalyūbīyah',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Al Qāhirah',
        subdivision: null,
      },
      {
        countryCode: 'LX',
        name: 'Al Uqşur',
        subdivision: null,
      },
      {
        countryCode: 'WAD',
        name: 'Al Wādī al Jadīd',
        subdivision: null,
      },
      {
        countryCode: 'SUZ',
        name: 'As Suways',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'As Sādis min Uktūbar',
        subdivision: null,
      },
      {
        countryCode: 'SHR',
        name: 'Ash Sharqīyah',
        subdivision: null,
      },
      {
        countryCode: 'ASN',
        name: 'Aswān',
        subdivision: null,
      },
      {
        countryCode: 'AST',
        name: 'Asyūţ',
        subdivision: null,
      },
      {
        countryCode: 'BNS',
        name: 'Banī Suwayf',
        subdivision: null,
      },
      {
        countryCode: 'PTS',
        name: 'Būr Saٰīd',
        subdivision: null,
      },
      {
        countryCode: 'DT',
        name: 'Dumyāţ',
        subdivision: null,
      },
      {
        countryCode: 'JS',
        name: "Janūb Sīnā'",
        subdivision: null,
      },
      {
        countryCode: 'KFS',
        name: 'Kafr ash Shaykh',
        subdivision: null,
      },
      {
        countryCode: 'MT',
        name: 'Maţrūḩ',
        subdivision: null,
      },
      {
        countryCode: 'KN',
        name: 'Qinā',
        subdivision: null,
      },
      {
        countryCode: 'SIN',
        name: "Shamāl Sīnā'",
        subdivision: null,
      },
      {
        countryCode: 'SHG',
        name: 'Sūhāj',
        subdivision: null,
      },
      {
        countryCode: 'HU',
        name: 'Ḩulwān',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SV',
    countryCode3: 'SLV',
    name: 'El Salvador',
    capital: 'San Salvador',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'AH',
        name: 'Ahuachapán',
        subdivision: null,
      },
      {
        countryCode: 'CA',
        name: 'Cabañas',
        subdivision: null,
      },
      {
        countryCode: 'CH',
        name: 'Chalatenango',
        subdivision: null,
      },
      {
        countryCode: 'CU',
        name: 'Cuscatlán',
        subdivision: null,
      },
      {
        countryCode: 'LI',
        name: 'La Libertad',
        subdivision: null,
      },
      {
        countryCode: 'PA',
        name: 'La Paz',
        subdivision: null,
      },
      {
        countryCode: 'UN',
        name: 'La Unión',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Morazán',
        subdivision: null,
      },
      {
        countryCode: 'SM',
        name: 'San Miguel',
        subdivision: null,
      },
      {
        countryCode: 'SS',
        name: 'San Salvador',
        subdivision: null,
      },
      {
        countryCode: 'SV',
        name: 'San Vicente',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Santa Ana',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Sonsonate',
        subdivision: null,
      },
      {
        countryCode: 'US',
        name: 'Usulután',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GQ',
    countryCode3: 'GNQ',
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'C',
        name: 'Región Continental',
        subdivision: null,
      },
      {
        countryCode: 'I',
        name: 'Región Insular',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ER',
    countryCode3: 'ERI',
    name: 'Eritrea',
    capital: 'Asmara',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'MA',
        name: 'Al Awsaţ',
        subdivision: null,
      },
      {
        countryCode: 'DU',
        name: 'Al Janūbĩ',
        subdivision: null,
      },
      {
        countryCode: 'AN',
        name: 'Ansabā',
        subdivision: null,
      },
      {
        countryCode: 'DK',
        name: 'Janūbī al Baḩrī al Aḩmar',
        subdivision: null,
      },
      {
        countryCode: 'GB',
        name: 'Qāsh-Barkah',
        subdivision: null,
      },
      {
        countryCode: 'SK',
        name: 'Shimālī al Baḩrī al Aḩmar',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'EE',
    countryCode3: 'EST',
    name: 'Estonia',
    capital: 'Tallinn',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: '37',
        name: 'Harjumaa',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Hiiumaa',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Ida-Virumaa',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'Järvamaa',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'Jõgevamaa',
        subdivision: null,
      },
      {
        countryCode: '59',
        name: 'Lääne-Virumaa',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Läänemaa',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Pärnumaa',
        subdivision: null,
      },
      {
        countryCode: '65',
        name: 'Põlvamaa',
        subdivision: null,
      },
      {
        countryCode: '70',
        name: 'Raplamaa',
        subdivision: null,
      },
      {
        countryCode: '74',
        name: 'Saaremaa',
        subdivision: null,
      },
      {
        countryCode: '78',
        name: 'Tartumaa',
        subdivision: null,
      },
      {
        countryCode: '82',
        name: 'Valgamaa',
        subdivision: null,
      },
      {
        countryCode: '84',
        name: 'Viljandimaa',
        subdivision: null,
      },
      {
        countryCode: '86',
        name: 'Võrumaa',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ET',
    countryCode3: 'ETH',
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'BE',
        name: 'Bīnshangul Gumuz',
        subdivision: null,
      },
      {
        countryCode: 'DD',
        name: 'Dirē Dawa',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'Gambēla Hizboch',
        subdivision: null,
      },
      {
        countryCode: 'HA',
        name: 'Hārerī Hizb',
        subdivision: null,
      },
      {
        countryCode: 'OR',
        name: 'Oromīya',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Sumalē',
        subdivision: null,
      },
      {
        countryCode: 'TI',
        name: 'Tigray',
        subdivision: null,
      },
      {
        countryCode: 'SN',
        name: 'YeDebub Bihēroch Bihēreseboch na Hizboch',
        subdivision: null,
      },
      {
        countryCode: 'AA',
        name: 'Ādīs Ābeba',
        subdivision: null,
      },
      {
        countryCode: 'AF',
        name: 'Āfar',
        subdivision: null,
      },
      {
        countryCode: 'AM',
        name: 'Āmara',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'FK',
    countryCode3: 'FLK',
    name: 'Falkland Islands',
    capital: 'Stanley',
    region: 'Americas',
    subregion: 'South America',
    states: [],
  },
  {
    countryCode2: 'FO',
    countryCode3: 'FRO',
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [],
  },
  {
    countryCode2: 'FJ',
    countryCode3: 'FJI',
    name: 'Fiji',
    capital: 'Suva',
    region: 'Oceania',
    subregion: 'Melanesia',
    states: [
      {
        countryCode: 'C',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Eastern',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Northern',
        subdivision: null,
      },
      {
        countryCode: 'R',
        name: 'Rotuma',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'FI',
    countryCode3: 'FIN',
    name: 'Finland',
    capital: 'Helsinki',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Ahvenanmaan maakunta',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Etelä-Karjala',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Etelä-Pohjanmaa',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Etelä-Savo',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Kainuu',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Kanta-Häme',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Keski-Pohjanmaa',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Keski-Suomi',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Kymenlaakso',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Lappi',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Pirkanmaa',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Pohjanmaa',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Pohjois-Karjala',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Pohjois-Pohjanmaa',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Pohjois-Savo',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Päijät-Häme',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Satakunta',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Uusimaa',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Varsinais-Suomi',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'FR',
    countryCode3: 'FRA',
    name: 'France',
    capital: 'Paris',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'A',
        name: 'Alsace',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'B',
        name: 'Aquitaine',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'C',
        name: 'Auvergne',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'E',
        name: 'Brittany',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'D',
        name: 'Burgundy',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'F',
        name: 'Centre-Val de Loire',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'G',
        name: 'Champagne-Ardenne',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'H',
        name: 'Corsica',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'I',
        name: 'Franche-Comté',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'K',
        name: 'Languedoc-Roussillon',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'L',
        name: 'Limousin',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'M',
        name: 'Lorraine',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'P',
        name: 'Lower Normandy',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'N',
        name: 'Midi-Pyrénées',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'O',
        name: 'Nord-Pas-de-Calais',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'R',
        name: 'Pays de la Loire',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'S',
        name: 'Picardy',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'T',
        name: 'Poitou-Charentes',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'U',
        name: "Provence-Alpes-Côte d'Azur",
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'V',
        name: 'Rhône-Alpes',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'Q',
        name: 'Upper Normandy',
        subdivision: 'Metropolitan region',
      },
      {
        countryCode: 'J',
        name: 'Île-de-France',
        subdivision: 'Metropolitan region',
      },
    ],
  },
  {
    countryCode2: 'GF',
    countryCode3: 'GUF',
    name: 'French Guiana',
    capital: 'Cayenne',
    region: 'Americas',
    subregion: 'South America',
    states: [],
  },
  {
    countryCode2: 'PF',
    countryCode3: 'PYF',
    name: 'French Polynesia',
    capital: 'Papeetē',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'TF',
    countryCode3: 'ATF',
    name: 'French Southern and Antarctic Lands',
    capital: 'Port-aux-Français',
    region: 'Africa',
    subregion: 'Southern Africa',
    states: [],
  },
  {
    countryCode2: 'GA',
    countryCode3: 'GAB',
    name: 'Gabon',
    capital: 'Libreville',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: '1',
        name: 'Estuaire',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'Haut-Ogooué',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Moyen-Ogooué',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Ngounié',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Nyanga',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Ogooué-Ivindo',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Ogooué-Lolo',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Ogooué-Maritime',
        subdivision: null,
      },
      {
        countryCode: '9',
        name: 'Woleu-Ntem',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GM',
    countryCode3: 'GMB',
    name: 'The Gambia',
    capital: 'Banjul',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'B',
        name: 'Banjul',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Central River',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Lower River',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'North Bank',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Upper River',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GE',
    countryCode3: 'GEO',
    name: 'Georgia',
    capital: 'Tbilisi',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AB',
        name: 'Abkhazia',
        subdivision: null,
      },
      {
        countryCode: 'AJ',
        name: 'Ajaria',
        subdivision: null,
      },
      {
        countryCode: 'GU',
        name: 'Guria',
        subdivision: null,
      },
      {
        countryCode: 'IM',
        name: 'Imereti',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: "K'akheti",
        subdivision: null,
      },
      {
        countryCode: 'KK',
        name: 'Kvemo Kartli',
        subdivision: null,
      },
      {
        countryCode: 'MM',
        name: 'Mtskheta-Mtianeti',
        subdivision: null,
      },
      {
        countryCode: 'RL',
        name: "Rach'a-Lechkhumi-Kvemo Svaneti",
        subdivision: null,
      },
      {
        countryCode: 'SZ',
        name: 'Samegrelo-Zemo Svaneti',
        subdivision: null,
      },
      {
        countryCode: 'SJ',
        name: 'Samtskhe-Javakheti',
        subdivision: null,
      },
      {
        countryCode: 'SK',
        name: 'Shida Kartli',
        subdivision: null,
      },
      {
        countryCode: 'TB',
        name: 'Tbilisi',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'DE',
    countryCode3: 'DEU',
    name: 'Germany',
    capital: 'Berlin',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'BW',
        name: 'Baden-Württemberg',
        subdivision: null,
      },
      {
        countryCode: 'BY',
        name: 'Bayern',
        subdivision: null,
      },
      {
        countryCode: 'BE',
        name: 'Berlin',
        subdivision: null,
      },
      {
        countryCode: 'BB',
        name: 'Brandenburg',
        subdivision: null,
      },
      {
        countryCode: 'HB',
        name: 'Bremen',
        subdivision: null,
      },
      {
        countryCode: 'HH',
        name: 'Hamburg',
        subdivision: null,
      },
      {
        countryCode: 'HE',
        name: 'Hessen',
        subdivision: null,
      },
      {
        countryCode: 'MV',
        name: 'Mecklenburg-Vorpommern',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Niedersachsen',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'Nordrhein-Westfalen',
        subdivision: null,
      },
      {
        countryCode: 'RP',
        name: 'Rheinland-Pfalz',
        subdivision: null,
      },
      {
        countryCode: 'SL',
        name: 'Saarland',
        subdivision: null,
      },
      {
        countryCode: 'SN',
        name: 'Sachsen',
        subdivision: null,
      },
      {
        countryCode: 'ST',
        name: 'Sachsen-Anhalt',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Schleswig-Holstein',
        subdivision: null,
      },
      {
        countryCode: 'TH',
        name: 'Thüringen',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GH',
    countryCode3: 'GHA',
    name: 'Ghana',
    capital: 'Accra',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'AH',
        name: 'Ashanti',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Brong-Ahafo',
        subdivision: null,
      },
      {
        countryCode: 'CP',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'EP',
        name: 'Eastern',
        subdivision: null,
      },
      {
        countryCode: 'AA',
        name: 'Greater Accra',
        subdivision: null,
      },
      {
        countryCode: 'NP',
        name: 'Northern',
        subdivision: null,
      },
      {
        countryCode: 'UE',
        name: 'Upper East',
        subdivision: null,
      },
      {
        countryCode: 'UW',
        name: 'Upper West',
        subdivision: null,
      },
      {
        countryCode: 'TV',
        name: 'Volta',
        subdivision: null,
      },
      {
        countryCode: 'WP',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GI',
    countryCode3: 'GIB',
    name: 'Gibraltar',
    capital: 'Gibraltar',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [],
  },
  {
    countryCode2: 'GR',
    countryCode3: 'GRC',
    name: 'Greece',
    capital: 'Athens',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: 'A',
        name: 'Anatoliki Makedonia kai Thraki',
        subdivision: null,
      },
      {
        countryCode: 'I',
        name: 'Attiki',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Dytiki Ellada',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Dytiki Makedonia',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Ionia Nisia',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Ipeiros',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Kentriki Makedonia',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Kriti',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Notio Aigaio',
        subdivision: null,
      },
      {
        countryCode: 'J',
        name: 'Peloponnisos',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: 'Sterea Ellada',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Thessalia',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Voreio Aigaio',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GL',
    countryCode3: 'GRL',
    name: 'Greenland',
    capital: 'Nuuk',
    region: 'Americas',
    subregion: 'Northern America',
    states: [
      {
        countryCode: 'KU',
        name: 'Kommune Kujalleq',
        subdivision: null,
      },
      {
        countryCode: 'SM',
        name: 'Kommuneqarfik Sermersooq',
        subdivision: null,
      },
      {
        countryCode: 'QA',
        name: 'Qaasuitsup Kommunia',
        subdivision: null,
      },
      {
        countryCode: 'QE',
        name: 'Qeqqata Kommunia',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GD',
    countryCode3: 'GRD',
    name: 'Grenada',
    capital: "St. George's",
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '01',
        name: 'Saint Andrew',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Saint David',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Saint George',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Saint John',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Saint Mark',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Saint Patrick',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Southern Grenadine Islands',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GP',
    countryCode3: 'GLP',
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'GU',
    countryCode3: 'GUM',
    name: 'Guam',
    capital: 'Hagåtña',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [],
  },
  {
    countryCode2: 'GT',
    countryCode3: 'GTM',
    name: 'Guatemala',
    capital: 'Guatemala City',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'AV',
        name: 'Alta Verapaz',
        subdivision: null,
      },
      {
        countryCode: 'BV',
        name: 'Baja Verapaz',
        subdivision: null,
      },
      {
        countryCode: 'CM',
        name: 'Chimaltenango',
        subdivision: null,
      },
      {
        countryCode: 'CQ',
        name: 'Chiquimula',
        subdivision: null,
      },
      {
        countryCode: 'PR',
        name: 'El Progreso',
        subdivision: null,
      },
      {
        countryCode: 'ES',
        name: 'Escuintla',
        subdivision: null,
      },
      {
        countryCode: 'GU',
        name: 'Guatemala',
        subdivision: null,
      },
      {
        countryCode: 'HU',
        name: 'Huehuetenango',
        subdivision: null,
      },
      {
        countryCode: 'IZ',
        name: 'Izabal',
        subdivision: null,
      },
      {
        countryCode: 'JA',
        name: 'Jalapa',
        subdivision: null,
      },
      {
        countryCode: 'JU',
        name: 'Jutiapa',
        subdivision: null,
      },
      {
        countryCode: 'PE',
        name: 'Petén',
        subdivision: null,
      },
      {
        countryCode: 'QZ',
        name: 'Quetzaltenango',
        subdivision: null,
      },
      {
        countryCode: 'QC',
        name: 'Quiché',
        subdivision: null,
      },
      {
        countryCode: 'RE',
        name: 'Retalhuleu',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Sacatepéquez',
        subdivision: null,
      },
      {
        countryCode: 'SM',
        name: 'San Marcos',
        subdivision: null,
      },
      {
        countryCode: 'SR',
        name: 'Santa Rosa',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Sololá',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'Suchitepéquez',
        subdivision: null,
      },
      {
        countryCode: 'TO',
        name: 'Totonicapán',
        subdivision: null,
      },
      {
        countryCode: 'ZA',
        name: 'Zacapa',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GG',
    countryCode3: 'GGY',
    name: 'Guernsey',
    capital: 'St. Peter Port',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [],
  },
  {
    countryCode2: 'GN',
    countryCode3: 'GIN',
    name: 'Guinea',
    capital: 'Conakry',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'B',
        name: 'Boké',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Conakry',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Faranah',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Kankan',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Kindia',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Labé',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Mamou',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Nzérékoré',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GW',
    countryCode3: 'GNB',
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'L',
        name: 'Leste',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Norte',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Sul',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GY',
    countryCode3: 'GUY',
    name: 'Guyana',
    capital: 'Georgetown',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'BA',
        name: 'Barima-Waini',
        subdivision: null,
      },
      {
        countryCode: 'CU',
        name: 'Cuyuni-Mazaruni',
        subdivision: null,
      },
      {
        countryCode: 'DE',
        name: 'Demerara-Mahaica',
        subdivision: null,
      },
      {
        countryCode: 'EB',
        name: 'East Berbice-Corentyne',
        subdivision: null,
      },
      {
        countryCode: 'ES',
        name: 'Essequibo Islands-West Demerara',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Mahaica-Berbice',
        subdivision: null,
      },
      {
        countryCode: 'PM',
        name: 'Pomeroon-Supenaam',
        subdivision: null,
      },
      {
        countryCode: 'PT',
        name: 'Potaro-Siparuni',
        subdivision: null,
      },
      {
        countryCode: 'UD',
        name: 'Upper Demerara-Berbice',
        subdivision: null,
      },
      {
        countryCode: 'UT',
        name: 'Upper Takutu-Upper Essequibo',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'HT',
    countryCode3: 'HTI',
    name: 'Haiti',
    capital: 'Port-au-Prince',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: 'AR',
        name: 'Artibonite',
        subdivision: null,
      },
      {
        countryCode: 'CE',
        name: 'Centre',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'Grande-Anse',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Nippes',
        subdivision: null,
      },
      {
        countryCode: 'ND',
        name: 'Nord',
        subdivision: null,
      },
      {
        countryCode: 'NE',
        name: 'Nord-Est',
        subdivision: null,
      },
      {
        countryCode: 'NO',
        name: 'Nord-Ouest',
        subdivision: null,
      },
      {
        countryCode: 'OU',
        name: 'Ouest',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Sud',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'Sud-Est',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'HM',
    countryCode3: 'HMD',
    name: 'Heard Island and McDonald Islands',
    capital: '',
    region: '',
    subregion: '',
    states: [],
  },
  {
    countryCode2: 'VA',
    countryCode3: 'VAT',
    name: 'Holy See',
    capital: 'Rome',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [],
  },
  {
    countryCode2: 'HN',
    countryCode3: 'HND',
    name: 'Honduras',
    capital: 'Tegucigalpa',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'AT',
        name: 'Atlántida',
        subdivision: null,
      },
      {
        countryCode: 'CH',
        name: 'Choluteca',
        subdivision: null,
      },
      {
        countryCode: 'CL',
        name: 'Colón',
        subdivision: null,
      },
      {
        countryCode: 'CM',
        name: 'Comayagua',
        subdivision: null,
      },
      {
        countryCode: 'CP',
        name: 'Copán',
        subdivision: null,
      },
      {
        countryCode: 'CR',
        name: 'Cortés',
        subdivision: null,
      },
      {
        countryCode: 'EP',
        name: 'El Paraíso',
        subdivision: null,
      },
      {
        countryCode: 'FM',
        name: 'Francisco Morazán',
        subdivision: null,
      },
      {
        countryCode: 'GD',
        name: 'Gracias a Dios',
        subdivision: null,
      },
      {
        countryCode: 'IN',
        name: 'Intibucá',
        subdivision: null,
      },
      {
        countryCode: 'IB',
        name: 'Islas de la Bahía',
        subdivision: null,
      },
      {
        countryCode: 'LP',
        name: 'La Paz',
        subdivision: null,
      },
      {
        countryCode: 'LE',
        name: 'Lempira',
        subdivision: null,
      },
      {
        countryCode: 'OC',
        name: 'Ocotepeque',
        subdivision: null,
      },
      {
        countryCode: 'OL',
        name: 'Olancho',
        subdivision: null,
      },
      {
        countryCode: 'SB',
        name: 'Santa Bárbara',
        subdivision: null,
      },
      {
        countryCode: 'VA',
        name: 'Valle',
        subdivision: null,
      },
      {
        countryCode: 'YO',
        name: 'Yoro',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'HK',
    countryCode3: 'HKG',
    name: 'Hong Kong',
    capital: 'City of Victoria',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [],
  },
  {
    countryCode2: 'HU',
    countryCode3: 'HUN',
    name: 'Hungary',
    capital: 'Budapest',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'BA',
        name: 'Baranya',
        subdivision: null,
      },
      {
        countryCode: 'BZ',
        name: 'Borsod-Abaúj-Zemplén',
        subdivision: null,
      },
      {
        countryCode: 'BU',
        name: 'Budapest',
        subdivision: null,
      },
      {
        countryCode: 'BK',
        name: 'Bács-Kiskun',
        subdivision: null,
      },
      {
        countryCode: 'BE',
        name: 'Békés',
        subdivision: null,
      },
      {
        countryCode: 'BC',
        name: 'Békéscsaba',
        subdivision: null,
      },
      {
        countryCode: 'CS',
        name: 'Csongrád',
        subdivision: null,
      },
      {
        countryCode: 'DE',
        name: 'Debrecen',
        subdivision: null,
      },
      {
        countryCode: 'DU',
        name: 'Dunaújváros',
        subdivision: null,
      },
      {
        countryCode: 'EG',
        name: 'Eger',
        subdivision: null,
      },
      {
        countryCode: 'FE',
        name: 'Fejér',
        subdivision: null,
      },
      {
        countryCode: 'GY',
        name: 'Győr',
        subdivision: null,
      },
      {
        countryCode: 'GS',
        name: 'Győr-Moson-Sopron',
        subdivision: null,
      },
      {
        countryCode: 'HB',
        name: 'Hajdú-Bihar',
        subdivision: null,
      },
      {
        countryCode: 'HE',
        name: 'Heves',
        subdivision: null,
      },
      {
        countryCode: 'HV',
        name: 'Hódmezővásárhely',
        subdivision: null,
      },
      {
        countryCode: 'JN',
        name: 'Jász-Nagykun-Szolnok',
        subdivision: null,
      },
      {
        countryCode: 'KV',
        name: 'Kaposvár',
        subdivision: null,
      },
      {
        countryCode: 'KM',
        name: 'Kecskemét',
        subdivision: null,
      },
      {
        countryCode: 'KE',
        name: 'Komárom-Esztergom',
        subdivision: null,
      },
      {
        countryCode: 'MI',
        name: 'Miskolc',
        subdivision: null,
      },
      {
        countryCode: 'NK',
        name: 'Nagykanizsa',
        subdivision: null,
      },
      {
        countryCode: 'NY',
        name: 'Nyíregyháza',
        subdivision: null,
      },
      {
        countryCode: 'NO',
        name: 'Nógrád',
        subdivision: null,
      },
      {
        countryCode: 'PE',
        name: 'Pest',
        subdivision: null,
      },
      {
        countryCode: 'PS',
        name: 'Pécs',
        subdivision: null,
      },
      {
        countryCode: 'ST',
        name: 'Salgótarján',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Somogy',
        subdivision: null,
      },
      {
        countryCode: 'SN',
        name: 'Sopron',
        subdivision: null,
      },
      {
        countryCode: 'SZ',
        name: 'Szabolcs-Szatmár-Bereg',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Szeged',
        subdivision: null,
      },
      {
        countryCode: 'SS',
        name: 'Szekszárd',
        subdivision: null,
      },
      {
        countryCode: 'SK',
        name: 'Szolnok',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Szombathely',
        subdivision: null,
      },
      {
        countryCode: 'SF',
        name: 'Székesfehérvár',
        subdivision: null,
      },
      {
        countryCode: 'TB',
        name: 'Tatabánya',
        subdivision: null,
      },
      {
        countryCode: 'TO',
        name: 'Tolna',
        subdivision: null,
      },
      {
        countryCode: 'VA',
        name: 'Vas',
        subdivision: null,
      },
      {
        countryCode: 'VE',
        name: 'Veszprém',
        subdivision: null,
      },
      {
        countryCode: 'VM',
        name: 'Veszprém',
        subdivision: null,
      },
      {
        countryCode: 'ZA',
        name: 'Zala',
        subdivision: null,
      },
      {
        countryCode: 'ZE',
        name: 'Zalaegerszeg',
        subdivision: null,
      },
      {
        countryCode: 'ER',
        name: 'Érd',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IS',
    countryCode3: 'ISL',
    name: 'Iceland',
    capital: 'Reykjavík',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: '7',
        name: 'Austurland',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Höfuðborgarsvæði utan Reykjavíkur',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Norðurland eystra',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Norðurland vestra',
        subdivision: null,
      },
      {
        countryCode: '0',
        name: 'Reykjavík',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Suðurland',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'Suðurnes',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Vestfirðir',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Vesturland',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IN',
    countryCode3: 'IND',
    name: 'India',
    capital: 'New Delhi',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: 'AN',
        name: 'Andaman and Nicobar Islands',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'CH',
        name: 'Chandigarh',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'DN',
        name: 'Dadra and Nagar Haveli',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'DD',
        name: 'Daman and Diu',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'DL',
        name: 'Delhi',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'LD',
        name: 'Lakshadweep',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'PY',
        name: 'Puducherry',
        subdivision: 'Union territory',
      },
      {
        countryCode: 'AP',
        name: 'Andhra Pradesh',
        subdivision: 'state',
      },
      {
        countryCode: 'AR',
        name: 'Arunachal Pradesh',
        subdivision: 'state',
      },
      {
        countryCode: 'AS',
        name: 'Assam',
        subdivision: 'state',
      },
      {
        countryCode: 'BR',
        name: 'Bihar',
        subdivision: 'state',
      },
      {
        countryCode: 'CT',
        name: 'Chhattisgarh',
        subdivision: 'state',
      },
      {
        countryCode: 'GA',
        name: 'Goa',
        subdivision: 'state',
      },
      {
        countryCode: 'GJ',
        name: 'Gujarat',
        subdivision: 'state',
      },
      {
        countryCode: 'HR',
        name: 'Haryana',
        subdivision: 'state',
      },
      {
        countryCode: 'HP',
        name: 'Himachal Pradesh',
        subdivision: 'state',
      },
      {
        countryCode: 'JK',
        name: 'Jammu and Kashmir',
        subdivision: 'state',
      },
      {
        countryCode: 'JH',
        name: 'Jharkhand',
        subdivision: 'state',
      },
      {
        countryCode: 'KA',
        name: 'Karnataka',
        subdivision: 'state',
      },
      {
        countryCode: 'KL',
        name: 'Kerala',
        subdivision: 'state',
      },
      {
        countryCode: 'MP',
        name: 'Madhya Pradesh',
        subdivision: 'state',
      },
      {
        countryCode: 'MH',
        name: 'Maharashtra',
        subdivision: 'state',
      },
      {
        countryCode: 'MN',
        name: 'Manipur',
        subdivision: 'state',
      },
      {
        countryCode: 'ML',
        name: 'Meghalaya',
        subdivision: 'state',
      },
      {
        countryCode: 'MZ',
        name: 'Mizoram',
        subdivision: 'state',
      },
      {
        countryCode: 'NL',
        name: 'Nagaland',
        subdivision: 'state',
      },
      {
        countryCode: 'OR',
        name: 'Odisha',
        subdivision: 'state',
      },
      {
        countryCode: 'PB',
        name: 'Punjab',
        subdivision: 'state',
      },
      {
        countryCode: 'RJ',
        name: 'Rajasthan',
        subdivision: 'state',
      },
      {
        countryCode: 'SK',
        name: 'Sikkim',
        subdivision: 'state',
      },
      {
        countryCode: 'TN',
        name: 'Tamil Nadu',
        subdivision: 'state',
      },
      {
        countryCode: 'TG',
        name: 'Telangana',
        subdivision: 'state',
      },
      {
        countryCode: 'TR',
        name: 'Tripura',
        subdivision: 'state',
      },
      {
        countryCode: 'UP',
        name: 'Uttar Pradesh',
        subdivision: 'state',
      },
      {
        countryCode: 'UT',
        name: 'Uttarakhand',
        subdivision: 'state',
      },
      {
        countryCode: 'WB',
        name: 'West Bengal',
        subdivision: 'state',
      },
    ],
  },
  {
    countryCode2: 'ID',
    countryCode3: 'IDN',
    name: 'Indonesia',
    capital: 'Jakarta',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: 'JW',
        name: 'Jawa',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Kalimantan',
        subdivision: null,
      },
      {
        countryCode: 'ML',
        name: 'Maluku',
        subdivision: null,
      },
      {
        countryCode: 'NU',
        name: 'Nusa Tenggara',
        subdivision: null,
      },
      {
        countryCode: 'PP',
        name: 'Papua',
        subdivision: null,
      },
      {
        countryCode: 'SL',
        name: 'Sulawesi',
        subdivision: null,
      },
      {
        countryCode: 'SM',
        name: 'Sumatera',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CI',
    countryCode3: 'CIV',
    name: 'Ivory Coast',
    capital: 'Yamoussoukro',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: '06',
        name: '18 Montagnes',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Agnébi',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Bafing',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Bas-Sassandra',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Denguélé',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Fromager',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Haut-Sassandra',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Lacs',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Lagunes',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Marahoué',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Moyen-Cavally',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Moyen-Comoé',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Nzi-Comoé',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Savanes',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Sud-Bandama',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Sud-Comoé',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Vallée du Bandama',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Worodougou',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Zanzan',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IR',
    countryCode3: 'IRN',
    name: 'Iran',
    capital: 'Tehran',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: '32',
        name: 'Alborz',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Ardabīl',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Būshehr',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Chahār Maḩāll va Bakhtīārī',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Eşfahān',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Fārs',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Golestān',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Gīlān',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Hamadān',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Hormozgān',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Kermān',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Kermānshāh',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Khorāsān-e Janūbī',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Khorāsān-e Razavī',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Khorāsān-e Shemālī',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Khūzestān',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Kohgīlūyeh va Būyer Aḩmad',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Kordestān',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Lorestān',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Markazī',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Māzandarān',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Qazvīn',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Qom',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Semnān',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Sīstān va Balūchestān',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Tehrān',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Yazd',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Zanjān',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Āz̄arbāyjān-e Gharbī',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Āz̄arbāyjān-e Sharqī',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Īlām',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IQ',
    countryCode3: 'IRQ',
    name: 'Iraq',
    capital: 'Baghdad',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AN',
        name: 'Al Anbār',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Al Başrah',
        subdivision: null,
      },
      {
        countryCode: 'MU',
        name: 'Al Muthanná',
        subdivision: null,
      },
      {
        countryCode: 'QA',
        name: 'Al Qādisīyah',
        subdivision: null,
      },
      {
        countryCode: 'NA',
        name: 'An Najaf',
        subdivision: null,
      },
      {
        countryCode: 'AR',
        name: 'Arbīl',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'As Sulaymānīyah',
        subdivision: null,
      },
      {
        countryCode: 'TS',
        name: "At Ta'mīm",
        subdivision: null,
      },
      {
        countryCode: 'BG',
        name: 'Baghdād',
        subdivision: null,
      },
      {
        countryCode: 'BB',
        name: 'Bābil',
        subdivision: null,
      },
      {
        countryCode: 'DA',
        name: 'Dahūk',
        subdivision: null,
      },
      {
        countryCode: 'DQ',
        name: 'Dhī Qār',
        subdivision: null,
      },
      {
        countryCode: 'DI',
        name: 'Diyālá',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: "Karbalā'",
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Maysān',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Nīnawá',
        subdivision: null,
      },
      {
        countryCode: 'WA',
        name: 'Wāsiţ',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Şalāḩ ad Dīn',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IE',
    countryCode3: 'IRL',
    name: 'Republic of Ireland',
    capital: 'Dublin',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: 'C',
        name: 'Connaught',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Leinster',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Munster',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Ulster',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IM',
    countryCode3: 'IMN',
    name: 'Isle of Man',
    capital: 'Douglas',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [],
  },
  {
    countryCode2: 'IL',
    countryCode3: 'ISR',
    name: 'Israel',
    capital: 'Jerusalem',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'D',
        name: 'HaDarom',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'HaMerkaz',
        subdivision: null,
      },
      {
        countryCode: 'Z',
        name: 'HaTsafon',
        subdivision: null,
      },
      {
        countryCode: 'HA',
        name: 'H̱efa',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tel-Aviv',
        subdivision: null,
      },
      {
        countryCode: 'JM',
        name: 'Yerushalayim',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'IT',
    countryCode3: 'ITA',
    name: 'Italy',
    capital: 'Rome',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '65',
        name: 'Abruzzo',
        subdivision: null,
      },
      {
        countryCode: '77',
        name: 'Basilicata',
        subdivision: null,
      },
      {
        countryCode: '78',
        name: 'Calabria',
        subdivision: null,
      },
      {
        countryCode: '72',
        name: 'Campania',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Emilia-Romagna',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Friuli-Venezia Giulia',
        subdivision: null,
      },
      {
        countryCode: '62',
        name: 'Lazio',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Liguria',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Lombardia',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Marche',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Molise',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Piemonte',
        subdivision: null,
      },
      {
        countryCode: '75',
        name: 'Puglia',
        subdivision: null,
      },
      {
        countryCode: '88',
        name: 'Sardegna',
        subdivision: null,
      },
      {
        countryCode: '82',
        name: 'Sicilia',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Toscana',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Trentino-Alto Adige',
        subdivision: null,
      },
      {
        countryCode: '55',
        name: 'Umbria',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: "Valle d'Aosta",
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Veneto',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'JM',
    countryCode3: 'JAM',
    name: 'Jamaica',
    capital: 'Kingston',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '13',
        name: 'Clarendon',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Hanover',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Kingston',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Manchester',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Portland',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Saint Andrew',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Saint Ann',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Saint Catherine',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Saint Elizabeth',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Saint James',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Saint Mary',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Saint Thomas',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Trelawny',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Westmoreland',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'JP',
    countryCode3: 'JPN',
    name: 'Japan',
    capital: 'Tokyo',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [
      {
        countryCode: '23',
        name: 'Aiti',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Akita',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Aomori',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Ehime',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Gihu',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Gunma',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Hirosima',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Hokkaidô',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Hukui',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Hukuoka',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Hukusima',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Hyôgo',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Ibaraki',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Isikawa',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Iwate',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'Kagawa',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Kagosima',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Kanagawa',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Kumamoto',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Kyôto',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Kôti',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Mie',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Miyagi',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Miyazaki',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Nagano',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Nagasaki',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Nara',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Niigata',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Okayama',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Okinawa',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Saga',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Saitama',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Siga',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Simane',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Sizuoka',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Tiba',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Tokusima',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Totigi',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Tottori',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Toyama',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Tôkyô',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Wakayama',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Yamagata',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Yamaguti',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Yamanasi',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Ôita',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Ôsaka',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'JE',
    countryCode3: 'JEY',
    name: 'Jersey',
    capital: 'Saint Helier',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [],
  },
  {
    countryCode2: 'JO',
    countryCode3: 'JOR',
    name: 'Jordan',
    capital: 'Amman',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'BA',
        name: "Al Balqā'",
        subdivision: null,
      },
      {
        countryCode: 'AQ',
        name: 'Al ʽAqabah',
        subdivision: null,
      },
      {
        countryCode: 'AZ',
        name: "Az Zarqā'",
        subdivision: null,
      },
      {
        countryCode: 'AT',
        name: 'Aţ Ţafīlah',
        subdivision: null,
      },
      {
        countryCode: 'IR',
        name: 'Irbid',
        subdivision: null,
      },
      {
        countryCode: 'JA',
        name: 'Jerash',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Karak',
        subdivision: null,
      },
      {
        countryCode: 'MN',
        name: "Ma'ān",
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Mafraq',
        subdivision: null,
      },
      {
        countryCode: 'MD',
        name: 'Mādabā',
        subdivision: null,
      },
      {
        countryCode: 'AJ',
        name: 'ʽAjlūn',
        subdivision: null,
      },
      {
        countryCode: 'AM',
        name: '‘Ammān',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KZ',
    countryCode3: 'KAZ',
    name: 'Kazakhstan',
    capital: 'Astana',
    region: 'Asia',
    subregion: 'Central Asia',
    states: [
      {
        countryCode: 'ALA',
        name: 'Almaty',
        subdivision: null,
      },
      {
        countryCode: 'ALM',
        name: 'Almaty oblysy',
        subdivision: null,
      },
      {
        countryCode: 'AKM',
        name: 'Aqmola oblysy',
        subdivision: null,
      },
      {
        countryCode: 'AKT',
        name: 'Aqtöbe oblysy',
        subdivision: null,
      },
      {
        countryCode: 'AST',
        name: 'Astana',
        subdivision: null,
      },
      {
        countryCode: 'ATY',
        name: 'Atyraū oblysy',
        subdivision: null,
      },
      {
        countryCode: 'ZAP',
        name: 'Batys Qazaqstan oblysy',
        subdivision: null,
      },
      {
        countryCode: 'MAN',
        name: 'Mangghystaū oblysy',
        subdivision: null,
      },
      {
        countryCode: 'YUZ',
        name: 'Ongtüstik Qazaqstan oblysy',
        subdivision: null,
      },
      {
        countryCode: 'PAV',
        name: 'Pavlodar oblysy',
        subdivision: null,
      },
      {
        countryCode: 'KAR',
        name: 'Qaraghandy oblysy',
        subdivision: null,
      },
      {
        countryCode: 'KUS',
        name: 'Qostanay oblysy',
        subdivision: null,
      },
      {
        countryCode: 'KZY',
        name: 'Qyzylorda oblysy',
        subdivision: null,
      },
      {
        countryCode: 'VOS',
        name: 'Shyghys Qazaqstan oblysy',
        subdivision: null,
      },
      {
        countryCode: 'SEV',
        name: 'Soltüstik Qazaqstan oblysy',
        subdivision: null,
      },
      {
        countryCode: 'ZHA',
        name: 'Zhambyl oblysy',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KE',
    countryCode3: 'KEN',
    name: 'Kenya',
    capital: 'Nairobi',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: '200',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: '300',
        name: 'Coast',
        subdivision: null,
      },
      {
        countryCode: '400',
        name: 'Eastern',
        subdivision: null,
      },
      {
        countryCode: '110',
        name: 'Nairobi',
        subdivision: null,
      },
      {
        countryCode: '500',
        name: 'North-Eastern',
        subdivision: null,
      },
      {
        countryCode: '600',
        name: 'Nyanza',
        subdivision: null,
      },
      {
        countryCode: '700',
        name: 'Rift Valley',
        subdivision: null,
      },
      {
        countryCode: '800',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KI',
    countryCode3: 'KIR',
    name: 'Kiribati',
    capital: 'South Tarawa',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [
      {
        countryCode: 'G',
        name: 'Gilbert Islands',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Line Islands',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Phoenix Islands',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KW',
    countryCode3: 'KWT',
    name: 'Kuwait',
    capital: 'Kuwait City',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AH',
        name: 'Al Aḩmadi',
        subdivision: null,
      },
      {
        countryCode: 'FA',
        name: 'Al Farwānīyah',
        subdivision: null,
      },
      {
        countryCode: 'JA',
        name: 'Al Jahrā',
        subdivision: null,
      },
      {
        countryCode: 'KU',
        name: 'Al Kuwayt',
        subdivision: null,
      },
      {
        countryCode: 'MU',
        name: 'Mubārak al Kabīr',
        subdivision: null,
      },
      {
        countryCode: 'HA',
        name: 'Ḩawallī',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KG',
    countryCode3: 'KGZ',
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    region: 'Asia',
    subregion: 'Central Asia',
    states: [
      {
        countryCode: 'B',
        name: 'Batken',
        subdivision: null,
      },
      {
        countryCode: 'GB',
        name: 'Bishkek',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Chü',
        subdivision: null,
      },
      {
        countryCode: 'J',
        name: 'Jalal-Abad',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Naryn',
        subdivision: null,
      },
      {
        countryCode: 'O',
        name: 'Osh',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Talas',
        subdivision: null,
      },
      {
        countryCode: 'Y',
        name: 'Ysyk-Köl',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LA',
    countryCode3: 'LAO',
    name: 'Laos',
    capital: 'Vientiane',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: 'AT',
        name: 'Attapu',
        subdivision: null,
      },
      {
        countryCode: 'BK',
        name: 'Bokèo',
        subdivision: null,
      },
      {
        countryCode: 'BL',
        name: 'Bolikhamxai',
        subdivision: null,
      },
      {
        countryCode: 'CH',
        name: 'Champasak',
        subdivision: null,
      },
      {
        countryCode: 'HO',
        name: 'Houaphan',
        subdivision: null,
      },
      {
        countryCode: 'KH',
        name: 'Khammouan',
        subdivision: null,
      },
      {
        countryCode: 'LM',
        name: 'Louang Namtha',
        subdivision: null,
      },
      {
        countryCode: 'LP',
        name: 'Louangphabang',
        subdivision: null,
      },
      {
        countryCode: 'OU',
        name: 'Oudômxai',
        subdivision: null,
      },
      {
        countryCode: 'PH',
        name: 'Phôngsali',
        subdivision: null,
      },
      {
        countryCode: 'SL',
        name: 'Salavan',
        subdivision: null,
      },
      {
        countryCode: 'SV',
        name: 'Savannakhét',
        subdivision: null,
      },
      {
        countryCode: 'VT',
        name: 'Vientiane',
        subdivision: null,
      },
      {
        countryCode: 'VI',
        name: 'Vientiane',
        subdivision: null,
      },
      {
        countryCode: 'XA',
        name: 'Xaignabouli',
        subdivision: null,
      },
      {
        countryCode: 'XN',
        name: 'Xaisômboun',
        subdivision: null,
      },
      {
        countryCode: 'XI',
        name: 'Xiangkhoang',
        subdivision: null,
      },
      {
        countryCode: 'XE',
        name: 'Xékong',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LV',
    countryCode3: 'LVA',
    name: 'Latvia',
    capital: 'Riga',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: '001',
        name: 'Aglonas novads',
        subdivision: null,
      },
      {
        countryCode: '002',
        name: 'Aizkraukles novads',
        subdivision: null,
      },
      {
        countryCode: '003',
        name: 'Aizputes novads',
        subdivision: null,
      },
      {
        countryCode: '004',
        name: 'Aknīstes novads',
        subdivision: null,
      },
      {
        countryCode: '005',
        name: 'Alojas novads',
        subdivision: null,
      },
      {
        countryCode: '006',
        name: 'Alsungas novads',
        subdivision: null,
      },
      {
        countryCode: '007',
        name: 'Alūksnes novads',
        subdivision: null,
      },
      {
        countryCode: '008',
        name: 'Amatas novads',
        subdivision: null,
      },
      {
        countryCode: '009',
        name: 'Apes novads',
        subdivision: null,
      },
      {
        countryCode: '010',
        name: 'Auces novads',
        subdivision: null,
      },
      {
        countryCode: '012',
        name: 'Babītes novads',
        subdivision: null,
      },
      {
        countryCode: '013',
        name: 'Baldones novads',
        subdivision: null,
      },
      {
        countryCode: '014',
        name: 'Baltinavas novads',
        subdivision: null,
      },
      {
        countryCode: '015',
        name: 'Balvu novads',
        subdivision: null,
      },
      {
        countryCode: '016',
        name: 'Bauskas novads',
        subdivision: null,
      },
      {
        countryCode: '017',
        name: 'Beverīnas novads',
        subdivision: null,
      },
      {
        countryCode: '018',
        name: 'Brocēnu novads',
        subdivision: null,
      },
      {
        countryCode: '019',
        name: 'Burtnieku novads',
        subdivision: null,
      },
      {
        countryCode: '020',
        name: 'Carnikavas novads',
        subdivision: null,
      },
      {
        countryCode: '021',
        name: 'Cesvaines novads',
        subdivision: null,
      },
      {
        countryCode: '023',
        name: 'Ciblas novads',
        subdivision: null,
      },
      {
        countryCode: '022',
        name: 'Cēsu novads',
        subdivision: null,
      },
      {
        countryCode: '024',
        name: 'Dagdas novads',
        subdivision: null,
      },
      {
        countryCode: 'DGV',
        name: 'Daugavpils',
        subdivision: null,
      },
      {
        countryCode: '025',
        name: 'Daugavpils novads',
        subdivision: null,
      },
      {
        countryCode: '026',
        name: 'Dobeles novads',
        subdivision: null,
      },
      {
        countryCode: '027',
        name: 'Dundagas novads',
        subdivision: null,
      },
      {
        countryCode: '028',
        name: 'Durbes novads',
        subdivision: null,
      },
      {
        countryCode: '029',
        name: 'Engures novads',
        subdivision: null,
      },
      {
        countryCode: '031',
        name: 'Garkalnes novads',
        subdivision: null,
      },
      {
        countryCode: '032',
        name: 'Grobiņas novads',
        subdivision: null,
      },
      {
        countryCode: '033',
        name: 'Gulbenes novads',
        subdivision: null,
      },
      {
        countryCode: '034',
        name: 'Iecavas novads',
        subdivision: null,
      },
      {
        countryCode: '035',
        name: 'Ikšķiles novads',
        subdivision: null,
      },
      {
        countryCode: '036',
        name: 'Ilūkstes novads',
        subdivision: null,
      },
      {
        countryCode: '037',
        name: 'Inčukalna novads',
        subdivision: null,
      },
      {
        countryCode: '038',
        name: 'Jaunjelgavas novads',
        subdivision: null,
      },
      {
        countryCode: '039',
        name: 'Jaunpiebalgas novads',
        subdivision: null,
      },
      {
        countryCode: '040',
        name: 'Jaunpils novads',
        subdivision: null,
      },
      {
        countryCode: 'JEL',
        name: 'Jelgava',
        subdivision: null,
      },
      {
        countryCode: '041',
        name: 'Jelgavas novads',
        subdivision: null,
      },
      {
        countryCode: 'JKB',
        name: 'Jēkabpils',
        subdivision: null,
      },
      {
        countryCode: '042',
        name: 'Jēkabpils novads',
        subdivision: null,
      },
      {
        countryCode: 'JUR',
        name: 'Jūrmala',
        subdivision: null,
      },
      {
        countryCode: '043',
        name: 'Kandavas novads',
        subdivision: null,
      },
      {
        countryCode: '045',
        name: 'Kocēnu novads',
        subdivision: null,
      },
      {
        countryCode: '046',
        name: 'Kokneses novads',
        subdivision: null,
      },
      {
        countryCode: '048',
        name: 'Krimuldas novads',
        subdivision: null,
      },
      {
        countryCode: '049',
        name: 'Krustpils novads',
        subdivision: null,
      },
      {
        countryCode: '047',
        name: 'Krāslavas novads',
        subdivision: null,
      },
      {
        countryCode: '050',
        name: 'Kuldīgas novads',
        subdivision: null,
      },
      {
        countryCode: '044',
        name: 'Kārsavas novads',
        subdivision: null,
      },
      {
        countryCode: '053',
        name: 'Lielvārdes novads',
        subdivision: null,
      },
      {
        countryCode: 'LPX',
        name: 'Liepāja',
        subdivision: null,
      },
      {
        countryCode: '054',
        name: 'Limbažu novads',
        subdivision: null,
      },
      {
        countryCode: '057',
        name: 'Lubānas novads',
        subdivision: null,
      },
      {
        countryCode: '058',
        name: 'Ludzas novads',
        subdivision: null,
      },
      {
        countryCode: '055',
        name: 'Līgatnes novads',
        subdivision: null,
      },
      {
        countryCode: '056',
        name: 'Līvānu novads',
        subdivision: null,
      },
      {
        countryCode: '059',
        name: 'Madonas novads',
        subdivision: null,
      },
      {
        countryCode: '060',
        name: 'Mazsalacas novads',
        subdivision: null,
      },
      {
        countryCode: '061',
        name: 'Mālpils novads',
        subdivision: null,
      },
      {
        countryCode: '062',
        name: 'Mārupes novads',
        subdivision: null,
      },
      {
        countryCode: '063',
        name: 'Mērsraga novads',
        subdivision: null,
      },
      {
        countryCode: '064',
        name: 'Naukšēnu novads',
        subdivision: null,
      },
      {
        countryCode: '065',
        name: 'Neretas novads',
        subdivision: null,
      },
      {
        countryCode: '066',
        name: 'Nīcas novads',
        subdivision: null,
      },
      {
        countryCode: '067',
        name: 'Ogres novads',
        subdivision: null,
      },
      {
        countryCode: '068',
        name: 'Olaines novads',
        subdivision: null,
      },
      {
        countryCode: '069',
        name: 'Ozolnieku novads',
        subdivision: null,
      },
      {
        countryCode: '073',
        name: 'Preiļu novads',
        subdivision: null,
      },
      {
        countryCode: '074',
        name: 'Priekules novads',
        subdivision: null,
      },
      {
        countryCode: '075',
        name: 'Priekuļu novads',
        subdivision: null,
      },
      {
        countryCode: '070',
        name: 'Pārgaujas novads',
        subdivision: null,
      },
      {
        countryCode: '071',
        name: 'Pāvilostas novads',
        subdivision: null,
      },
      {
        countryCode: '072',
        name: 'Pļaviņu novads',
        subdivision: null,
      },
      {
        countryCode: '076',
        name: 'Raunas novads',
        subdivision: null,
      },
      {
        countryCode: '078',
        name: 'Riebiņu novads',
        subdivision: null,
      },
      {
        countryCode: '079',
        name: 'Rojas novads',
        subdivision: null,
      },
      {
        countryCode: '080',
        name: 'Ropažu novads',
        subdivision: null,
      },
      {
        countryCode: '081',
        name: 'Rucavas novads',
        subdivision: null,
      },
      {
        countryCode: '082',
        name: 'Rugāju novads',
        subdivision: null,
      },
      {
        countryCode: '083',
        name: 'Rundāles novads',
        subdivision: null,
      },
      {
        countryCode: 'REZ',
        name: 'Rēzekne',
        subdivision: null,
      },
      {
        countryCode: '077',
        name: 'Rēzeknes novads',
        subdivision: null,
      },
      {
        countryCode: 'RIX',
        name: 'Rīga',
        subdivision: null,
      },
      {
        countryCode: '084',
        name: 'Rūjienas novads',
        subdivision: null,
      },
      {
        countryCode: '086',
        name: 'Salacgrīvas novads',
        subdivision: null,
      },
      {
        countryCode: '085',
        name: 'Salas novads',
        subdivision: null,
      },
      {
        countryCode: '087',
        name: 'Salaspils novads',
        subdivision: null,
      },
      {
        countryCode: '088',
        name: 'Saldus novads',
        subdivision: null,
      },
      {
        countryCode: '089',
        name: 'Saulkrastu novads',
        subdivision: null,
      },
      {
        countryCode: '091',
        name: 'Siguldas novads',
        subdivision: null,
      },
      {
        countryCode: '093',
        name: 'Skrundas novads',
        subdivision: null,
      },
      {
        countryCode: '092',
        name: 'Skrīveru novads',
        subdivision: null,
      },
      {
        countryCode: '094',
        name: 'Smiltenes novads',
        subdivision: null,
      },
      {
        countryCode: '095',
        name: 'Stopiņu novads',
        subdivision: null,
      },
      {
        countryCode: '096',
        name: 'Strenču novads',
        subdivision: null,
      },
      {
        countryCode: '090',
        name: 'Sējas novads',
        subdivision: null,
      },
      {
        countryCode: '097',
        name: 'Talsu novads',
        subdivision: null,
      },
      {
        countryCode: '099',
        name: 'Tukuma novads',
        subdivision: null,
      },
      {
        countryCode: '098',
        name: 'Tērvetes novads',
        subdivision: null,
      },
      {
        countryCode: '100',
        name: 'Vaiņodes novads',
        subdivision: null,
      },
      {
        countryCode: '101',
        name: 'Valkas novads',
        subdivision: null,
      },
      {
        countryCode: 'VMR',
        name: 'Valmiera',
        subdivision: null,
      },
      {
        countryCode: '102',
        name: 'Varakļānu novads',
        subdivision: null,
      },
      {
        countryCode: '104',
        name: 'Vecpiebalgas novads',
        subdivision: null,
      },
      {
        countryCode: '105',
        name: 'Vecumnieku novads',
        subdivision: null,
      },
      {
        countryCode: 'VEN',
        name: 'Ventspils',
        subdivision: null,
      },
      {
        countryCode: '106',
        name: 'Ventspils novads',
        subdivision: null,
      },
      {
        countryCode: '107',
        name: 'Viesītes novads',
        subdivision: null,
      },
      {
        countryCode: '108',
        name: 'Viļakas novads',
        subdivision: null,
      },
      {
        countryCode: '109',
        name: 'Viļānu novads',
        subdivision: null,
      },
      {
        countryCode: '103',
        name: 'Vārkavas novads',
        subdivision: null,
      },
      {
        countryCode: '110',
        name: 'Zilupes novads',
        subdivision: null,
      },
      {
        countryCode: '011',
        name: 'Ādažu novads',
        subdivision: null,
      },
      {
        countryCode: '030',
        name: 'Ērgļu novads',
        subdivision: null,
      },
      {
        countryCode: '051',
        name: 'Ķeguma novads',
        subdivision: null,
      },
      {
        countryCode: '052',
        name: 'Ķekavas novads',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LB',
    countryCode3: 'LBN',
    name: 'Lebanon',
    capital: 'Beirut',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AK',
        name: 'Aakkâr',
        subdivision: null,
      },
      {
        countryCode: 'BH',
        name: 'Baalbek-Hermel',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Beyrouth',
        subdivision: null,
      },
      {
        countryCode: 'BI',
        name: 'Béqaa',
        subdivision: null,
      },
      {
        countryCode: 'AS',
        name: 'Liban-Nord',
        subdivision: null,
      },
      {
        countryCode: 'JA',
        name: 'Liban-Sud',
        subdivision: null,
      },
      {
        countryCode: 'JL',
        name: 'Mont-Liban',
        subdivision: null,
      },
      {
        countryCode: 'NA',
        name: 'Nabatîyé',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LS',
    countryCode3: 'LSO',
    name: 'Lesotho',
    capital: 'Maseru',
    region: 'Africa',
    subregion: 'Southern Africa',
    states: [
      {
        countryCode: 'D',
        name: 'Berea',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Butha-Buthe',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Leribe',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Mafeteng',
        subdivision: null,
      },
      {
        countryCode: 'A',
        name: 'Maseru',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: "Mohale's Hoek",
        subdivision: null,
      },
      {
        countryCode: 'J',
        name: 'Mokhotlong',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: "Qacha's Nek",
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Quthing',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Thaba-Tseka',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LR',
    countryCode3: 'LBR',
    name: 'Liberia',
    capital: 'Monrovia',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'BM',
        name: 'Bomi',
        subdivision: null,
      },
      {
        countryCode: 'BG',
        name: 'Bong',
        subdivision: null,
      },
      {
        countryCode: 'GP',
        name: 'Gbarpolu',
        subdivision: null,
      },
      {
        countryCode: 'GB',
        name: 'Grand Bassa',
        subdivision: null,
      },
      {
        countryCode: 'CM',
        name: 'Grand Cape Mount',
        subdivision: null,
      },
      {
        countryCode: 'GG',
        name: 'Grand Gedeh',
        subdivision: null,
      },
      {
        countryCode: 'GK',
        name: 'Grand Kru',
        subdivision: null,
      },
      {
        countryCode: 'LO',
        name: 'Lofa',
        subdivision: null,
      },
      {
        countryCode: 'MG',
        name: 'Margibi',
        subdivision: null,
      },
      {
        countryCode: 'MY',
        name: 'Maryland',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Montserrado',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Nimba',
        subdivision: null,
      },
      {
        countryCode: 'RG',
        name: 'River Gee',
        subdivision: null,
      },
      {
        countryCode: 'RI',
        name: 'Rivercess',
        subdivision: null,
      },
      {
        countryCode: 'SI',
        name: 'Sinoe',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LY',
    countryCode3: 'LBY',
    name: 'Libya',
    capital: 'Tripoli',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [
      {
        countryCode: 'BU',
        name: 'Al Buţnān',
        subdivision: null,
      },
      {
        countryCode: 'JA',
        name: 'Al Jabal al Akhḑar',
        subdivision: null,
      },
      {
        countryCode: 'JG',
        name: 'Al Jabal al Gharbī',
        subdivision: null,
      },
      {
        countryCode: 'JI',
        name: 'Al Jifārah',
        subdivision: null,
      },
      {
        countryCode: 'JU',
        name: 'Al Jufrah',
        subdivision: null,
      },
      {
        countryCode: 'KF',
        name: 'Al Kufrah',
        subdivision: null,
      },
      {
        countryCode: 'MJ',
        name: 'Al Marj',
        subdivision: null,
      },
      {
        countryCode: 'MB',
        name: 'Al Marqab',
        subdivision: null,
      },
      {
        countryCode: 'WA',
        name: 'Al Wāḩāt',
        subdivision: null,
      },
      {
        countryCode: 'NQ',
        name: 'An Nuqaţ al Khams',
        subdivision: null,
      },
      {
        countryCode: 'ZA',
        name: 'Az Zāwiyah',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Banghāzī',
        subdivision: null,
      },
      {
        countryCode: 'DR',
        name: 'Darnah',
        subdivision: null,
      },
      {
        countryCode: 'GT',
        name: 'Ghāt',
        subdivision: null,
      },
      {
        countryCode: 'MI',
        name: 'Mişrātah',
        subdivision: null,
      },
      {
        countryCode: 'MQ',
        name: 'Murzuq',
        subdivision: null,
      },
      {
        countryCode: 'NL',
        name: 'Nālūt',
        subdivision: null,
      },
      {
        countryCode: 'SB',
        name: 'Sabhā',
        subdivision: null,
      },
      {
        countryCode: 'SR',
        name: 'Surt',
        subdivision: null,
      },
      {
        countryCode: 'WD',
        name: 'Wādī al Ḩayāt',
        subdivision: null,
      },
      {
        countryCode: 'WS',
        name: 'Wādī ash Shāţiʾ',
        subdivision: null,
      },
      {
        countryCode: 'TB',
        name: 'Ţarābulus',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LI',
    countryCode3: 'LIE',
    name: 'Liechtenstein',
    capital: 'Vaduz',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: '01',
        name: 'Balzers',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Eschen',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Gamprin',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Mauren',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Planken',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Ruggell',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Schaan',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Schellenberg',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Triesen',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Triesenberg',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Vaduz',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LT',
    countryCode3: 'LTU',
    name: 'Lithuania',
    capital: 'Vilnius',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: 'AL',
        name: 'Alytaus Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'KU',
        name: 'Kauno Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'KL',
        name: 'Klaipėdos Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'MR',
        name: 'Marijampolės Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'PN',
        name: 'Panevėžio Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tauragės Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'TE',
        name: 'Telšių Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'UT',
        name: 'Utenos Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'VL',
        name: 'Vilniaus Apskritis',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Šiaulių Apskritis',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LU',
    countryCode3: 'LUX',
    name: 'Luxembourg',
    capital: 'Luxembourg',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'D',
        name: 'Diekirch',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Grevenmacher',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Luxembourg',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MO',
    countryCode3: 'MAC',
    name: 'Macau',
    capital: '',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [],
  },
  {
    countryCode2: 'MK',
    countryCode3: 'MKD',
    name: 'Republic of Macedonia',
    capital: 'Skopje',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Aerodrom',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Aračinovo',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Berovo',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Bitola',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Bogdanci',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Bogovinje',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Bosilovo',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Brvenica',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Butel',
        subdivision: null,
      },
      {
        countryCode: '77',
        name: 'Centar',
        subdivision: null,
      },
      {
        countryCode: '78',
        name: 'Centar Župa',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Debar',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Debarca',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Delčevo',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Demir Hisar',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Demir Kapija',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Dojran',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Dolneni',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Drugovo',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Gazi Baba',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Gevgelija',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Gjorče Petrov',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Gostivar',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Gradsko',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Ilinden',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Jegunovce',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'Karbinci',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Karpoš',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Kavadarci',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Kisela Voda',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Kičevo',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Konče',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Kočani',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Kratovo',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Kriva Palanka',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Krivogaštani',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Kruševo',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Kumanovo',
        subdivision: null,
      },
      {
        countryCode: '48',
        name: 'Lipkovo',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'Lozovo',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'Makedonska Kamenica',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Makedonski Brod',
        subdivision: null,
      },
      {
        countryCode: '50',
        name: 'Mavrovo i Rostuša',
        subdivision: null,
      },
      {
        countryCode: '53',
        name: 'Mogila',
        subdivision: null,
      },
      {
        countryCode: '54',
        name: 'Negotino',
        subdivision: null,
      },
      {
        countryCode: '55',
        name: 'Novaci',
        subdivision: null,
      },
      {
        countryCode: '56',
        name: 'Novo Selo',
        subdivision: null,
      },
      {
        countryCode: '58',
        name: 'Ohrid',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Oslomej',
        subdivision: null,
      },
      {
        countryCode: '60',
        name: 'Pehčevo',
        subdivision: null,
      },
      {
        countryCode: '59',
        name: 'Petrovec',
        subdivision: null,
      },
      {
        countryCode: '61',
        name: 'Plasnica',
        subdivision: null,
      },
      {
        countryCode: '62',
        name: 'Prilep',
        subdivision: null,
      },
      {
        countryCode: '63',
        name: 'Probištip',
        subdivision: null,
      },
      {
        countryCode: '64',
        name: 'Radoviš',
        subdivision: null,
      },
      {
        countryCode: '65',
        name: 'Rankovce',
        subdivision: null,
      },
      {
        countryCode: '66',
        name: 'Resen',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Rosoman',
        subdivision: null,
      },
      {
        countryCode: '68',
        name: 'Saraj',
        subdivision: null,
      },
      {
        countryCode: '70',
        name: 'Sopište',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: 'Staro Nagoričane',
        subdivision: null,
      },
      {
        countryCode: '72',
        name: 'Struga',
        subdivision: null,
      },
      {
        countryCode: '73',
        name: 'Strumica',
        subdivision: null,
      },
      {
        countryCode: '74',
        name: 'Studeničani',
        subdivision: null,
      },
      {
        countryCode: '69',
        name: 'Sveti Nikole',
        subdivision: null,
      },
      {
        countryCode: '75',
        name: 'Tearce',
        subdivision: null,
      },
      {
        countryCode: '76',
        name: 'Tetovo',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Valandovo',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Vasilevo',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Veles',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Vevčani',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Vinica',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Vraneštica',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Vrapčište',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Zajas',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Zelenikovo',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Zrnovci',
        subdivision: null,
      },
      {
        countryCode: '79',
        name: 'Čair',
        subdivision: null,
      },
      {
        countryCode: '80',
        name: 'Čaška',
        subdivision: null,
      },
      {
        countryCode: '81',
        name: 'Češinovo-Obleševo',
        subdivision: null,
      },
      {
        countryCode: '82',
        name: 'Čučer Sandevo',
        subdivision: null,
      },
      {
        countryCode: '83',
        name: 'Štip',
        subdivision: null,
      },
      {
        countryCode: '84',
        name: 'Šuto Orizari',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Želino',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MG',
    countryCode3: 'MDG',
    name: 'Madagascar',
    capital: 'Antananarivo',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'T',
        name: 'Antananarivo',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Antsiranana',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Fianarantsoa',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Mahajanga',
        subdivision: null,
      },
      {
        countryCode: 'A',
        name: 'Toamasina',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Toliara',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MW',
    countryCode3: 'MWI',
    name: 'Malawi',
    capital: 'Lilongwe',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'C',
        name: 'Central Region',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Northern Region',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Southern Region',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MY',
    countryCode3: 'MYS',
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '14',
        name: 'Wilayah Persekutuan Kuala Lumpur',
        subdivision: 'federal territory',
      },
      {
        countryCode: '15',
        name: 'Wilayah Persekutuan Labuan',
        subdivision: 'federal territory',
      },
      {
        countryCode: '16',
        name: 'Wilayah Persekutuan Putrajaya',
        subdivision: 'federal territory',
      },
      {
        countryCode: '01',
        name: 'Johor',
        subdivision: 'state',
      },
      {
        countryCode: '02',
        name: 'Kedah',
        subdivision: 'state',
      },
      {
        countryCode: '03',
        name: 'Kelantan',
        subdivision: 'state',
      },
      {
        countryCode: '04',
        name: 'Melaka',
        subdivision: 'state',
      },
      {
        countryCode: '05',
        name: 'Negeri Sembilan',
        subdivision: 'state',
      },
      {
        countryCode: '06',
        name: 'Pahang',
        subdivision: 'state',
      },
      {
        countryCode: '08',
        name: 'Perak',
        subdivision: 'state',
      },
      {
        countryCode: '09',
        name: 'Perlis',
        subdivision: 'state',
      },
      {
        countryCode: '07',
        name: 'Pulau Pinang',
        subdivision: 'state',
      },
      {
        countryCode: '12',
        name: 'Sabah',
        subdivision: 'state',
      },
      {
        countryCode: '13',
        name: 'Sarawak',
        subdivision: 'state',
      },
      {
        countryCode: '10',
        name: 'Selangor',
        subdivision: 'state',
      },
      {
        countryCode: '11',
        name: 'Terengganu',
        subdivision: 'state',
      },
    ],
  },
  {
    countryCode2: 'MV',
    countryCode3: 'MDV',
    name: 'Maldives',
    capital: 'Malé',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: 'CE',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'MLE',
        name: 'Male',
        subdivision: null,
      },
      {
        countryCode: 'NO',
        name: 'North',
        subdivision: null,
      },
      {
        countryCode: 'NC',
        name: 'North Central',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'South',
        subdivision: null,
      },
      {
        countryCode: 'SC',
        name: 'South Central',
        subdivision: null,
      },
      {
        countryCode: 'UN',
        name: 'Upper North',
        subdivision: null,
      },
      {
        countryCode: 'US',
        name: 'Upper South',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ML',
    countryCode3: 'MLI',
    name: 'Mali',
    capital: 'Bamako',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'BKO',
        name: 'Bamako',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Gao',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Kayes',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Kidal',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'Koulikoro',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Mopti',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Sikasso',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Ségou',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Tombouctou',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MT',
    countryCode3: 'MLT',
    name: 'Malta',
    capital: 'Valletta',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Attard',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Balzan',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Birgu',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Birkirkara',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Birżebbuġa',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Bormla',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Dingli',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Fgura',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Floriana',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Fontana',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Gudja',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Għajnsielem',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Għarb',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Għargħur',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Għasri',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Għaxaq',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Gżira',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Iklin',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Isla',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Kalkara',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Kerċem',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Kirkop',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Lija',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Luqa',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Marsa',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Marsaskala',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Marsaxlokk',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Mdina',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Mellieħa',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Mosta',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Mqabba',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Msida',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Mtarfa',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Munxar',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Mġarr',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'Nadur',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Naxxar',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Paola',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Pembroke',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Pietà',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Qala',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Qormi',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Qrendi',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Rabat Għawdex',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Rabat Malta',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Safi',
        subdivision: null,
      },
      {
        countryCode: '50',
        name: 'San Lawrenz',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'San Pawl il-Baħar',
        subdivision: null,
      },
      {
        countryCode: '48',
        name: 'San Ġiljan',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'San Ġwann',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Sannat',
        subdivision: null,
      },
      {
        countryCode: '53',
        name: 'Santa Luċija',
        subdivision: null,
      },
      {
        countryCode: '54',
        name: 'Santa Venera',
        subdivision: null,
      },
      {
        countryCode: '55',
        name: 'Siġġiewi',
        subdivision: null,
      },
      {
        countryCode: '56',
        name: 'Sliema',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Swieqi',
        subdivision: null,
      },
      {
        countryCode: '58',
        name: "Ta' Xbiex",
        subdivision: null,
      },
      {
        countryCode: '59',
        name: 'Tarxien',
        subdivision: null,
      },
      {
        countryCode: '60',
        name: 'Valletta',
        subdivision: null,
      },
      {
        countryCode: '61',
        name: 'Xagħra',
        subdivision: null,
      },
      {
        countryCode: '62',
        name: 'Xewkija',
        subdivision: null,
      },
      {
        countryCode: '63',
        name: 'Xgħajra',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Ħamrun',
        subdivision: null,
      },
      {
        countryCode: '64',
        name: 'Żabbar',
        subdivision: null,
      },
      {
        countryCode: '65',
        name: 'Żebbuġ Għawdex',
        subdivision: null,
      },
      {
        countryCode: '66',
        name: 'Żebbuġ Malta',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Żejtun',
        subdivision: null,
      },
      {
        countryCode: '68',
        name: 'Żurrieq',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MH',
    countryCode3: 'MHL',
    name: 'Marshall Islands',
    capital: 'Majuro',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [
      {
        countryCode: 'L',
        name: 'Ralik chain',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Ratak chain',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MQ',
    countryCode3: 'MTQ',
    name: 'Martinique',
    capital: 'Fort-de-France',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'MR',
    countryCode3: 'MRT',
    name: 'Mauritania',
    capital: 'Nouakchott',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: '07',
        name: 'Adrar',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Assaba',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Brakna',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Dakhlet Nouâdhibou',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Gorgol',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Guidimaka',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Hodh ech Chargui',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Hodh el Gharbi',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Inchiri',
        subdivision: null,
      },
      {
        countryCode: 'NKC',
        name: 'Nouakchott',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Tagant',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Tiris Zemmour',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Trarza',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MU',
    countryCode3: 'MUS',
    name: 'Mauritius',
    capital: 'Port Louis',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'AG',
        name: 'Agalega Islands',
        subdivision: null,
      },
      {
        countryCode: 'BR',
        name: 'Beau Bassin-Rose Hill',
        subdivision: null,
      },
      {
        countryCode: 'BL',
        name: 'Black River',
        subdivision: null,
      },
      {
        countryCode: 'CC',
        name: 'Cargados Carajos Shoals',
        subdivision: null,
      },
      {
        countryCode: 'CU',
        name: 'Curepipe',
        subdivision: null,
      },
      {
        countryCode: 'FL',
        name: 'Flacq',
        subdivision: null,
      },
      {
        countryCode: 'GP',
        name: 'Grand Port',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Moka',
        subdivision: null,
      },
      {
        countryCode: 'PA',
        name: 'Pamplemousses',
        subdivision: null,
      },
      {
        countryCode: 'PW',
        name: 'Plaines Wilhems',
        subdivision: null,
      },
      {
        countryCode: 'PL',
        name: 'Port Louis',
        subdivision: null,
      },
      {
        countryCode: 'PU',
        name: 'Port Louis',
        subdivision: null,
      },
      {
        countryCode: 'QB',
        name: 'Quatre Bornes',
        subdivision: null,
      },
      {
        countryCode: 'RR',
        name: 'Rivière du Rempart',
        subdivision: null,
      },
      {
        countryCode: 'RO',
        name: 'Rodrigues Island',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Savanne',
        subdivision: null,
      },
      {
        countryCode: 'VP',
        name: 'Vacoas-Phoenix',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'YT',
    countryCode3: 'MYT',
    name: 'Mayotte',
    capital: 'Mamoudzou',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [],
  },
  {
    countryCode2: 'MX',
    countryCode3: 'MEX',
    name: 'Mexico',
    capital: 'Mexico City',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'DIF',
        name: 'Distrito Federal',
        subdivision: 'federal district',
      },
      {
        countryCode: 'AGU',
        name: 'Aguascalientes',
        subdivision: 'state',
      },
      {
        countryCode: 'BCN',
        name: 'Baja California',
        subdivision: 'state',
      },
      {
        countryCode: 'BCS',
        name: 'Baja California Sur',
        subdivision: 'state',
      },
      {
        countryCode: 'CAM',
        name: 'Campeche',
        subdivision: 'state',
      },
      {
        countryCode: 'CHP',
        name: 'Chiapas',
        subdivision: 'state',
      },
      {
        countryCode: 'CHH',
        name: 'Chihuahua',
        subdivision: 'state',
      },
      {
        countryCode: 'COA',
        name: 'Coahuila',
        subdivision: 'state',
      },
      {
        countryCode: 'COL',
        name: 'Colima',
        subdivision: 'state',
      },
      {
        countryCode: 'DUR',
        name: 'Durango',
        subdivision: 'state',
      },
      {
        countryCode: 'GUA',
        name: 'Guanajuato',
        subdivision: 'state',
      },
      {
        countryCode: 'GRO',
        name: 'Guerrero',
        subdivision: 'state',
      },
      {
        countryCode: 'HID',
        name: 'Hidalgo',
        subdivision: 'state',
      },
      {
        countryCode: 'JAL',
        name: 'Jalisco',
        subdivision: 'state',
      },
      {
        countryCode: 'MIC',
        name: 'Michoacán',
        subdivision: 'state',
      },
      {
        countryCode: 'MOR',
        name: 'Morelos',
        subdivision: 'state',
      },
      {
        countryCode: 'MEX',
        name: 'México',
        subdivision: 'state',
      },
      {
        countryCode: 'NAY',
        name: 'Nayarit',
        subdivision: 'state',
      },
      {
        countryCode: 'NLE',
        name: 'Nuevo León',
        subdivision: 'state',
      },
      {
        countryCode: 'OAX',
        name: 'Oaxaca',
        subdivision: 'state',
      },
      {
        countryCode: 'PUE',
        name: 'Puebla',
        subdivision: 'state',
      },
      {
        countryCode: 'QUE',
        name: 'Querétaro',
        subdivision: 'state',
      },
      {
        countryCode: 'ROO',
        name: 'Quintana Roo',
        subdivision: 'state',
      },
      {
        countryCode: 'SLP',
        name: 'San Luis Potosí',
        subdivision: 'state',
      },
      {
        countryCode: 'SIN',
        name: 'Sinaloa',
        subdivision: 'state',
      },
      {
        countryCode: 'SON',
        name: 'Sonora',
        subdivision: 'state',
      },
      {
        countryCode: 'TAB',
        name: 'Tabasco',
        subdivision: 'state',
      },
      {
        countryCode: 'TAM',
        name: 'Tamaulipas',
        subdivision: 'state',
      },
      {
        countryCode: 'TLA',
        name: 'Tlaxcala',
        subdivision: 'state',
      },
      {
        countryCode: 'VER',
        name: 'Veracruz',
        subdivision: 'state',
      },
      {
        countryCode: 'YUC',
        name: 'Yucatán',
        subdivision: 'state',
      },
      {
        countryCode: 'ZAC',
        name: 'Zacatecas',
        subdivision: 'state',
      },
    ],
  },
  {
    countryCode2: 'FM',
    countryCode3: 'FSM',
    name: 'Federated States of Micronesia',
    capital: 'Palikir',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [
      {
        countryCode: 'TRK',
        name: 'Chuuk',
        subdivision: null,
      },
      {
        countryCode: 'KSA',
        name: 'Kosrae',
        subdivision: null,
      },
      {
        countryCode: 'PNI',
        name: 'Pohnpei',
        subdivision: null,
      },
      {
        countryCode: 'YAP',
        name: 'Yap',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MD',
    countryCode3: 'MDA',
    name: 'Moldova',
    capital: 'Chișinău',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'AN',
        name: 'Anenii Noi',
        subdivision: null,
      },
      {
        countryCode: 'BS',
        name: 'Basarabeasca',
        subdivision: null,
      },
      {
        countryCode: 'BR',
        name: 'Briceni',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Bălţi',
        subdivision: null,
      },
      {
        countryCode: 'CA',
        name: 'Cahul',
        subdivision: null,
      },
      {
        countryCode: 'CT',
        name: 'Cantemir',
        subdivision: null,
      },
      {
        countryCode: 'CU',
        name: 'Chişinău',
        subdivision: null,
      },
      {
        countryCode: 'CM',
        name: 'Cimişlia',
        subdivision: null,
      },
      {
        countryCode: 'CR',
        name: 'Criuleni',
        subdivision: null,
      },
      {
        countryCode: 'CL',
        name: 'Călăraşi',
        subdivision: null,
      },
      {
        countryCode: 'CS',
        name: 'Căuşeni',
        subdivision: null,
      },
      {
        countryCode: 'DO',
        name: 'Donduşeni',
        subdivision: null,
      },
      {
        countryCode: 'DR',
        name: 'Drochia',
        subdivision: null,
      },
      {
        countryCode: 'DU',
        name: 'Dubăsari',
        subdivision: null,
      },
      {
        countryCode: 'ED',
        name: 'Edineţ',
        subdivision: null,
      },
      {
        countryCode: 'FL',
        name: 'Floreşti',
        subdivision: null,
      },
      {
        countryCode: 'FA',
        name: 'Făleşti',
        subdivision: null,
      },
      {
        countryCode: 'GL',
        name: 'Glodeni',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'Găgăuzia, Unitatea teritorială autonomă',
        subdivision: null,
      },
      {
        countryCode: 'HI',
        name: 'Hînceşti',
        subdivision: null,
      },
      {
        countryCode: 'IA',
        name: 'Ialoveni',
        subdivision: null,
      },
      {
        countryCode: 'LE',
        name: 'Leova',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Nisporeni',
        subdivision: null,
      },
      {
        countryCode: 'OC',
        name: 'Ocniţa',
        subdivision: null,
      },
      {
        countryCode: 'OR',
        name: 'Orhei',
        subdivision: null,
      },
      {
        countryCode: 'RE',
        name: 'Rezina',
        subdivision: null,
      },
      {
        countryCode: 'RI',
        name: 'Rîşcani',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Soroca',
        subdivision: null,
      },
      {
        countryCode: 'ST',
        name: 'Străşeni',
        subdivision: null,
      },
      {
        countryCode: 'SN',
        name: 'Stînga Nistrului, unitatea teritorială din',
        subdivision: null,
      },
      {
        countryCode: 'SI',
        name: 'Sîngerei',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Taraclia',
        subdivision: null,
      },
      {
        countryCode: 'TE',
        name: 'Teleneşti',
        subdivision: null,
      },
      {
        countryCode: 'BD',
        name: 'Tighina',
        subdivision: null,
      },
      {
        countryCode: 'UN',
        name: 'Ungheni',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Şoldăneşti',
        subdivision: null,
      },
      {
        countryCode: 'SV',
        name: 'Ştefan Vodă',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MC',
    countryCode3: 'MCO',
    name: 'Monaco',
    capital: 'Monaco',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'FO',
        name: 'Fontvieille',
        subdivision: null,
      },
      {
        countryCode: 'JE',
        name: 'Jardin Exotique',
        subdivision: null,
      },
      {
        countryCode: 'CL',
        name: 'La Colle',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'La Condamine',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'La Gare',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'La Source',
        subdivision: null,
      },
      {
        countryCode: 'LA',
        name: 'Larvotto',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Malbousquet',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Monaco-Ville',
        subdivision: null,
      },
      {
        countryCode: 'MG',
        name: 'Moneghetti',
        subdivision: null,
      },
      {
        countryCode: 'MC',
        name: 'Monte-Carlo',
        subdivision: null,
      },
      {
        countryCode: 'MU',
        name: 'Moulins',
        subdivision: null,
      },
      {
        countryCode: 'PH',
        name: 'Port-Hercule',
        subdivision: null,
      },
      {
        countryCode: 'SR',
        name: 'Saint-Roman',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Sainte-Dévote',
        subdivision: null,
      },
      {
        countryCode: 'SP',
        name: 'Spélugues',
        subdivision: null,
      },
      {
        countryCode: 'VR',
        name: 'Vallon de la Rousse',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MN',
    countryCode3: 'MNG',
    name: 'Mongolia',
    capital: 'Ulan Bator',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [
      {
        countryCode: '073',
        name: 'Arhangay',
        subdivision: null,
      },
      {
        countryCode: '071',
        name: 'Bayan-Ölgiy',
        subdivision: null,
      },
      {
        countryCode: '069',
        name: 'Bayanhongor',
        subdivision: null,
      },
      {
        countryCode: '067',
        name: 'Bulgan',
        subdivision: null,
      },
      {
        countryCode: '037',
        name: 'Darhan uul',
        subdivision: null,
      },
      {
        countryCode: '061',
        name: 'Dornod',
        subdivision: null,
      },
      {
        countryCode: '063',
        name: 'Dornogovĭ',
        subdivision: null,
      },
      {
        countryCode: '059',
        name: 'Dundgovĭ',
        subdivision: null,
      },
      {
        countryCode: '057',
        name: 'Dzavhan',
        subdivision: null,
      },
      {
        countryCode: '065',
        name: 'Govĭ-Altay',
        subdivision: null,
      },
      {
        countryCode: '064',
        name: 'Govĭ-Sümber',
        subdivision: null,
      },
      {
        countryCode: '039',
        name: 'Hentiy',
        subdivision: null,
      },
      {
        countryCode: '043',
        name: 'Hovd',
        subdivision: null,
      },
      {
        countryCode: '041',
        name: 'Hövsgöl',
        subdivision: null,
      },
      {
        countryCode: '035',
        name: 'Orhon',
        subdivision: null,
      },
      {
        countryCode: '049',
        name: 'Selenge',
        subdivision: null,
      },
      {
        countryCode: '051',
        name: 'Sühbaatar',
        subdivision: null,
      },
      {
        countryCode: '047',
        name: 'Töv',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Ulaanbaatar',
        subdivision: null,
      },
      {
        countryCode: '046',
        name: 'Uvs',
        subdivision: null,
      },
      {
        countryCode: '053',
        name: 'Ömnögovĭ',
        subdivision: null,
      },
      {
        countryCode: '055',
        name: 'Övörhangay',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ME',
    countryCode3: 'MNE',
    name: 'Montenegro',
    capital: 'Podgorica',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Andrijevica',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Bar',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Berane',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Bijelo Polje',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Budva',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Cetinje',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Danilovgrad',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Gusinje',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Herceg-Novi',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Kolašin',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Kotor',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Mojkovac',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Nikšić',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Petnjica',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Plav',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Pljevlja',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Plužine',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Podgorica',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Rožaje',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Tivat',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Ulcinj',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Šavnik',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Žabljak',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MS',
    countryCode3: 'MSR',
    name: 'Montserrat',
    capital: 'Plymouth',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'MA',
    countryCode3: 'MAR',
    name: 'Morocco',
    capital: 'Rabat',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [
      {
        countryCode: '09',
        name: 'Chaouia-Ouardigha',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Doukhala-Abda',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Fès-Boulemane',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Gharb-Chrarda-Beni Hssen',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Grand Casablanca',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Guelmim-Es Smara',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: "L'Oriental",
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Laâyoune-Boujdour-Sakia el Hamra',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Marrakech-Tensift-Al Haouz',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Meknès-Tafilalet',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Oued ed Dahab-Lagouira',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Rabat-Salé-Zemmour-Zaer',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Souss-Massa-Drâa',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Tadla-Azilal',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Tanger-Tétouan',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Taza-Al Hoceima-Taounate',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MZ',
    countryCode3: 'MOZ',
    name: 'Mozambique',
    capital: 'Maputo',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'P',
        name: 'Cabo Delgado',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Gaza',
        subdivision: null,
      },
      {
        countryCode: 'I',
        name: 'Inhambane',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Manica',
        subdivision: null,
      },
      {
        countryCode: 'MPM',
        name: 'Maputo',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Maputo',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Nampula',
        subdivision: null,
      },
      {
        countryCode: 'A',
        name: 'Niassa',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Sofala',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Tete',
        subdivision: null,
      },
      {
        countryCode: 'Q',
        name: 'Zambézia',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MM',
    countryCode3: 'MMR',
    name: 'Myanmar',
    capital: 'Naypyidaw',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '07',
        name: 'Ayeyarwady',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Bago',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Chin',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Kachin',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Kayah',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Kayin',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Magway',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Mandalay',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Mon',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Rakhine',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Sagaing',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Shan',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Tanintharyi',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Yangon',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NA',
    countryCode3: 'NAM',
    name: 'Namibia',
    capital: 'Windhoek',
    region: 'Africa',
    subregion: 'Southern Africa',
    states: [
      {
        countryCode: 'ER',
        name: 'Erongo',
        subdivision: null,
      },
      {
        countryCode: 'HA',
        name: 'Hardap',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Karas',
        subdivision: null,
      },
      {
        countryCode: 'KE',
        name: 'Kavango East',
        subdivision: null,
      },
      {
        countryCode: 'KW',
        name: 'Kavango West',
        subdivision: null,
      },
      {
        countryCode: 'KH',
        name: 'Khomas',
        subdivision: null,
      },
      {
        countryCode: 'KU',
        name: 'Kunene',
        subdivision: null,
      },
      {
        countryCode: 'OW',
        name: 'Ohangwena',
        subdivision: null,
      },
      {
        countryCode: 'OH',
        name: 'Omaheke',
        subdivision: null,
      },
      {
        countryCode: 'OS',
        name: 'Omusati',
        subdivision: null,
      },
      {
        countryCode: 'ON',
        name: 'Oshana',
        subdivision: null,
      },
      {
        countryCode: 'OT',
        name: 'Oshikoto',
        subdivision: null,
      },
      {
        countryCode: 'OD',
        name: 'Otjozondjupa',
        subdivision: null,
      },
      {
        countryCode: 'CA',
        name: 'Zambezi',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NR',
    countryCode3: 'NRU',
    name: 'Nauru',
    capital: 'Yaren',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [
      {
        countryCode: '01',
        name: 'Aiwo',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Anabar',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Anetan',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Anibare',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Baiti',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Boe',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Buada',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Denigomodu',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Ewa',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Ijuw',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Meneng',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Nibok',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Uaboe',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Yaren',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NP',
    countryCode3: 'NPL',
    name: 'Nepal',
    capital: 'Kathmandu',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: '2',
        name: 'Madhya Pashchimanchal',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Madhyamanchal',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Pashchimanchal',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Purwanchal',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Sudur Pashchimanchal',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NL',
    countryCode3: 'NLD',
    name: 'Netherlands',
    capital: 'Amsterdam',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'DR',
        name: 'Drenthe',
        subdivision: 'Province',
      },
      {
        countryCode: 'FL',
        name: 'Flevoland',
        subdivision: 'Province',
      },
      {
        countryCode: 'FR',
        name: 'Fryslân',
        subdivision: 'Province',
      },
      {
        countryCode: 'GE',
        name: 'Gelderland',
        subdivision: 'Province',
      },
      {
        countryCode: 'GR',
        name: 'Groningen',
        subdivision: 'Province',
      },
      {
        countryCode: 'LI',
        name: 'Limburg',
        subdivision: 'Province',
      },
      {
        countryCode: 'NB',
        name: 'Noord-Brabant',
        subdivision: 'Province',
      },
      {
        countryCode: 'NH',
        name: 'Noord-Holland',
        subdivision: 'Province',
      },
      {
        countryCode: 'OV',
        name: 'Overijssel',
        subdivision: 'Province',
      },
      {
        countryCode: 'UT',
        name: 'Utrecht',
        subdivision: 'Province',
      },
      {
        countryCode: 'ZE',
        name: 'Zeeland',
        subdivision: 'Province',
      },
      {
        countryCode: 'ZH',
        name: 'Zuid-Holland',
        subdivision: 'Province',
      },
      {
        countryCode: 'AW',
        name: 'Aruba',
        subdivision: 'country',
      },
      {
        countryCode: 'CW',
        name: 'Curaçao',
        subdivision: 'country',
      },
      {
        countryCode: 'SX',
        name: 'Sint Maarten',
        subdivision: 'country',
      },
      {
        countryCode: 'BQ1',
        name: 'Bonaire',
        subdivision: 'special municipality',
      },
      {
        countryCode: 'BQ2',
        name: 'Saba',
        subdivision: 'special municipality',
      },
      {
        countryCode: 'BQ3',
        name: 'Sint Eustatius',
        subdivision: 'special municipality',
      },
    ],
  },
  {
    countryCode2: 'NC',
    countryCode3: 'NCL',
    name: 'New Caledonia',
    capital: 'Nouméa',
    region: 'Oceania',
    subregion: 'Melanesia',
    states: [],
  },
  {
    countryCode2: 'NZ',
    countryCode3: 'NZL',
    name: 'New Zealand',
    capital: 'Wellington',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    states: [
      {
        countryCode: 'N',
        name: 'North Island',
        subdivision: 'Island',
      },
      {
        countryCode: 'S',
        name: 'South Island',
        subdivision: 'Island',
      },
      {
        countryCode: 'AUK',
        name: 'Auckland',
        subdivision: 'regional council',
      },
      {
        countryCode: 'BOP',
        name: 'Bay of Plenty',
        subdivision: 'regional council',
      },
      {
        countryCode: 'CAN',
        name: 'Canterbury',
        subdivision: 'regional council',
      },
      {
        countryCode: 'HKB',
        name: "Hawke's Bay",
        subdivision: 'regional council',
      },
      {
        countryCode: 'MWT',
        name: 'Manawatu-Wanganui',
        subdivision: 'regional council',
      },
      {
        countryCode: 'NTL',
        name: 'Northland',
        subdivision: 'regional council',
      },
      {
        countryCode: 'OTA',
        name: 'Otago',
        subdivision: 'regional council',
      },
      {
        countryCode: 'STL',
        name: 'Southland',
        subdivision: 'regional council',
      },
      {
        countryCode: 'TKI',
        name: 'Taranaki',
        subdivision: 'regional council',
      },
      {
        countryCode: 'WKO',
        name: 'Waikato',
        subdivision: 'regional council',
      },
      {
        countryCode: 'WGN',
        name: 'Wellington',
        subdivision: 'regional council',
      },
      {
        countryCode: 'WTC',
        name: 'West Coast',
        subdivision: 'regional council',
      },
      {
        countryCode: 'CIT',
        name: 'Chatham Islands Territory',
        subdivision: 'special island authority',
      },
      {
        countryCode: 'GIS',
        name: 'Gisborne District',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'MBH',
        name: 'Marlborough District',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NSN',
        name: 'Nelson City',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'TAS',
        name: 'Tasman District',
        subdivision: 'unitary authority',
      },
    ],
  },
  {
    countryCode2: 'NI',
    countryCode3: 'NIC',
    name: 'Nicaragua',
    capital: 'Managua',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: 'AN',
        name: 'Atlántico Norte',
        subdivision: null,
      },
      {
        countryCode: 'AS',
        name: 'Atlántico Sur',
        subdivision: null,
      },
      {
        countryCode: 'BO',
        name: 'Boaco',
        subdivision: null,
      },
      {
        countryCode: 'CA',
        name: 'Carazo',
        subdivision: null,
      },
      {
        countryCode: 'CI',
        name: 'Chinandega',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'Chontales',
        subdivision: null,
      },
      {
        countryCode: 'ES',
        name: 'Estelí',
        subdivision: null,
      },
      {
        countryCode: 'GR',
        name: 'Granada',
        subdivision: null,
      },
      {
        countryCode: 'JI',
        name: 'Jinotega',
        subdivision: null,
      },
      {
        countryCode: 'LE',
        name: 'León',
        subdivision: null,
      },
      {
        countryCode: 'MD',
        name: 'Madriz',
        subdivision: null,
      },
      {
        countryCode: 'MN',
        name: 'Managua',
        subdivision: null,
      },
      {
        countryCode: 'MS',
        name: 'Masaya',
        subdivision: null,
      },
      {
        countryCode: 'MT',
        name: 'Matagalpa',
        subdivision: null,
      },
      {
        countryCode: 'NS',
        name: 'Nueva Segovia',
        subdivision: null,
      },
      {
        countryCode: 'RI',
        name: 'Rivas',
        subdivision: null,
      },
      {
        countryCode: 'SJ',
        name: 'Río San Juan',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NE',
    countryCode3: 'NER',
    name: 'Niger',
    capital: 'Niamey',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: '1',
        name: 'Agadez',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'Diffa',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Dosso',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Maradi',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Niamey',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Tahoua',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Tillabéri',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Zinder',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NG',
    countryCode3: 'NGA',
    name: 'Nigeria',
    capital: 'Abuja',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'AB',
        name: 'Abia',
        subdivision: null,
      },
      {
        countryCode: 'FC',
        name: 'Abuja Federal Capital Territory',
        subdivision: null,
      },
      {
        countryCode: 'AD',
        name: 'Adamawa',
        subdivision: null,
      },
      {
        countryCode: 'AK',
        name: 'Akwa Ibom',
        subdivision: null,
      },
      {
        countryCode: 'AN',
        name: 'Anambra',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Bauchi',
        subdivision: null,
      },
      {
        countryCode: 'BY',
        name: 'Bayelsa',
        subdivision: null,
      },
      {
        countryCode: 'BE',
        name: 'Benue',
        subdivision: null,
      },
      {
        countryCode: 'BO',
        name: 'Borno',
        subdivision: null,
      },
      {
        countryCode: 'CR',
        name: 'Cross River',
        subdivision: null,
      },
      {
        countryCode: 'DE',
        name: 'Delta',
        subdivision: null,
      },
      {
        countryCode: 'EB',
        name: 'Ebonyi',
        subdivision: null,
      },
      {
        countryCode: 'ED',
        name: 'Edo',
        subdivision: null,
      },
      {
        countryCode: 'EK',
        name: 'Ekiti',
        subdivision: null,
      },
      {
        countryCode: 'EN',
        name: 'Enugu',
        subdivision: null,
      },
      {
        countryCode: 'GO',
        name: 'Gombe',
        subdivision: null,
      },
      {
        countryCode: 'IM',
        name: 'Imo',
        subdivision: null,
      },
      {
        countryCode: 'JI',
        name: 'Jigawa',
        subdivision: null,
      },
      {
        countryCode: 'KD',
        name: 'Kaduna',
        subdivision: null,
      },
      {
        countryCode: 'KN',
        name: 'Kano',
        subdivision: null,
      },
      {
        countryCode: 'KT',
        name: 'Katsina',
        subdivision: null,
      },
      {
        countryCode: 'KE',
        name: 'Kebbi',
        subdivision: null,
      },
      {
        countryCode: 'KO',
        name: 'Kogi',
        subdivision: null,
      },
      {
        countryCode: 'KW',
        name: 'Kwara',
        subdivision: null,
      },
      {
        countryCode: 'LA',
        name: 'Lagos',
        subdivision: null,
      },
      {
        countryCode: 'NA',
        name: 'Nassarawa',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Niger',
        subdivision: null,
      },
      {
        countryCode: 'OG',
        name: 'Ogun',
        subdivision: null,
      },
      {
        countryCode: 'ON',
        name: 'Ondo',
        subdivision: null,
      },
      {
        countryCode: 'OS',
        name: 'Osun',
        subdivision: null,
      },
      {
        countryCode: 'OY',
        name: 'Oyo',
        subdivision: null,
      },
      {
        countryCode: 'PL',
        name: 'Plateau',
        subdivision: null,
      },
      {
        countryCode: 'RI',
        name: 'Rivers',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Sokoto',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Taraba',
        subdivision: null,
      },
      {
        countryCode: 'YO',
        name: 'Yobe',
        subdivision: null,
      },
      {
        countryCode: 'ZA',
        name: 'Zamfara',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'NU',
    countryCode3: 'NIU',
    name: 'Niue',
    capital: 'Alofi',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'NF',
    countryCode3: 'NFK',
    name: 'Norfolk Island',
    capital: 'Kingston',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    states: [],
  },
  {
    countryCode2: 'KP',
    countryCode3: 'PRK',
    name: 'North Korea',
    capital: 'Pyongyang',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [
      {
        countryCode: '04',
        name: 'Chagang',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Kangwon',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'North Hamgyong',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'North Hwanghae',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'North Pyongan',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Pyongyang',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Rason',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Ryanggang',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'South Hamgyong',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'South Hwanghae',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'South Pyongan',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MP',
    countryCode3: 'MNP',
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [],
  },
  {
    countryCode2: 'NO',
    countryCode3: 'NOR',
    name: 'Norway',
    capital: 'Oslo',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: '02',
        name: 'Akershus',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Aust-Agder',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Buskerud',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Finnmark',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Hedmark',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Hordaland',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Jan Mayen',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Møre og Romsdal',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Nord-Trøndelag',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Nordland',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Oppland',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Oslo',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Rogaland',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Sogn og Fjordane',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Svalbard',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Sør-Trøndelag',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Telemark',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Troms',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Vest-Agder',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Vestfold',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Østfold',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'OM',
    countryCode3: 'OMN',
    name: 'Oman',
    capital: 'Muscat',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'DA',
        name: 'Ad Dākhilīyah',
        subdivision: null,
      },
      {
        countryCode: 'BU',
        name: 'Al Buraymī',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Al Bāţinah',
        subdivision: null,
      },
      {
        countryCode: 'WU',
        name: 'Al Wusţá',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Ash Sharqīyah',
        subdivision: null,
      },
      {
        countryCode: 'ZA',
        name: 'Az̧ Z̧āhirah',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Masqaţ',
        subdivision: null,
      },
      {
        countryCode: 'MU',
        name: 'Musandam',
        subdivision: null,
      },
      {
        countryCode: 'ZU',
        name: 'Z̧ufār',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PK',
    countryCode3: 'PAK',
    name: 'Pakistan',
    capital: 'Islamabad',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: 'JK',
        name: 'Azad Kashmir',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Balochistan',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Federally Administered Tribal Areas',
        subdivision: null,
      },
      {
        countryCode: 'GB',
        name: 'Gilgit-Baltistan',
        subdivision: null,
      },
      {
        countryCode: 'IS',
        name: 'Islamabad',
        subdivision: null,
      },
      {
        countryCode: 'KP',
        name: 'Khyber Pakhtunkhwa',
        subdivision: null,
      },
      {
        countryCode: 'PB',
        name: 'Punjab',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Sindh',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PW',
    countryCode3: 'PLW',
    name: 'Palau',
    capital: 'Ngerulmud',
    region: 'Oceania',
    subregion: 'Micronesia',
    states: [
      {
        countryCode: '002',
        name: 'Aimeliik',
        subdivision: null,
      },
      {
        countryCode: '004',
        name: 'Airai',
        subdivision: null,
      },
      {
        countryCode: '010',
        name: 'Angaur',
        subdivision: null,
      },
      {
        countryCode: '050',
        name: 'Hatobohei',
        subdivision: null,
      },
      {
        countryCode: '100',
        name: 'Kayangel',
        subdivision: null,
      },
      {
        countryCode: '150',
        name: 'Koror',
        subdivision: null,
      },
      {
        countryCode: '212',
        name: 'Melekeok',
        subdivision: null,
      },
      {
        countryCode: '214',
        name: 'Ngaraard',
        subdivision: null,
      },
      {
        countryCode: '218',
        name: 'Ngarchelong',
        subdivision: null,
      },
      {
        countryCode: '222',
        name: 'Ngardmau',
        subdivision: null,
      },
      {
        countryCode: '224',
        name: 'Ngatpang',
        subdivision: null,
      },
      {
        countryCode: '226',
        name: 'Ngchesar',
        subdivision: null,
      },
      {
        countryCode: '227',
        name: 'Ngeremlengui',
        subdivision: null,
      },
      {
        countryCode: '228',
        name: 'Ngiwal',
        subdivision: null,
      },
      {
        countryCode: '350',
        name: 'Peleliu',
        subdivision: null,
      },
      {
        countryCode: '370',
        name: 'Sonsorol',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PS',
    countryCode3: 'PSE',
    name: 'Palestine',
    capital: 'Ramallah',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'BTH',
        name: 'Bethlehem',
        subdivision: null,
      },
      {
        countryCode: 'DEB',
        name: 'Deir El Balah',
        subdivision: null,
      },
      {
        countryCode: 'GZA',
        name: 'Gaza',
        subdivision: null,
      },
      {
        countryCode: 'HBN',
        name: 'Hebron',
        subdivision: null,
      },
      {
        countryCode: 'JEN',
        name: 'Jenin',
        subdivision: null,
      },
      {
        countryCode: 'JRH',
        name: 'Jericho – Al Aghwar',
        subdivision: null,
      },
      {
        countryCode: 'JEM',
        name: 'Jerusalem',
        subdivision: null,
      },
      {
        countryCode: 'KYS',
        name: 'Khan Yunis',
        subdivision: null,
      },
      {
        countryCode: 'NBS',
        name: 'Nablus',
        subdivision: null,
      },
      {
        countryCode: 'NGZ',
        name: 'North Gaza',
        subdivision: null,
      },
      {
        countryCode: 'QQA',
        name: 'Qalqilya',
        subdivision: null,
      },
      {
        countryCode: 'RFH',
        name: 'Rafah',
        subdivision: null,
      },
      {
        countryCode: 'RBH',
        name: 'Ramallah',
        subdivision: null,
      },
      {
        countryCode: 'SLT',
        name: 'Salfit',
        subdivision: null,
      },
      {
        countryCode: 'TBS',
        name: 'Tubas',
        subdivision: null,
      },
      {
        countryCode: 'TKM',
        name: 'Tulkarm',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PA',
    countryCode3: 'PAN',
    name: 'Panama',
    capital: 'Panama City',
    region: 'Americas',
    subregion: 'Central America',
    states: [
      {
        countryCode: '1',
        name: 'Bocas del Toro',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Chiriquí',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'Coclé',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Colón',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Darién',
        subdivision: null,
      },
      {
        countryCode: 'EM',
        name: 'Emberá',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Herrera',
        subdivision: null,
      },
      {
        countryCode: 'KY',
        name: 'Kuna Yala',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Los Santos',
        subdivision: null,
      },
      {
        countryCode: 'NB',
        name: 'Ngöbe-Buglé',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Panamá',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Panamá Oeste',
        subdivision: null,
      },
      {
        countryCode: '9',
        name: 'Veraguas',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PG',
    countryCode3: 'PNG',
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    region: 'Oceania',
    subregion: 'Melanesia',
    states: [
      {
        countryCode: 'NSB',
        name: 'Bougainville',
        subdivision: null,
      },
      {
        countryCode: 'CPM',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'CPK',
        name: 'Chimbu',
        subdivision: null,
      },
      {
        countryCode: 'EBR',
        name: 'East New Britain',
        subdivision: null,
      },
      {
        countryCode: 'ESW',
        name: 'East Sepik',
        subdivision: null,
      },
      {
        countryCode: 'EHG',
        name: 'Eastern Highlands',
        subdivision: null,
      },
      {
        countryCode: 'EPW',
        name: 'Enga',
        subdivision: null,
      },
      {
        countryCode: 'GPK',
        name: 'Gulf',
        subdivision: null,
      },
      {
        countryCode: 'MPM',
        name: 'Madang',
        subdivision: null,
      },
      {
        countryCode: 'MRL',
        name: 'Manus',
        subdivision: null,
      },
      {
        countryCode: 'MBA',
        name: 'Milne Bay',
        subdivision: null,
      },
      {
        countryCode: 'MPL',
        name: 'Morobe',
        subdivision: null,
      },
      {
        countryCode: 'NCD',
        name: 'National Capital District',
        subdivision: null,
      },
      {
        countryCode: 'NIK',
        name: 'New Ireland',
        subdivision: null,
      },
      {
        countryCode: 'NPP',
        name: 'Northern',
        subdivision: null,
      },
      {
        countryCode: 'SAN',
        name: 'Sandaun',
        subdivision: null,
      },
      {
        countryCode: 'SHM',
        name: 'Southern Highlands',
        subdivision: null,
      },
      {
        countryCode: 'WBK',
        name: 'West New Britain',
        subdivision: null,
      },
      {
        countryCode: 'WPD',
        name: 'Western',
        subdivision: null,
      },
      {
        countryCode: 'WHM',
        name: 'Western Highlands',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PY',
    countryCode3: 'PRY',
    name: 'Paraguay',
    capital: 'Asunción',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: '16',
        name: 'Alto Paraguay',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Alto Paraná',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Amambay',
        subdivision: null,
      },
      {
        countryCode: 'ASU',
        name: 'Asunción',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Boquerón',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Caaguazú',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'Caazapá',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Canindeyú',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Concepción',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Cordillera',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Guairá',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'Itapúa',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Misiones',
        subdivision: null,
      },
      {
        countryCode: '9',
        name: 'Paraguarí',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Presidente Hayes',
        subdivision: null,
      },
      {
        countryCode: '2',
        name: 'San Pedro',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Ñeembucú',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PE',
    countryCode3: 'PER',
    name: 'Peru',
    capital: 'Lima',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'AMA',
        name: 'Amazonas',
        subdivision: null,
      },
      {
        countryCode: 'ANC',
        name: 'Ancash',
        subdivision: null,
      },
      {
        countryCode: 'APU',
        name: 'Apurímac',
        subdivision: null,
      },
      {
        countryCode: 'ARE',
        name: 'Arequipa',
        subdivision: null,
      },
      {
        countryCode: 'AYA',
        name: 'Ayacucho',
        subdivision: null,
      },
      {
        countryCode: 'CAJ',
        name: 'Cajamarca',
        subdivision: null,
      },
      {
        countryCode: 'CUS',
        name: 'Cusco',
        subdivision: null,
      },
      {
        countryCode: 'CAL',
        name: 'El Callao',
        subdivision: null,
      },
      {
        countryCode: 'HUV',
        name: 'Huancavelica',
        subdivision: null,
      },
      {
        countryCode: 'HUC',
        name: 'Huánuco',
        subdivision: null,
      },
      {
        countryCode: 'ICA',
        name: 'Ica',
        subdivision: null,
      },
      {
        countryCode: 'JUN',
        name: 'Junín',
        subdivision: null,
      },
      {
        countryCode: 'LAL',
        name: 'La Libertad',
        subdivision: null,
      },
      {
        countryCode: 'LAM',
        name: 'Lambayeque',
        subdivision: null,
      },
      {
        countryCode: 'LIM',
        name: 'Lima',
        subdivision: null,
      },
      {
        countryCode: 'LOR',
        name: 'Loreto',
        subdivision: null,
      },
      {
        countryCode: 'MDD',
        name: 'Madre de Dios',
        subdivision: null,
      },
      {
        countryCode: 'MOQ',
        name: 'Moquegua',
        subdivision: null,
      },
      {
        countryCode: 'LMA',
        name: 'Municipalidad Metropolitana de Lima',
        subdivision: null,
      },
      {
        countryCode: 'PAS',
        name: 'Pasco',
        subdivision: null,
      },
      {
        countryCode: 'PIU',
        name: 'Piura',
        subdivision: null,
      },
      {
        countryCode: 'PUN',
        name: 'Puno',
        subdivision: null,
      },
      {
        countryCode: 'SAM',
        name: 'San Martín',
        subdivision: null,
      },
      {
        countryCode: 'TAC',
        name: 'Tacna',
        subdivision: null,
      },
      {
        countryCode: 'TUM',
        name: 'Tumbes',
        subdivision: null,
      },
      {
        countryCode: 'UCA',
        name: 'Ucayali',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PH',
    countryCode3: 'PHL',
    name: 'Philippines',
    capital: 'Manila',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '14',
        name: 'Autonomous Region in Muslim Mindanao',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Bicol',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Cagayan Valley',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Calabarzon',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Caraga',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Central Luzon',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Central Visayas',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Cordillera Administrative Region',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Davao',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Eastern Visayas',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Ilocos',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Mimaropa',
        subdivision: null,
      },
      {
        countryCode: '00',
        name: 'National Capital Region',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Northern Mindanao',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Soccsksargen',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Western Visayas',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Zamboanga Peninsula',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PN',
    countryCode3: 'PCN',
    name: 'Pitcairn Islands',
    capital: 'Adamstown',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'PL',
    countryCode3: 'POL',
    name: 'Poland',
    capital: 'Warsaw',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'DS',
        name: 'Dolnośląskie',
        subdivision: null,
      },
      {
        countryCode: 'KP',
        name: 'Kujawsko-pomorskie',
        subdivision: null,
      },
      {
        countryCode: 'LU',
        name: 'Lubelskie',
        subdivision: null,
      },
      {
        countryCode: 'LB',
        name: 'Lubuskie',
        subdivision: null,
      },
      {
        countryCode: 'MZ',
        name: 'Mazowieckie',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Małopolskie',
        subdivision: null,
      },
      {
        countryCode: 'OP',
        name: 'Opolskie',
        subdivision: null,
      },
      {
        countryCode: 'PK',
        name: 'Podkarpackie',
        subdivision: null,
      },
      {
        countryCode: 'PD',
        name: 'Podlaskie',
        subdivision: null,
      },
      {
        countryCode: 'PM',
        name: 'Pomorskie',
        subdivision: null,
      },
      {
        countryCode: 'WN',
        name: 'Warmińsko-mazurskie',
        subdivision: null,
      },
      {
        countryCode: 'WP',
        name: 'Wielkopolskie',
        subdivision: null,
      },
      {
        countryCode: 'ZP',
        name: 'Zachodniopomorskie',
        subdivision: null,
      },
      {
        countryCode: 'LD',
        name: 'Łódzkie',
        subdivision: null,
      },
      {
        countryCode: 'SL',
        name: 'Śląskie',
        subdivision: null,
      },
      {
        countryCode: 'SK',
        name: 'Świętokrzyskie',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PT',
    countryCode3: 'PRT',
    name: 'Portugal',
    capital: 'Lisbon',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Aveiro',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Beja',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Braga',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Bragança',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Castelo Branco',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Coimbra',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Faro',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Guarda',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Leiria',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Lisboa',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Portalegre',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Porto',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Região Autónoma da Madeira',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Região Autónoma dos Açores',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Santarém',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Setúbal',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Viana do Castelo',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Vila Real',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Viseu',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Évora',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'PR',
    countryCode3: 'PRI',
    name: 'Puerto Rico',
    capital: 'San Juan',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'QA',
    countryCode3: 'QAT',
    name: 'Qatar',
    capital: 'Doha',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'DA',
        name: 'Ad Dawḩah',
        subdivision: null,
      },
      {
        countryCode: 'KH',
        name: 'Al Khawr wa adh Dhakhīrah',
        subdivision: null,
      },
      {
        countryCode: 'WA',
        name: 'Al Wakrah',
        subdivision: null,
      },
      {
        countryCode: 'RA',
        name: 'Ar Rayyān',
        subdivision: null,
      },
      {
        countryCode: 'MS',
        name: 'Ash Shamāl',
        subdivision: null,
      },
      {
        countryCode: 'ZA',
        name: 'Az̧ Za̧`āyin',
        subdivision: null,
      },
      {
        countryCode: 'US',
        name: 'Umm Şalāl',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'XK',
    countryCode3: 'KOS',
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [],
  },
  {
    countryCode2: 'RE',
    countryCode3: 'REU',
    name: 'Réunion',
    capital: 'Saint-Denis',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [],
  },
  {
    countryCode2: 'RO',
    countryCode3: 'ROU',
    name: 'Romania',
    capital: 'Bucharest',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'AB',
        name: 'Alba',
        subdivision: null,
      },
      {
        countryCode: 'AR',
        name: 'Arad',
        subdivision: null,
      },
      {
        countryCode: 'AG',
        name: 'Argeș',
        subdivision: null,
      },
      {
        countryCode: 'BC',
        name: 'Bacău',
        subdivision: null,
      },
      {
        countryCode: 'BH',
        name: 'Bihor',
        subdivision: null,
      },
      {
        countryCode: 'BN',
        name: 'Bistrița-Năsăud',
        subdivision: null,
      },
      {
        countryCode: 'BT',
        name: 'Botoșani',
        subdivision: null,
      },
      {
        countryCode: 'BV',
        name: 'Brașov',
        subdivision: null,
      },
      {
        countryCode: 'BR',
        name: 'Brăila',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'București',
        subdivision: null,
      },
      {
        countryCode: 'BZ',
        name: 'Buzău',
        subdivision: null,
      },
      {
        countryCode: 'CS',
        name: 'Caraș-Severin',
        subdivision: null,
      },
      {
        countryCode: 'CJ',
        name: 'Cluj',
        subdivision: null,
      },
      {
        countryCode: 'CT',
        name: 'Constanța',
        subdivision: null,
      },
      {
        countryCode: 'CV',
        name: 'Covasna',
        subdivision: null,
      },
      {
        countryCode: 'CL',
        name: 'Călărași',
        subdivision: null,
      },
      {
        countryCode: 'DJ',
        name: 'Dolj',
        subdivision: null,
      },
      {
        countryCode: 'DB',
        name: 'Dâmbovița',
        subdivision: null,
      },
      {
        countryCode: 'GL',
        name: 'Galați',
        subdivision: null,
      },
      {
        countryCode: 'GR',
        name: 'Giurgiu',
        subdivision: null,
      },
      {
        countryCode: 'GJ',
        name: 'Gorj',
        subdivision: null,
      },
      {
        countryCode: 'HR',
        name: 'Harghita',
        subdivision: null,
      },
      {
        countryCode: 'HD',
        name: 'Hunedoara',
        subdivision: null,
      },
      {
        countryCode: 'IL',
        name: 'Ialomița',
        subdivision: null,
      },
      {
        countryCode: 'IS',
        name: 'Iași',
        subdivision: null,
      },
      {
        countryCode: 'IF',
        name: 'Ilfov',
        subdivision: null,
      },
      {
        countryCode: 'MM',
        name: 'Maramureș',
        subdivision: null,
      },
      {
        countryCode: 'MH',
        name: 'Mehedinți',
        subdivision: null,
      },
      {
        countryCode: 'MS',
        name: 'Mureș',
        subdivision: null,
      },
      {
        countryCode: 'NT',
        name: 'Neamț',
        subdivision: null,
      },
      {
        countryCode: 'OT',
        name: 'Olt',
        subdivision: null,
      },
      {
        countryCode: 'PH',
        name: 'Prahova',
        subdivision: null,
      },
      {
        countryCode: 'SM',
        name: 'Satu Mare',
        subdivision: null,
      },
      {
        countryCode: 'SB',
        name: 'Sibiu',
        subdivision: null,
      },
      {
        countryCode: 'SV',
        name: 'Suceava',
        subdivision: null,
      },
      {
        countryCode: 'SJ',
        name: 'Sălaj',
        subdivision: null,
      },
      {
        countryCode: 'TR',
        name: 'Teleorman',
        subdivision: null,
      },
      {
        countryCode: 'TM',
        name: 'Timiș',
        subdivision: null,
      },
      {
        countryCode: 'TL',
        name: 'Tulcea',
        subdivision: null,
      },
      {
        countryCode: 'VS',
        name: 'Vaslui',
        subdivision: null,
      },
      {
        countryCode: 'VN',
        name: 'Vrancea',
        subdivision: null,
      },
      {
        countryCode: 'VL',
        name: 'Vâlcea',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'RU',
    countryCode3: 'RUS',
    name: 'Russia',
    capital: 'Moscow',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'AMU',
        name: "Amurskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'ARK',
        name: "Arkhangel'skaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'AST',
        name: "Astrakhanskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'BEL',
        name: "Belgorodskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'BRY',
        name: "Bryanskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'CHE',
        name: "Chelyabinskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'IRK',
        name: "Irkutskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'IVA',
        name: "Ivanovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KGD',
        name: "Kaliningradskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KLU',
        name: "Kaluzhskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KEM',
        name: "Kemerovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KIR',
        name: "Kirovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KOS',
        name: "Kostromskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KGN',
        name: "Kurganskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'KRS',
        name: "Kurskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'LEN',
        name: "Leningradskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'LIP',
        name: "Lipetskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'MAG',
        name: "Magadanskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'MOS',
        name: "Moskovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'MUR',
        name: "Murmanskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'NIZ',
        name: "Nizhegorodskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'NGR',
        name: "Novgorodskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'NVS',
        name: "Novosibirskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'OMS',
        name: "Omskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'ORE',
        name: "Orenburgskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'ORL',
        name: "Orlovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'PNZ',
        name: "Penzenskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'PSK',
        name: "Pskovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'ROS',
        name: "Rostovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'RYA',
        name: "Ryazanskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'SAK',
        name: "Sakhalinskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'SAM',
        name: "Samarskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'SAR',
        name: "Saratovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'SMO',
        name: "Smolenskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'SVE',
        name: "Sverdlovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'TAM',
        name: "Tambovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'TOM',
        name: "Tomskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'TUL',
        name: "Tul'skaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'TVE',
        name: "Tverskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'TYU',
        name: "Tyumenskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'ULY',
        name: "Ul'yanovskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'VLA',
        name: "Vladimirskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'VGG',
        name: "Volgogradskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'VLG',
        name: "Vologodskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'VOR',
        name: "Voronezhskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'YAR',
        name: "Yaroslavskaya oblast'",
        subdivision: 'administrative region',
      },
      {
        countryCode: 'ALT',
        name: 'Altayskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'KAM',
        name: 'Kamchatskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'KHA',
        name: 'Khabarovskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'KDA',
        name: 'Krasnodarskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'KYA',
        name: 'Krasnoyarskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'PER',
        name: 'Permskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'PRI',
        name: 'Primorskiy kray',
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'STA',
        name: "Stavropol'skiy kray",
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'ZAB',
        name: "Zabaykal'skiy kray",
        subdivision: 'administrative territory',
      },
      {
        countryCode: 'MOW',
        name: 'Moskva',
        subdivision: 'autonomous city',
      },
      {
        countryCode: 'SPE',
        name: 'Sankt-Peterburg',
        subdivision: 'autonomous city',
      },
      {
        countryCode: 'CHU',
        name: 'Chukotskiy avtonomnyy okrug',
        subdivision: 'autonomous district',
      },
      {
        countryCode: 'KHM',
        name: 'Khanty-Mansiyskiy avtonomnyy okrug-Yugra',
        subdivision: 'autonomous district',
      },
      {
        countryCode: 'NEN',
        name: 'Nenetskiy avtonomnyy okrug',
        subdivision: 'autonomous district',
      },
      {
        countryCode: 'YAN',
        name: 'Yamalo-Nenetskiy avtonomnyy okrug',
        subdivision: 'autonomous district',
      },
      {
        countryCode: 'YEV',
        name: "Yevreyskaya avtonomnaya oblast'",
        subdivision: 'autonomous region',
      },
      {
        countryCode: 'AD',
        name: 'Adygeya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'AL',
        name: 'Altay, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'BA',
        name: 'Bashkortostan, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'BU',
        name: 'Buryatiya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'CE',
        name: 'Chechenskaya Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'CU',
        name: 'Chuvashskaya Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'DA',
        name: 'Dagestan, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'IN',
        name: 'Ingushetiya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'KB',
        name: 'Kabardino-Balkarskaya Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'KL',
        name: 'Kalmykiya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'KC',
        name: 'Karachayevo-Cherkesskaya Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'KR',
        name: 'Kareliya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'KK',
        name: 'Khakasiya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'KO',
        name: 'Komi, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'ME',
        name: 'Mariy El, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'MO',
        name: 'Mordoviya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'SA',
        name: 'Sakha, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'SE',
        name: 'Severnaya Osetiya-Alaniya, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'TA',
        name: 'Tatarstan, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'TY',
        name: 'Tyva, Respublika',
        subdivision: 'republic',
      },
      {
        countryCode: 'UD',
        name: 'Udmurtskaya Respublika',
        subdivision: 'republic',
      },
    ],
  },
  {
    countryCode2: 'RW',
    countryCode3: 'RWA',
    name: 'Rwanda',
    capital: 'Kigali',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: '02',
        name: 'Est',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Nord',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Ouest',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Sud',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Ville de Kigali',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'BL',
    countryCode3: 'BLM',
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'SH',
    countryCode3: 'SHN',
    name: 'Saint Helena',
    capital: 'Jamestown',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'AC',
        name: 'Ascension',
        subdivision: null,
      },
      {
        countryCode: 'HL',
        name: 'Saint Helena',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tristan da Cunha',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'KN',
    countryCode3: 'KNA',
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: 'N',
        name: 'Nevis',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Saint Kitts',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'LC',
    countryCode3: 'LCA',
    name: 'Saint Lucia',
    capital: 'Castries',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '01',
        name: 'Anse la Raye',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Castries',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Choiseul',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Dauphin',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Dennery',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Gros Islet',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Laborie',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Micoud',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Praslin',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Soufrière',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Vieux Fort',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'MF',
    countryCode3: 'MAF',
    name: 'Saint Martin',
    capital: 'Marigot',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'PM',
    countryCode3: 'SPM',
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    region: 'Americas',
    subregion: 'Northern America',
    states: [],
  },
  {
    countryCode2: 'VC',
    countryCode3: 'VCT',
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: '01',
        name: 'Charlotte',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Grenadines',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Saint Andrew',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Saint David',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Saint George',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Saint Patrick',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'WS',
    countryCode3: 'WSM',
    name: 'Samoa',
    capital: 'Apia',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [
      {
        countryCode: 'AA',
        name: "A'ana",
        subdivision: null,
      },
      {
        countryCode: 'AL',
        name: 'Aiga-i-le-Tai',
        subdivision: null,
      },
      {
        countryCode: 'AT',
        name: 'Atua',
        subdivision: null,
      },
      {
        countryCode: 'FA',
        name: "Fa'asaleleaga",
        subdivision: null,
      },
      {
        countryCode: 'GE',
        name: "Gaga'emauga",
        subdivision: null,
      },
      {
        countryCode: 'GI',
        name: 'Gagaifomauga',
        subdivision: null,
      },
      {
        countryCode: 'PA',
        name: 'Palauli',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: "Satupa'itea",
        subdivision: null,
      },
      {
        countryCode: 'TU',
        name: 'Tuamasaga',
        subdivision: null,
      },
      {
        countryCode: 'VF',
        name: "Va'a-o-Fonoti",
        subdivision: null,
      },
      {
        countryCode: 'VS',
        name: 'Vaisigano',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SM',
    countryCode3: 'SMR',
    name: 'San Marino',
    capital: 'City of San Marino',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '01',
        name: 'Acquaviva',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Borgo Maggiore',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Chiesanuova',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Domagnano',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Faetano',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Fiorentino',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Montegiardino',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'San Marino',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Serravalle',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ST',
    countryCode3: 'STP',
    name: 'São Tomé and Príncipe',
    capital: 'São Tomé',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'P',
        name: 'Príncipe',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'São Tomé',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SA',
    countryCode3: 'SAU',
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: '11',
        name: 'Al Bāḩah',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Al Jawf',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Al Madīnah',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Al Qaşīm',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Al Ḩudūd ash Shamālīyah',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Ar Riyāḑ',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Ash Sharqīyah',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Jīzān',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Makkah',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Najrān',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Tabūk',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'ٰĀsīr',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: "Ḩā'il",
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SN',
    countryCode3: 'SEN',
    name: 'Senegal',
    capital: 'Dakar',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'DK',
        name: 'Dakar',
        subdivision: null,
      },
      {
        countryCode: 'DB',
        name: 'Diourbel',
        subdivision: null,
      },
      {
        countryCode: 'FK',
        name: 'Fatick',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Kaffrine',
        subdivision: null,
      },
      {
        countryCode: 'KL',
        name: 'Kaolack',
        subdivision: null,
      },
      {
        countryCode: 'KD',
        name: 'Kolda',
        subdivision: null,
      },
      {
        countryCode: 'KE',
        name: 'Kédougou',
        subdivision: null,
      },
      {
        countryCode: 'LG',
        name: 'Louga',
        subdivision: null,
      },
      {
        countryCode: 'MT',
        name: 'Matam',
        subdivision: null,
      },
      {
        countryCode: 'SL',
        name: 'Saint-Louis',
        subdivision: null,
      },
      {
        countryCode: 'SE',
        name: 'Sédhiou',
        subdivision: null,
      },
      {
        countryCode: 'TC',
        name: 'Tambacounda',
        subdivision: null,
      },
      {
        countryCode: 'TH',
        name: 'Thiès',
        subdivision: null,
      },
      {
        countryCode: 'ZG',
        name: 'Ziguinchor',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'RS',
    countryCode3: 'SRB',
    name: 'Serbia',
    capital: 'Belgrade',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: 'KM',
        name: 'Kosovo-Metohija',
        subdivision: null,
      },
      {
        countryCode: 'VO',
        name: 'Vojvodina',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SC',
    countryCode3: 'SYC',
    name: 'Seychelles',
    capital: 'Victoria',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: '02',
        name: 'Anse Boileau',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Anse Etoile',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Anse Royale',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Anse aux Pins',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Au Cap',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Baie Lazare',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Baie Sainte Anne',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Beau Vallon',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Bel Air',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Bel Ombre',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Cascade',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'English River',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Glacis',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Grand Anse Mahe',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Grand Anse Praslin',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'La Digue',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Les Mamelles',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Mont Buxton',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Mont Fleuri',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Plaisance',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Pointe Larue',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Port Glaud',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Roche Caiman',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Saint Louis',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Takamaka',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SL',
    countryCode3: 'SLE',
    name: 'Sierra Leone',
    capital: 'Freetown',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'E',
        name: 'Eastern',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Northern',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Southern',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Western Area',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SG',
    countryCode3: 'SGP',
    name: 'Singapore',
    capital: 'Singapore',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '01',
        name: 'Central Singapore',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'North East',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'North West',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'South East',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'South West',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SX',
    countryCode3: 'SXM',
    name: 'Sint Maarten',
    capital: 'Philipsburg',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'SK',
    countryCode3: 'SVK',
    name: 'Slovakia',
    capital: 'Bratislava',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: 'BC',
        name: 'Banskobystrický kraj',
        subdivision: null,
      },
      {
        countryCode: 'BL',
        name: 'Bratislavský kraj',
        subdivision: null,
      },
      {
        countryCode: 'KI',
        name: 'Košický kraj',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Nitriansky kraj',
        subdivision: null,
      },
      {
        countryCode: 'PV',
        name: 'Prešovský kraj',
        subdivision: null,
      },
      {
        countryCode: 'TC',
        name: 'Trenčiansky kraj',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Trnavský kraj',
        subdivision: null,
      },
      {
        countryCode: 'ZI',
        name: 'Žilinský kraj',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SI',
    countryCode3: 'SVN',
    name: 'Slovenia',
    capital: 'Ljubljana',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: '001',
        name: 'Ajdovščina',
        subdivision: null,
      },
      {
        countryCode: '195',
        name: 'Apače',
        subdivision: null,
      },
      {
        countryCode: '002',
        name: 'Beltinci',
        subdivision: null,
      },
      {
        countryCode: '148',
        name: 'Benedikt',
        subdivision: null,
      },
      {
        countryCode: '149',
        name: 'Bistrica ob Sotli',
        subdivision: null,
      },
      {
        countryCode: '003',
        name: 'Bled',
        subdivision: null,
      },
      {
        countryCode: '150',
        name: 'Bloke',
        subdivision: null,
      },
      {
        countryCode: '004',
        name: 'Bohinj',
        subdivision: null,
      },
      {
        countryCode: '005',
        name: 'Borovnica',
        subdivision: null,
      },
      {
        countryCode: '006',
        name: 'Bovec',
        subdivision: null,
      },
      {
        countryCode: '151',
        name: 'Braslovče',
        subdivision: null,
      },
      {
        countryCode: '007',
        name: 'Brda',
        subdivision: null,
      },
      {
        countryCode: '008',
        name: 'Brezovica',
        subdivision: null,
      },
      {
        countryCode: '009',
        name: 'Brežice',
        subdivision: null,
      },
      {
        countryCode: '152',
        name: 'Cankova',
        subdivision: null,
      },
      {
        countryCode: '011',
        name: 'Celje',
        subdivision: null,
      },
      {
        countryCode: '012',
        name: 'Cerklje na Gorenjskem',
        subdivision: null,
      },
      {
        countryCode: '013',
        name: 'Cerknica',
        subdivision: null,
      },
      {
        countryCode: '014',
        name: 'Cerkno',
        subdivision: null,
      },
      {
        countryCode: '153',
        name: 'Cerkvenjak',
        subdivision: null,
      },
      {
        countryCode: '196',
        name: 'Cirkulane',
        subdivision: null,
      },
      {
        countryCode: '018',
        name: 'Destrnik',
        subdivision: null,
      },
      {
        countryCode: '019',
        name: 'Divača',
        subdivision: null,
      },
      {
        countryCode: '154',
        name: 'Dobje',
        subdivision: null,
      },
      {
        countryCode: '020',
        name: 'Dobrepolje',
        subdivision: null,
      },
      {
        countryCode: '155',
        name: 'Dobrna',
        subdivision: null,
      },
      {
        countryCode: '021',
        name: 'Dobrova–Polhov Gradec',
        subdivision: null,
      },
      {
        countryCode: '156',
        name: 'Dobrovnik',
        subdivision: null,
      },
      {
        countryCode: '022',
        name: 'Dol pri Ljubljani',
        subdivision: null,
      },
      {
        countryCode: '157',
        name: 'Dolenjske Toplice',
        subdivision: null,
      },
      {
        countryCode: '023',
        name: 'Domžale',
        subdivision: null,
      },
      {
        countryCode: '024',
        name: 'Dornava',
        subdivision: null,
      },
      {
        countryCode: '025',
        name: 'Dravograd',
        subdivision: null,
      },
      {
        countryCode: '026',
        name: 'Duplek',
        subdivision: null,
      },
      {
        countryCode: '027',
        name: 'Gorenja vas–Poljane',
        subdivision: null,
      },
      {
        countryCode: '028',
        name: 'Gorišnica',
        subdivision: null,
      },
      {
        countryCode: '207',
        name: 'Gorje',
        subdivision: null,
      },
      {
        countryCode: '029',
        name: 'Gornja Radgona',
        subdivision: null,
      },
      {
        countryCode: '030',
        name: 'Gornji Grad',
        subdivision: null,
      },
      {
        countryCode: '031',
        name: 'Gornji Petrovci',
        subdivision: null,
      },
      {
        countryCode: '158',
        name: 'Grad',
        subdivision: null,
      },
      {
        countryCode: '032',
        name: 'Grosuplje',
        subdivision: null,
      },
      {
        countryCode: '159',
        name: 'Hajdina',
        subdivision: null,
      },
      {
        countryCode: '161',
        name: 'Hodoš',
        subdivision: null,
      },
      {
        countryCode: '162',
        name: 'Horjul',
        subdivision: null,
      },
      {
        countryCode: '160',
        name: 'Hoče–Slivnica',
        subdivision: null,
      },
      {
        countryCode: '034',
        name: 'Hrastnik',
        subdivision: null,
      },
      {
        countryCode: '035',
        name: 'Hrpelje-Kozina',
        subdivision: null,
      },
      {
        countryCode: '036',
        name: 'Idrija',
        subdivision: null,
      },
      {
        countryCode: '037',
        name: 'Ig',
        subdivision: null,
      },
      {
        countryCode: '038',
        name: 'Ilirska Bistrica',
        subdivision: null,
      },
      {
        countryCode: '039',
        name: 'Ivančna Gorica',
        subdivision: null,
      },
      {
        countryCode: '040',
        name: 'Izola',
        subdivision: null,
      },
      {
        countryCode: '041',
        name: 'Jesenice',
        subdivision: null,
      },
      {
        countryCode: '163',
        name: 'Jezersko',
        subdivision: null,
      },
      {
        countryCode: '042',
        name: 'Juršinci',
        subdivision: null,
      },
      {
        countryCode: '043',
        name: 'Kamnik',
        subdivision: null,
      },
      {
        countryCode: '044',
        name: 'Kanal',
        subdivision: null,
      },
      {
        countryCode: '045',
        name: 'Kidričevo',
        subdivision: null,
      },
      {
        countryCode: '046',
        name: 'Kobarid',
        subdivision: null,
      },
      {
        countryCode: '047',
        name: 'Kobilje',
        subdivision: null,
      },
      {
        countryCode: '049',
        name: 'Komen',
        subdivision: null,
      },
      {
        countryCode: '164',
        name: 'Komenda',
        subdivision: null,
      },
      {
        countryCode: '050',
        name: 'Koper',
        subdivision: null,
      },
      {
        countryCode: '197',
        name: 'Kosanjevica na Krki',
        subdivision: null,
      },
      {
        countryCode: '165',
        name: 'Kostel',
        subdivision: null,
      },
      {
        countryCode: '051',
        name: 'Kozje',
        subdivision: null,
      },
      {
        countryCode: '048',
        name: 'Kočevje',
        subdivision: null,
      },
      {
        countryCode: '052',
        name: 'Kranj',
        subdivision: null,
      },
      {
        countryCode: '053',
        name: 'Kranjska Gora',
        subdivision: null,
      },
      {
        countryCode: '166',
        name: 'Križevci',
        subdivision: null,
      },
      {
        countryCode: '054',
        name: 'Krško',
        subdivision: null,
      },
      {
        countryCode: '055',
        name: 'Kungota',
        subdivision: null,
      },
      {
        countryCode: '056',
        name: 'Kuzma',
        subdivision: null,
      },
      {
        countryCode: '057',
        name: 'Laško',
        subdivision: null,
      },
      {
        countryCode: '058',
        name: 'Lenart',
        subdivision: null,
      },
      {
        countryCode: '059',
        name: 'Lendava',
        subdivision: null,
      },
      {
        countryCode: '060',
        name: 'Litija',
        subdivision: null,
      },
      {
        countryCode: '061',
        name: 'Ljubljana',
        subdivision: null,
      },
      {
        countryCode: '062',
        name: 'Ljubno',
        subdivision: null,
      },
      {
        countryCode: '063',
        name: 'Ljutomer',
        subdivision: null,
      },
      {
        countryCode: '208',
        name: 'Log-Dragomer',
        subdivision: null,
      },
      {
        countryCode: '064',
        name: 'Logatec',
        subdivision: null,
      },
      {
        countryCode: '167',
        name: 'Lovrenc na Pohorju',
        subdivision: null,
      },
      {
        countryCode: '065',
        name: 'Loška Dolina',
        subdivision: null,
      },
      {
        countryCode: '066',
        name: 'Loški Potok',
        subdivision: null,
      },
      {
        countryCode: '068',
        name: 'Lukovica',
        subdivision: null,
      },
      {
        countryCode: '067',
        name: 'Luče',
        subdivision: null,
      },
      {
        countryCode: '069',
        name: 'Majšperk',
        subdivision: null,
      },
      {
        countryCode: '198',
        name: 'Makole',
        subdivision: null,
      },
      {
        countryCode: '070',
        name: 'Maribor',
        subdivision: null,
      },
      {
        countryCode: '168',
        name: 'Markovci',
        subdivision: null,
      },
      {
        countryCode: '071',
        name: 'Medvode',
        subdivision: null,
      },
      {
        countryCode: '072',
        name: 'Mengeš',
        subdivision: null,
      },
      {
        countryCode: '073',
        name: 'Metlika',
        subdivision: null,
      },
      {
        countryCode: '074',
        name: 'Mežica',
        subdivision: null,
      },
      {
        countryCode: '169',
        name: 'Miklavž na Dravskem Polju',
        subdivision: null,
      },
      {
        countryCode: '075',
        name: 'Miren–Kostanjevica',
        subdivision: null,
      },
      {
        countryCode: '170',
        name: 'Mirna Peč',
        subdivision: null,
      },
      {
        countryCode: '076',
        name: 'Mislinja',
        subdivision: null,
      },
      {
        countryCode: '199',
        name: 'Mokronog–Trebelno',
        subdivision: null,
      },
      {
        countryCode: '078',
        name: 'Moravske Toplice',
        subdivision: null,
      },
      {
        countryCode: '077',
        name: 'Moravče',
        subdivision: null,
      },
      {
        countryCode: '079',
        name: 'Mozirje',
        subdivision: null,
      },
      {
        countryCode: '080',
        name: 'Murska Sobota',
        subdivision: null,
      },
      {
        countryCode: '081',
        name: 'Muta',
        subdivision: null,
      },
      {
        countryCode: '082',
        name: 'Naklo',
        subdivision: null,
      },
      {
        countryCode: '083',
        name: 'Nazarje',
        subdivision: null,
      },
      {
        countryCode: '084',
        name: 'Nova Gorica',
        subdivision: null,
      },
      {
        countryCode: '085',
        name: 'Novo Mesto',
        subdivision: null,
      },
      {
        countryCode: '086',
        name: 'Odranci',
        subdivision: null,
      },
      {
        countryCode: '171',
        name: 'Oplotnica',
        subdivision: null,
      },
      {
        countryCode: '087',
        name: 'Ormož',
        subdivision: null,
      },
      {
        countryCode: '088',
        name: 'Osilnica',
        subdivision: null,
      },
      {
        countryCode: '089',
        name: 'Pesnica',
        subdivision: null,
      },
      {
        countryCode: '090',
        name: 'Piran',
        subdivision: null,
      },
      {
        countryCode: '091',
        name: 'Pivka',
        subdivision: null,
      },
      {
        countryCode: '172',
        name: 'Podlehnik',
        subdivision: null,
      },
      {
        countryCode: '093',
        name: 'Podvelka',
        subdivision: null,
      },
      {
        countryCode: '092',
        name: 'Podčetrtek',
        subdivision: null,
      },
      {
        countryCode: '200',
        name: 'Poljčane',
        subdivision: null,
      },
      {
        countryCode: '173',
        name: 'Polzela',
        subdivision: null,
      },
      {
        countryCode: '094',
        name: 'Postojna',
        subdivision: null,
      },
      {
        countryCode: '174',
        name: 'Prebold',
        subdivision: null,
      },
      {
        countryCode: '095',
        name: 'Preddvor',
        subdivision: null,
      },
      {
        countryCode: '175',
        name: 'Prevalje',
        subdivision: null,
      },
      {
        countryCode: '096',
        name: 'Ptuj',
        subdivision: null,
      },
      {
        countryCode: '097',
        name: 'Puconci',
        subdivision: null,
      },
      {
        countryCode: '100',
        name: 'Radenci',
        subdivision: null,
      },
      {
        countryCode: '099',
        name: 'Radeče',
        subdivision: null,
      },
      {
        countryCode: '101',
        name: 'Radlje ob Dravi',
        subdivision: null,
      },
      {
        countryCode: '102',
        name: 'Radovljica',
        subdivision: null,
      },
      {
        countryCode: '103',
        name: 'Ravne na Koroškem',
        subdivision: null,
      },
      {
        countryCode: '176',
        name: 'Razkrižje',
        subdivision: null,
      },
      {
        countryCode: '098',
        name: 'Rače–Fram',
        subdivision: null,
      },
      {
        countryCode: '201',
        name: 'Renče-Vogrsko',
        subdivision: null,
      },
      {
        countryCode: '209',
        name: 'Rečica ob Savinji',
        subdivision: null,
      },
      {
        countryCode: '104',
        name: 'Ribnica',
        subdivision: null,
      },
      {
        countryCode: '177',
        name: 'Ribnica na Pohorju',
        subdivision: null,
      },
      {
        countryCode: '107',
        name: 'Rogatec',
        subdivision: null,
      },
      {
        countryCode: '106',
        name: 'Rogaška Slatina',
        subdivision: null,
      },
      {
        countryCode: '105',
        name: 'Rogašovci',
        subdivision: null,
      },
      {
        countryCode: '108',
        name: 'Ruše',
        subdivision: null,
      },
      {
        countryCode: '178',
        name: 'Selnica ob Dravi',
        subdivision: null,
      },
      {
        countryCode: '109',
        name: 'Semič',
        subdivision: null,
      },
      {
        countryCode: '110',
        name: 'Sevnica',
        subdivision: null,
      },
      {
        countryCode: '111',
        name: 'Sežana',
        subdivision: null,
      },
      {
        countryCode: '112',
        name: 'Slovenj Gradec',
        subdivision: null,
      },
      {
        countryCode: '113',
        name: 'Slovenska Bistrica',
        subdivision: null,
      },
      {
        countryCode: '114',
        name: 'Slovenske Konjice',
        subdivision: null,
      },
      {
        countryCode: '179',
        name: 'Sodražica',
        subdivision: null,
      },
      {
        countryCode: '180',
        name: 'Solčava',
        subdivision: null,
      },
      {
        countryCode: '202',
        name: 'Središče ob Dravi',
        subdivision: null,
      },
      {
        countryCode: '115',
        name: 'Starše',
        subdivision: null,
      },
      {
        countryCode: '203',
        name: 'Straža',
        subdivision: null,
      },
      {
        countryCode: '181',
        name: 'Sveta Ana',
        subdivision: null,
      },
      {
        countryCode: '204',
        name: 'Sveta Trojica v Slovenskih Goricah',
        subdivision: null,
      },
      {
        countryCode: '182',
        name: 'Sveti Andraž v Slovenskih Goricah',
        subdivision: null,
      },
      {
        countryCode: '116',
        name: 'Sveti Jurij',
        subdivision: null,
      },
      {
        countryCode: '210',
        name: 'Sveti Jurij v Slovenskih Goricah',
        subdivision: null,
      },
      {
        countryCode: '205',
        name: 'Sveti Tomaž',
        subdivision: null,
      },
      {
        countryCode: '184',
        name: 'Tabor',
        subdivision: null,
      },
      {
        countryCode: '010',
        name: 'Tišina',
        subdivision: null,
      },
      {
        countryCode: '128',
        name: 'Tolmin',
        subdivision: null,
      },
      {
        countryCode: '129',
        name: 'Trbovlje',
        subdivision: null,
      },
      {
        countryCode: '130',
        name: 'Trebnje',
        subdivision: null,
      },
      {
        countryCode: '185',
        name: 'Trnovska Vas',
        subdivision: null,
      },
      {
        countryCode: '186',
        name: 'Trzin',
        subdivision: null,
      },
      {
        countryCode: '131',
        name: 'Tržič',
        subdivision: null,
      },
      {
        countryCode: '132',
        name: 'Turnišče',
        subdivision: null,
      },
      {
        countryCode: '133',
        name: 'Velenje',
        subdivision: null,
      },
      {
        countryCode: '187',
        name: 'Velika Polana',
        subdivision: null,
      },
      {
        countryCode: '134',
        name: 'Velike Lašče',
        subdivision: null,
      },
      {
        countryCode: '188',
        name: 'Veržej',
        subdivision: null,
      },
      {
        countryCode: '135',
        name: 'Videm',
        subdivision: null,
      },
      {
        countryCode: '136',
        name: 'Vipava',
        subdivision: null,
      },
      {
        countryCode: '137',
        name: 'Vitanje',
        subdivision: null,
      },
      {
        countryCode: '138',
        name: 'Vodice',
        subdivision: null,
      },
      {
        countryCode: '139',
        name: 'Vojnik',
        subdivision: null,
      },
      {
        countryCode: '189',
        name: 'Vransko',
        subdivision: null,
      },
      {
        countryCode: '140',
        name: 'Vrhnika',
        subdivision: null,
      },
      {
        countryCode: '141',
        name: 'Vuzenica',
        subdivision: null,
      },
      {
        countryCode: '142',
        name: 'Zagorje ob Savi',
        subdivision: null,
      },
      {
        countryCode: '143',
        name: 'Zavrč',
        subdivision: null,
      },
      {
        countryCode: '144',
        name: 'Zreče',
        subdivision: null,
      },
      {
        countryCode: '015',
        name: 'Črenšovci',
        subdivision: null,
      },
      {
        countryCode: '016',
        name: 'Črna na Koroškem',
        subdivision: null,
      },
      {
        countryCode: '017',
        name: 'Črnomelj',
        subdivision: null,
      },
      {
        countryCode: '033',
        name: 'Šalovci',
        subdivision: null,
      },
      {
        countryCode: '183',
        name: 'Šempeter–Vrtojba',
        subdivision: null,
      },
      {
        countryCode: '118',
        name: 'Šentilj',
        subdivision: null,
      },
      {
        countryCode: '119',
        name: 'Šentjernej',
        subdivision: null,
      },
      {
        countryCode: '120',
        name: 'Šentjur',
        subdivision: null,
      },
      {
        countryCode: '211',
        name: 'Šentrupert',
        subdivision: null,
      },
      {
        countryCode: '117',
        name: 'Šenčur',
        subdivision: null,
      },
      {
        countryCode: '121',
        name: 'Škocjan',
        subdivision: null,
      },
      {
        countryCode: '122',
        name: 'Škofja Loka',
        subdivision: null,
      },
      {
        countryCode: '123',
        name: 'Škofljica',
        subdivision: null,
      },
      {
        countryCode: '124',
        name: 'Šmarje pri Jelšah',
        subdivision: null,
      },
      {
        countryCode: '206',
        name: 'Šmarješke Toplice',
        subdivision: null,
      },
      {
        countryCode: '125',
        name: 'Šmartno ob Paki',
        subdivision: null,
      },
      {
        countryCode: '194',
        name: 'Šmartno pri Litiji',
        subdivision: null,
      },
      {
        countryCode: '126',
        name: 'Šoštanj',
        subdivision: null,
      },
      {
        countryCode: '127',
        name: 'Štore',
        subdivision: null,
      },
      {
        countryCode: '190',
        name: 'Žalec',
        subdivision: null,
      },
      {
        countryCode: '146',
        name: 'Železniki',
        subdivision: null,
      },
      {
        countryCode: '191',
        name: 'Žetale',
        subdivision: null,
      },
      {
        countryCode: '147',
        name: 'Žiri',
        subdivision: null,
      },
      {
        countryCode: '192',
        name: 'Žirovnica',
        subdivision: null,
      },
      {
        countryCode: '193',
        name: 'Žužemberk',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SB',
    countryCode3: 'SLB',
    name: 'Solomon Islands',
    capital: 'Honiara',
    region: 'Oceania',
    subregion: 'Melanesia',
    states: [
      {
        countryCode: 'CT',
        name: 'Capital Territory',
        subdivision: null,
      },
      {
        countryCode: 'CE',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'CH',
        name: 'Choiseul',
        subdivision: null,
      },
      {
        countryCode: 'GU',
        name: 'Guadalcanal',
        subdivision: null,
      },
      {
        countryCode: 'IS',
        name: 'Isabel',
        subdivision: null,
      },
      {
        countryCode: 'MK',
        name: 'Makira-Ulawa',
        subdivision: null,
      },
      {
        countryCode: 'ML',
        name: 'Malaita',
        subdivision: null,
      },
      {
        countryCode: 'RB',
        name: 'Rennell and Bellona',
        subdivision: null,
      },
      {
        countryCode: 'TE',
        name: 'Temotu',
        subdivision: null,
      },
      {
        countryCode: 'WE',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SO',
    countryCode3: 'SOM',
    name: 'Somalia',
    capital: 'Mogadishu',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'AW',
        name: 'Awdal',
        subdivision: null,
      },
      {
        countryCode: 'BK',
        name: 'Bakool',
        subdivision: null,
      },
      {
        countryCode: 'BN',
        name: 'Banaadir',
        subdivision: null,
      },
      {
        countryCode: 'BR',
        name: 'Bari',
        subdivision: null,
      },
      {
        countryCode: 'BY',
        name: 'Bay',
        subdivision: null,
      },
      {
        countryCode: 'GA',
        name: 'Galguduud',
        subdivision: null,
      },
      {
        countryCode: 'GE',
        name: 'Gedo',
        subdivision: null,
      },
      {
        countryCode: 'HI',
        name: 'Hiiraan',
        subdivision: null,
      },
      {
        countryCode: 'JD',
        name: 'Jubbada Dhexe',
        subdivision: null,
      },
      {
        countryCode: 'JH',
        name: 'Jubbada Hoose',
        subdivision: null,
      },
      {
        countryCode: 'MU',
        name: 'Mudug',
        subdivision: null,
      },
      {
        countryCode: 'NU',
        name: 'Nugaal',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Sanaag',
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Shabeellaha Dhexe',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Shabeellaha Hoose',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Sool',
        subdivision: null,
      },
      {
        countryCode: 'TO',
        name: 'Togdheer',
        subdivision: null,
      },
      {
        countryCode: 'WO',
        name: 'Woqooyi Galbeed',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ZA',
    countryCode3: 'ZAF',
    name: 'South Africa',
    capital: 'Pretoria',
    region: 'Africa',
    subregion: 'Southern Africa',
    states: [
      {
        countryCode: 'EC',
        name: 'Eastern Cape',
        subdivision: null,
      },
      {
        countryCode: 'FS',
        name: 'Free State',
        subdivision: null,
      },
      {
        countryCode: 'GT',
        name: 'Gauteng',
        subdivision: null,
      },
      {
        countryCode: 'NL',
        name: 'KwaZulu-Natal',
        subdivision: null,
      },
      {
        countryCode: 'LP',
        name: 'Limpopo',
        subdivision: null,
      },
      {
        countryCode: 'MP',
        name: 'Mpumalanga',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'North West',
        subdivision: null,
      },
      {
        countryCode: 'NC',
        name: 'Northern Cape',
        subdivision: null,
      },
      {
        countryCode: 'WC',
        name: 'Western Cape',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GS',
    countryCode3: 'SGS',
    name: 'South Georgia',
    capital: 'King Edward Point',
    region: 'Americas',
    subregion: 'South America',
    states: [],
  },
  {
    countryCode2: 'KR',
    countryCode3: 'KOR',
    name: 'South Korea',
    capital: 'Seoul',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [
      {
        countryCode: '26',
        name: 'Busan-gwangyeoksi',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Chungcheongbuk-do',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Chungcheongnam-do',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Daegu-gwangyeoksi',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Daejeon-gwangyeoksi',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Gangwon-do',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Gwangju-gwangyeoksi',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Gyeonggi-do',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Gyeongsangbuk-do',
        subdivision: null,
      },
      {
        countryCode: '48',
        name: 'Gyeongsangnam-do',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Incheon-gwangyeoksi',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'Jeju-teukbyeoljachido',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Jeollabuk-do',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Jeollanam-do',
        subdivision: null,
      },
      {
        countryCode: '50',
        name: 'Sejong',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Seoul-teukbyeolsi',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Ulsan-gwangyeoksi',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SS',
    countryCode3: 'SSD',
    name: 'South Sudan',
    capital: 'Juba',
    region: 'Africa',
    subregion: 'Middle Africa',
    states: [
      {
        countryCode: 'EC',
        name: 'Central Equatoria',
        subdivision: null,
      },
      {
        countryCode: 'EE',
        name: 'Eastern Equatoria',
        subdivision: null,
      },
      {
        countryCode: 'JG',
        name: 'Jonglei',
        subdivision: null,
      },
      {
        countryCode: 'LK',
        name: 'Lakes',
        subdivision: null,
      },
      {
        countryCode: 'BN',
        name: 'Northern Bahr el Ghazal',
        subdivision: null,
      },
      {
        countryCode: 'UY',
        name: 'Unity',
        subdivision: null,
      },
      {
        countryCode: 'NU',
        name: 'Upper Nile',
        subdivision: null,
      },
      {
        countryCode: 'WR',
        name: 'Warrap',
        subdivision: null,
      },
      {
        countryCode: 'BW',
        name: 'Western Bahr el Ghazal',
        subdivision: null,
      },
      {
        countryCode: 'EW',
        name: 'Western Equatoria',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ES',
    countryCode3: 'ESP',
    name: 'Spain',
    capital: 'Madrid',
    region: 'Europe',
    subregion: 'Southern Europe',
    states: [
      {
        countryCode: 'C',
        name: 'A Coruña',
        subdivision: 'Province',
      },
      {
        countryCode: 'AB',
        name: 'Albacete',
        subdivision: 'Province',
      },
      {
        countryCode: 'A',
        name: 'Alicante',
        subdivision: 'Province',
      },
      {
        countryCode: 'AL',
        name: 'Almería',
        subdivision: 'Province',
      },
      {
        countryCode: 'O',
        name: 'Asturias',
        subdivision: 'Province',
      },
      {
        countryCode: 'BA',
        name: 'Badajoz',
        subdivision: 'Province',
      },
      {
        countryCode: 'PM',
        name: 'Balears',
        subdivision: 'Province',
      },
      {
        countryCode: 'B',
        name: 'Barcelona',
        subdivision: 'Province',
      },
      {
        countryCode: 'BU',
        name: 'Burgos',
        subdivision: 'Province',
      },
      {
        countryCode: 'S',
        name: 'Cantabria',
        subdivision: 'Province',
      },
      {
        countryCode: 'CS',
        name: 'Castellón',
        subdivision: 'Province',
      },
      {
        countryCode: 'CR',
        name: 'Ciudad Real',
        subdivision: 'Province',
      },
      {
        countryCode: 'CU',
        name: 'Cuenca',
        subdivision: 'Province',
      },
      {
        countryCode: 'CC',
        name: 'Cáceres',
        subdivision: 'Province',
      },
      {
        countryCode: 'CA',
        name: 'Cádiz',
        subdivision: 'Province',
      },
      {
        countryCode: 'CO',
        name: 'Córdoba',
        subdivision: 'Province',
      },
      {
        countryCode: 'GI',
        name: 'Girona',
        subdivision: 'Province',
      },
      {
        countryCode: 'GR',
        name: 'Granada',
        subdivision: 'Province',
      },
      {
        countryCode: 'GU',
        name: 'Guadalajara',
        subdivision: 'Province',
      },
      {
        countryCode: 'SS',
        name: 'Guipúzcoa',
        subdivision: 'Province',
      },
      {
        countryCode: 'H',
        name: 'Huelva',
        subdivision: 'Province',
      },
      {
        countryCode: 'HU',
        name: 'Huesca',
        subdivision: 'Province',
      },
      {
        countryCode: 'J',
        name: 'Jaén',
        subdivision: 'Province',
      },
      {
        countryCode: 'LO',
        name: 'La Rioja',
        subdivision: 'Province',
      },
      {
        countryCode: 'GC',
        name: 'Las Palmas',
        subdivision: 'Province',
      },
      {
        countryCode: 'LE',
        name: 'León',
        subdivision: 'Province',
      },
      {
        countryCode: 'L',
        name: 'Lleida',
        subdivision: 'Province',
      },
      {
        countryCode: 'LU',
        name: 'Lugo',
        subdivision: 'Province',
      },
      {
        countryCode: 'M',
        name: 'Madrid',
        subdivision: 'Province',
      },
      {
        countryCode: 'MU',
        name: 'Murcia',
        subdivision: 'Province',
      },
      {
        countryCode: 'MA',
        name: 'Málaga',
        subdivision: 'Province',
      },
      {
        countryCode: 'NA',
        name: 'Navarra',
        subdivision: 'Province',
      },
      {
        countryCode: 'OR',
        name: 'Ourense',
        subdivision: 'Province',
      },
      {
        countryCode: 'P',
        name: 'Palencia',
        subdivision: 'Province',
      },
      {
        countryCode: 'PO',
        name: 'Pontevedra',
        subdivision: 'Province',
      },
      {
        countryCode: 'SA',
        name: 'Salamanca',
        subdivision: 'Province',
      },
      {
        countryCode: 'TF',
        name: 'Santa Cruz de Tenerife',
        subdivision: 'Province',
      },
      {
        countryCode: 'SG',
        name: 'Segovia',
        subdivision: 'Province',
      },
      {
        countryCode: 'SE',
        name: 'Sevilla',
        subdivision: 'Province',
      },
      {
        countryCode: 'SO',
        name: 'Soria',
        subdivision: 'Province',
      },
      {
        countryCode: 'T',
        name: 'Tarragona',
        subdivision: 'Province',
      },
      {
        countryCode: 'TE',
        name: 'Teruel',
        subdivision: 'Province',
      },
      {
        countryCode: 'TO',
        name: 'Toledo',
        subdivision: 'Province',
      },
      {
        countryCode: 'V',
        name: 'Valencia',
        subdivision: 'Province',
      },
      {
        countryCode: 'VA',
        name: 'Valladolid',
        subdivision: 'Province',
      },
      {
        countryCode: 'BI',
        name: 'Vizcaya',
        subdivision: 'Province',
      },
      {
        countryCode: 'ZA',
        name: 'Zamora',
        subdivision: 'Province',
      },
      {
        countryCode: 'Z',
        name: 'Zaragoza',
        subdivision: 'Province',
      },
      {
        countryCode: 'VI',
        name: 'Álava',
        subdivision: 'Province',
      },
      {
        countryCode: 'AV',
        name: 'Ávila',
        subdivision: 'Province',
      },
      {
        countryCode: 'CE',
        name: 'Ceuta',
        subdivision: 'autonomous city in North Africa',
      },
      {
        countryCode: 'ML',
        name: 'Melilla',
        subdivision: 'autonomous city in North Africa',
      },
      {
        countryCode: 'AN',
        name: 'Andalucía',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'AR',
        name: 'Aragón',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'AS',
        name: 'Asturias, Principado de',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'CN',
        name: 'Canarias',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'CB',
        name: 'Cantabria',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'CL',
        name: 'Castilla y León',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'CM',
        name: 'Castilla-La Mancha',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'CT',
        name: 'Catalunya',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'EX',
        name: 'Extremadura',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'GA',
        name: 'Galicia',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'IB',
        name: 'Illes Balears',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'RI',
        name: 'La Rioja',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'MD',
        name: 'Madrid, Comunidad de',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'MC',
        name: 'Murcia, Región de',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'NC',
        name: 'Navarra, Comunidad Foral de',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'PV',
        name: 'País Vasco',
        subdivision: 'autonomous community',
      },
      {
        countryCode: 'VC',
        name: 'Valenciana, Comunidad',
        subdivision: 'autonomous community',
      },
    ],
  },
  {
    countryCode2: 'LK',
    countryCode3: 'LKA',
    name: 'Sri Lanka',
    capital: 'Colombo',
    region: 'Asia',
    subregion: 'Southern Asia',
    states: [
      {
        countryCode: '2',
        name: 'Central Province',
        subdivision: null,
      },
      {
        countryCode: '5',
        name: 'Eastern Province',
        subdivision: null,
      },
      {
        countryCode: '7',
        name: 'North Central Province',
        subdivision: null,
      },
      {
        countryCode: '6',
        name: 'North Western Province',
        subdivision: null,
      },
      {
        countryCode: '4',
        name: 'Northern Province',
        subdivision: null,
      },
      {
        countryCode: '9',
        name: 'Sabaragamuwa Province',
        subdivision: null,
      },
      {
        countryCode: '3',
        name: 'Southern Province',
        subdivision: null,
      },
      {
        countryCode: '8',
        name: 'Uva Province',
        subdivision: null,
      },
      {
        countryCode: '1',
        name: 'Western Province',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SD',
    countryCode3: 'SDN',
    name: 'Sudan',
    capital: 'Khartoum',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [
      {
        countryCode: 'RS',
        name: 'Al Baḩr al Aḩmar',
        subdivision: null,
      },
      {
        countryCode: 'GZ',
        name: 'Al Jazīrah',
        subdivision: null,
      },
      {
        countryCode: 'KH',
        name: 'Al Kharţūm',
        subdivision: null,
      },
      {
        countryCode: 'GD',
        name: 'Al Qaḑārif',
        subdivision: null,
      },
      {
        countryCode: 'NR',
        name: 'An Nīl',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'An Nīl al Abyaḑ',
        subdivision: null,
      },
      {
        countryCode: 'NB',
        name: 'An Nīl al Azraq',
        subdivision: null,
      },
      {
        countryCode: 'NO',
        name: 'Ash Shamālīyah',
        subdivision: null,
      },
      {
        countryCode: 'DW',
        name: 'Gharb Dārfūr',
        subdivision: null,
      },
      {
        countryCode: 'DS',
        name: 'Janūb Dārfūr',
        subdivision: null,
      },
      {
        countryCode: 'KS',
        name: 'Janūb Kurdufān',
        subdivision: null,
      },
      {
        countryCode: 'KA',
        name: 'Kassalā',
        subdivision: null,
      },
      {
        countryCode: 'DN',
        name: 'Shamāl Dārfūr',
        subdivision: null,
      },
      {
        countryCode: 'KN',
        name: 'Shamāl Kurdufān',
        subdivision: null,
      },
      {
        countryCode: 'DE',
        name: 'Sharq Dārfūr',
        subdivision: null,
      },
      {
        countryCode: 'SI',
        name: 'Sinnār',
        subdivision: null,
      },
      {
        countryCode: 'DC',
        name: 'Zalingei',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SR',
    countryCode3: 'SUR',
    name: 'Suriname',
    capital: 'Paramaribo',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'BR',
        name: 'Brokopondo',
        subdivision: null,
      },
      {
        countryCode: 'CM',
        name: 'Commewijne',
        subdivision: null,
      },
      {
        countryCode: 'CR',
        name: 'Coronie',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Marowijne',
        subdivision: null,
      },
      {
        countryCode: 'NI',
        name: 'Nickerie',
        subdivision: null,
      },
      {
        countryCode: 'PR',
        name: 'Para',
        subdivision: null,
      },
      {
        countryCode: 'PM',
        name: 'Paramaribo',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Saramacca',
        subdivision: null,
      },
      {
        countryCode: 'SI',
        name: 'Sipaliwini',
        subdivision: null,
      },
      {
        countryCode: 'WA',
        name: 'Wanica',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SJ',
    countryCode3: 'SJM',
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [],
  },
  {
    countryCode2: 'SZ',
    countryCode3: 'SWZ',
    name: 'Swaziland',
    capital: 'Lobamba',
    region: 'Africa',
    subregion: 'Southern Africa',
    states: [
      {
        countryCode: 'HH',
        name: 'Hhohho',
        subdivision: null,
      },
      {
        countryCode: 'LU',
        name: 'Lubombo',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Manzini',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Shiselweni',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SE',
    countryCode3: 'SWE',
    name: 'Sweden',
    capital: 'Stockholm',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: 'K',
        name: 'Blekinge län',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Dalarnas län',
        subdivision: null,
      },
      {
        countryCode: 'I',
        name: 'Gotlands län',
        subdivision: null,
      },
      {
        countryCode: 'X',
        name: 'Gävleborgs län',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Hallands län',
        subdivision: null,
      },
      {
        countryCode: 'Z',
        name: 'Jämtlands län',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Jönköpings län',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: 'Kalmar län',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Kronobergs län',
        subdivision: null,
      },
      {
        countryCode: 'BD',
        name: 'Norrbottens län',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Skåne län',
        subdivision: null,
      },
      {
        countryCode: 'AB',
        name: 'Stockholms län',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Södermanlands län',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Uppsala län',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Värmlands län',
        subdivision: null,
      },
      {
        countryCode: 'AC',
        name: 'Västerbottens län',
        subdivision: null,
      },
      {
        countryCode: 'Y',
        name: 'Västernorrlands län',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Västmanlands län',
        subdivision: null,
      },
      {
        countryCode: 'O',
        name: 'Västra Götalands län',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Örebro län',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Östergötlands län',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'CH',
    countryCode3: 'CHE',
    name: 'Switzerland',
    capital: 'Bern',
    region: 'Europe',
    subregion: 'Western Europe',
    states: [
      {
        countryCode: 'AG',
        name: 'Aargau',
        subdivision: null,
      },
      {
        countryCode: 'AR',
        name: 'Appenzell Ausserrhoden',
        subdivision: null,
      },
      {
        countryCode: 'AI',
        name: 'Appenzell Innerrhoden',
        subdivision: null,
      },
      {
        countryCode: 'BL',
        name: 'Basel-Landschaft',
        subdivision: null,
      },
      {
        countryCode: 'BS',
        name: 'Basel-Stadt',
        subdivision: null,
      },
      {
        countryCode: 'BE',
        name: 'Bern',
        subdivision: null,
      },
      {
        countryCode: 'FR',
        name: 'Fribourg',
        subdivision: null,
      },
      {
        countryCode: 'GE',
        name: 'Genève',
        subdivision: null,
      },
      {
        countryCode: 'GL',
        name: 'Glarus',
        subdivision: null,
      },
      {
        countryCode: 'GR',
        name: 'Graubünden',
        subdivision: null,
      },
      {
        countryCode: 'JU',
        name: 'Jura',
        subdivision: null,
      },
      {
        countryCode: 'LU',
        name: 'Luzern',
        subdivision: null,
      },
      {
        countryCode: 'NE',
        name: 'Neuchâtel',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'Nidwalden',
        subdivision: null,
      },
      {
        countryCode: 'OW',
        name: 'Obwalden',
        subdivision: null,
      },
      {
        countryCode: 'SG',
        name: 'Sankt Gallen',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Schaffhausen',
        subdivision: null,
      },
      {
        countryCode: 'SZ',
        name: 'Schwyz',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Solothurn',
        subdivision: null,
      },
      {
        countryCode: 'TG',
        name: 'Thurgau',
        subdivision: null,
      },
      {
        countryCode: 'TI',
        name: 'Ticino',
        subdivision: null,
      },
      {
        countryCode: 'UR',
        name: 'Uri',
        subdivision: null,
      },
      {
        countryCode: 'VS',
        name: 'Valais',
        subdivision: null,
      },
      {
        countryCode: 'VD',
        name: 'Vaud',
        subdivision: null,
      },
      {
        countryCode: 'ZG',
        name: 'Zug',
        subdivision: null,
      },
      {
        countryCode: 'ZH',
        name: 'Zürich',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'SY',
    countryCode3: 'SYR',
    name: 'Syria',
    capital: 'Damascus',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'LA',
        name: 'Al Lādhiqīyah',
        subdivision: null,
      },
      {
        countryCode: 'QU',
        name: 'Al Qunayţirah',
        subdivision: null,
      },
      {
        countryCode: 'HA',
        name: 'Al Ḩasakah',
        subdivision: null,
      },
      {
        countryCode: 'RA',
        name: 'Ar Raqqah',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: "As Suwaydā'",
        subdivision: null,
      },
      {
        countryCode: 'DR',
        name: 'Darٰā',
        subdivision: null,
      },
      {
        countryCode: 'DY',
        name: 'Dayr az Zawr',
        subdivision: null,
      },
      {
        countryCode: 'DI',
        name: 'Dimashq',
        subdivision: null,
      },
      {
        countryCode: 'ID',
        name: 'Idlib',
        subdivision: null,
      },
      {
        countryCode: 'RD',
        name: 'Rīf Dimashq',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Ţarţūs',
        subdivision: null,
      },
      {
        countryCode: 'HL',
        name: 'Ḩalab',
        subdivision: null,
      },
      {
        countryCode: 'HM',
        name: 'Ḩamāh',
        subdivision: null,
      },
      {
        countryCode: 'HI',
        name: 'Ḩimş',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TW',
    countryCode3: 'TWN',
    name: 'Taiwan',
    capital: 'Taipei',
    region: 'Asia',
    subregion: 'Eastern Asia',
    states: [
      {
        countryCode: 'CHA',
        name: 'Changhua',
        subdivision: null,
      },
      {
        countryCode: 'CYQ',
        name: 'Chiayi',
        subdivision: null,
      },
      {
        countryCode: 'CYI',
        name: 'Chiayi',
        subdivision: null,
      },
      {
        countryCode: 'HSZ',
        name: 'Hsinchu',
        subdivision: null,
      },
      {
        countryCode: 'HSQ',
        name: 'Hsinchu',
        subdivision: null,
      },
      {
        countryCode: 'HUA',
        name: 'Hualien',
        subdivision: null,
      },
      {
        countryCode: 'ILA',
        name: 'Ilan',
        subdivision: null,
      },
      {
        countryCode: 'KHQ',
        name: 'Kaohsiung',
        subdivision: null,
      },
      {
        countryCode: 'KHH',
        name: 'Kaohsiung',
        subdivision: null,
      },
      {
        countryCode: 'KEE',
        name: 'Keelung',
        subdivision: null,
      },
      {
        countryCode: 'MIA',
        name: 'Miaoli',
        subdivision: null,
      },
      {
        countryCode: 'NAN',
        name: 'Nantou',
        subdivision: null,
      },
      {
        countryCode: 'PEN',
        name: 'Penghu',
        subdivision: null,
      },
      {
        countryCode: 'PIF',
        name: 'Pingtung',
        subdivision: null,
      },
      {
        countryCode: 'TXG',
        name: 'Taichung',
        subdivision: null,
      },
      {
        countryCode: 'TXQ',
        name: 'Taichung',
        subdivision: null,
      },
      {
        countryCode: 'TNN',
        name: 'Tainan',
        subdivision: null,
      },
      {
        countryCode: 'TNQ',
        name: 'Tainan',
        subdivision: null,
      },
      {
        countryCode: 'TPE',
        name: 'Taipei',
        subdivision: null,
      },
      {
        countryCode: 'TPQ',
        name: 'Taipei',
        subdivision: null,
      },
      {
        countryCode: 'TTT',
        name: 'Taitung',
        subdivision: null,
      },
      {
        countryCode: 'TAO',
        name: 'Taoyuan',
        subdivision: null,
      },
      {
        countryCode: 'YUN',
        name: 'Yunlin',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TJ',
    countryCode3: 'TJK',
    name: 'Tajikistan',
    capital: 'Dushanbe',
    region: 'Asia',
    subregion: 'Central Asia',
    states: [
      {
        countryCode: 'DU',
        name: 'Dushanbe',
        subdivision: null,
      },
      {
        countryCode: 'KT',
        name: 'Khatlon',
        subdivision: null,
      },
      {
        countryCode: 'GB',
        name: 'Kŭhistoni Badakhshon',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'Sughd',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TZ',
    countryCode3: 'TZA',
    name: 'Tanzania',
    capital: 'Dodoma',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: '01',
        name: 'Arusha',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Dar es Salaam',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Dodoma',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Iringa',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Kagera',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Kaskazini Pemba',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Kaskazini Unguja',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Kigoma',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Kilimanjaro',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Kusini Pemba',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Kusini Unguja',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Lindi',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Manyara',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Mara',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Mbeya',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Mjini Magharibi',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Morogoro',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Mtwara',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Mwanza',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Pwani',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Rukwa',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Ruvuma',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Shinyanga',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Singida',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Tabora',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Tanga',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TH',
    countryCode3: 'THA',
    name: 'Thailand',
    capital: 'Bangkok',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '37',
        name: 'Amnat Charoen',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Ang Thong',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Bueng Kan',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Buri Ram',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Chachoengsao',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Chai Nat',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Chaiyaphum',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Chanthaburi',
        subdivision: null,
      },
      {
        countryCode: '50',
        name: 'Chiang Mai',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Chiang Rai',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Chon Buri',
        subdivision: null,
      },
      {
        countryCode: '86',
        name: 'Chumphon',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Kalasin',
        subdivision: null,
      },
      {
        countryCode: '62',
        name: 'Kamphaeng Phet',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: 'Kanchanaburi',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Khon Kaen',
        subdivision: null,
      },
      {
        countryCode: '81',
        name: 'Krabi',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Krung Thep Maha Nakhon',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Lampang',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'Lamphun',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Loei',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Lop Buri',
        subdivision: null,
      },
      {
        countryCode: '58',
        name: 'Mae Hong Son',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Maha Sarakham',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'Mukdahan',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Nakhon Nayok',
        subdivision: null,
      },
      {
        countryCode: '73',
        name: 'Nakhon Pathom',
        subdivision: null,
      },
      {
        countryCode: '48',
        name: 'Nakhon Phanom',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Nakhon Ratchasima',
        subdivision: null,
      },
      {
        countryCode: '60',
        name: 'Nakhon Sawan',
        subdivision: null,
      },
      {
        countryCode: '80',
        name: 'Nakhon Si Thammarat',
        subdivision: null,
      },
      {
        countryCode: '55',
        name: 'Nan',
        subdivision: null,
      },
      {
        countryCode: '96',
        name: 'Narathiwat',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Nong Bua Lam Phu',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Nong Khai',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Nonthaburi',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Pathum Thani',
        subdivision: null,
      },
      {
        countryCode: '94',
        name: 'Pattani',
        subdivision: null,
      },
      {
        countryCode: '82',
        name: 'Phangnga',
        subdivision: null,
      },
      {
        countryCode: '93',
        name: 'Phatthalung',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Phatthaya',
        subdivision: null,
      },
      {
        countryCode: '56',
        name: 'Phayao',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Phetchabun',
        subdivision: null,
      },
      {
        countryCode: '76',
        name: 'Phetchaburi',
        subdivision: null,
      },
      {
        countryCode: '66',
        name: 'Phichit',
        subdivision: null,
      },
      {
        countryCode: '65',
        name: 'Phitsanulok',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Phra Nakhon Si Ayutthaya',
        subdivision: null,
      },
      {
        countryCode: '54',
        name: 'Phrae',
        subdivision: null,
      },
      {
        countryCode: '83',
        name: 'Phuket',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Prachin Buri',
        subdivision: null,
      },
      {
        countryCode: '77',
        name: 'Prachuap Khiri Khan',
        subdivision: null,
      },
      {
        countryCode: '85',
        name: 'Ranong',
        subdivision: null,
      },
      {
        countryCode: '70',
        name: 'Ratchaburi',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Rayong',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Roi Et',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Sa Kaeo',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Sakon Nakhon',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Samut Prakan',
        subdivision: null,
      },
      {
        countryCode: '74',
        name: 'Samut Sakhon',
        subdivision: null,
      },
      {
        countryCode: '75',
        name: 'Samut Songkhram',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Saraburi',
        subdivision: null,
      },
      {
        countryCode: '91',
        name: 'Satun',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Si Sa Ket',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Sing Buri',
        subdivision: null,
      },
      {
        countryCode: '90',
        name: 'Songkhla',
        subdivision: null,
      },
      {
        countryCode: '64',
        name: 'Sukhothai',
        subdivision: null,
      },
      {
        countryCode: '72',
        name: 'Suphan Buri',
        subdivision: null,
      },
      {
        countryCode: '84',
        name: 'Surat Thani',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Surin',
        subdivision: null,
      },
      {
        countryCode: '63',
        name: 'Tak',
        subdivision: null,
      },
      {
        countryCode: '92',
        name: 'Trang',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Trat',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Ubon Ratchathani',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Udon Thani',
        subdivision: null,
      },
      {
        countryCode: '61',
        name: 'Uthai Thani',
        subdivision: null,
      },
      {
        countryCode: '53',
        name: 'Uttaradit',
        subdivision: null,
      },
      {
        countryCode: '95',
        name: 'Yala',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Yasothon',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TL',
    countryCode3: 'TLS',
    name: 'East Timor',
    capital: 'Dili',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: 'AL',
        name: 'Aileu',
        subdivision: null,
      },
      {
        countryCode: 'AN',
        name: 'Ainaro',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: 'Baucau',
        subdivision: null,
      },
      {
        countryCode: 'BO',
        name: 'Bobonaro',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'Cova Lima',
        subdivision: null,
      },
      {
        countryCode: 'DI',
        name: 'Díli',
        subdivision: null,
      },
      {
        countryCode: 'ER',
        name: 'Ermera',
        subdivision: null,
      },
      {
        countryCode: 'LA',
        name: 'Lautem',
        subdivision: null,
      },
      {
        countryCode: 'LI',
        name: 'Liquiça',
        subdivision: null,
      },
      {
        countryCode: 'MT',
        name: 'Manatuto',
        subdivision: null,
      },
      {
        countryCode: 'MF',
        name: 'Manufahi',
        subdivision: null,
      },
      {
        countryCode: 'OE',
        name: 'Oecussi',
        subdivision: null,
      },
      {
        countryCode: 'VI',
        name: 'Viqueque',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TG',
    countryCode3: 'TGO',
    name: 'Togo',
    capital: 'Lomé',
    region: 'Africa',
    subregion: 'Western Africa',
    states: [
      {
        countryCode: 'C',
        name: 'Centre',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Kara',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Maritime',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Plateaux',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Savannes',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TK',
    countryCode3: 'TKL',
    name: 'Tokelau',
    capital: 'Fakaofo',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'TO',
    countryCode3: 'TON',
    name: 'Tonga',
    capital: "Nuku'alofa",
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [
      {
        countryCode: '01',
        name: "'Eua",
        subdivision: null,
      },
      {
        countryCode: '02',
        name: "Ha'apai",
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Niuas',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Tongatapu',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: "Vava'u",
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TT',
    countryCode3: 'TTO',
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [
      {
        countryCode: 'ARI',
        name: 'Arima',
        subdivision: null,
      },
      {
        countryCode: 'CHA',
        name: 'Chaguanas',
        subdivision: null,
      },
      {
        countryCode: 'CTT',
        name: 'Couva-Tabaquite-Talparo',
        subdivision: null,
      },
      {
        countryCode: 'DMN',
        name: 'Diego Martin',
        subdivision: null,
      },
      {
        countryCode: 'ETO',
        name: 'Eastern Tobago',
        subdivision: null,
      },
      {
        countryCode: 'PED',
        name: 'Penal-Debe',
        subdivision: null,
      },
      {
        countryCode: 'PTF',
        name: 'Point Fortin',
        subdivision: null,
      },
      {
        countryCode: 'POS',
        name: 'Port of Spain',
        subdivision: null,
      },
      {
        countryCode: 'PRT',
        name: 'Princes Town',
        subdivision: null,
      },
      {
        countryCode: 'RCM',
        name: 'Rio Claro-Mayaro',
        subdivision: null,
      },
      {
        countryCode: 'SFO',
        name: 'San Fernando',
        subdivision: null,
      },
      {
        countryCode: 'SJL',
        name: 'San Juan-Laventille',
        subdivision: null,
      },
      {
        countryCode: 'SGE',
        name: 'Sangre Grande',
        subdivision: null,
      },
      {
        countryCode: 'SIP',
        name: 'Siparia',
        subdivision: null,
      },
      {
        countryCode: 'TUP',
        name: 'Tunapuna-Piarco',
        subdivision: null,
      },
      {
        countryCode: 'WTO',
        name: 'Western Tobago',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TN',
    countryCode3: 'TUN',
    name: 'Tunisia',
    capital: 'Tunis',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [
      {
        countryCode: '12',
        name: 'Ariana',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Ben Arous',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Bizerte',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Béja',
        subdivision: null,
      },
      {
        countryCode: '81',
        name: 'Gabès',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: 'Gafsa',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Jendouba',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Kairouan',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Kasserine',
        subdivision: null,
      },
      {
        countryCode: '73',
        name: 'Kebili',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'La Manouba',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Le Kef',
        subdivision: null,
      },
      {
        countryCode: '53',
        name: 'Mahdia',
        subdivision: null,
      },
      {
        countryCode: '82',
        name: 'Medenine',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Monastir',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Nabeul',
        subdivision: null,
      },
      {
        countryCode: '61',
        name: 'Sfax',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Sidi Bouzid',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Siliana',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'Sousse',
        subdivision: null,
      },
      {
        countryCode: '83',
        name: 'Tataouine',
        subdivision: null,
      },
      {
        countryCode: '72',
        name: 'Tozeur',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Tunis',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Zaghouan',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TR',
    countryCode3: 'TUR',
    name: 'Turkey',
    capital: 'Ankara',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: '01',
        name: 'Adana',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Adıyaman',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Afyonkarahisar',
        subdivision: null,
      },
      {
        countryCode: '68',
        name: 'Aksaray',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Amasya',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Ankara',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Antalya',
        subdivision: null,
      },
      {
        countryCode: '75',
        name: 'Ardahan',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Artvin',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Aydın',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Ağrı',
        subdivision: null,
      },
      {
        countryCode: '10',
        name: 'Balıkesir',
        subdivision: null,
      },
      {
        countryCode: '74',
        name: 'Bartın',
        subdivision: null,
      },
      {
        countryCode: '72',
        name: 'Batman',
        subdivision: null,
      },
      {
        countryCode: '69',
        name: 'Bayburt',
        subdivision: null,
      },
      {
        countryCode: '11',
        name: 'Bilecik',
        subdivision: null,
      },
      {
        countryCode: '12',
        name: 'Bingöl',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Bitlis',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Bolu',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Burdur',
        subdivision: null,
      },
      {
        countryCode: '16',
        name: 'Bursa',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Denizli',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Diyarbakır',
        subdivision: null,
      },
      {
        countryCode: '81',
        name: 'Düzce',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Edirne',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Elazığ',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Erzincan',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Erzurum',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Eskişehir',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Gaziantep',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Giresun',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Gümüşhane',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Hakkâri',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Hatay',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Isparta',
        subdivision: null,
      },
      {
        countryCode: '76',
        name: 'Iğdır',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Kahramanmaraş',
        subdivision: null,
      },
      {
        countryCode: '78',
        name: 'Karabük',
        subdivision: null,
      },
      {
        countryCode: '70',
        name: 'Karaman',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Kars',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'Kastamonu',
        subdivision: null,
      },
      {
        countryCode: '38',
        name: 'Kayseri',
        subdivision: null,
      },
      {
        countryCode: '79',
        name: 'Kilis',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Kocaeli',
        subdivision: null,
      },
      {
        countryCode: '42',
        name: 'Konya',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Kütahya',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Kırklareli',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: 'Kırıkkale',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Kırşehir',
        subdivision: null,
      },
      {
        countryCode: '44',
        name: 'Malatya',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Manisa',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Mardin',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Mersin',
        subdivision: null,
      },
      {
        countryCode: '48',
        name: 'Muğla',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'Muş',
        subdivision: null,
      },
      {
        countryCode: '50',
        name: 'Nevşehir',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'Niğde',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Ordu',
        subdivision: null,
      },
      {
        countryCode: '80',
        name: 'Osmaniye',
        subdivision: null,
      },
      {
        countryCode: '53',
        name: 'Rize',
        subdivision: null,
      },
      {
        countryCode: '54',
        name: 'Sakarya',
        subdivision: null,
      },
      {
        countryCode: '55',
        name: 'Samsun',
        subdivision: null,
      },
      {
        countryCode: '56',
        name: 'Siirt',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Sinop',
        subdivision: null,
      },
      {
        countryCode: '58',
        name: 'Sivas',
        subdivision: null,
      },
      {
        countryCode: '59',
        name: 'Tekirdağ',
        subdivision: null,
      },
      {
        countryCode: '60',
        name: 'Tokat',
        subdivision: null,
      },
      {
        countryCode: '61',
        name: 'Trabzon',
        subdivision: null,
      },
      {
        countryCode: '62',
        name: 'Tunceli',
        subdivision: null,
      },
      {
        countryCode: '64',
        name: 'Uşak',
        subdivision: null,
      },
      {
        countryCode: '65',
        name: 'Van',
        subdivision: null,
      },
      {
        countryCode: '77',
        name: 'Yalova',
        subdivision: null,
      },
      {
        countryCode: '66',
        name: 'Yozgat',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Zonguldak',
        subdivision: null,
      },
      {
        countryCode: '17',
        name: 'Çanakkale',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Çankırı',
        subdivision: null,
      },
      {
        countryCode: '19',
        name: 'Çorum',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'İstanbul',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'İzmir',
        subdivision: null,
      },
      {
        countryCode: '63',
        name: 'Şanlıurfa',
        subdivision: null,
      },
      {
        countryCode: '73',
        name: 'Şırnak',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TM',
    countryCode3: 'TKM',
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    region: 'Asia',
    subregion: 'Central Asia',
    states: [
      {
        countryCode: 'A',
        name: 'Ahal',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Aşgabat',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Balkan',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Daşoguz',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Lebap',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Mary',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'TC',
    countryCode3: 'TCA',
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    region: 'Americas',
    subregion: 'Caribbean',
    states: [],
  },
  {
    countryCode2: 'TV',
    countryCode3: 'TUV',
    name: 'Tuvalu',
    capital: 'Funafuti',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [
      {
        countryCode: 'FUN',
        name: 'Funafuti',
        subdivision: null,
      },
      {
        countryCode: 'NMG',
        name: 'Nanumanga',
        subdivision: null,
      },
      {
        countryCode: 'NMA',
        name: 'Nanumea',
        subdivision: null,
      },
      {
        countryCode: 'NIT',
        name: 'Niutao',
        subdivision: null,
      },
      {
        countryCode: 'NUI',
        name: 'Nui',
        subdivision: null,
      },
      {
        countryCode: 'NKF',
        name: 'Nukufetau',
        subdivision: null,
      },
      {
        countryCode: 'NKL',
        name: 'Nukulaelae',
        subdivision: null,
      },
      {
        countryCode: 'VAI',
        name: 'Vaitupu',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'UG',
    countryCode3: 'UGA',
    name: 'Uganda',
    capital: 'Kampala',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'C',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Eastern',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Northern',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'UA',
    countryCode3: 'UKR',
    name: 'Ukraine',
    capital: 'Kiev',
    region: 'Europe',
    subregion: 'Eastern Europe',
    states: [
      {
        countryCode: '43',
        name: 'Avtonomna Respublika Krym',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: "Cherkas'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '74',
        name: "Chernihivs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '77',
        name: "Chernivets'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '12',
        name: "Dnipropetrovs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '14',
        name: "Donets'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '26',
        name: "Ivano-Frankivs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '63',
        name: "Kharkivs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '65',
        name: "Khersons'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '68',
        name: "Khmel'nyts'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '35',
        name: "Kirovohrads'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Kyïv',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: "Kyïvs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '46',
        name: "L'vivs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '09',
        name: "Luhans'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '48',
        name: "Mykolaïvs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '51',
        name: "Odes'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '53',
        name: "Poltavs'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '56',
        name: "Rivnens'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '40',
        name: "Sevastopol'",
        subdivision: null,
      },
      {
        countryCode: '59',
        name: "Sums'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '61',
        name: "Ternopil's'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '05',
        name: "Vinnyts'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '07',
        name: "Volyns'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '21',
        name: "Zakarpats'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '23',
        name: "Zaporiz'ka Oblast'",
        subdivision: null,
      },
      {
        countryCode: '18',
        name: "Zhytomyrs'ka Oblast'",
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'AE',
    countryCode3: 'ARE',
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AJ',
        name: "'Ajmān",
        subdivision: null,
      },
      {
        countryCode: 'AZ',
        name: 'Abū Z̧aby',
        subdivision: null,
      },
      {
        countryCode: 'FU',
        name: 'Al Fujayrah',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Ash Shāriqah',
        subdivision: null,
      },
      {
        countryCode: 'DU',
        name: 'Dubayy',
        subdivision: null,
      },
      {
        countryCode: 'RK',
        name: "Ra's al Khaymah",
        subdivision: null,
      },
      {
        countryCode: 'UQ',
        name: 'Umm al Qaywayn',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'GB',
    countryCode3: 'GBR',
    name: 'United Kingdom',
    capital: 'London',
    region: 'Europe',
    subregion: 'Northern Europe',
    states: [
      {
        countryCode: 'BDG',
        name: 'Barking and Dagenham',
        subdivision: 'London borough',
      },
      {
        countryCode: 'BNE',
        name: 'Barnet',
        subdivision: 'London borough',
      },
      {
        countryCode: 'BEX',
        name: 'Bexley',
        subdivision: 'London borough',
      },
      {
        countryCode: 'BEN',
        name: 'Brent',
        subdivision: 'London borough',
      },
      {
        countryCode: 'BRY',
        name: 'Bromley',
        subdivision: 'London borough',
      },
      {
        countryCode: 'CMD',
        name: 'Camden',
        subdivision: 'London borough',
      },
      {
        countryCode: 'CRY',
        name: 'Croydon',
        subdivision: 'London borough',
      },
      {
        countryCode: 'EAL',
        name: 'Ealing',
        subdivision: 'London borough',
      },
      {
        countryCode: 'ENF',
        name: 'Enfield',
        subdivision: 'London borough',
      },
      {
        countryCode: 'GRE',
        name: 'Greenwich',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HCK',
        name: 'Hackney',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HMF',
        name: 'Hammersmith and Fulham',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HRY',
        name: 'Haringey',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HRW',
        name: 'Harrow',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HAV',
        name: 'Havering',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HIL',
        name: 'Hillingdon',
        subdivision: 'London borough',
      },
      {
        countryCode: 'HNS',
        name: 'Hounslow',
        subdivision: 'London borough',
      },
      {
        countryCode: 'ISL',
        name: 'Islington',
        subdivision: 'London borough',
      },
      {
        countryCode: 'KEC',
        name: 'Kensington and Chelsea',
        subdivision: 'London borough',
      },
      {
        countryCode: 'KTT',
        name: 'Kingston upon Thames',
        subdivision: 'London borough',
      },
      {
        countryCode: 'LBH',
        name: 'Lambeth',
        subdivision: 'London borough',
      },
      {
        countryCode: 'LEW',
        name: 'Lewisham',
        subdivision: 'London borough',
      },
      {
        countryCode: 'MRT',
        name: 'Merton',
        subdivision: 'London borough',
      },
      {
        countryCode: 'NWM',
        name: 'Newham',
        subdivision: 'London borough',
      },
      {
        countryCode: 'RDB',
        name: 'Redbridge',
        subdivision: 'London borough',
      },
      {
        countryCode: 'RIC',
        name: 'Richmond upon Thames',
        subdivision: 'London borough',
      },
      {
        countryCode: 'SWK',
        name: 'Southwark',
        subdivision: 'London borough',
      },
      {
        countryCode: 'STN',
        name: 'Sutton',
        subdivision: 'London borough',
      },
      {
        countryCode: 'TWH',
        name: 'Tower Hamlets',
        subdivision: 'London borough',
      },
      {
        countryCode: 'WFT',
        name: 'Waltham Forest',
        subdivision: 'London borough',
      },
      {
        countryCode: 'WND',
        name: 'Wandsworth',
        subdivision: 'London borough',
      },
      {
        countryCode: 'WSM',
        name: 'Westminster',
        subdivision: 'London borough',
      },
      {
        countryCode: 'EAW',
        name: 'England and Wales',
        subdivision: 'Nation',
      },
      {
        countryCode: 'GBN',
        name: 'Great Britain',
        subdivision: 'Nation',
      },
      {
        countryCode: 'UKM',
        name: 'United Kingdom',
        subdivision: 'Nation',
      },
      {
        countryCode: 'LND',
        name: 'London, City of',
        subdivision: 'city corporation',
      },
      {
        countryCode: 'ABE',
        name: 'Aberdeen City',
        subdivision: 'council area',
      },
      {
        countryCode: 'ABD',
        name: 'Aberdeenshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'ANS',
        name: 'Angus',
        subdivision: 'council area',
      },
      {
        countryCode: 'AGB',
        name: 'Argyll and Bute',
        subdivision: 'council area',
      },
      {
        countryCode: 'CLK',
        name: 'Clackmannanshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'DGY',
        name: 'Dumfries and Galloway',
        subdivision: 'council area',
      },
      {
        countryCode: 'DND',
        name: 'Dundee City',
        subdivision: 'council area',
      },
      {
        countryCode: 'EAY',
        name: 'East Ayrshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'EDU',
        name: 'East Dunbartonshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'ELN',
        name: 'East Lothian',
        subdivision: 'council area',
      },
      {
        countryCode: 'ERW',
        name: 'East Renfrewshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'EDH',
        name: 'Edinburgh, City of',
        subdivision: 'council area',
      },
      {
        countryCode: 'ELS',
        name: 'Eilean Siar',
        subdivision: 'council area',
      },
      {
        countryCode: 'FAL',
        name: 'Falkirk',
        subdivision: 'council area',
      },
      {
        countryCode: 'FIF',
        name: 'Fife',
        subdivision: 'council area',
      },
      {
        countryCode: 'GLG',
        name: 'Glasgow City',
        subdivision: 'council area',
      },
      {
        countryCode: 'HLD',
        name: 'Highland',
        subdivision: 'council area',
      },
      {
        countryCode: 'IVC',
        name: 'Inverclyde',
        subdivision: 'council area',
      },
      {
        countryCode: 'MLN',
        name: 'Midlothian',
        subdivision: 'council area',
      },
      {
        countryCode: 'MRY',
        name: 'Moray',
        subdivision: 'council area',
      },
      {
        countryCode: 'NAY',
        name: 'North Ayrshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'NLK',
        name: 'North Lanarkshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'ORK',
        name: 'Orkney Islands',
        subdivision: 'council area',
      },
      {
        countryCode: 'PKN',
        name: 'Perth and Kinross',
        subdivision: 'council area',
      },
      {
        countryCode: 'RFW',
        name: 'Renfrewshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'SCB',
        name: 'Scottish Borders, The',
        subdivision: 'council area',
      },
      {
        countryCode: 'ZET',
        name: 'Shetland Islands',
        subdivision: 'council area',
      },
      {
        countryCode: 'SAY',
        name: 'South Ayrshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'SLK',
        name: 'South Lanarkshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'STG',
        name: 'Stirling',
        subdivision: 'council area',
      },
      {
        countryCode: 'WDU',
        name: 'West Dunbartonshire',
        subdivision: 'council area',
      },
      {
        countryCode: 'WLN',
        name: 'West Lothian',
        subdivision: 'council area',
      },
      {
        countryCode: 'ENG',
        name: 'England',
        subdivision: 'country',
      },
      {
        countryCode: 'SCT',
        name: 'Scotland',
        subdivision: 'country',
      },
      {
        countryCode: 'WLS',
        name: 'Wales',
        subdivision: 'country',
      },
      {
        countryCode: 'ANT',
        name: 'Antrim',
        subdivision: 'district council area',
      },
      {
        countryCode: 'ARD',
        name: 'Ards',
        subdivision: 'district council area',
      },
      {
        countryCode: 'ARM',
        name: 'Armagh',
        subdivision: 'district council area',
      },
      {
        countryCode: 'BLA',
        name: 'Ballymena',
        subdivision: 'district council area',
      },
      {
        countryCode: 'BLY',
        name: 'Ballymoney',
        subdivision: 'district council area',
      },
      {
        countryCode: 'BNB',
        name: 'Banbridge',
        subdivision: 'district council area',
      },
      {
        countryCode: 'BFS',
        name: 'Belfast',
        subdivision: 'district council area',
      },
      {
        countryCode: 'CKF',
        name: 'Carrickfergus',
        subdivision: 'district council area',
      },
      {
        countryCode: 'CSR',
        name: 'Castlereagh',
        subdivision: 'district council area',
      },
      {
        countryCode: 'CLR',
        name: 'Coleraine',
        subdivision: 'district council area',
      },
      {
        countryCode: 'CKT',
        name: 'Cookstown',
        subdivision: 'district council area',
      },
      {
        countryCode: 'CGV',
        name: 'Craigavon',
        subdivision: 'district council area',
      },
      {
        countryCode: 'DRY',
        name: 'Derry',
        subdivision: 'district council area',
      },
      {
        countryCode: 'DOW',
        name: 'Down',
        subdivision: 'district council area',
      },
      {
        countryCode: 'DGN',
        name: 'Dungannon and South Tyrone',
        subdivision: 'district council area',
      },
      {
        countryCode: 'FER',
        name: 'Fermanagh',
        subdivision: 'district council area',
      },
      {
        countryCode: 'LRN',
        name: 'Larne',
        subdivision: 'district council area',
      },
      {
        countryCode: 'LMV',
        name: 'Limavady',
        subdivision: 'district council area',
      },
      {
        countryCode: 'LSB',
        name: 'Lisburn',
        subdivision: 'district council area',
      },
      {
        countryCode: 'MFT',
        name: 'Magherafelt',
        subdivision: 'district council area',
      },
      {
        countryCode: 'MYL',
        name: 'Moyle',
        subdivision: 'district council area',
      },
      {
        countryCode: 'NYM',
        name: 'Newry and Mourne District',
        subdivision: 'district council area',
      },
      {
        countryCode: 'NTA',
        name: 'Newtownabbey',
        subdivision: 'district council area',
      },
      {
        countryCode: 'NDN',
        name: 'North Down',
        subdivision: 'district council area',
      },
      {
        countryCode: 'OMH',
        name: 'Omagh',
        subdivision: 'district council area',
      },
      {
        countryCode: 'STB',
        name: 'Strabane',
        subdivision: 'district council area',
      },
      {
        countryCode: 'BNS',
        name: 'Barnsley',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'BIR',
        name: 'Birmingham',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'BOL',
        name: 'Bolton',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'BRD',
        name: 'Bradford',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'BUR',
        name: 'Bury',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'CLD',
        name: 'Calderdale',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'COV',
        name: 'Coventry',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'DNC',
        name: 'Doncaster',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'DUD',
        name: 'Dudley',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'GAT',
        name: 'Gateshead',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'KIR',
        name: 'Kirklees',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'KWL',
        name: 'Knowsley',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'LDS',
        name: 'Leeds',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'LIV',
        name: 'Liverpool',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'MAN',
        name: 'Manchester',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'NET',
        name: 'Newcastle upon Tyne',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'NTY',
        name: 'North Tyneside',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'OLD',
        name: 'Oldham',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'RCH',
        name: 'Rochdale',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'ROT',
        name: 'Rotherham',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SLF',
        name: 'Salford',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SAW',
        name: 'Sandwell',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SFT',
        name: 'Sefton',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SHF',
        name: 'Sheffield',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SOL',
        name: 'Solihull',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'STY',
        name: 'South Tyneside',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SHN',
        name: 'St. Helens',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SKP',
        name: 'Stockport',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'SND',
        name: 'Sunderland',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'TAM',
        name: 'Tameside',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'TRF',
        name: 'Trafford',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'WKF',
        name: 'Wakefield',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'WLL',
        name: 'Walsall',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'WGN',
        name: 'Wigan',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'WRL',
        name: 'Wirral',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'WLV',
        name: 'Wolverhampton',
        subdivision: 'metropolitan district',
      },
      {
        countryCode: 'NIR',
        name: 'Northern Ireland',
        subdivision: 'province',
      },
      {
        countryCode: 'BKM',
        name: 'Buckinghamshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'CAM',
        name: 'Cambridgeshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'CMA',
        name: 'Cumbria',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'DBY',
        name: 'Derbyshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'DEV',
        name: 'Devon',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'DOR',
        name: 'Dorset',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'ESX',
        name: 'East Sussex',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'ESS',
        name: 'Essex',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'GLS',
        name: 'Gloucestershire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'HAM',
        name: 'Hampshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'HRT',
        name: 'Hertfordshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'KEN',
        name: 'Kent',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'LAN',
        name: 'Lancashire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'LEC',
        name: 'Leicestershire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'LIN',
        name: 'Lincolnshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'NFK',
        name: 'Norfolk',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'NYK',
        name: 'North Yorkshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'NTH',
        name: 'Northamptonshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'NTT',
        name: 'Nottinghamshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'OXF',
        name: 'Oxfordshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'SOM',
        name: 'Somerset',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'STS',
        name: 'Staffordshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'SFK',
        name: 'Suffolk',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'SRY',
        name: 'Surrey',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'WAR',
        name: 'Warwickshire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'WSX',
        name: 'West Sussex',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'WOR',
        name: 'Worcestershire',
        subdivision: 'two-tier county',
      },
      {
        countryCode: 'BAS',
        name: 'Bath and North East Somerset',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BDF',
        name: 'Bedford',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BBD',
        name: 'Blackburn with Darwen',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BPL',
        name: 'Blackpool',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BGW',
        name: 'Blaenau Gwent',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BMH',
        name: 'Bournemouth',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BRC',
        name: 'Bracknell Forest',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BGE',
        name: 'Bridgend',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BNH',
        name: 'Brighton and Hove',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'BST',
        name: 'Bristol, City of',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CAY',
        name: 'Caerphilly',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CRF',
        name: 'Cardiff',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CMN',
        name: 'Carmarthenshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CBF',
        name: 'Central Bedfordshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CGN',
        name: 'Ceredigion',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CHE',
        name: 'Cheshire East',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CHW',
        name: 'Cheshire West and Chester',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CWY',
        name: 'Conwy',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'CON',
        name: 'Cornwall',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'DAL',
        name: 'Darlington',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'DEN',
        name: 'Denbighshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'DER',
        name: 'Derby',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'DUR',
        name: 'Durham, County',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'ERY',
        name: 'East Riding of Yorkshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'FLN',
        name: 'Flintshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'GWN',
        name: 'Gwynedd',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'HAL',
        name: 'Halton',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'HPL',
        name: 'Hartlepool',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'HEF',
        name: 'Herefordshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'AGY',
        name: 'Isle of Anglesey',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'IOW',
        name: 'Isle of Wight',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'IOS',
        name: 'Isles of Scilly',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'KHL',
        name: 'Kingston upon Hull',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'LCE',
        name: 'Leicester',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'LUT',
        name: 'Luton',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'MDW',
        name: 'Medway',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'MTY',
        name: 'Merthyr Tydfil',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'MDB',
        name: 'Middlesbrough',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'MIK',
        name: 'Milton Keynes',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'MON',
        name: 'Monmouthshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NTL',
        name: 'Neath Port Talbot',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NWP',
        name: 'Newport',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NEL',
        name: 'North East Lincolnshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NLN',
        name: 'North Lincolnshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NSM',
        name: 'North Somerset',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NBL',
        name: 'Northumberland',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'NGM',
        name: 'Nottingham',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'PEM',
        name: 'Pembrokeshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'PTE',
        name: 'Peterborough',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'PLY',
        name: 'Plymouth',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'POL',
        name: 'Poole',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'POR',
        name: 'Portsmouth',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'POW',
        name: 'Powys',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'RDG',
        name: 'Reading',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'RCC',
        name: 'Redcar and Cleveland',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'RCT',
        name: 'Rhondda, Cynon, Taff',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'RUT',
        name: 'Rutland',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'SHR',
        name: 'Shropshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'SLG',
        name: 'Slough',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'SGC',
        name: 'South Gloucestershire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'STH',
        name: 'Southampton',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'SOS',
        name: 'Southend-on-Sea',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'STT',
        name: 'Stockton-on-Tees',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'STE',
        name: 'Stoke-on-Trent',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'SWA',
        name: 'Swansea',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'SWD',
        name: 'Swindon',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'TFW',
        name: 'Telford and Wrekin',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'THR',
        name: 'Thurrock',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'TOB',
        name: 'Torbay',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'TOF',
        name: 'Torfaen',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'VGL',
        name: 'Vale of Glamorgan, The',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'WRT',
        name: 'Warrington',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'WBK',
        name: 'West Berkshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'WIL',
        name: 'Wiltshire',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'WNM',
        name: 'Windsor and Maidenhead',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'WOK',
        name: 'Wokingham',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'WRX',
        name: 'Wrexham',
        subdivision: 'unitary authority',
      },
      {
        countryCode: 'YOR',
        name: 'York',
        subdivision: 'unitary authority',
      },
    ],
  },
  {
    countryCode2: 'US',
    countryCode3: 'USA',
    name: 'United States',
    capital: 'Washington, D.C.',
    region: 'Americas',
    subregion: 'Northern America',
    states: [
      {
        countryCode: 'DC',
        name: 'District of Columbia',
        subdivision: 'district',
      },
      {
        countryCode: 'AS',
        name: 'American Samoa',
        subdivision: 'outlying territory',
      },
      {
        countryCode: 'GU',
        name: 'Guam',
        subdivision: 'outlying territory',
      },
      {
        countryCode: 'MP',
        name: 'Northern Mariana Islands',
        subdivision: 'outlying territory',
      },
      {
        countryCode: 'PR',
        name: 'Puerto Rico',
        subdivision: 'outlying territory',
      },
      {
        countryCode: 'UM',
        name: 'United States Minor Outlying Islands',
        subdivision: 'outlying territory',
      },
      {
        countryCode: 'VI',
        name: 'Virgin Islands, U.S.',
        subdivision: 'outlying territory',
      },
      {
        countryCode: 'AL',
        name: 'Alabama',
        subdivision: 'state',
      },
      {
        countryCode: 'AK',
        name: 'Alaska',
        subdivision: 'state',
      },
      {
        countryCode: 'AZ',
        name: 'Arizona',
        subdivision: 'state',
      },
      {
        countryCode: 'AR',
        name: 'Arkansas',
        subdivision: 'state',
      },
      {
        countryCode: 'CA',
        name: 'California',
        subdivision: 'state',
      },
      {
        countryCode: 'CO',
        name: 'Colorado',
        subdivision: 'state',
      },
      {
        countryCode: 'CT',
        name: 'Connecticut',
        subdivision: 'state',
      },
      {
        countryCode: 'DE',
        name: 'Delaware',
        subdivision: 'state',
      },
      {
        countryCode: 'FL',
        name: 'Florida',
        subdivision: 'state',
      },
      {
        countryCode: 'GA',
        name: 'Georgia',
        subdivision: 'state',
      },
      {
        countryCode: 'HI',
        name: 'Hawaii',
        subdivision: 'state',
      },
      {
        countryCode: 'ID',
        name: 'Idaho',
        subdivision: 'state',
      },
      {
        countryCode: 'IL',
        name: 'Illinois',
        subdivision: 'state',
      },
      {
        countryCode: 'IN',
        name: 'Indiana',
        subdivision: 'state',
      },
      {
        countryCode: 'IA',
        name: 'Iowa',
        subdivision: 'state',
      },
      {
        countryCode: 'KS',
        name: 'Kansas',
        subdivision: 'state',
      },
      {
        countryCode: 'KY',
        name: 'Kentucky',
        subdivision: 'state',
      },
      {
        countryCode: 'LA',
        name: 'Louisiana',
        subdivision: 'state',
      },
      {
        countryCode: 'ME',
        name: 'Maine',
        subdivision: 'state',
      },
      {
        countryCode: 'MD',
        name: 'Maryland',
        subdivision: 'state',
      },
      {
        countryCode: 'MA',
        name: 'Massachusetts',
        subdivision: 'state',
      },
      {
        countryCode: 'MI',
        name: 'Michigan',
        subdivision: 'state',
      },
      {
        countryCode: 'MN',
        name: 'Minnesota',
        subdivision: 'state',
      },
      {
        countryCode: 'MS',
        name: 'Mississippi',
        subdivision: 'state',
      },
      {
        countryCode: 'MO',
        name: 'Missouri',
        subdivision: 'state',
      },
      {
        countryCode: 'MT',
        name: 'Montana',
        subdivision: 'state',
      },
      {
        countryCode: 'NE',
        name: 'Nebraska',
        subdivision: 'state',
      },
      {
        countryCode: 'NV',
        name: 'Nevada',
        subdivision: 'state',
      },
      {
        countryCode: 'NH',
        name: 'New Hampshire',
        subdivision: 'state',
      },
      {
        countryCode: 'NJ',
        name: 'New Jersey',
        subdivision: 'state',
      },
      {
        countryCode: 'NM',
        name: 'New Mexico',
        subdivision: 'state',
      },
      {
        countryCode: 'NY',
        name: 'New York',
        subdivision: 'state',
      },
      {
        countryCode: 'NC',
        name: 'North Carolina',
        subdivision: 'state',
      },
      {
        countryCode: 'ND',
        name: 'North Dakota',
        subdivision: 'state',
      },
      {
        countryCode: 'OH',
        name: 'Ohio',
        subdivision: 'state',
      },
      {
        countryCode: 'OK',
        name: 'Oklahoma',
        subdivision: 'state',
      },
      {
        countryCode: 'OR',
        name: 'Oregon',
        subdivision: 'state',
      },
      {
        countryCode: 'PA',
        name: 'Pennsylvania',
        subdivision: 'state',
      },
      {
        countryCode: 'RI',
        name: 'Rhode Island',
        subdivision: 'state',
      },
      {
        countryCode: 'SC',
        name: 'South Carolina',
        subdivision: 'state',
      },
      {
        countryCode: 'SD',
        name: 'South Dakota',
        subdivision: 'state',
      },
      {
        countryCode: 'TN',
        name: 'Tennessee',
        subdivision: 'state',
      },
      {
        countryCode: 'TX',
        name: 'Texas',
        subdivision: 'state',
      },
      {
        countryCode: 'UT',
        name: 'Utah',
        subdivision: 'state',
      },
      {
        countryCode: 'VT',
        name: 'Vermont',
        subdivision: 'state',
      },
      {
        countryCode: 'VA',
        name: 'Virginia',
        subdivision: 'state',
      },
      {
        countryCode: 'WA',
        name: 'Washington',
        subdivision: 'state',
      },
      {
        countryCode: 'WV',
        name: 'West Virginia',
        subdivision: 'state',
      },
      {
        countryCode: 'WI',
        name: 'Wisconsin',
        subdivision: 'state',
      },
      {
        countryCode: 'WY',
        name: 'Wyoming',
        subdivision: 'state',
      },
    ],
  },
  {
    countryCode2: 'UY',
    countryCode3: 'URY',
    name: 'Uruguay',
    capital: 'Montevideo',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'AR',
        name: 'Artigas',
        subdivision: null,
      },
      {
        countryCode: 'CA',
        name: 'Canelones',
        subdivision: null,
      },
      {
        countryCode: 'CL',
        name: 'Cerro Largo',
        subdivision: null,
      },
      {
        countryCode: 'CO',
        name: 'Colonia',
        subdivision: null,
      },
      {
        countryCode: 'DU',
        name: 'Durazno',
        subdivision: null,
      },
      {
        countryCode: 'FS',
        name: 'Flores',
        subdivision: null,
      },
      {
        countryCode: 'FD',
        name: 'Florida',
        subdivision: null,
      },
      {
        countryCode: 'LA',
        name: 'Lavalleja',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Maldonado',
        subdivision: null,
      },
      {
        countryCode: 'MO',
        name: 'Montevideo',
        subdivision: null,
      },
      {
        countryCode: 'PA',
        name: 'Paysandú',
        subdivision: null,
      },
      {
        countryCode: 'RV',
        name: 'Rivera',
        subdivision: null,
      },
      {
        countryCode: 'RO',
        name: 'Rocha',
        subdivision: null,
      },
      {
        countryCode: 'RN',
        name: 'Río Negro',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Salto',
        subdivision: null,
      },
      {
        countryCode: 'SJ',
        name: 'San José',
        subdivision: null,
      },
      {
        countryCode: 'SO',
        name: 'Soriano',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tacuarembó',
        subdivision: null,
      },
      {
        countryCode: 'TT',
        name: 'Treinta y Tres',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'UZ',
    countryCode3: 'UZB',
    name: 'Uzbekistan',
    capital: 'Tashkent',
    region: 'Asia',
    subregion: 'Central Asia',
    states: [
      {
        countryCode: 'AN',
        name: 'Andijon',
        subdivision: null,
      },
      {
        countryCode: 'BU',
        name: 'Buxoro',
        subdivision: null,
      },
      {
        countryCode: 'FA',
        name: 'Farg‘ona',
        subdivision: null,
      },
      {
        countryCode: 'JI',
        name: 'Jizzax',
        subdivision: null,
      },
      {
        countryCode: 'NG',
        name: 'Namangan',
        subdivision: null,
      },
      {
        countryCode: 'NW',
        name: 'Navoiy',
        subdivision: null,
      },
      {
        countryCode: 'QA',
        name: 'Qashqadaryo',
        subdivision: null,
      },
      {
        countryCode: 'QR',
        name: 'Qoraqalpog‘iston Respublikasi',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: 'Samarqand',
        subdivision: null,
      },
      {
        countryCode: 'SI',
        name: 'Sirdaryo',
        subdivision: null,
      },
      {
        countryCode: 'SU',
        name: 'Surxondaryo',
        subdivision: null,
      },
      {
        countryCode: 'TO',
        name: 'Toshkent',
        subdivision: null,
      },
      {
        countryCode: 'TK',
        name: 'Toshkent',
        subdivision: null,
      },
      {
        countryCode: 'XO',
        name: 'Xorazm',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'VU',
    countryCode3: 'VUT',
    name: 'Vanuatu',
    capital: 'Port Vila',
    region: 'Oceania',
    subregion: 'Melanesia',
    states: [
      {
        countryCode: 'MAP',
        name: 'Malampa',
        subdivision: null,
      },
      {
        countryCode: 'PAM',
        name: 'Pénama',
        subdivision: null,
      },
      {
        countryCode: 'SAM',
        name: 'Sanma',
        subdivision: null,
      },
      {
        countryCode: 'SEE',
        name: 'Shéfa',
        subdivision: null,
      },
      {
        countryCode: 'TAE',
        name: 'Taféa',
        subdivision: null,
      },
      {
        countryCode: 'TOB',
        name: 'Torba',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'VE',
    countryCode3: 'VEN',
    name: 'Venezuela',
    capital: 'Caracas',
    region: 'Americas',
    subregion: 'South America',
    states: [
      {
        countryCode: 'Z',
        name: 'Amazonas',
        subdivision: null,
      },
      {
        countryCode: 'B',
        name: 'Anzoátegui',
        subdivision: null,
      },
      {
        countryCode: 'C',
        name: 'Apure',
        subdivision: null,
      },
      {
        countryCode: 'D',
        name: 'Aragua',
        subdivision: null,
      },
      {
        countryCode: 'E',
        name: 'Barinas',
        subdivision: null,
      },
      {
        countryCode: 'F',
        name: 'Bolívar',
        subdivision: null,
      },
      {
        countryCode: 'G',
        name: 'Carabobo',
        subdivision: null,
      },
      {
        countryCode: 'H',
        name: 'Cojedes',
        subdivision: null,
      },
      {
        countryCode: 'Y',
        name: 'Delta Amacuro',
        subdivision: null,
      },
      {
        countryCode: 'W',
        name: 'Dependencias Federales',
        subdivision: null,
      },
      {
        countryCode: 'A',
        name: 'Distrito Capital',
        subdivision: null,
      },
      {
        countryCode: 'I',
        name: 'Falcón',
        subdivision: null,
      },
      {
        countryCode: 'J',
        name: 'Guárico',
        subdivision: null,
      },
      {
        countryCode: 'K',
        name: 'Lara',
        subdivision: null,
      },
      {
        countryCode: 'M',
        name: 'Miranda',
        subdivision: null,
      },
      {
        countryCode: 'N',
        name: 'Monagas',
        subdivision: null,
      },
      {
        countryCode: 'L',
        name: 'Mérida',
        subdivision: null,
      },
      {
        countryCode: 'O',
        name: 'Nueva Esparta',
        subdivision: null,
      },
      {
        countryCode: 'P',
        name: 'Portuguesa',
        subdivision: null,
      },
      {
        countryCode: 'R',
        name: 'Sucre',
        subdivision: null,
      },
      {
        countryCode: 'T',
        name: 'Trujillo',
        subdivision: null,
      },
      {
        countryCode: 'S',
        name: 'Táchira',
        subdivision: null,
      },
      {
        countryCode: 'X',
        name: 'Vargas',
        subdivision: null,
      },
      {
        countryCode: 'U',
        name: 'Yaracuy',
        subdivision: null,
      },
      {
        countryCode: 'V',
        name: 'Zulia',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'VN',
    countryCode3: 'VNM',
    name: 'Vietnam',
    capital: 'Hanoi',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    states: [
      {
        countryCode: '44',
        name: 'An Giang',
        subdivision: null,
      },
      {
        countryCode: '43',
        name: 'Bà Rịa–Vũng Tàu',
        subdivision: null,
      },
      {
        countryCode: '57',
        name: 'Bình Dương',
        subdivision: null,
      },
      {
        countryCode: '58',
        name: 'Bình Phước',
        subdivision: null,
      },
      {
        countryCode: '40',
        name: 'Bình Thuận',
        subdivision: null,
      },
      {
        countryCode: '31',
        name: 'Bình Định',
        subdivision: null,
      },
      {
        countryCode: '55',
        name: 'Bạc Liêu',
        subdivision: null,
      },
      {
        countryCode: '54',
        name: 'Bắc Giang',
        subdivision: null,
      },
      {
        countryCode: '53',
        name: 'Bắc Kạn',
        subdivision: null,
      },
      {
        countryCode: '56',
        name: 'Bắc Ninh',
        subdivision: null,
      },
      {
        countryCode: '50',
        name: 'Bến Tre',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Cao Bằng',
        subdivision: null,
      },
      {
        countryCode: '59',
        name: 'Cà Mau',
        subdivision: null,
      },
      {
        countryCode: 'CT',
        name: 'Cần Thơ',
        subdivision: null,
      },
      {
        countryCode: '30',
        name: 'Gia Lai',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Hà Giang',
        subdivision: null,
      },
      {
        countryCode: '63',
        name: 'Hà Nam',
        subdivision: null,
      },
      {
        countryCode: 'HN',
        name: 'Hà Nội',
        subdivision: null,
      },
      {
        countryCode: '15',
        name: 'Hà Tây',
        subdivision: null,
      },
      {
        countryCode: '23',
        name: 'Hà Tĩnh',
        subdivision: null,
      },
      {
        countryCode: '14',
        name: 'Hòa Bình',
        subdivision: null,
      },
      {
        countryCode: '66',
        name: 'Hưng Yên',
        subdivision: null,
      },
      {
        countryCode: '61',
        name: 'Hải Dương',
        subdivision: null,
      },
      {
        countryCode: 'HP',
        name: 'Hải Phòng',
        subdivision: null,
      },
      {
        countryCode: '73',
        name: 'Hậu Giang',
        subdivision: null,
      },
      {
        countryCode: 'SG',
        name: 'Hồ Chí Minh',
        subdivision: null,
      },
      {
        countryCode: '34',
        name: 'Khánh Hòa',
        subdivision: null,
      },
      {
        countryCode: '47',
        name: 'Kiên Giang',
        subdivision: null,
      },
      {
        countryCode: '28',
        name: 'Kon Tum',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Lai Châu',
        subdivision: null,
      },
      {
        countryCode: '41',
        name: 'Long An',
        subdivision: null,
      },
      {
        countryCode: '02',
        name: 'Lào Cai',
        subdivision: null,
      },
      {
        countryCode: '35',
        name: 'Lâm Đồng',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Lạng Sơn',
        subdivision: null,
      },
      {
        countryCode: '67',
        name: 'Nam Định',
        subdivision: null,
      },
      {
        countryCode: '22',
        name: 'Nghệ An',
        subdivision: null,
      },
      {
        countryCode: '18',
        name: 'Ninh Bình',
        subdivision: null,
      },
      {
        countryCode: '36',
        name: 'Ninh Thuận',
        subdivision: null,
      },
      {
        countryCode: '68',
        name: 'Phú Thọ',
        subdivision: null,
      },
      {
        countryCode: '32',
        name: 'Phú Yên',
        subdivision: null,
      },
      {
        countryCode: '24',
        name: 'Quảng Bình',
        subdivision: null,
      },
      {
        countryCode: '27',
        name: 'Quảng Nam',
        subdivision: null,
      },
      {
        countryCode: '29',
        name: 'Quảng Ngãi',
        subdivision: null,
      },
      {
        countryCode: '13',
        name: 'Quảng Ninh',
        subdivision: null,
      },
      {
        countryCode: '25',
        name: 'Quảng Trị',
        subdivision: null,
      },
      {
        countryCode: '52',
        name: 'Sóc Trăng',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Sơn La',
        subdivision: null,
      },
      {
        countryCode: '21',
        name: 'Thanh Hóa',
        subdivision: null,
      },
      {
        countryCode: '20',
        name: 'Thái Bình',
        subdivision: null,
      },
      {
        countryCode: '69',
        name: 'Thái Nguyên',
        subdivision: null,
      },
      {
        countryCode: '26',
        name: 'Thừa Thiên–Huế',
        subdivision: null,
      },
      {
        countryCode: '46',
        name: 'Tiền Giang',
        subdivision: null,
      },
      {
        countryCode: '51',
        name: 'Trà Vinh',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Tuyên Quang',
        subdivision: null,
      },
      {
        countryCode: '37',
        name: 'Tây Ninh',
        subdivision: null,
      },
      {
        countryCode: '49',
        name: 'Vĩnh Long',
        subdivision: null,
      },
      {
        countryCode: '70',
        name: 'Vĩnh Phúc',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'Yên Bái',
        subdivision: null,
      },
      {
        countryCode: '71',
        name: 'Điện Biên',
        subdivision: null,
      },
      {
        countryCode: 'DN',
        name: 'Đà Nẵng',
        subdivision: null,
      },
      {
        countryCode: '33',
        name: 'Đắk Lắk',
        subdivision: null,
      },
      {
        countryCode: '72',
        name: 'Đắk Nông',
        subdivision: null,
      },
      {
        countryCode: '39',
        name: 'Đồng Nai',
        subdivision: null,
      },
      {
        countryCode: '45',
        name: 'Đồng Tháp',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'WF',
    countryCode3: 'WLF',
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    region: 'Oceania',
    subregion: 'Polynesia',
    states: [],
  },
  {
    countryCode2: 'EH',
    countryCode3: 'ESH',
    name: 'Western Sahara',
    capital: 'El Aaiún',
    region: 'Africa',
    subregion: 'Northern Africa',
    states: [],
  },
  {
    countryCode2: 'YE',
    countryCode3: 'YEM',
    name: 'Yemen',
    capital: "Sana'a",
    region: 'Asia',
    subregion: 'Western Asia',
    states: [
      {
        countryCode: 'AD',
        name: "'Adan",
        subdivision: null,
      },
      {
        countryCode: 'AM',
        name: "'Amrān",
        subdivision: null,
      },
      {
        countryCode: 'AB',
        name: 'Abyān',
        subdivision: null,
      },
      {
        countryCode: 'BA',
        name: "Al Bayḑā'",
        subdivision: null,
      },
      {
        countryCode: 'JA',
        name: 'Al Jawf',
        subdivision: null,
      },
      {
        countryCode: 'MR',
        name: 'Al Mahrah',
        subdivision: null,
      },
      {
        countryCode: 'MW',
        name: 'Al Maḩwīt',
        subdivision: null,
      },
      {
        countryCode: 'HU',
        name: 'Al Ḩudaydah',
        subdivision: null,
      },
      {
        countryCode: 'DA',
        name: "Aḑ Ḑāli'",
        subdivision: null,
      },
      {
        countryCode: 'DH',
        name: 'Dhamār',
        subdivision: null,
      },
      {
        countryCode: 'IB',
        name: 'Ibb',
        subdivision: null,
      },
      {
        countryCode: 'LA',
        name: 'Laḩij',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: "Ma'rib",
        subdivision: null,
      },
      {
        countryCode: 'RA',
        name: 'Raymah',
        subdivision: null,
      },
      {
        countryCode: 'SH',
        name: 'Shabwah',
        subdivision: null,
      },
      {
        countryCode: 'TA',
        name: 'Tā‘izz',
        subdivision: null,
      },
      {
        countryCode: 'SA',
        name: "Şan‘ā'",
        subdivision: null,
      },
      {
        countryCode: 'SN',
        name: "Şan‘ā'",
        subdivision: null,
      },
      {
        countryCode: 'SD',
        name: 'Şā‘dah',
        subdivision: null,
      },
      {
        countryCode: 'HJ',
        name: 'Ḩajjah',
        subdivision: null,
      },
      {
        countryCode: 'HD',
        name: 'Ḩaḑramawt',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ZM',
    countryCode3: 'ZMB',
    name: 'Zambia',
    capital: 'Lusaka',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: '02',
        name: 'Central',
        subdivision: null,
      },
      {
        countryCode: '08',
        name: 'Copperbelt',
        subdivision: null,
      },
      {
        countryCode: '03',
        name: 'Eastern',
        subdivision: null,
      },
      {
        countryCode: '04',
        name: 'Luapula',
        subdivision: null,
      },
      {
        countryCode: '09',
        name: 'Lusaka',
        subdivision: null,
      },
      {
        countryCode: '06',
        name: 'North-Western',
        subdivision: null,
      },
      {
        countryCode: '05',
        name: 'Northern',
        subdivision: null,
      },
      {
        countryCode: '07',
        name: 'Southern',
        subdivision: null,
      },
      {
        countryCode: '01',
        name: 'Western',
        subdivision: null,
      },
    ],
  },
  {
    countryCode2: 'ZW',
    countryCode3: 'ZWE',
    name: 'Zimbabwe',
    capital: 'Harare',
    region: 'Africa',
    subregion: 'Eastern Africa',
    states: [
      {
        countryCode: 'BU',
        name: 'Bulawayo',
        subdivision: null,
      },
      {
        countryCode: 'HA',
        name: 'Harare',
        subdivision: null,
      },
      {
        countryCode: 'MA',
        name: 'Manicaland',
        subdivision: null,
      },
      {
        countryCode: 'MC',
        name: 'Mashonaland Central',
        subdivision: null,
      },
      {
        countryCode: 'ME',
        name: 'Mashonaland East',
        subdivision: null,
      },
      {
        countryCode: 'MW',
        name: 'Mashonaland West',
        subdivision: null,
      },
      {
        countryCode: 'MV',
        name: 'Masvingo',
        subdivision: null,
      },
      {
        countryCode: 'MN',
        name: 'Matabeleland North',
        subdivision: null,
      },
      {
        countryCode: 'MS',
        name: 'Matabeleland South',
        subdivision: null,
      },
      {
        countryCode: 'MI',
        name: 'Midlands',
        subdivision: null,
      },
    ],
  },
];
