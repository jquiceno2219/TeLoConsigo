class product {
    constructor (id, name, description, price, material, color, category, stock, images, creationDate, updateDate){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.material = material;
        this.color = color;
        this.category = category;
        this.stock = stock;
        this.images = images;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }
}

module.exports = Product;