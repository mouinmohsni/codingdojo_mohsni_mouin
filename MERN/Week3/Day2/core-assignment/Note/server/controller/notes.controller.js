// CRUD operation 
// imprta models
const Note =require("../models/note.model")

//============================ bild function ------all this function is a promess so evry one need .then and .catch 


// bild function to get all --------------------------------
module.exports.findAllnote = (request, respense) =>{
    Note.find()
    .then((allNote)=>{ 
        respense.json(allNote) }) // array of object  i can use just objet and sand other parameter   respense.json({allNote , status :"ok" })
    .catch((err)=>{ 
        respense.json({message :"something wnt wrong" , serverError : err})})

}

// bild function to get one by id --------------------------------
module.exports.findOneById = (request, respense) =>{
    Note.findById({_id : request.params._id})
    .then((OneNote)=>{ 
        respense.json(OneNote) }) // array of object  i can use just objet and sand other parameter   respense.json({OneNote , status :"ok" })
    .catch((err)=>{ 
        respense.json({message :"something wnt wrong" , serverError : err})})
}

// bild function to create new Note --------------------------------
module.exports.CreateNote = (request, respense) =>{
    Note.create(request.body)
    .then((NewNote)=>{ 
        respense.json({NewNote})}) // array of object  i can use just objet and sand other parameter   respense.json({NewNote: Note })
    .catch((err)=>{ 
        respense.json({message :"something wnt wrong" , serverError : err})})
}

// bild function to update Note ----------------------------------
module.exports.updateNote = (request, res) => {
    Note.findByIdAndUpdate(
        { _id: request.params._id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(upNote => res.json(upNote ))
        .catch(err => res.json({ message: 'Something went wrong update Note', error: err }));
}

// bild function to delete Note ----------------------------------
module.exports.deleteNote = (request, res) => {
    Note.findByIdAndDelete({ _id: request.params._id })
        .then(delNote => res.json(delNote ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//============================ bild function ------ other methode to bild CRUD -----------------all this function is a promess so evry one need .then and .catch 
