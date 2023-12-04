import { Router } from "express";
const router = Router();

import {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/memberController.js";
import {
  validateMemberInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllMembers).post(validateMemberInput, createMember);
router
  .route("/:id")
  .get(validateIdParam, getMember)
  .patch(validateMemberInput, validateIdParam, updateMember)
  .delete(validateIdParam, deleteMember);

export default router;
