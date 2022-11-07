import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll(): string[] {
    return this.carsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id) {
    return this.carsService.getById(id);
  }
}
