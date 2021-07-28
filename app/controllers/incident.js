const { incidentDataMapper } = require("../dataMappers");

module.exports = {
    details: async (req, res) => {
        const incidents = await incidentDataMapper.getAll();
        res.send({
            message: `All incidents retrieved`,
            data: incidents,
        });
    },

    getDetails: async (req, res, next) => {
        const incidentID = req.params.id;

        const incident = await incidentDataMapper.findOne(incidentID);

        if (!incident) {
            return next();
        }

        res.send({
            message: `Informations for incident no ${incidentID}`,
            data: incident,
        });
    },

    updateDetails: async (req, res, next) => {
        const incidentID = req.params.id;

        const incident = await incidentDataMapper.findOne(incidentID);

        if (!incident) {
            return next();
        }

        const newIncident = { ...incident, ...req.body };

        const updatedIncident = await incidentDataMapper.update(
            incidentID,
            newIncident
        );

        res.send({
            message: `Incident updated`,
            data: updatedIncident,
        });
    },

    create: (req, res) => {
        // TODO : CREATE NEW INCIDENT
        res.send({
            message: `Incident created`,
            data: {},
        });
    },
};
