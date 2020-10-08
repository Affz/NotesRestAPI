const mongoose = require("mongoose");
const NoteSchema = mongoose.Schema({
    title:String,
    content:String
}, {
    timeStamps: true
} );
// mongoose create two new fields automatically createdAt and updatedAt to this schema.
module.exports = mongoose.model('Note', NoteSchema);