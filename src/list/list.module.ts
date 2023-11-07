import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { Lista } from './entities/list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lista])],
  controllers: [ListController],
  providers: [ListService]
})
export class ListModule {}
