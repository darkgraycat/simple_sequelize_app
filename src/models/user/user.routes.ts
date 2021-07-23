import { Router } from 'express';

import {
  createUser,
  updateUser,
} from './user.controller';

export const router = Router();

router.post('/', createUser);
router.patch('/', updateUser);
