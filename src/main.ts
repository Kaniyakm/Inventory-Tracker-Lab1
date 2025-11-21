// Step 1: Import the subclasses
import PhysicalProduct from "./models/PhysicalProduct";
import DigitalProduct from "./models/DigitalProduct";

// Step 2: Create instances of both product types
const hairExtensions = new PhysicalProduct("Hair Extensions", 1200, 2.5);
const KolorEbook = new DigitalProduct("Kolor Ebook", 19.99, 5);


// Step 3: Store them in a common array (polymorphism in action)
// Both are treated as Product objects because they share the same base class
const products = [hairExtensions, KolorEbook];

// Step 4: Loop through products and display details + final price
for (const product of products) {
  console.log(product.displayDetails());          // Calls the overridden displayDetails()
  console.log("Final Price:", product.getPriceWithTax()); // Calls the overridden getPriceWithTax()
  console.log("--------------------------------------------------");
}
