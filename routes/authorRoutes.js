const express = require("express");
const router = express();

const {
    getAuthors,
    getAuthorbyID,
    getCurrentAuthor,
    updateAuthor,
    deleteAuthor
} = require("../controllers/authorControllers")

router.get("/authors", getAuthors);

router.get("/authors/me", getCurrentAuthor);

router.get("/authors/:id", getAuthorbyID);

router.put("/authors/update", updateAuthor);

router.delete("/authors/delete", deleteAuthor);


module.exports = router