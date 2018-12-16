import Model from '../Model';
import * as moment from 'moment';
import mongoose, { Schema } from 'mongoose';

class ArticleModel extends Model {

    protected params: Map<string, any> = new Map([]);

}

export default ArticleModel;
