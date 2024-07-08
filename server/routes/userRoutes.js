const { register, login, setAvatar,allUsers } = require('../controllers/usersController');

const router = require('express').Router();

router.post('/register',register);
router.post('/login',login);
router.post('/setAvatar/:id',setAvatar);

router.get('/allUsers/:id',allUsers);
router.get('/test',test);




module.exports = router;