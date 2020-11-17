import Server from './server';
import { config }  from './config';
import { CONFIG_FILENAME } from 'tslint/lib/configuration';

console.log( 'Config is', config );
const server = new Server ( { PORT: config.PORT, MONGO_URL: config.MONGO_URL } );

server.bootstrap().run();
