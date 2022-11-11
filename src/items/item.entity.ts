import { CosmosPartitionKey } from '@nestjs/azure-database';

@CosmosPartitionKey('id')
export class Item {
  id: string;
  name: string;
  description: string;
  qty: number;
  price: number;
}
