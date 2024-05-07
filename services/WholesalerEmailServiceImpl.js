const EmailService = require('./EmailService')

class WholesalerEmailService extends EmailService {
    async message(email, message) {
        console.log(`${email}: ${message}, welcome as a wholesaler buyer. \n Sending welcome email and agreement of terms and conditions for wholesaler buyers`);
    }
}
module.exports = WholesalerEmailService;