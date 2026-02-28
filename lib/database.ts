// lib/database.ts

import { createConnection } from 'typeorm';

const connectionOptions = {
    type: 'mysql',  // or any other supported database type
    host: 'localhost',
    port: 3306,
    username: 'yourUsername',
    password: 'yourPassword',
    database: 'yourDatabaseName',
    entities: [__dirname + '/../entities/*.ts'],
    synchronize: true,
};

export const initDatabase = async () => {
    try {
        const connection = await createConnection(connectionOptions);
        console.log('Database connection established');
        return connection;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};
