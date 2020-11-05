<<<<<<< HEAD
import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
=======
import * as dotenv from 'dotenv';
const enVars = dotenv.config();
>>>>>>> 648790ffa96c2dfd662ec58690188f13585e1acc

const Config: IConfig = Object.freeze({
    PORT: 9000,
    NODE_ENV: 'Dev'
});

<<<<<<< HEAD
export default Config;

=======
const config: any = enVars.parsed;
Object.freeze(config);

export default config;
>>>>>>> 648790ffa96c2dfd662ec58690188f13585e1acc
