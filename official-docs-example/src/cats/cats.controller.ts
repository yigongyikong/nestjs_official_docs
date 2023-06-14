import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    async create(@Body() createCatDto: CreateCatDto ) {
        return `This action adds a new cat, 
            ${createCatDto.name}, ${createCatDto.age}, ${createCatDto.breed}`;
    }

    @Get()
    // findAll(@Req() request: Request): string {
    findAll(): string {
        return 'This action returns all cats';
    }
}