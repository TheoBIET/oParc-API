module.exports = {
    checkPermission: (req, res, next) => {
        if (!req.session.agent?.id) {
            return res.status(401).send({
                message: "You are not allowed to access this. Please login",
                data: null,
            });
        }

        next();
    },
};
