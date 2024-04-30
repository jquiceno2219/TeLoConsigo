class EmailService {
    async message(email, message) {
        console.log(`${email}: ${message}`);
    }
    
    class WholesalerEmailService extends EmailService {
        async message(email, message) {
            console.log(`${email}: ${message} \n Sending welcome email and agreement of terms and conditions for wholesaler buyers`);
        }
    }
    
    class RegularEmailService extends EmailService {
        async message(email, message) {
            console.log(`${email}: ${message}`);
        }
    }
}
    
module.exports = EmailService;