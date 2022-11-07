import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll(): string[] {
    return this.carsService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id) {
    return this.carsService.getById(id);
  }
}
