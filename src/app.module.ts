import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonstersController } from './monsters/monsters.controller';
import { ItemsController } from './items/items.controller';
import { WeaponsController } from './weapons/weapons.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    MonstersController,
    ItemsController,
    WeaponsController,
  ],
  providers: [AppService],
})
export class AppModule {}
