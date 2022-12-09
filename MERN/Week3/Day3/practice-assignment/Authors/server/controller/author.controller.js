const Author =require("../models/author.model")

//============================ bild function ------all this function is a promess so evry one need .then and .catch 


// bild function to get all --------------------------------
module.exports.findAllAuthor = (request, respensepense) =>{
    Author.find()
    .then((allAuthor)=>{ 
        respensepense.json(allAuthor) }) // array of object  i can use just objet and sand other parameter   respense.json({allAuthor , status :"ok" })
        .catch((err)=>{res.status(400).res.json(err , {message :"something wnt wrong with add new author" })})

}

// bild function to get one by id --------------------------------
module.exports.findOneById = (request, respense) =>{
    Author.findById({_id : request.params._id})
    .then((OneAuthor)=>{ 
        respense.json(OneAuthor) }) // array of object  i can use just objet and sand other parameter   respense.json({OneAuthor , status :"ok" })
        .catch((err)=>{res.status(400).respensepense.json(err , {message :"something wnt wrong with add new author"})})
}

// bild function to create new Author --------------------------------
module.exports.CreateAuthor = (request, respense) =>{
    Author.create(request.body)
    .then((NewAuthor)=>{ 
        respense.json({NewAuthor})}) // array of object  i can use just objet and sand other parameter   respense.json({NewAuthor: Author })
        .catch((err)=>{res.status(400).respensepense.json(err , {message :"something wnt wrong with add new author"})})
}

// bild function to update Author ----------------------------------
module.exports.updateAuthor = (request, respense) => {
    Author.findByIdAndUpdate(
        { _id: request.params._id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(upAuthor => respense.json(upAuthor ))
        .catch((err)=>{respense.status(400).respense.json(err , {message :"something wnt wrong with add new author" })})
}

// bild function to delete Author ----------------------------------
module.exports.deleteAuthor = (request, respense) => {
    Author.findByIdAndDelete({ _id: request.params._id })
        .then(delAuthor => respense.json(delAuthor ))
        .catch((err)=>{respense.status(400).respense.json(err , {message :"something wnt wrong with add new author"})})
}

//---- update book 
// bild function to update Author ----------------------------------
module.exports.addBooks = (request, respense) => {
    Author.findOneAndUpdate(
        { _id: request.params._id },
        {$push : {books : request.body}},
        { new: true, runValidators: true }
    )
        .then(upAuthor => respense.json(upAuthor ))
        .catch((err)=>{respense.status(400).respense.json(err , {message :"something wnt wrong with add new author"})})
}


















//============================ bild function ------ other methode to bild CRUD -----------------all this function is a promess so evry one need .then and .catch 









// // imprta models
// const author =require("../models/author.model")

// module.exports.addAuthor = (req,respense) =>{
// author.create(req.body)
// .then((newauthor)=>{ respense.json(newauthor)})
// .catch((err)=>{respense.status(400).respense.json(err , {message :"something wnt wrong with add new author" , serverError : err})})
// }

// // bild function to get all --------------------------------
// module.exports.findAllauthors = (req, respense) =>{
//     console.log(respense);
//     author.find()
//     .then((allauthor)=>{ 
//         respense.json(allauthor) }) // array of object  i can use just objet and sand other parameter   respensepense.json({allAuthor , status :"ok" })
//     .catch((err)=>{respense.status(400).respense.json(err , {message :"something wnt wrong with get all  author" , serverError : err})})
// }

// // bild function to get one by id --------------------------------
// module.exports.findOneById = (request, respensepense) =>{
//     author.findById({_id : request.params._id})
//     .then((Oneother)=> respensepense.json(Oneother) ) // array of object  i can use just objet and sand other parameter   respensepense.json({OneAuthor , status :"ok" })
//     .catch((err)=>respense.status(400).respense.json(err))
// }

// // bild function to update author ----------------------------------
// module.exports.updateAuthor = (request, respense) => {
//     author.findByIdAndUpdate(
//         { _id: request.params._id },
//         request.body,
//         { new: true, runValidators: true }
//     )
//         .then(upAuthor => respense.json(upAuthor ))
//         .catch((err)=>{respense.status(400).respense.json(err , {message :"something wnt wrong with update  author" , serverError : err})})
// }

// CRUD operation 
// imprta models
