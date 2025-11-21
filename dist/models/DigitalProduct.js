"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
// ======================================================
// DigitalProduct Subclass
// ------------------------------------------------------
// Represents downloadable digital items.
// Digital goods have no tax.
// ======================================================
class DigitalProduct extends Product_1.Product {
    constructor(sku, name, price, fileSize // size in MB
    ) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // ------------------------------------------------------
    // Getter: formatted file size (e.g. "500 MB")
    // ------------------------------------------------------
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    // ------------------------------------------------------
    // Override tax calculation — digital items have no tax
    // ------------------------------------------------------
    getPriceWithTax() {
        return this.price;
    }
    // ------------------------------------------------------
    // Override: add file size to details
    // ------------------------------------------------------
    displayDetails() {
        return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
    }
}
exports.DigitalProduct = DigitalProduct;
