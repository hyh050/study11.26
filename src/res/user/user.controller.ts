// user.controller.ts
import { Controller } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/user')
export class UserControlloer {
    constructor(private readonly userService: UserService) {}
}