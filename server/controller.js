module.exports = {
    async register (req, res) {
        let {username, password} = req.body
        let db = req.app.get('db')
        let newUser = await db.create_user([username, password])
        res.status(200).send(newUser)
        console.log(newUser)
    },
    async login (req, res) {
        let {username, password} = req.body
        let db = req.app.get('db')
        let foundUser = await db.find_user([username])
        res.status(200).send(foundUser)
    }
}