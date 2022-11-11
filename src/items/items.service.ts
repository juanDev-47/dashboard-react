import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemFilterDto } from './item.dto';
import { ItemsRepositoryService } from './repository/items.repository';

@Injectable()
export class ItemsService {
  constructor(private itemsRepository: ItemsRepositoryService) {}

  async getAllItems(): Promise<Item[]> {
    return await this.itemsRepository.getAllItems();
  }

  async getItemsWithFilters(itemFilterDto: ItemFilterDto): Promise<Item[]> {
    return await this.itemsRepository.getItemsWithFilters(itemFilterDto);
  }

}
