import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguros } from './seguros/entities/seguros.entities';
import { ClientesModule } from './clientes/clientes.module';
import { SegurosModule } from './seguros/seguros.module';
import { Clientes } from './clientes/entities/clientes.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_segtour',
      entities: [Clientes, Seguros],
      synchronize: true,
      logging: true,
    }),
    ClientesModule,
    SegurosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
