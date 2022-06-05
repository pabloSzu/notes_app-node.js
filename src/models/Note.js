const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true        
    },user: {
        type: String,
        required: true,
      },
      archive: {
        type: Number,
        required: false,
        default : null,
      },
}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema)