module.exports = {

    getAll: (req, res) => {
        res.send({
            message: 'All events fetched',
            data: {}
        })
    }

}