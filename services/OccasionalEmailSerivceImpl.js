const EmailService = require('./EmailService')

//Manage message implementation for occasional users. As stated, they won't have access yet to the product cataloge.
class OccasionalEmailServiceImpl extends EmailService {
    async message(email, message) {
        console.log(`${email}: ${message}, Thank you for registering! \nYou'll soon have access to our catalog of technology products.` );
    }
}
module.exports = OccasionalEmailServiceImpl;