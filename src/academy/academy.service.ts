
import { Injectable } from '@nestjs/common';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { AcademyDto } from './dto/academy.dto';
import { v4 as uuid } from 'uuid';
import { UpdateAcademyDto } from './dto/update-academy.dto';

@Injectable()
export class AcademyService {
    private _academies = [
        { 
            id: "css1213", 
            name: "Sample Academy", 
            description: "This is a sample academy", 
            startDate: new Date("2024-01-01"), 
            endDate: new Date("2024-12-31"),
            price:2500
        }
    ];

    create(createAcademyDto: CreateAcademyDto): AcademyDto {
        const id = uuid();
        const academy = { id, ...createAcademyDto };
        this._academies.push(academy);
        return academy;
    }

    findAll(name?: string): AcademyDto[] {
        if (name) {
            return this._academies.filter(academy => academy.name.toLowerCase().includes(name.toLowerCase()));
        }
        return this._academies;
    }

    findOne(id: string): AcademyDto {
        return this._academies.find(academy => academy.id === id);
    }

    update(id: string, updateAcademyDto: UpdateAcademyDto): AcademyDto {
        const index = this._academies.findIndex(academy => academy.id === id);
        if (index !== -1) {
            this._academies[index] = {
                ...this._academies[index],
                ...updateAcademyDto
            };
            return this._academies[index];
        }
        throw new Error('Update operation failed');
    }

    remove(id: string): boolean {
        const index = this._academies.findIndex(academy => academy.id === id);
        if (index !== -1) {
            this._academies.splice(index, 1);
            return true;
        }
        return false;
    }
}


