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

const productIdToEdit = /* ID del producto a editar */;
const productToEdit = productService.getProductById(productIdToEdit);
if (productToEdit) {
    productToEdit.name = "Nuevo nombre del producto";
    productToEdit.price = 200.00;
    productService.editProduct(productToEdit);
    console.log("Producto editado exitosamente.");
} else {
    console.log("Producto no encontrado.");
}


const productIdToDelete = /* ID del producto a eliminar */{
    
};
productService.deleteProduct(productIdToDelete);
console.log("Producto eliminado exitosamente.");


/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menu() {
    console.log("\n\n--- Menú ---");
    console.log("1. Registrar nuevo usuario");
    console.log("2. Eliminar usuario");
    console.log("3. Actualizar datos de usuario");
    console.log("4. Salir\n");
}

// Registro, caso 1
function registerUserByInput() {
// console.log("TEST");
    rl.question("Nombre: ", async function(nombre) {
        rl.question("Identificación: ", async function(identificacion) {
            rl.question("Dirección: ", async function(direccion) {
                rl.question("Teléfono: ", async function(telefono) {
                    rl.question("Correo: ", async function(correo) {
                        rl.question("¿Es wholesaler?", async function(userType) {
                            let userToAdd = new User(nombre, identificacion, direccion, telefono, correo, userType);
                            await userService.registerUser(userToAdd, userType);
                            menu();
                            option();
                        });
                    });
                });
            });
        });
    });
}

//Eliminar, caso 2
function deleteUserByInput() {
    rl.question("ID del usuario a eliminar: ", async function(idUsuario) {
        await userRepository.deleteUser(idUsuario);
        console.log("Usuario eliminado correctamente.");
        menu();
        option();
    });
}

// Actualización, caso 3
function updateUserByInput() {
    rl.question("ID del usuario a actualizar: ", async function(idUsuario) {
        const userExists = await userRepository.findById(idUsuario);
        if (!userExists) {
            console.log("No se encontró ningún usuario con ese ID.");
            menu();
            option();
            return;
        }
        console.log("Usuario encontrado. Proporcione los nuevos datos:");

        rl.question("Nombre: ", async function(nombre) {
                rl.question("Dirección: ", async function(direccion) {
                    rl.question("Teléfono: ", async function(telefono) {
                        rl.question("Correo: ", async function(correo) {
                            rl.question("¿Es mayorista? (s/n): ", async function(esMayorista) {
                                let userToAdd = new User(nombre, idUsuario, direccion, telefono, correo, esMayorista === 's');
                                await userRepository.updateUsuer(userToAdd);
                                menu();
                                option();
                            });
                        });
                    });
                });
            });
    });
}


function option() {
   // console.log("Test");
    rl.question("Seleccione una opción: ", async function(opcion) {
        switch (opcion) {
            case '1':
                registerUserByInput();
                break;
            case '2':
                deleteUserByInput();
                break;
            case '3':
                updateUserByInput();
                break;
            case '4':
                console.log("Cerrando");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Reintentalo.");
                menu();
                option();
                break;
        };
    });
};

option();
menu();

rl.on('close', function() {
    console.log("¡Hasta luego!");
    process.exit(0);
});

//necesitaremos una interfaz que se encargue genéricamente de recibir una lista de productos.
*/