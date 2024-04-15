import { Injectable } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { TrainerDto } from './dto/trainer.dto';
import { v4 as uuid } from 'uuid'

@Injectable()
export class TrainerService {
  private _trainers = [{
    id: '1',
    name: 'BilJane',
    age: 30,
    email: 'bil@jane.com',
    academyId: 'css1213'
  },
];

create(createTrainerDto: CreateTrainerDto): TrainerDto {
  const id = uuid();
  const trainer: TrainerDto = { id, ...createTrainerDto };
  this._trainers.push(trainer);
  return trainer;
}


  findAll(age?: string): TrainerDto [] {
   if(age) {
    return this._trainers.filter(trainer => trainer.age.toString() === age)
   }
   return this._trainers
  }

  
  findOne(id: string):TrainerDto {
    return this._trainers.find((trainer)=> trainer.id === id)
  }


  update(id: string, updateTrainerDto: UpdateTrainerDto):TrainerDto {
    const index = this._trainers.findIndex((trainer) => trainer.id === id );
    if(index !== -1) {
      this._trainers[index] = {
        ...this._trainers[index],
        ...updateTrainerDto
      }
      return this._trainers[index]
    }
    throw new Error('Update operation failed');
  }

  remove(id: string): boolean {
    const index = this._trainers.findIndex((trainer) => trainer.id === id);
    if(index !== -1) {
      this._trainers.splice(index,1);
      return true
    }
    return false
  }
}