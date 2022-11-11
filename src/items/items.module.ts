import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { Item } from './item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemsRepositoryService } from './repository/items.repository';

@Module({
  imports: [
    AzureCosmosDbModule.forFeature([{collection: 'Ecommercejp', dto: Item}]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepositoryService],
})
export class ItemsModule {}
