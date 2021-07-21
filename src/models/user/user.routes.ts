import { Router } from 'express';

import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from './user.controller';

export const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);
