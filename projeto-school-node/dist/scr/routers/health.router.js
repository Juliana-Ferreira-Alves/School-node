"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const healthCheck = { messager: 'Aplicação funcionando com sucesso!' };
    res.send(healthCheck);
});
router.get('/check', (req, res) => {
    const healthCheck = { messager: 'Aplicação está funcionando normalmente!' };
    res.send(healthCheck);
});
exports.default = router;
//http://localhost:3000/health/check
//http://localhost:3000/students/
