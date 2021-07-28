const { eventDataMapper } = require('../dataMappers');

module.exports = {

    getAll: async (req, res, next) => {

        const events = await eventDataMapper.getAll();

        // Sort event by open status
        events.sort((a, b) => {
            if (a.opened && !b.opened) {
                return -1;
            } else if (!a.opened && b.opened) {
                return 1;
            } else {
                return 0;
            }
        });

        if(events.length === 0) {
            return next();
        }

        res.send({
            message: 'All events fetched',
            data: events
        })
    }

}