import Model from './Model';
import * as moment from 'moment';
import mongoose, { Schema } from 'mongoose';

class MediaModel extends Model {

    protected schema: Schema = new Schema({

        createdAt: {

            type: Date,

            // default: moment().format(), TODO: Err?

            required: true

        }

    });

    protected params: Map<string, any> = new Map([]);

}

export default MediaModel;
