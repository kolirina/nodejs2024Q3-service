import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class UUIDvalidate implements PipeTransform<string> {
  transform(value: string): string {
    const isUUIDId = isUUID(value, 4);

    if (!isUUIDId) {
      throw new BadRequestException();
    }

    return value;
  }
}
