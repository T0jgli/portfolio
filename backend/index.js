import express from "express";
import cors from "cors";
import { sendMail } from "./email.js";
import { body, validationResult } from "express-validator";
import { validateMiddleware } from "./validate.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005;
app.use(cors({ origin: process.env.ORIGIN.trim().split(",") }));
app.use(express.json());

const validateBody = validateMiddleware(
    [
        body("name").trim().isLength({ min: 1, max: 255 }).escape(),
        body("email").trim().isEmail().escape().normalizeEmail(),
        body("message").trim().isLength({ min: 1, max: 5000 }).escape(),
        body("subject").trim().isLength({ min: 1, max: 255 }).escape(),
    ],
    validationResult
);

app.post("/", limiter, validateBody, async (req, res) => {
    try {
        //await sendMail(req.body);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
        });
    }
});

app.listen(PORT, () => {
    console.log(`Started listening: http://localhost:${PORT}`);
});
