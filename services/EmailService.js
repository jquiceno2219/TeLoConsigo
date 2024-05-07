//superclass definition for email services.
class EmailService {
    async message(email, message) {
        console.log(`${email}: ${message}`);
    }
}
module.exports = EmailService;