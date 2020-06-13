const router = require("express").Router;

// router.post("./login", loginController);
// router.post("./register", registerController);

const injector = require("../services/request_injector");
const test = require("../controllers/testController");
router.post("/test", injector(test));

module.exports = router;
