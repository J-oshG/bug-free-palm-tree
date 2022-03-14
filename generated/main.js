"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
(0, logger_1.logIt)(200);
(0, logger_1.logIt)('New msg');
const values = [1, 2, 3, 4];
console.log(values.find(x => x === 2));
window.alert('hello!');
