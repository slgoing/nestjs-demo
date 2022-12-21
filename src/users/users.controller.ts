import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getGirls():any{
    return{
      code: 200,
      data: ['翠花','小红','大丫'],
      msg: '请求用户列表成功'
    }
  }
}
