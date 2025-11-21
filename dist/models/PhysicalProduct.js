"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
// ======================================================
// PhysicalProduct Subclass
// ------------------------------------------------------
// Represents physical items with a weight.
// Physical goods have a 10% tax.
// ======================================================
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight // additional property unique to physical products
    ) {
        super(sku, name, price); // call parent constructor
        this.weight = weight;
    }
    // ------------------------------------------------------
    // Getter: nicely formatted weight string (e.g. "2.5 kg")
    // ------------------------------------------------------
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    // ------------------------------------------------------
    // Override tax calculation for physical products
    // Applies 10% tax: price * 1.10
    // ------------------------------------------------------
    getPriceWithTax() {
        return this.price * 1.10;
    }
    // ------------------------------------------------------
    // Override: add weight to displayed details
    // ------------------------------------------------------
    displayDetails() {
        return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
