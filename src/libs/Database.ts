import * as mongoose from 'mongoose';
export default class Database {
    static open (mongoURL) {
        return new Promise((resolve, reject ) => {
            console.log('URL : ', mongoURL);
            mongoose.connect(mongoURL, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log('Database Connected');
                resolve(null);
            });
        });
    }

    static disconnect () {
        mongoose.disconnect(err => {
            if (err) {
                console.log(err);
            }
            console.log('Database Disconnected');
        });
    }
}