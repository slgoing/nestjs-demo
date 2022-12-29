import { Controller, Get, Post, Request, Body, Param, Headers } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/findAll')
  getUsers() {
    return this.usersService.getUsers()
  }

  @Post('/addUser')
  addUser(@Body() body):any {
    return this.usersService.addUser(body)
  }

  @Get('findUser/:name')
  findUserName(@Param() param): any {
    return this.usersService.getUserByName(param.name)
  }

  @Get('deleteUser/:name')
  deleteUser(@Param() param): any {
    return this.usersService.delUser(param.name)
  }

  @Get('updateUser/:id/:name')
  updateUser(@Param() param): any {
    return this.usersService.updateUser(parseInt(param.id), param.name)
  }
}
