import { Router } from "express";
import appController from "../controllers/appController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get("/produtos", 
authMiddleware.requireAuth, 
appController.produtos_get
);
router.delete(
  "/deletar/:id",
  authMiddleware.requireAuth,
  appController.deletar_post
);
router.post(
  "/editar/:id",
  authMiddleware.requireAuth,
  appController.editar_post
);
router.post(
  "/cadastrar",
  authMiddleware.requireAuth,
  appController.cadastrar_post
);

export default router;
