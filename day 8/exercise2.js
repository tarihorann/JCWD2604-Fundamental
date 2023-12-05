/** @format */

// Buat sebuah array of products
// Setiap product memiliki property name,price
// Product sepatu memiliki category,size,color,brand
// Product Komputer memiliki category,brand,ram, storage,processor
// Product Sepeda memiliki category,brand,color,type
// Buat sebuah function untuk filtering product by category atau product by name
// Buat sebuah function untuk mengurutkan product dari termurah-termahal, termahal-termurah

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Sepatu extends Product {
  constructor(name, price, size, color, brand) {
    super(name, price, "sepatu");
    this.size = size;
    this.color = color;
    this.brand = brand;
  }
}

class Komputer extends Product {
  constructor(name, price, brand, ram, storage, processor) {
    super(name, price, "komputer");
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;
    this.processor = processor;
  }
}

class Sepeda extends Product {
  constructor(name, price, brand, color, type) {
    super(name, price, "sepeda");
    this.brand = brand;
    this.color = color;
    this.type = type;
  }
}

const nike = new Sepatu("nike zoom", 1000, "10us", "black", "nike");
const laptopMSI = new Komputer(
  "MSI-GS65",
  10000,
  "msi",
  "8gb",
  "1tb",
  "intel i9 14900k"
);
const sepedaRoadBike = new Sepeda(
  "roadbike s550",
  9000,
  "brompton",
  "green",
  "roadbike"
);
const products = [nike, laptopMSI, sepedaRoadBike];

const filterProducts = (products = [], search) =>
  products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

console.log(filterProducts(products, "sepeda"));

const sortByPrice = (products, type) =>
  products.sort((a, b) =>
    type == "ascending" ? a.price - b.price : b.price - a.price
  );

console.log(sortByPrice(products, "desc"));

// Buatlah sebuah class untuk menampung user
// Setiap user memiliki email,name,password
// Untuk menambah user baru wajib lewat register
// Email tidak boleh ada yang sama
// Input email wajib ada validasi symbol “@”
// Input password wajib menggunakan huruf besar 1, huruf kecil 1, symbol @ atau !
// Tampilkan user yg sudah terdaftar lewat sebuah getter
// User yang tampil hanya boleh email dan namenya saja

class ListUser {
  #users = [];
  register(newUser) {
    if (this.#cekEmail(newUser.email))
      return console.log("email sudah terdaftar");
    if (
      newUser.email.includes("@") &&
      newUser.password != newUser.password.toUpperCase() &&
      newUser.password != newUser.password.toLowerCase() &&
      (newUser.password.includes("@") || newUser.password.includes("!"))
    ) {
      this.#users.push(newUser);
    } else return console.log("format tidak sesuai");
  }
  #cekEmail(email) {
    return this.#users.find(
      (val) => val.email.toLowerCase() == email.toLowerCase()
    );
  }
  get list() {
    return this.#users.map(({ email, name }) => {
      return { email, name };
    });
  }
}

class User {
  constructor(email, password, name) {
    this.email = email;
    this.password = password;
    this.name = name;
  }
}

const users = new ListUser();
users.register(new User("jordan@mail.com", "Pa55!", "jordan"));
users.register(new User("jordan@mail.com", "Pa55!", "jordan"));
users.register(new User("jordan@mail.com", "Pa55!", "jordan"));

console.log(users.list);
