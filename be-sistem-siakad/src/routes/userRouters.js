import express from "express";
import { fetchAllUsers, createNewUser, updateUserController, deleteUserController, getUserByIdController } from "../controlllers/userController.js";
import { verifyToken } from "../middleware/jwt.js"; // pakai verifyToken dari jwt.js

const router = express.Router();

// Middleware tambahan untuk cek SUPER ADMIN bisa dibuat sendiri
const isSuperAdmin = (req, res, next) => {
  if (req.user.role !== "SUPER_ADMIN") {
    return res.status(403).json({ message: "Access denied. Hanya SUPER ADMIN" });
  }
  next();
};

router.get("/", verifyToken, isSuperAdmin, fetchAllUsers);
router.get("/:id", verifyToken, isSuperAdmin, getUserByIdController);
router.post("/", verifyToken, isSuperAdmin, createNewUser);
router.put("/:id", verifyToken, isSuperAdmin, updateUserController);
router.delete("/:id", verifyToken, isSuperAdmin, deleteUserController);

export default router;
