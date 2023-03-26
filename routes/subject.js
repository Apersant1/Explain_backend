import {Router} from "express";
import { CheckSignIn, handleValidationErrors } from "../utils/index.js";
import {create,edit,remove,getAll, getOne} from "../controllers/SubjectController.js"
import { SubjectCreateValidation } from "../validations/validations.js";

const router = Router();

router.get('/all',getAll);
router.get('/:id',getOne);
router.post('/create',CheckSignIn,SubjectCreateValidation,create);
router.delete('/delete/:id',CheckSignIn,remove);
router.patch('/edit/:id',CheckSignIn,SubjectCreateValidation,edit);
export default router;