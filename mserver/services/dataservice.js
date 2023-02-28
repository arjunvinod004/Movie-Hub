// logic area

// import db
const db =require('./db')
// USERDEATILS
userDetails={
  
    akhil:{username:'akhil',password:4000, mobilenumber:'7510949135'},
    vishnu:{username:'vishnu',password:4001, mobilenumber:'8086373858'},
    sarath:{username:'sarath',password:4002, mobilenumber:'8281637035'}
  }
  const register=(username,password,mobilenumber)=>{
    return db.User.findOne({username})//data
  .then(user=>{
    if(user){
        return {
          status: false,
          statusCode: 400,
          message: 'User already registered'
        }
      }
      else{
        const newUser=new db.User({
          
          username:username,
          password:password,
         mobilenumber:mobilenumber
        })
        newUser.save();
  
        return {
          status: true,
          statusCode: 200,
          message: 'Register successfull'
        }
      }
  })
  }

  const login=(uname,pswd)=>{
    return db.User.findOne({uname,pswd})//data
    .then(User=>{
      if(User){
        currentUser=User.username
        
       
        return{
          status: true,
          statusCode: 200,
          message: 'Login successful',
          currentUser:currentUser,
        }
      }
      else{
        return {
          status: false,
          statusCode: 400,
          message: 'invalid userdetails'
        }
      }
    })
  }

// get all movies from db
const getMovies =()=>{
    return db.Movie.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    movies:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'no movies found'
                }
               

            }
        }
    )
}
// featured

   

const savetowatchlater=(id,Title,Poster,Year,Genre,Released,imdbRating,imdbVotes,Language,Plot)=>{
    // data added to mongodb
    return db.watchlater.findOne({Title}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'movies exist'
                }
            }
            else{
                const newmovie = new db.watchlater({id,Title,Poster,Year,Genre,Released,imdbRating,imdbVotes,Language,Plot})
                newmovie.save()// save to mongodb
                return{
                    status:true,
                    statusCode:200,
                    message:'movies added'
                }
            }
        }
    )
}
// to get watchlater
const getwatchlater=()=>{
    return db.watchlater.find().then(
        (result)=>{
            if(result){

           
            return{
                status:true,
                statusCode:200,
                movies:result
            }
        }
        else{
            return{
                status:false,
                    statusCode:404,
                    message:'watchlater is empty' 
            }
        }
    }
    )
}
const deletewatch= (id)=>{
    return db.watchlater.deleteOne({id}).then(
        (result)=>{
            if(result){
                return {
                    status: true,
                    statusCode: 200,
                    wishlist:result,
                    message: 'movies deleted'
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'movies not found '
                }
            }
        }
        )
        }
    
  
   
module.exports={
    register,
    login,
    getMovies,
    savetowatchlater,
    getwatchlater,
    deletewatch
}