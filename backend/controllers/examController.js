import asyncHandler from "express-async-handler";
import Exam from "./../models/examModel.js";

// @desc Get all exams
// @route GET /api/exams
// @access Public
const getExams = asyncHandler(async (req, res) => {
  const exams = await Exam.find();
  res.status(200).json(exams);
});

// @desc Create a new exam
// @route POST /api/exams
// @access Private (admin)
const createExam = asyncHandler(async (req, res) => {
  const { examName, totalQuestions, duration, liveDate, deadDate } = req.body;

  const exam = new Exam({
    examName,
    totalQuestions,
    duration,
    liveDate,
    deadDate,
  });

  const createdExam = await exam.save();

  if (createdExam) {
    res.status(201).json(createdExam);
  } else {
    res.status(400);
    throw new Error("Invalid Exam Data");
  }
});
const logTabSwitch = async (req, res) => {
  try {
    const { userId, examId } = req.body;

    // Save the event to the database
    await CheatingLog.create({ userId, examId, action: 'tab_switch' });

    res.status(200).json({ message: 'Tab switch logged successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to log tab switch' });
  }
};







export { getExams, createExam ,logTabSwitch};
