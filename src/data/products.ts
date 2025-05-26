export interface Product { 
    id: number;
    name: string;
    category: string;
    price: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    image: {
      thumbnail: '/assets/image-waffle-thumbnail.jpg',
      mobile: '/assets/image-waffle-mobile.jpg',
      tablet: '/assets/image-waffle-tablet.jpg',
      desktop: '/assets/image-waffle-desktop.jpg',
    },
  },
  {
    id: 2,
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
    image: {
      thumbnail: '/assets/image-creme-brulee-thumbnail.jpg',
      mobile: '/assets/image-creme-brulee-mobile.jpg',
      tablet: '/assets/image-creme-brulee-tablet.jpg',
      desktop: '/assets/image-creme-brulee-desktop.jpg',
    },
  },
  {
    id: 3,
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    image: {
      thumbnail: '/assets/image-macaron-thumbnail.jpg',
      mobile: '/assets/image-macaron-mobile.jpg',
      tablet: '/assets/image-macaron-tablet.jpg',
      desktop: '/assets/image-macaron-desktop.jpg',
    },
  },
  {
    id: 4,
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
    image: {
      thumbnail: '/assets/image-tiramisu-thumbnail.jpg',
      mobile: '/assets/image-tiramisu-mobile.jpg',
      tablet: '/assets/image-tiramisu-tablet.jpg',
      desktop: '/assets/image-tiramisu-desktop.jpg',
    },
  },
  {
    id: 5,
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
    image: {
      thumbnail: '/assets/image-baklava-thumbnail.jpg',
      mobile: '/assets/image-baklava-mobile.jpg',
      tablet: '/assets/image-baklava-tablet.jpg',
      desktop: '/assets/image-baklava-desktop.jpg',
    },
  },
  {
    id: 6,
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
    image: {
      thumbnail: '/assets/image-meringue-thumbnail.jpg',
      mobile: '/assets/image-meringue-mobile.jpg',
      tablet: '/assets/image-meringue-tablet.jpg',
      desktop: '/assets/image-meringue-desktop.jpg',
    },
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
    image: {
      thumbnail: '/assets/image-cake-thumbnail.jpg',
      mobile: '/assets/image-cake-mobile.jpg',
      tablet: '/assets/image-cake-tablet.jpg',
      desktop: '/assets/image-cake-desktop.jpg',
    },
  },
  {
    id: 8,
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
    image: {
      thumbnail: '/assets/image-brownie-thumbnail.jpg',
      mobile: '/assets/image-brownie-mobile.jpg',
      tablet: '/assets/image-brownie-tablet.jpg',
      desktop: '/assets/image-brownie-desktop.jpg',
    },
  },
  {
    id: 9,
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
    image: {
      thumbnail: '/assets/image-panna-cotta-thumbnail.jpg',
      mobile: '/assets/image-panna-cotta-mobile.jpg',
      tablet: '/assets/image-panna-cotta-tablet.jpg',
      desktop: '/assets/image-panna-cotta-desktop.jpg',
    },
  },
];