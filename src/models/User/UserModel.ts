import Model from '../Model';
import * as bcrypt from 'bcrypt';

class UserModel extends Model {

    protected params: Map<string, any> = new Map([]);

    public getUserByUsername = (username, callback): void => {
        console.log(username);
        this.model.findOne({ username: username }, 'password').exec(callback);
    }

    private generatePasswordHash = (plainPassword: string, callback): void => {
        bcrypt.hash(plainPassword, 10, callback);
    }

    public comparePasswords = (plainPassword: string, password: string, callback): void => {
        bcrypt.compare(plainPassword, password, callback);
    }

}

export default UserModel;
