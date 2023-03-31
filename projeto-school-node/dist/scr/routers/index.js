"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_router_1 = __importDefault(require("./health.router"));
const students_router_1 = __importDefault(require("./students.router"));
const router = (0, express_1.Router)();
router.use('/health', health_router_1.default);
router.use('/students', students_router_1.default);
exports.default = router;
