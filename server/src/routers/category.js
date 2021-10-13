const express = require("express");
const { getOne, getAll, postCategory, putCategory, deleteCate, getList } = require("../controllers/category");
const router = express.Router();
const verifyToken = require("../middleware/auth")

// GET api/categorys

router.get("/categorys", getAll)

// GET api/categorys?limit=?page=

router.get("/categorys", getList)
// GET api/categorys/:id

router.get("/categorys/:id",getOne )

// POST api/categorys

router.post("/categorys",verifyToken, postCategory)

// PUT api/categorys:id

router.put("/categorys/:id", verifyToken, putCategory)

// delete api/categorys/:id

router.delete("/categorys/:id", verifyToken, deleteCate)



module.exports = router;