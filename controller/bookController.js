const book_Model = require('../model/bookModel');


const createbook = async(req,res)=>{
    try{
        const{title,author,summary} = req.body;
        if(!title){
            return res.send({message:'title is required'})
        }
        if(!author){
            return res.send({message:'author is required'})
        }
        if(!summary){
            return res.send({message:'summary is required'})
        }

        //chaeck existing Book
    const book = await book_Model.findOne({title});
    if(book){
        return res.status(201).send({
            success:false,
            messgae:'book is already created'
        })
    }

    ///craete a book
    const createBook = await book_Model.create({title,author,summary});
    createBook.save();
    res.status(201).send({
        success:true,
        messgae:'Book created successfully',
        Book:{
           title:createBook.title,
           author:createBook.author
           
       }
    })

    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            messgae:'Error in Creating Book',
            err
        })
    }
}

const updateBook = async(req,res)=>{
    try{


        const{title,author,summary} = req.body;
        if(!title){
            return res.send({message:'title is required'})
        }
        if(!author){
            return res.send({message:'author is required'})
        }
        if(!summary){
            return res.send({message:'summary is required'})
        }

        const updateBook = await book_Model.findByIdAndUpdate({_id:req.params.id},{$set:{title:title,author:author,summary:summary}})
        updateBook.save();
        res.status(200).send({
            success:true,
            messgae:'Info Updated Successfully',
            Book:{
                title:updateBook.title,
                author:updateBook.author,
                summary:updateBook.summary
                
            }
            
    
        })

    }

    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            messgae:'Error in updating Book',
            err
        })
    }
}

const deleteBook = async(req,res)=>{
    try{

        await book_Model.findByIdAndDelete({_id:req.params.id})

        res.status(200).send({
            success:true,
            message:'Book Deleted Successfully'
        })
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:'Error in delte Book'
        })
    }
}

const getAllBook = async(req,res)=>{
    try{
        
        const Book = await book_Model.find({})
        res.status(200).send({
            success:true,
            message:'Book Shown Successfully',
            Book,
            count:  Book.length
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Getting  Info of all Book',
            error
        })
    }
}

const getSingleBook = async(req,res)=>{
    try{
        
        const book = await book_Model.findById({_id:req.params.id})

        

            res.status(200).send({
                success:true,
                message:'Book Shown Successfully',
                book:book
            })

        
       
        

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Getting info of sigle Book',
            error
        })
    }
}

module.exports = {createbook,updateBook,deleteBook,getAllBook,getSingleBook}