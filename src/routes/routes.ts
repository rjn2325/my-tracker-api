import { Router } from "express";
import { getDailyHabitMaster } from "../controller/habits/daily-habit-controller";

export const habitsRouter = Router();

habitsRouter.get("/habits-master", getDailyHabitMaster);
habitsRouter.get("/save_progress", saveDailyProgress);