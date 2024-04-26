import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    // stores the business logic, service or PROVIDER is that it can be injected
    // as dependency - objects can create various relationships with each other
    login() {

    }

    signup() {
        return { msg: "Hello World- signed up recently!"}
    } 

    signin() {
        return "I am Signed in"
    }
}