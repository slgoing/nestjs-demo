import { Controller, Get, Post, Request, Body  } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/findAll')
  getUsers() {
    return this.usersService.getUsers()
  }

  @Post('/addUser')
  addUser(@Request() req):any {
    return this.usersService.addUser()
  }

  @Post('/addName')
  addName(@Body() body):any {
    return this.usersService.addName()
  }

  @Get('/findUser')
  findUser(@Request() req):any {
    console.log(req.query.id)
    return this.usersService.findUser(parseInt(req.query.id))
  }
}
