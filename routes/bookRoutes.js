const express = require("express");
const router = express();

const { checkLoggedIn } = require("../middlewares/isLoggedIn");
const {
    showBooks,
    updateBook,
    deleteBook,
    uploadBook,
    likeBook,
    unlikeBook
} = require("../controllers/bookControllers")

router.post("/books/upload", uploadBook);
router.put("/books/update", updateBook);
router.delete("/books/delete", deleteBook);

router.get("/books", checkLoggedIn, showBooks);

router.put("/books/like/:id", checkLoggedIn, likeBook);

router.put("/books/unlike/:id", checkLoggedIn, unlikeBook);

module.exports = router