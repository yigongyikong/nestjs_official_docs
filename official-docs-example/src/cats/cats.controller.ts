import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto';
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}