import { Controller, Get, Post, Request, Body, Param } from '@nestjs/common';
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

  @Get('/findUser/:id')
  // findUser(@Request() req):any {
  //   return this.usersService.findUser(parseInt(req.params.id))
  // }
  findUser(@Param() param):any {
    console.log(param);
    return this.usersService.findUser(parseInt(param.id))
  }
}
