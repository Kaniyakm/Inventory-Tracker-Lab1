"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// ======================================================
// Tax Calculator Utility
// ------------------------------------------------------
// Accepts ANY product and returns its final price.
// Uses polymorphism because each product implements
// getPriceWithTax() differently.
// ======================================================
function calculateTax(product) {
    return product.getPriceWithTax();
}
