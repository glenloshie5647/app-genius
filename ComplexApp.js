/*
Filename: ComplexApp.js

Description: This code is a complex and elaborate example of a web application that simulates an online store for selling cars. It includes features such as user authentication, product listing, shopping cart management, and purchase confirmation.

Note: This code can only be executed in a web browser environment as it includes interaction with the DOM.

Author: Your Name (Replace with your name)
Date: August 31, 2022
*/

// User Authentication
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    // Simulate authentication logic
    console.log("User logged in successfully.");
  }

  logout() {
    // Simulate logout logic
    console.log("User logged out successfully.");
  }
}

// Product Listing
class Car {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  displayDetails() {
    console.log(`${this.brand} - ${this.name} | Price: $${this.price}`);
  }
}

// Create some car objects
const car1 = new Car("Mustang", "Ford", 50000);
const car2 = new Car("Civic", "Honda", 25000);
const car3 = new Car("X5", "BMW", 70000);

// Shopping Cart Management
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`${item.name} added to the cart.`);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      console.log(`${item.name} removed from the cart.`);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    console.log(`Total Price: $${totalPrice}`);
  }
}

// Create a shopping cart and add cars to it
const cart = new ShoppingCart();
cart.addItem(car1);
cart.addItem(car2);
cart.addItem(car3);
cart.getTotalPrice();

// Purchase Confirmation
class Order {
  constructor(user, items) {
    this.user = user;
    this.items = items;
  }

  confirm() {
    console.log(`Order confirmed for ${this.user.username}.`);
    console.log("Items:");

    for (const item of this.items) {
      item.displayDetails();
    }

    console.log(`Total Price: $${this.getTotalPrice()}`);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}

// Simulate user login and order confirmation
const user = new User("JohnDoe", "password123");
user.login();

const order = new Order(user, cart.items);
order.confirm();

user.logout();