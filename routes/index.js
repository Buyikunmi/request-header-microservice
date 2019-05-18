var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/whoami", function(req, res, next) {
  let {
    ip: ipaddress,
    headers: { ["user-agent"]: software, ["accept-language"]: language }
  } = req;
  res.json({ ipaddress, language, software });
});

module.exports = router;
