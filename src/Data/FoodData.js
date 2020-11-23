export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Pizza Comun",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 300
  },
  {
    name: "Pizza calabresa",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 350
  },
  {
    name: "Pizza con pollo",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 350
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Pizza vegetariana",
    section: "Pizza",
    price: 400
  },
  {
    img: "/img/burger.jpeg",
    name: "Hamburguesa espacial",
    section: "Sandwich",
    price: 200
  },
  { img: "/img/gyro.jpeg", name: "Tacos", section: "Sandwich", price: 250 },
  {
    img: "/img/sandwich.jpeg",
    name: "Sanwich",
    section: "Sandwich",
    price: 200
  },
  {
    img: "/img/fries.jpeg",
    name: "Papas fritas ",
    section: "Guarnicion",
    price: 100
  },
  {
    price: 200,
    img: "https://images.unsplash.com/photo-1595177924779-dbe82554cc24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Gaseosas",
    section: "Drinks",
    choices: ["Coca-cola", "Sprite", "seven-up"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

//  © created by react.school
