const EmailService = require('./EmailService')

class OccasionalEmailServiceImpl extends EmailService {
    async message(email, message) {
        console.log(`${email}: ${message}`);
    }
}
module.exports = OccasionalEmailServiceImpl;