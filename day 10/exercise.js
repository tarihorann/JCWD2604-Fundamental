/** @format */

// Buatlah sebuah program untuk sebuah restaurant
// Menu resto ada cah kangkung, ayam mayo, fuyunghai , (bisa ditambah)
// Per masing2 menu akan memotong stock bahan makanan
// Untuk resep yang memotong bahan makanan bebas bisa dibuat sendiri

// Customer bisa memesan makanan
// Customer memiliki key nama,total price,list pesanan, tgl pesan

// Resto bisa cek bahan makanan mereka
// Resto bisa cek makanan yang paling sering dipesan
// Resto bisa cek list pesanan makanan berdasarkan tanggal
// Resto bisa menambah stock bahan makanan
// Resto bisa cek customer mana yang menghabiskan uang paling banyak (sum dari seluruh order dari nama yang sama)

class Menu {
  constructor(name, price, ...recipes) {
    this.name = name; // nama menu
    this.price = price; // harga menu
    this.recipes = recipes; // list of resep
  }
}

class Recipe {
  constructor(name, qty) {
    this.name = name; // bahan makanan
    this.qty = qty; // qty bahan yg dibutuhkan
  }
}

class MenuOrder {
  constructor(name, qty) {
    this.name = name; // nama menu
    this.qty = qty; // banyak menu yang dipesan
  }
}

class Stock {
  constructor(name, stock) {
    this.name = name; // nama bahan makanan
    this.stock = stock; // jumlah stock bahan makanan
  }
}

class Order {
  constructor(name, orders, date) {
    this.name = name; //nama customer
    this.date = date
      ? new Date(date).toLocaleDateString()
      : new Date().toLocaleDateString(); //tanggal order  2024/12/04
    this.orders = orders; // list of orders
  }
}

class Restaurant {
  #menus = [];
  #orders = [];
  #stocks = [];
  constructor(name) {
    this.name = name;
  }

  addMenu(menu) {
    if (menu instanceof Menu) {
      this.#menus.push(menu);
    }
  }

  addStock(ingridient) {
    // { name: telor , stock : 10}
    // [ { name : "ayam", stock: 10}, {name : "telor", stock : 5 }]
    // [ { name : "ayam", stock: 10}, {name : "telor", stock : 15 }]

    //{name : ikan , stock : 5}
    // [ { name : "ayam", stock: 10}, {name : "telor", stock : 15 },{name : ikan , stock : 5}]
    const checkStockIdx = this.#stocks.findIndex(
      (stock) => stock.name.toLowerCase() == ingridient.name.toLowerCase()
    );
    if (checkStockIdx == -1) this.#stocks.push(ingridient);
    else this.#stocks[checkStockIdx].stock += ingridient.stock;
  }

  createOrder(customerName, orders, date) {
    const foods = [];
    let total = 0;
    //[{name : "Ayam Telur", qty : 3}]
    orders.forEach((order) => {
      const menu = this.#menus.find(
        (menu) => menu.name.toLowerCase() == order.name.toLowerCase()
      );

      //{ name: Ayam Telur, price : 25000, recipes : [ { name: telur, qty: 1 }, { name : ayam , qty : 1}] , qty : 2 }

      if (menu) {
        foods.push({ ...menu, qty: order.qty });
        total += menu.price * order.qty;
      }
    });

    if (foods.length) {
      const newOrder = { ...new Order(customerName, foods, date), total };
      this.#orders.push(newOrder);

      console.log(newOrder);
      this.#checkStock(foods);
    }
  }

  #checkStock(orders) {
    const currStock = [...this.#stocks]; //copy isi dari stocks ke current stock
    orders.forEach((order) => {
      order.recipes.forEach((recipe) => {
        const stockIdx = currStock.findIndex((s) => s.name == recipe.name); // {name : ayam, qty : 10} => [0]
        currStock[stockIdx].stock -= recipe.qty * order.qty; // stock = 10 - 1 * 2 => 8
        if (currStock[stockIdx].stock < 0) throw new Error("stock tidak cukup");
      });
    });

    this.#stocks = currStock;
  }

  bestCustomer() {
    const spenderRank = []; // [ {name : udin, amount: 75000 }, {name: johan, amount : 95000} ]
    this.#orders.forEach((order) => {
      const checkIdx = spenderRank.findIndex((val) => val.name == order.name);
      if (checkIdx != -1) spenderRank[checkIdx].amount += order.total;
      else spenderRank.push({ name: order.name, amount: order.total });
    });

    spenderRank.sort((a, b) => b.amount - a.amount);
    console.log(
      "biggest spender customer is",
      spenderRank[0].name,
      "total amount =",
      spenderRank[0].amount
    );
  }

  mostOrderFood() {
    const mostOrder = []; // [{name: ayam telur, qty : 2}, {name : telur dadar , qty : 8} ]
    this.#orders.forEach((order) => {
      order.orders.forEach((food) => {
        const checkIdx = mostOrder.findIndex((val) => val.name == food.name); // 1
        if (checkIdx != -1)
          mostOrder[checkIdx].qty += food.qty; // mostOrder[1].qty += 5
        else mostOrder.push({ name: food.name, qty: food.qty });
      });
    });

    mostOrder.sort((a, b) => b.qty - a.qty);
    // console.log(mostOrder);
    console.log(
      "most order food is",
      mostOrder[0].name,
      "total qty =",
      mostOrder[0].qty
    );
  }

  filterOrderByDate(date) {
    const filterDate = date
      ? new Date(date).toLocaleDateString()
      : new Date().toLocaleDateString();

    const filterByDate = this.#orders.filter(
      (order) => order.date == filterDate
    );
    console.log(filterByDate);
  }

  showMenu() {
    console.log(`==== welcome to ${this.name} ===`);
    console.log(`=== Our Menu ===`);
    this.#menus.forEach((menu) => console.log(menu.name, menu.price));
    console.log(`==================`);
  }

  showStock() {
    console.log(`==== welcome to ${this.name} ===`);
    console.log(`=== Our Stocks ===`);
    this.#stocks.forEach((stock) => console.log(stock.name, stock.stock));
    console.log(`==================`);
  }
}

const stockAyam = new Stock("Ayam", 10); // { name : "Ayam", stock : 10 }
const stockTelur = new Stock("Telur", 15);

const siangMalam = new Restaurant("Padang Siang Malam");

//add Stock
siangMalam.addStock(stockAyam);
siangMalam.addStock(stockTelur);
siangMalam.showStock();

// //resep telur dadar
const telur_1 = new Recipe("Telur", 1); // { name: "telur" , qty : 1 }
const telurDadar = new Menu("Telur Dadar", 15000, telur_1);
const ayam_1 = new Recipe("Ayam", 1);
const ayamTelur = new Menu("Ayam Telur", 25000, telur_1, ayam_1);

// //add menu
siangMalam.addMenu(telurDadar);
siangMalam.addMenu(ayamTelur);
siangMalam.showMenu();

// //order
const orderAyam = new MenuOrder("Ayam Telur", 2); // { name : "Ayam Telur", qty : 2}
const orderTelur = new MenuOrder("Telur Dadar", 3);
const orderTelur_5 = new MenuOrder("Telur Dadar", 5);
const orderTelur_1 = new MenuOrder("Telur Dadar", 1);

// ayam 2 telur 2
// telur 3

siangMalam.createOrder("johan", [orderAyam, orderTelur]);
siangMalam.showStock();
siangMalam.createOrder("udin", [orderTelur_5]);
siangMalam.showStock();

siangMalam.createOrder("johan", [orderTelur_1], "2023/11/10");
siangMalam.showStock();

siangMalam.mostOrderFood();
siangMalam.bestCustomer();

siangMalam.filterOrderByDate("2023/11/10");
