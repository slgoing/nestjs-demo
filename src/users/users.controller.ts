import { Controller, Get, Post, Request, Body  } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }

  @Post('/addUser')
  addUser(@Request() req):any {
    console.log(req.body)
    return this.usersService.addUser()
  }

  @Post('/addName')
  addName(@Body() body):any {
    console.log(body)
    return this.usersService.addName()
  }
}
