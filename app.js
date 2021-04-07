const express = require('express')
const app = express()
const PORT = 1705

app.set('view engine', 'pug')

// http://localhost:1705
app.get('/', (req, res) => {
   res.render('home') 
})

app.listen(PORT, (err) => {
    if (err) throw err

    console.log('This app is running on port ${ PORT }')
})