import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  shoe9,
  shoe10,
  shoe11,
  shoe12,
  shoe13,
  shoe14,
  shoe15,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { link: '/home', label: 'Home' },
  { link: '/products', label: 'Products' },
  { link: '/about', label: 'About Us' },
  { link: '/contact', label: 'Contact Us' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const productSortValues = [
  { value: 'featured', label: 'Featured' },
  { value: 'highestToLowest', label: 'Highest to lowest' },
  { value: 'lowestToHighest', label: 'Lowest to highest' },
];

export const productCategoryFilters = [
  { label: 'All', value: 'all' },
  { label: 'Air Force', value: 'airForce' },
  { label: 'Air Max', value: 'airMax' },
  { label: 'Air Jordan', value: 'airJordan' },
];

export const popularProducts = [
  {
    imgUrl: shoe9,
    name: 'Nike Air Max 90',
    type: 'Air Max',
    typeValue: 'airMax',
    price: '285',
    rating: 5.0,
  },
  {
    imgUrl: shoe12,
    name: "Nike Air Force 1 '07",
    type: 'Air Force',
    typeValue: 'airForce',
    price: '275',
    rating: 5.0,
  },
  {
    imgUrl: shoe11,
    name: 'Nike Air Max Furyosa',
    type: 'Air Max',
    typeValue: 'airMax',
    price: '305',
    rating: 4.9,
  },
  {
    imgUrl: shoe14,
    name: "Nike Air Force 1 '07",
    type: 'Air Force',
    typeValue: 'airForce',
    price: '290',
    rating: 4.9,
  },
];

export const products = [
  {
    imgUrl: shoe4,
    name: 'Nike Air Jordan-01',
    type: 'Air Jordan',
    typeValue: 'airJordan',
    price: '230.50',
    rating: 4.7,
  },
  {
    imgUrl: shoe5,
    name: 'Nike Air Jordan-10',
    type: 'Air Jordan',
    typeValue: 'airJordan',
    price: '245.90',
    rating: 4.8,
  },
  {
    imgUrl: shoe6,
    name: 'Nike Air Jordan-100',
    type: 'Air Jordan',
    typeValue: 'airJordan',
    price: '235.60',
    rating: 4.9,
  },
  {
    imgUrl: shoe7,
    name: 'Nike Air Jordan-001',
    type: 'Air Jordan',
    typeValue: 'airJordan',
    price: '240.70',
    rating: 4.9,
  },
  {
    imgUrl: shoe8,
    name: 'Nike Air Max 270',
    type: 'Air Max',
    typeValue: 'airMax',
    price: '275',
    rating: 4.9,
  },
  {
    imgUrl: shoe9,
    name: 'Nike Air Max 90',
    type: 'Air Max',
    typeValue: 'airMax',
    price: '285',
    rating: 5.0,
  },
  {
    imgUrl: shoe10,
    name: 'Nike Air VaporMax Flyknit',
    type: 'Air Max',
    typeValue: 'airMax',
    price: '290',
    rating: 4.8,
  },
  {
    imgUrl: shoe11,
    name: 'Nike Air Max Furyosa',
    type: 'Air Max',
    typeValue: 'airMax',
    price: '305',
    rating: 4.9,
  },
  {
    imgUrl: shoe12,
    name: "Nike Air Force 1 '07",
    type: 'Air Force',
    typeValue: 'airForce',
    price: '275',
    rating: 5.0,
  },
  {
    imgUrl: shoe13,
    name: "Nike Air Force 1 '07",
    type: 'Air Force',
    typeValue: 'airForce',
    price: '285',
    rating: 4.8,
  },
  {
    imgUrl: shoe14,
    name: "Nike Air Force 1 '07",
    type: 'Air Force',
    typeValue: 'airForce',
    price: '290',
    rating: 4.9,
  },
  {
    imgUrl: shoe15,
    name: "Nike Air Force 1 '07",
    type: 'Air Force',
    typeValue: 'airForce',
    price: '305',
    rating: 4.9,
  },
];

export const services = [
  {
    imgUrl: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgUrl: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgUrl: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imgUrl: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgUrl: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
