"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/', router);
router.use('/postItem', router);
router.use('/putItem', router);
router.use('delItem', router);
exports.default = router;
