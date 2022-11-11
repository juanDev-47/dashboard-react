import { Controller, Get, Query } from '@nestjs/common';
import { ItemFilterDto } from './item.dto';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get('')
  getAllItems(@Query() itemFilterDto: ItemFilterDto): Promise<Item[]> {
    if (Object.keys(itemFilterDto).length) {
      return this.itemsService.getItemsWithFilters(itemFilterDto);
    } else {
      return this.itemsService.getAllItems();
    }
  }
}
