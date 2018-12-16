import Model from '../Model';
import * as moment from 'moment';
import mongoose, { Schema } from 'mongoose';

class UserModel extends Model {

    protected params: Map<string, any> = new Map([]);

}

export default UserModel;
