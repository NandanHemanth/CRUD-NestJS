import { Controller, Module, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') // the auth is just a global request to access the signup & signin
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('signup')
     signup() {
        return this.authService.signup()
     }

     @Post('signin')
     signin() {
        return this.authService.signin()
     }
}