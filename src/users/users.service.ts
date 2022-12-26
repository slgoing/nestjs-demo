import { Injectable } from "@nestjs/common";
import { Repository} from 'typeorm'
import {InjectRepository}from '@nestjs/typeorm'
import { Users } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly User:Repository<Users>) {}

  getUsers(): any{
    return{
      code: 200,
      data: ['翠花','小红','大丫'],
      msg: '请求用户列表成功'
    }
  }
  addUser(){
    const data = new Users()
    data.username='大梨';
    data.age=25;
    data.skill='精油按摩,日式按摩';
    return this.User.save(data);
  }
  addName(){
    return {
      code: 200,
      data: {id:1,name:'大梨',age:27},
      msg: '名称 添加成功'
    };
  }
  findUser(id: number) {
    let retJson: object = {}
    switch (id) {
      case 1:
        retJson = {
          id: 1,
          name: '孙悟空'
        }
        break
      case 2:
        retJson = {
          id: 2,
          name: '猪八戒'
        }
        break
      case 3:
        retJson = {
          id: 3,
          name: '沙和尚'
        }
        break
    }
    return retJson
  }
}
