// Step 1: Import subclasses using named imports
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

// Step 2: Create product instances
// Must pass: (sku, name, price, weight/fileSize)

const hairExtensions = new PhysicalProduct(
  "SKU-001",
  "Hair Extensions",
  1200,
  2.5 // weight in kg
);

const kolorEbook = new DigitalProduct(
  "SKU-002",
  "Kolor Ebook",
  19.99,
  5 // file size in MB
);

// Step 3: Put all products in a shared array
// POLYMORPHISM: both behave like Product objects
const products = [hairExtensions, kolorEbook];

// Step 4: Loop through products and show details
for (const product of products) {
  console.log(product.displayDetails());
  console.log("Final Price:", product.getPriceWithTax());
  console.log("------------------------------------------------");
}
