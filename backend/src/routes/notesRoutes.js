import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote,  getNoteBYId } from "../controllers/notesController.js";

const router = express.Router();

router.get("/:id", getNoteBYId);
router.get("/",getAllNotes);

router.post("/", createNote);  


  router.put("/:id", updateNote );


 router.delete("/:id", deleteNote);

export default router;

