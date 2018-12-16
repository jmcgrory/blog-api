import Model from '../Model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

class UserModel extends Model {

    protected params: Map<string, any> = new Map([]);

    public getUserByUsername = (username, callback): void => {
        this.model.findOne({ username: username }, 'password').exec(callback);
    }

    private generatePasswordHash = (plainPassword: string, callback): void => {
        bcrypt.hash(plainPassword, 10, callback);
    }

    public comparePasswords = (plainPassword: string, password: string, callback): void => {
        bcrypt.compare(plainPassword, password, callback);
    }

    public updateUserToken = (id: string, username: string, callback): void => {
        const newToken = jwt.sign({
            id: id,
            username: username
        }, process.env.PASSPORT_SECRET);
        this.update(id, { token: newToken }, callback);
    }

}

export default UserModel;
