module.exports = {
    verifyConnection: (req, res, next) => {
        // ES2021:
        // Si user est undefined, vouloir lire son id renverra une erreur et bloquera le programme
        // Donc, pour palier à cela, plutôt que de faire une double condition
        // On vérifie que user n'est pas undefined grâce à '?' -> user?.id
        // Donc si user est undefined, on ne rentrera pas dans la condition
        if (!req.session.user?.id) {
            return res.status(401).send({
                message: "There is no user in the session",
                data: null,
            });
        }

        next();
    },
};
