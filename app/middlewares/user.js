module.exports = {

    verifyConnection: (req, res, next) => {
        if(!req.session.user?.id) {
            return res.status(404).send({
                message: 'There is no user in the session',
                data: null
            });
        }

        next();
    }

}