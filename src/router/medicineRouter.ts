import { Router } from "express";
import { createMedicine, deleteMedicine, readMedicine, updateMedicine } from "../controller/medicineController";
import { createValidation, updateValidation } from "../middleware/medicineValidation";
import { uploadMedicinePhoto } from "../middleware/uploadMedicinePhoto";
import { verifyToken } from "../middleware/authorization";
const router = Router()

/** router for add medicine */
router.post(`/`,[verifyToken, uploadMedicinePhoto.single(`photo`),createValidation], createMedicine)
/** router for show all medicine */
router.get(`/`,[verifyToken], readMedicine)
/** router for update medicine */
router.put(`/:id`,[verifyToken, uploadMedicinePhoto.single(`photo`),updateValidation], updateMedicine)
/** router for delete medicine */
router.delete(`/:id`,[verifyToken], deleteMedicine)
export default router