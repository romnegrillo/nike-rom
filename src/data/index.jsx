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

import {
  MdHomeFilled,
  MdShoppingCart,
  MdInfo,
  MdContactPage,
} from 'react-icons/md';

export const navLinks = [
  { link: '/home', label: 'Home', icon: <MdHomeFilled className="w-5 h-5" /> },
  {
    link: '/products',
    label: 'Products',
    icon: <MdShoppingCart className="w-5 h-5" />,
  },
  { link: '/about', label: 'About Us', icon: <MdInfo className="w-5 h-5" /> },
  {
    link: '/contact',
    label: 'Contact Us',
    icon: <MdContactPage className="w-5 h-5" />,
  },
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
      { name: 'Air Force 1', link: '/products' },
      { name: 'Air Max 1', link: '/products' },
      { name: 'Air Jordan 1', link: '/products' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About us', link: '/about#aboutUs' },
      { name: 'FAQs', link: '/about#faq' },
      { name: 'Privacy policy', link: '/about#privacyPolicy' },
      { name: 'Payment policy', link: '/about#paymentPolicy' },
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

export const faqs = [
  {
    question: "What is Nike's return policy for shoes?",
    answer:
      'We offer a 30-day return policy. If the shoes are in new and unworn condition and returned in their original packaging, you are eligible for a full refund or exchange.',
  },
  {
    question: 'How do I care for and clean my Nike shoes?',
    answer:
      'Different materials require different care. Generally, for regular cleaning, use a soft brush or cloth to wipe away dirt. For deeper cleaning, we recommend checking our shoe care guide specific to the model and material of your shoe.',
  },
  {
    question: 'Do Nike shoes come with a warranty?',
    answer:
      'Yes, Nike shoes come with a limited warranty that covers manufacturing defects. This does not cover wear and tear from regular use or damage from external factors.',
  },
  {
    question:
      'Are there any special care instructions for limited-edition or collaboration shoes?',
    answer:
      'Limited-edition or collaboration shoes may have unique materials that require special care. Always refer to the care instructions provided with the product or consult our website for specific guidance.',
  },
];

export const privacyPolicies = [
  {
    title: 'Introduction',
    content:
      'At Nike, we are committed to ensuring the privacy and protection of our customers. This Privacy Policy outlines how we collect, use, and safeguard your personal information. By using our website, you consent to the practices described in this policy.',
  },
  {
    title: 'Information Collection',
    content:
      'Direct Information: This includes details you provide when making a purchase, signing up for our newsletter, or creating an account. Examples are your name, email address, shipping and billing address, and payment details. Automated Information: We gather certain information automatically when you visit our site, like your IP address, browser type, and browsing behavior. This helps us improve user experience and site functionality.',
  },
  {
    title: 'Use of Information',
    content:
      'Processing and fulfilling orders. Sending promotional materials and newsletters. Analyzing website usage to enhance user experience. Handling customer service requests and feedback.',
  },
  {
    title: 'Sharing of Information',
    content:
      'We do not sell your personal information to third parties. However, we might share information with third-party service providers for tasks like order fulfillment, email distribution, or market analysis. Such parties are obligated to maintain the confidentiality of your information.',
  },
  {
    title: 'Cookies',
    content:
      'Our website uses cookies to enhance user experience. Cookies are small files stored on your device, helping us recognize repeat visitors, save user preferences, and improve site functionality. You can choose to disable cookies through your browser settings, but this may affect certain site features.',
  },
  {
    title: 'Data Security',
    content:
      'We implement a range of security measures, including encryption and firewalls, to safeguard your personal data. While we strive to ensure maximum protection, no online transmission can guarantee 100% security. Therefore, any online activity carries inherent risks.',
  },
  {
    title: 'Third-party Links',
    content:
      'Our website may have links to external sites not operated by us. We are not responsible for the content or privacy practices of these sites. We advise reviewing their privacy policies before providing any personal data.',
  },
  {
    title: 'Updates to this Policy',
    content:
      'We may periodically update our Privacy Policy to reflect changes in our practices or for other operational reasons. Any changes will be promptly posted on this page.',
  },
];

export const paymentPolicies = [
  {
    title: 'Accepted Payment Methods',
    content:
      'We accept various payment methods for your convenience including Visa, MasterCard, American Express, Discover, and PayPal. Our site uses secure payment gateways to ensure your payment details are safe.',
  },
  {
    title: 'Payment Authorization',
    content:
      'When you place an order, an authorization hold will be placed on your payment method to temporarily reserve the funds. Your account will be charged once the order has been processed and shipped.',
  },
  {
    title: 'Currency Conversion',
    content:
      "All prices on our website are listed in US dollars (USD). If you're shopping from outside the United States, your bank or card issuer will handle currency conversion and might charge you a fee. We recommend checking with them for details.",
  },
  {
    title: 'Sales Tax',
    content:
      'Applicable sales tax will be added to orders based on the shipping address. The amount of sales tax charged is determined by several factors including, but not limited to, the type of item purchased and the destination of the shipment.',
  },
  {
    title: 'Order Cancellations',
    content:
      "If you wish to cancel an order, please contact us as soon as possible. While we can't guarantee order cancellations due to our quick processing times, we'll do our best to accommodate your request if the order hasn't been processed or shipped.",
  },
  {
    title: 'Refund Policy',
    content:
      "In the event you're not satisfied with your purchase, we offer a 30-day return policy. Items must be returned in their original condition and packaging. Once we receive and inspect the item, we'll process your refund. Please note that refunds can take up to 5-7 business days to reflect in your account, depending on your bank or card issuer.",
  },
  {
    title: 'Security',
    content:
      'We prioritize the security of your payment details. Our website uses encryption and secure payment gateways to safeguard your data. We never store your full card details on our servers.',
  },
];

export const contactReasons = [
  {
    title: 'Product Queries',
    content:
      'Dive deeper into our collections or get guidance on the best fit for your athletic journey.',
  },
  {
    title: 'Order Support',
    content:
      "Whether it's shipping details, returns, or just tracking your order, we're here to help.",
  },
  {
    title: 'Share Your Story',
    content:
      'Every achievement, big or small, matters. Share your athletic journey and inspire the Nike family.',
  },
  {
    title: 'Feedback',
    content:
      'Help us enhance your Nike experience. We value your insights and suggestions.',
  },
];
