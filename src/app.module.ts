import { Module } from '@nestjs/common';
import { ContaModule } from './app/conta/conta.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViewModule } from './view/view.module';

@Module({
  imports: [ContaModule, ViewModule,
    ConfigModule.forRoot({
      envFilePath: ".env.development.local"
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
