module.exports = {
    details: (req, res) => {
        let incidentID = req.incident;
        res.send({
            message: `Informations for incident no ${incidentID}`,
            data: {}
        });
    },

    updateDetails: (req, res) => {
        let incidentID = req.params.id;
        res.render({
            message: `Informations updated for incident no ${incidentID}`,
            data: {}
        });
    },

    create: (req, res) => {
        res.render({
            message: `Incident created`,
            data: {}
        });
    }
}