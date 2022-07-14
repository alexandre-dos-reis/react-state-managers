import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '@react-state-managers/types';

export const databaseConfig = () =>
  ({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Todo],
    synchronize: true, // DO NOT USE IN PRODUCTION
  } as TypeOrmModuleOptions);
