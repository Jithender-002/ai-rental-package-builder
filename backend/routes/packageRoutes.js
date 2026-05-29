import express from 'express';
import { generatePackage } from '../controllers/packageController.js';

const router = express.Router();

router.post('/generate-package', generatePackage);

export default router;
