import { getWeather, searchByCity } from "../controller/weatherController.js";
import express from "express";

const router = express.Router();

router.get("/", getWeather) //* API/weather
router.get("/:input", searchByCity) //* API/weather/:input

export default router;