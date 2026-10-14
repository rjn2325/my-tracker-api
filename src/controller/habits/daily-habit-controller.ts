import { Request, Response } from "express";
import { getDailyHabits } from "../../repositories/daily-habit";

export const getDailyHabitMaster = async (_req: Request, res: Response) => {
  try {
    const habits = await getDailyHabits();
    res.json(habits);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const saveDailyProgress=async(_req:Request,_res:Response)=>{
  try {

    

    //const response=await saveDailyData(_req);

  }
  catch(e) {
    console.error(e);
    _res.status(500).json({ message: "Something went wrong" });

  }
}