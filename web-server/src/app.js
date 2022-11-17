const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

 const app = express()
 const publicDirectoryPath = path.join(__dirname, '../public')

 app.use(express.static(publicDirectoryPath))

//app.com
//app.com/help
//app.com/about

// app.get('/help', (req, res) => {
//     res.send([{
//         name:'harsh'
//     },{
//         name:'lopa'
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/Weather', (req, res) => {
    res.send({
        forecast:'it is pleasant',
        location:'Mumbai'
    })
})

app.listen(3000, () => {
    console.log('server up on port 3000.')
})