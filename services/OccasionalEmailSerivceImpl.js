const EmailService = require('./EmailService')

class OccasionalEmailServiceImpl extends EmailService {
    async message(email, message) {
        console.log(`${email}: ${message}, Thank you for registering! \nYou'll soon have access to our catalog of technology products.` );
    }
}
module.exports = OccasionalEmailServiceImpl;