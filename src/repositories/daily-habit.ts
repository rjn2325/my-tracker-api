import { pool } from "../db/pool";
import { DailyHabit, SaveHabit } from "../models/models";

export const getDailyHabits = async (): Promise<DailyHabit[]> => {
  const query =
    "SELECT id, name FROM daily_habit_master WHERE is_active = 1 ORDER BY name";

  const [rows] = await pool.query(query);
  return rows as DailyHabit[];
};

// export const saveDailyData=async():Promise<SaveHabit[]>=>{


// }