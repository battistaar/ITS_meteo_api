const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    date: {type: Date},
    city: String,
    conditions: {type: String, enum: ['sole', 'pioggia', 'nuvolo', 'nebbia', 'neve']},
    temperature: Number,
    note: String
});

module.exports = mongoose.model('Record', RecordSchema);