const recordModel = require('./record.model');

module.exports.list = async (req, res, next) => {
    const query = req.query;

    if (!query.city && !query.from && !query.to) {
        const from = new Date();
        from.setHours(0, 0, 0, 0);

        const to = new Date();
        to.setHours(23, 59, 59, 999);

        query.from = from;
        query.to = to;
    }

    const records = await recordModel.find(query);
    res.json(records);

}

module.exports.details = async (req, res, next) => {
    try {
        const record = await recordModel.getById(req.params.id);
        if (!record) {
            res.status(404);
            res.send('Not Found');
            return;
        }
        res.json(record);
    } catch(err) {
        console.log(err);
        res.status(500);
        res.send();
    }
}

module.exports.create = async (req, res, next) => {
    try {
        const newRecord = await recordModel.create(req.body);
        res.json(newRecord);
    } catch(err) {
        console.log(err);
        res.status(500);
        res.send();
    }
}

module.exports.update = async (req, res, next) => {
    try {
        const updated = await recordModel.update(req.params.id, req.body);
        res.json(updated);
    } catch(err) {
        console.log(err);
        res.status(500);
        res.send();
    }
}