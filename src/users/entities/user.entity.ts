
import {Entity , Column ,PrimaryGeneratedColumn} from 'typeorm'
import {TypeOrmModule} from '@nestjs/typeorm'

@Entity()
export class Girl{

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name:string

  @Column()
  age:number

  @Column()
  skill:string
}
