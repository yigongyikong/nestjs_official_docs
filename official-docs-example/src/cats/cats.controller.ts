import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Req, UseFilters } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from './forbidden.exception';
import { HttpExceptionFilter } from './http-exception.filter';

// @UseFilters(new HttpExceptionFilter())
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    // @UseFilters(new HttpExceptionFilter())
    // @UseFilters(HttpExceptionFilter)
    async create(@Body() createCatDto: CreateCatDto) {
        // return 'This action adds a new cat';
        // this.catsService.create(createCatDto);
        throw new ForbiddenException();
    }

    // @Get()
    // async findAll(): Promise<Cat[]> {
    //     // return this.catsService.findAll();
    //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // }

    // @Get()
    // async findAll() {
    //     try {
    //         await this.catsService.findAll();
    //     } catch (error) {
    //         throw new HttpException({
    //             status: HttpStatus.FORBIDDEN,
    //             error: 'This is a custom message',
    //         }, HttpStatus.FORBIDDEN, {
    //             cause: error
    //         });
    //     }
    // }


    @Get()
    async findAll() {
        // throw new ForbiddenException();
        throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' });
    }


    /*
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
    */
}