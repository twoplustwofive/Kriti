var express = require('express');
var router = express.Router();

/* login user. */
router.get('/login', function(req, res, next) {
  res.render('login/login')
});

router.post('/login/success', (req, res) => {
  var uuid = req.body.user.uuid;
  console.log(uuid);
  res.send({msg: 'ok'});

})

module.exports = router;
