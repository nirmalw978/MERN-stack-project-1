const express = require('express')
const app= express()
const PORT=process.env.PORT || 3500
const path = require('path')


app.use('/', express.static(path.join(__dirname,'/public')))
app.use('/', require('./routes/root'))
app.all('*',(req,res)={
  
})

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
