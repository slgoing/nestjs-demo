import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getUsers(): any{
    return{
      code: 200,
      data: ['翠花','小红','大丫'],
      msg: '请求用户列表成功'
    }
  }
}
