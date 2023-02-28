// define moongoose
const moongoose =require('mongoose')

// define connection string
moongoose.connect('mongodb://localhost:27017/vmovie',()=>{
    console.log('connected mongodb');
})
// modal creation
const Movie=moongoose.model('Movie',{
id:Number,
Title:String,
Year:String,
Released:String,
Runtime:String,
Genre:String,
Poster:String,
Language:String,
Ratings:[
    {
        source:String,
        value:String
    }
],
imdbRating:String,
imdbVotes:String,
type:String


})
// create a modal for watchlater
const watchlater =moongoose.model('watchlater',{
    id:Number,
    Title:String,
    Poster:String,
    Year:String,
    Genre:String,
    Released:String,
    imdbRating:String,
    imdbVotes:String,
    Language:String,
    Plot:String
})
const User = moongoose.model('User',
{
    username:String,
    password:String,
    mobilenumber:String
})
// export
module.exports={
Movie,
watchlater,
User
}