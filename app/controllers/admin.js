const { adminDataMapper } = require("../dataMappers");

module.exports = {
    index: (req, res) => {
        res.redirect("/dashboard");
    },

    login: async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.send({
                message: "Check credentials",
                email: false,
                password: false,
                data: null,
            });
        }
        const data = await adminDataMapper.login(req.body);
        res.send(data);
    },
};
