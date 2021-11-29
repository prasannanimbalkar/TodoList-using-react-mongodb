
import Mongoose from 'mongoose';

//schema for the data
const TodoSchema = new Mongoose.Schema({
    "description": {
        type : String,
        required: "Describe Task to be done"
    },
    "created_at": {
        type: Date,
    },
    "updated_at": {
        type: Date,
    },
    "todo":{
        type: String,
        required: "Describe Task to be done"
    },
    "isComplete" : {
        type:Boolean
    },
    "date": {
        type: Date,
        required: "Describe Task to be done"
    }
    
},
{
    versionKey: false
}
)

TodoSchema.virtual('id', () => this._id.toHexString())
TodoSchema.set('toJSON', {virtuals: true})

const Todo =  Mongoose.model('Todos', TodoSchema);

export default Todo;