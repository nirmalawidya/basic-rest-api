import { Router } from "express";
import { createMedicine, deleteMedicine, readMedicine, updateMedicine } from "../controller/medicineController";
import { createValidation, updateValidation } from "../middleware/medicineValidation";
const router = Router()

/** router for add medicine */
router.post(`/`,[createValidation], createMedicine)
/** router for show all medicine */
router.get(`/`, readMedicine)
/** router for update medicine */
router.put(`/:id`,[updateValidation], updateMedicine)
/** router for delete medicine */
router.delete(`/:id`, deleteMedicine)
export default router