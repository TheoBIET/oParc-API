module.exports = {
    details: (req, res) => {
        // TODO : GET DETAILS FOR ONE INCIDENT
        let incidentID = req.incident;
        res.send({
            message: `Informations for incident no ${incidentID}`,
            data: {}
        });
    },

    updateDetails: (req, res) => {
        // TODO : UPDATE DETAILS FOR ONE INCIDENT
        let incidentID = req.params.id;
        res.render({
            message: `Informations updated for incident no ${incidentID}`,
            data: {}
        });
    },

    create: (req, res) => {
        // TODO : CREATE NEW INCIDENT
        res.render({
            message: `Incident created`,
            data: {}
        });
    }
}