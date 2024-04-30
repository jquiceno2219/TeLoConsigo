class ProductService {
    constructor() { 
        this.productRepository = new this.productRepository();
    }

    async addProduct(product) {
        await this.productRepository.addProduct(product);
    }

    async editProduct(product) {
        await this.productRepository.editProduct(product);
    }

    async deleteProduct(productId) {
        await this.productRepository.deleteProduct(productId);
    }

    async getProductById(productId) {
        return await this.productRepository.findById(productId);
    }
}

module.exports = ProductService;
