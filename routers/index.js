const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

router.get('/', controller.getHome);
router.get('/new', controller.getNew);
router.post('/new', controller.postNew);

module.exports = router;
