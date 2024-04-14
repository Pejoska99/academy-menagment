import { IsString, IsDate, IsInt, Min } from "class-validator";

export class CreateAcademyDto{
    //se osven id
    @IsString() 
    readonly name: String;

    @IsString() 
    readonly description: String;

    @IsDate()
    readonly startDate: Date;
    
    @IsDate()
    readonly endDate: Date;

    @IsInt()
    @Min(0)
    readonly price: number;
}

