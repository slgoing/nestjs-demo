import {Entity , Column ,PrimaryGeneratedColumn, CreateDateColumn, Generated} from 'typeorm'

@Entity()
export class Users{

  @PrimaryGeneratedColumn()
  id:number

  @Column({type:"varchar",length:255})
  username:string

  @Column({type:"int"})
  age:number

  @Column({type:"varchar"})
  skill:string

  @CreateDateColumn({type:"timestamp"})
  entryTime:Date

  @Column()
  @Generated('uuid')
  uuid:string
}
