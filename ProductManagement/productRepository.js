class productRepository {
    constructor (){
        this.products = [];
    }

    async addProduct(product) {
        this.products.push(product);
    }

    async findById(id) {
        return this.products.find(user => user.id === this.users.identification);
    }

    async editProduct(product) {
        const i = this.products.find(product => product.id === this.products.id);
        if (i !== -1){
            this.products[i] = product;
        }
    }

    async deleteProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
}


module.exports = productRepository;