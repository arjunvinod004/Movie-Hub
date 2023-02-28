 // import express
 const express=require('express')
// import cors
 const cors=require('cors')
 // import dataservice
 const dataservice= require('./services/dataservice')
// create app for express
const app= express()
 // to parse express
 app.use(express.json())
//setup port number
app.listen(3000,()=>{
    console.log('ok da');
})

app.use(cors({
    origin:'http://localhost:4200'
}))
// api to get all movies
app.get('/all-movies',(req,res)=>{
    dataservice.getMovies().then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// api to save watchlater
app.post('/savetowatchlater',(req,res)=>{
    dataservice.savetowatchlater( req.body.id,req.body.Title,req.body.Poster,req.body.Year,req.body.Genre,req.body.Released,req.body.imdbRating,req.body.imdbVotes,req.body.Language,req.body.Plot).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
// api to get watchlater
app.get('/getwatchlater',(req,res)=>{
    dataservice.getwatchlater()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// api to delete watchlater
app.delete('/deletewatch/:id',(req,res)=>{
    dataservice.deletewatch(req.params.id)
    .then((result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
// register
app.post('/register',(req,res)=>{
    console.log(req.body);
dataservice.register(req.body.username,req.body.password,req.body.mobilenumber)
.then(result=>{
    res.status(result.statusCode).json(result)
})
})

// login
app.post('/login',(req,res)=>{
    console.log(req.body);
 dataservice.login(req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)

    })
    })

