import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';

const Config: IConfig = Object.freeze({
    PORT: 9000,
    NODE_ENV: 'Dev'
});

export default Config;

