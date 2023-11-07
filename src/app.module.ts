import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot( {
      "type": "mysql",
      "host": "b2898xacxtxaxvhcmqt1-mysql.services.clever-cloud.com",
      "port": 3306,
      "username": "udhdbcvo7uztcap2",
      "password": "Dwwb1tSHILAurtoWDF81",
      "database": "b2898xacxtxaxvhcmqt1",
      "entities": [
            "dist/**/**.entity{.ts,.js}"
      ],
      "synchronize": true
                } ),
    ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
