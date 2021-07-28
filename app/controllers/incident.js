const {
    incidentDataMapper,
    eventDataMapper
} = require("../dataMappers");

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

        const newIncident = {
            ...incident,
            ...req.body
        };

        const updatedIncident = await incidentDataMapper.update(
            incidentID,
            newIncident
        );

        res.send({
            message: `Incident updated`,
            data: updatedIncident,
        });
    },

    create: async (req, res) => {
        const data = req.body;
        const number = parseInt(data.number,10);
        const attractionId = parseInt(data.attraction_id,10);
        console.log(attractionId , number,data)

        if(!number|| !attractionId){
            return res.send({
                message : 'You must specify an incident number , and the attraction concerned',
                data : null
            })
        };

        
        const numberAlreadyExists = await incidentDataMapper.findByNumber(number);
        
        if (numberAlreadyExists) {
            return res.send({
                message: `Incident number ${number} already exists`,
                data: null,
            })
        }
        const attractionIsExists = await eventDataMapper.verifyIfExists(attractionId);

        if (!attractionIsExists) {
            return res.send({
                message: `attraction no${attractionId} doesn't exists !`,
                data: null,
            })
        }
        const incident = await incidentDataMapper.create(data);
        res.send({
            message: `Incident created`,
            data: incident,
        });
    },
};