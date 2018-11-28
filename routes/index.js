const express = require("express");
const router = express.Router();

const designerController = require("../controllers/designerController");

// eslint-disable-next-line no-unused-vars
router.get("/", (req, res, next) => {
	res.json({ status: "succes", message: "API funcionando :o" });
});

router.post("/designer", designerController.criar);
router.get("/designers", designerController.get);
router.put("/designer/:designer_id", designerController.atualizar);

module.exports = router;