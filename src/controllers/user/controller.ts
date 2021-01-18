import * as jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { hashSync, compare } from 'bcrypt';
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../IRequest';

class UserController {

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const id = req.query;
        const user = new UserRepository();

        await user.getUser({ id })
            .then((data) => {
                res.status(200).send({
                    message: 'User Fetched successfully',
                    'data': { data },
                    code: 200
                });
            });
    }

    public async create(req: IRequest, res: Response, next: NextFunction) {
        const { id, email, name, role, password } = req.body;
        const creator = req.userData._id;

        const user = new UserRepository();
        await user.createUser({ email, name, role, password }, creator)
            .then(() => {
                const hashedPassword = hashSync(password, 10);
                console.log(hashedPassword);
                res.send({
                    message: 'User Created Successfully!',
                    data: {
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': hashedPassword
                    },
                    code: 200
                });
            });
    }

    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        const updator = req.userData._id;
        const user = new UserRepository();
        await user.updateUser(id, dataToUpdate, updator)
            .then((result) => {
                res.send({
                    data: result,
                    message: 'User Updated',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    error: 'User Not Found for update',
                    code: 404
                });
            });
    }

    public async remove(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        await user.deleteData(id, remover)
            .then((result) => {
                res.send({
                    message: 'Deleted successfully',
                    code: 200
                });
            })
            .catch((err) => {
                res.send({
                    message: 'User not found to be deleted',
                    code: 404
                });
            });
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        const user = new UserRepository();

        await user.getUser({ email })
            .then((userData) => {
                if (userData === null) {
                    res.status(404).send({
                        err: 'User Not Found',
                        code: 404
                    });
                    return;
                }

                const { password } = userData;
                compare(req.body.password, password, (err, result) => {
                    if (err)
                        throw err;
                    if (result) {
                        const token = jwt.sign(userData.toJSON(), config.KEY, { expiresIn: '1h' });
                        res.send({
                            message: 'Login Successfull',
                            status: 200,
                            'token': token
                        });
                    }
                    else {
                        res.status(401).send({
                            err: 'Incorrect Password',
                            status: 401,
                        });
                    }
                })
            })
    }

}

export default new UserController();
