import images from './images';

const wines = [
  {
    title: 'Steamed Crabs',
    price: '$35',
    tags: 'Steamed crab with lemongrass and lemongrass',
  },
  {
    title: 'Grilled Crab',
    price: '$59',
    tags: 'Grilled crab with garlic butter',
  },
  {
    title: 'Crab Soup',
    price: '$44',
    tags: 'Beer steamed crab',
  },
  {
    title: 'Steamed Crabs Coconut',
    price: '$31',
    tags: 'Steamed crab with coconut water',
  },
  {
    title: 'Crab Salad',
    price: '$26',
    tags: 'Crab salad mixed with sweet and sour mango',
  },
];

const cocktails = [
  {
    title: 'Fried Lobster',
    price: '$20',
    tags: 'Fried noodles with Lobster and sweet and sour meat',
  },
  {
    title: "Steamed Lobster",
    price: '$16',
    tags: 'Steamed Lobster with beer',
  },
  {
    title: 'Lobster Sauce',
    price: '$10',
    tags: 'Lobster with garlic butter sauce',
  },
  {
    title: 'Roasted Lobster',
    price: '$31',
    tags: 'Roasted lobster with salt and pepper',
  },
  {
    title: 'Grilled lobster',
    price: '$26',
    tags: 'Grilled lobster with onion fat',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Fresh seafood',
    subtitle: 'Always at the forefront of preparing delicious dishes from fresh seafood',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'It is one of the restaurants with the highest number of visitors',
  },
  {
    imgUrl: images.award05,
    title: 'AA Restaurant',
    subtitle: 'Is a restaurant rated 4 stars for quality',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'The team of chefs is well-trained and highly qualified',
  },
];

export default { wines, cocktails, awards };
