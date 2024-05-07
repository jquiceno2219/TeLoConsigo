class ProductService {
    constructor() { 
        this.productRepository = [];
    }

    async addProduct(product) {
        this.productRepository.push(product);
    }

    async editProduct(product) {
        const i = this.productRepository.find(product => product.id === this.productRepository.id);
        if (i !== -1){
            this.productRepository[i] = product;
        }
    }

    async deleteProduct(productId) {
        this.productRepository = this.productRepository.filter(product => product.id !== productId);
    }

    async getProductById(productId) {
        return this.productRepository.find(product => product.id === this.productRepository.identification);
    }
}

module.exports = ProductService;
