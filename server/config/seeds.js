const db = require('./connection');
const { User, Review, Restaurant, PurchasedItem, Order, MenuItem } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    username: 'test',
    email: 'test@email.com',
    password: 'password',
  });

  console.log('users seeded');

  await MenuItem.deleteMany();

  const MenuItems = await MenuItem.insertMany([
    {
      name: "Honey Chicken",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "Crispy chicken with a honey glaze",
      price: 11.99,
    },
    {
      name: "Garlic Chicken",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "Garlic infused crispy chicken",
      price: 11.99,
    },
    {
      name: "House Special",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "Crispy Chicken tossed with original house blend",
      price: 10.99,
    },
    {
      name: "Berry Blast",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "The ultimate berry blend",
      price: 7.99,
    },
    {
      name: "Honeydew Greentea",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "Honeydew blended with a greentea infusion",
      price: 8.99,
    },
    {
      name: "Cheeseburger",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "A house standard cheeseburger",
      price: 9.99,
    },
    {
      name: "Double Up Burger",
      image: "https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg",
      description: "Double patty cheeseburger",
      price: 13.99,
    },
  ]);

  console.log('MenuItems seeded');

  await Restaurant.deleteMany();

  const Restaurants = await Restaurant.insertMany([
    { 
        name: 'Korean Chicken',
        logo: 'https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg',
        location: 'adress1',
        tags: ['asian', 'korean'],
        rating: 3,
    },
    { 
        name: 'Jamba Juice',
        logo: 'https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg',
        location: 'adress2',
        tags: ['healthy'],
        rating: 4,
    },
    { 
        name: 'BurgerJoint',
        logo: 'https://res.cloudinary.com/dx1djlhrd/image/upload/v1628783142/placeholder-300x202_jlbtx4.jpg',
        location: 'adress3',
        tags: ['burger'],
        rating: 2,
    },
  ]);

  console.log('Restaurants seeded');

  process.exit();
});
