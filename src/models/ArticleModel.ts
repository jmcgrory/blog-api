import Model from './Model';
import * as moment from 'moment';
import mongoose, { Schema } from 'mongoose';

class ArticleModel extends Model {

    protected schema: Schema = new Schema({

        // updatedAt

        // deletedAt

        createdAt: {

            type: Date,

            default: moment().format(),

            required: true

        }

    });

    protected params: Map<string, any> = new Map([]);

}

export default ArticleModel;
