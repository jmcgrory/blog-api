import Model from '../Model';
import * as cloud from 'cloudinary';
import { Schema } from 'mongoose';

class MediaModel extends Model {

    protected schema: Schema = new Schema({
        createdAt: {
            type: Date,
            required: true
        }
    });

    protected params: Map<string, any> = new Map([]);
}

export default MediaModel;
