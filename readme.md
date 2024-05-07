# SOLID Principles Exercise

The following is an exercise on SOLID Principles which also serves as a practice on node.js.

Developed by:
J. Q. Pimienta
Val Martinez

## Activity prompt (on spanish)
La empresa “Te lo consigo” se dedica a la venta de computadores y accesorios de
tecnología por internet, actualmente por redes sociales, la empresa desea migrar
a una plataforma web que les permita expandir su negocio y facilitar los procesos
de toma de pedidos y gestión de clientes, ya que reciben constantemente
peticiones para la venta al por mayor o la implementación de un modelo de ventas
en red.
Inicialmente se requiere diseñar un módulo para gestionar los usuarios en la
plataforma.  
  
Debe ser posible el registro, actualización y eliminación de usuarios.
De un usuario se requieren además de datos básicos como nombre, identificación,
dirección, teléfono y correo electrónico, es interés de la empresa que pueda ser posible
clasificar a los usuarios según sus intereses, comprador ocasional o comprador
mayorista.
En el caso de los compradores mayoristas, se desea que al momento de registrarse en
plataforma se les envíe un correo de bienvenida y acuerdo de términos y condiciones de
este tipo de membresía.
Por su parte, los compradores ocasionales no recibirán ningún correo de bienvenida (por
ahora), pero sí recibirán un mensaje en pantalla indicando que han quedado registrados
y que pronto tendrán acceso a un catálogo web de productos de tecnología.

## How to run?

Use the following command on the terminal:

```bash
node app.js
```

## UML Diagrams
### Class Diagram:
![UML Diagram for project.](./assets/Analisis%20Diagrama%201.drawio.png)

### Sequence diagrams:
![User Management sequence diagram.](./assets/Secuence_Diagram-Gestión%20de%20Usuarios.drawio.png)
![Product Management sequence diagram.](./assets/Secuence_Diagram-Gestión%20de%20Productos.drawio.png)
