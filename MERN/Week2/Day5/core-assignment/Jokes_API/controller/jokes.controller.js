// CRUD operation 

const Joke =require("../models/joke.model")

//============================ bild function ------all this function is a promess so evry one need .then and .catch 


// bild function to get all --------------------------------
module.exports.findAllJokes = (request, respense) =>{
    Joke.find()
    .then((allJokes)=>{ 
        respense.json(allJokes) }) // array of object  i can use just objet and sand other parameter   respense.json({allJokes , status :"ok" })
    .catch((err)=>{ 
        respense.json({message :"something wnt wrong" , serverError : err})})
}

// bild function to get one by id --------------------------------
module.exports.findOneById = (request, respense) =>{
    Joke.findById({_id : request.params._id})
    .then((OneJoke)=>{ 
        respense.json({ joke:OneJoke}) }) // array of object  i can use just objet and sand other parameter   respense.json({OneJoke , status :"ok" })
    .catch((err)=>{ 
        respense.json({message :"something wnt wrong" , serverError : err})})
}

// bild function to create new joke --------------------------------
module.exports.CreateJoke = (request, respense) =>{
    Joke.create(request.body)
    .then((NewJoke)=>{ 
        respense.json({NewJoke})}) // array of object  i can use just objet and sand other parameter   respense.json({NewJoke: Joke })
    .catch((err)=>{ 
        respense.json({message :"something wnt wrong" , serverError : err})})
}

// bild function to update joke ----------------------------------
module.exports.updateJoke = (request, res) => {
    Joke.findByIdAndUpdate(
        { _id: request.params._id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(upJoke => res.json({ Joke: upJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// bild function to delete joke ----------------------------------
module.exports.deleteJoke = (request, res) => {
    Joke.findByIdAndDelete({ _id: request.params._id })
        .then(delJoke => res.json({ Joke: delJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// bild function to random joke ----------------------------------
module.exports.randomJoke = (request, res) => {
    Joke.aggregate({$sample:{size:1}})
        .then(delJoke => res.json({ Joke: delJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}