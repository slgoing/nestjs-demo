import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  })],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
