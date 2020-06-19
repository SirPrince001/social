const router = require("express").Router;

const injector = require("../services/request_injector");
const registerController = require("../controllers/register");
const loginController = require("../controllers/register");

router.post(injector(registerController.registerUser));
router.post(injector(loginController.loginUser));

module.exports = router;
