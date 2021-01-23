import UserRepository from '../repositories/user/UserRepository';
import { config } from '../config';
import { genSaltSync, hashSync } from 'bcrypt';
import { cpuUsage } from 'process';
const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data seeding in progress');
                const pass = config.password;
                const salt = genSaltSync(10);
                const hashedPassword = hashSync( pass, salt );
                userRepository.createUser( {
                    name: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    role: 'head-trainer',
                    password: hashedPassword
                }, undefined );
                userRepository.createUser({
                    name: 'trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainer',
                    password: hashedPassword
                }, undefined);
            }
        })
        .catch(err => console.log(err));
};
