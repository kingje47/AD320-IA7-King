var express = require('express');
var router = express.Router();
var colorMaker = require("../colors.json")

/* GET home page. */
router.get('/all', function(req, res, next) {
  res.send(colorMaker);
});

router.get("/:color", function(req, res, next) {
  res.send(colorPicker(req.params.color))
});

function colorPicker(inputColor){
  var cleanInput = inputColor.toLowerCase();
  for (var i = 0; i < colorMaker.colors.length; i++){
    if (cleanInput == colorMaker.colors[i].color){
      return colorMaker.colors[i];
    }
    }
    return '404: Route Not Found';
  }

module.exports = router;
