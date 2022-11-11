import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { Module } from '@nestjs/common';
import { cosmosdb } from './config/config.variables';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [AzureCosmosDbModule.forRoot(cosmosdb), ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
