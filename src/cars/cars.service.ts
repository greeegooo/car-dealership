import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  getById(_id: string) {
    return _id;
  }
  getAll(): string[] {
    throw new Error('Method not implemented.');
  }
}
