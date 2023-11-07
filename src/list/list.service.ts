import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Lista } from './entities/list.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ListService {

  constructor(@InjectRepository(Lista)
  private readonly listaRepository : Repository<Lista>)
  {}

  create(createListDto: CreateListDto) {
    return 'This action adds a new list';
  }

  async findAll() : Promise<Lista[]> {
    return await this.listaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}


