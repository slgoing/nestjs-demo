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
  addUser(){
    return {
      code: 200,
      data: {id:1,name:'大梨',age:27},
      msg: '用户 添加成功'
    };
  }
  addName(){
    return {
      code: 200,
      data: {id:1,name:'大梨',age:27},
      msg: '名称 添加成功'
    };
  }
}
