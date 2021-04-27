const Record = require('./record.schema');

module.exports.create = async (data) => {
    const newRecord = new Record(data);
    return newRecord.save();

    // return Record.create(data);
};

module.exports.getById = async (id) => {
    return Record.findById(id);
}

module.exports.find = async (query) => {
    const q = {};
    if (query.city) {
        q.city = { $regex : new RegExp(query.city, "i")};
    }
    if (query.from || query.to) {
        q.date = {};
    }
    if (query.from) {
        q.date.$gte = query.from;
    }
    if (query.to) {
        q.date.$lte = query.to;
    }

    return Record.find(q);
}

module.exports.update = async (id, data) => {
    return Record.findByIdAndUpdate(id, data, {new: true});
}