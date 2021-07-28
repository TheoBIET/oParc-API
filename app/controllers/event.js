const { eventDataMapper } = require('../dataMappers');

module.exports = {

    getAll: async (req, res, next) => {

        const events = await eventDataMapper.getAll();

        if(events.length === 0) {
            return next();
        }

        res.send({
            message: 'All events fetched',
            data: events
        })
    }

}