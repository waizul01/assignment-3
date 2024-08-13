"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Page not found",
    });
};
exports.default = notFound;
