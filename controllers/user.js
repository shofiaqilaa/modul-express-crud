let users = [
    {id: 1, nama: "Qilaa", email: "qila@gmail.com"},
    {id: 2, nama: "Shofi", email: "shofi@gmail.com"},
]

module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        }else{
            res.json({
                status: false,
                message: "data nya gada bozz"
            })
        }
      },
      store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "data berhasil ditambahkan"
        })
      },
      update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "data berhasil diubah"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "data berhasil dihapus"
        })
      }
    }