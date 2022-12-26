import { Injectable } from "@nestjs/common";
import { Like, Repository} from 'typeorm'
import {InjectRepository}from '@nestjs/typeorm'
import { Users } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly User:Repository<Users>) {}

  // 查询所有用户
  getUsers(): any{
    return this.User.find()
  }
  // 根据名称查询用户
  getUserByName(name:string){
    return this.User.find({
      where:{
        username: Like(`%${name}%`)
      }
    })
  }
  // 新增用户
  addUser(data){
    if (!data.username) {
      return {code:201, msg:'请填写姓名！'}
    }
    this.User.save(data).then(res => {
      return {
        code: 200,
        msg: '添加成功!'
      }
    })
  }
  // 删除一个用户
  delUser( name:string){
    return this.User.delete(name)
  }
  // 更新一个用户
  updateUser(){

  }
}
