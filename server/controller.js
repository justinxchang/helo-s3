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
        console.log(foundUser)
    },
    getAllPosts (req, res) {
        let {id} = req.params
        let db = req.app.get('db')
        db.get_all_posts()
        .then((posts) => res.status(200).send(posts))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."})
            console.log(err)
        })
    }
}