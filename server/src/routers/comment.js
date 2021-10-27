const express = require("express");
const { getComment, postComment, updateStatus } = require("../controllers/comment");

const router = express.Router();


router.get('/comments', getComment);

router.post('/comments', postComment);

router.put('/comments/:id', updateStatus)

module.exports = router;