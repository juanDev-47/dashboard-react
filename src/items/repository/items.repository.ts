import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/azure-database';
import { Container } from '@azure/cosmos';
import { Item } from '../item.entity';
import { ItemFilterDto } from '../item.dto';

@Injectable()
export class ItemsRepositoryService {
  constructor(@InjectModel(Item) private itemContainer: Container) {}

  async getAllItems(): Promise<Item[]> {
    const sqlQuery = 'SELECT * FROM c';
    const consmosResult = await this.itemContainer?.items
      ?.query<Item>(sqlQuery)
      .fetchAll();
    const items = consmosResult?.resources.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        qty: item.qty,
        price: item.price,
      };
    });
    return items;
  }

  async getItemsWithFilters(itemFilterDto: ItemFilterDto): Promise<Item[]> {
    const sqlQuery = this.getFilterQuery(itemFilterDto);
    try {
      const consmosResult = await this.itemContainer?.items
        ?.query<Item>(sqlQuery)
        .fetchAll();
      const items = consmosResult?.resources.map((item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          qty: item.qty,
          price: item.price,
        };
      });
      return items;
    } catch (error) {
      console.log(error);
    }
  }

  getFilterQuery(itemFilterDto: ItemFilterDto): string {
    const { name } = itemFilterDto;
    let sqlQuery = 'SELECT * FROM c';
    if (name) {
      sqlQuery += ` WHERE c.name = '${name}'`;
    }
    return sqlQuery;
  }
}
