//const readline = require('readline');
const UserRepository = require('./UserRepository');
const EmailService = require('./services/EmailService');
const WholesalerEmailService = require('./services/WholesalerEmailServiceImpl');
const UserService = require('./UserService');
const User = require('./user');
const UserType = require("./UserType");
const OccasionalEmailServiceImpl = require('./services/OccasionalEmailSerivceImpl');

const userRepository = new UserRepository();
const emailService = new EmailService();
const wholesalerEmailService = new WholesalerEmailService();
const occasionalEmailService = new OccasionalEmailServiceImpl()

const userService = new UserService(userRepository, emailService);

const newUser = new User("John", "1", "123 Street", "1234567890", "john@example.com", UserType.Occasional);

const newWholesaler = new User("Maria", "2", "Main Avenue", "0987654321", "maria@example.com", UserType.Wholesaler);
userService.registerUser(newUser, occasionalEmailService);
userService.registerUser(newWholesaler, wholesalerEmailService);

//--------------------------------------------------------------------------------------------------------------------

const ProductRepository = require('./ProductRepository');
const ProductService = require('./ProductService');
const Product = require('./Product');

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

const product1 = new Product("Producto 1", "SKU001", "Descripción del producto 1", 50.00, "Plástico", "Rojo", "Accesorio electrónico", 10, ["imagen1.jpg", "imagen2.jpg"], new Date(), new Date());
const product2 = new Product("Producto 2", "SKU002", "Descripción del producto 2", 100.00, "Metal", "Azul", "Accesorio decorativo", 20, ["imagen3.jpg"], new Date(), new Date());
const product3 = new Product("Producto 3", "SKU003", "Descripción del producto 3", 150.00, "Madera", "Verde", "Computadores", 5, ["imagen4.jpg", "imagen5.jpg"], new Date(), new Date());

productService.addProduct(product1);
productService.addProduct(product2);
productService.addProduct(product3);

console.log("Lista de productos:");
const products = productService.getAllProducts();
products.forEach(product => {
    console.log(product);
});

const productIdToEdit = "Producto 1";
const productToEdit = productService.getProductById(productIdToEdit);
if (productToEdit) {
    productToEdit.name = "Nuevo nombre del producto";
    productToEdit.price = 200.00;
    productService.editProduct(productToEdit);
    console.log("Producto editado exitosamente.");
} else {
    console.log("Producto no encontrado.");
}


const productIdToDelete = "Producto 2" {

};
productService.deleteProduct(productIdToDelete);
console.log("Producto eliminado exitosamente.");
