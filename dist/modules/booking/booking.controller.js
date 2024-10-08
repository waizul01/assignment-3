"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendRes_1 = __importDefault(require("../../utils/sendRes"));
const booking_service_1 = require("./booking.service");
const bookService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_b = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")) === null || _b === void 0 ? void 0 : _b[1];
    const result = yield booking_service_1.BookingServices.bookServiceIntoDB(req.body, token);
    (0, sendRes_1.default)({
        res,
        message: "Service booked successfully",
        data: result,
    });
}));
const getAllBookings = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.BookingServices.getAllBookingsFromDB();
    (0, sendRes_1.default)({
        res,
        message: "All bookings retrieved successfully",
        data: result,
    });
}));
const getSingleUserBookings = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield booking_service_1.BookingServices.getSingleUserBookingsFromDB(customerId);
    (0, sendRes_1.default)({
        res,
        message: "All bookings retrieved successfully for this customer.",
        data: result,
    });
}));
const getSingleBooking = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookingId } = req.params;
    const result = yield booking_service_1.BookingServices.getSingleBookingFromDB(bookingId);
    (0, sendRes_1.default)({
        res,
        message: "Booking retrieved successfully.",
        data: result,
    });
}));
exports.BookingControllers = {
    bookService,
    getAllBookings,
    getSingleUserBookings,
    getSingleBooking
};
