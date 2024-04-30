
class UserService {
    constructor(userRepository, emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    async registerUser(user, UserType) {
        await this.userRepository.saveUser(user);
        if (UserType.Wholesaler) {
            await this.emailService.message(user.email, "Welcome as a wholesaler buyer. \n Sending welcome email and agreement of terms and conditions for wholesaler buyers");
        } else {
            this.emailService.message(user.email, "Thank you for registering! \nYou'll soon have access to our catalog of technology products.`");
        }
    }

    async registerUsertwo(user, emailService) {
        await  this.userRepository.saveUser(user);
        emailService.message()
    }
}
//clase NotifGenérica - dos clas   (user, handler)


module.exports = UserService;