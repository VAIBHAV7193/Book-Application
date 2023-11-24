const express = require('express');
const { createbook, updateBook, deleteBook, getAllBook, getSingleBook } = require('../controller/bookController');

//created a router object 
const router = express.Router();
//createBook route
router.route('/createbook').post(createbook);

//updateBook Route

router.route('/updatebook/:id').put(updateBook)

//delete book

router.route('/deletebook/:id').delete(deleteBook)

//get all book list
router.route('/getallbook').get(getAllBook);

//get single book list

router.route('/getsinglebook/:id').get(getSingleBook);

router.route('/createbook').post(createbook);

//updateBook Route

router.route('/updatebook/:id').put(updateBook)

//delete book

router.route('/deletebook/:id').delete(deleteBook)

//get all book list
router.route('/getallbook').get(getAllBook);

//get single book list

router.route('/getsinglebook/:id').get(getSingleBook);

module.exports = router;