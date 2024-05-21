const express = require('express')
const app= express()
const PORT=process.env.PORT || 3500
const path = require('path')


app.use('/', express.static(path.join(__dirname,'/public')))
app.use('/', require('./routes/root'))
app.all('*',(req,res)=>{
  res.status(404)
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname,'view','404.html'))

  }else if(req.accepts('json')){
    res.json({messege : '404 not found'})
  }else{
    res.type('txt').send('404 not found')
  }

})

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
