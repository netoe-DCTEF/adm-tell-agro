const express = require('express');
const admController = require("../../controller/adm/adminController");
const router = express.Router();

//Métodos Get
router.get('/add',admController.get.abreadd);
router.get('/edt',admController.get.abreedt);
router.get('/lst',admController.get.abrelst);

//Métodos Post
router.post('/add',admController.post.add);
router.post('/edt',admController.post.edt);
router.post('/lst',admController.post.lst);


module.exports = router;