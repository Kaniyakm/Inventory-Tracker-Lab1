"use strict";
// ======================================================
// Product Base Class (Abstract)
// ======================================================
// This is the shared parent class for PhysicalProduct
// and DigitalProduct. It must be exported so that other
// modules can import it.
// ======================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    // Display product details
    displayDetails() {
        return `Product: ${this.name} (SKU: ${this.sku}) — $${this.price.toFixed(2)}`;
    }
}
exports.Product = Product;
