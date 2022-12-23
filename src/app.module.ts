import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[ TypeOrmModule.forRoot({
    type:'mysql',           // 数据库类型
    host:'',       // 数据库的连接地址host
    port:5024,              // 数据库的端口 3306
    username:'root',        // 连接账号
    password:'',     // 连接密码
    database:'',     // 连接的表名
    retryDelay:500,         // 重试连接数据库间隔
    retryAttempts:10,       // 允许重连次数
    synchronize:true,       // 是否将实体同步到数据库
    autoLoadEntities:true,  // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
  }),
    UsersModule
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
