import { Router } from 'express';

import UserController from './user.controller';

export const router = Router();

router.get('/:userId', UserController.getUser);
router.post('/', UserController.createUser);
router.patch('/', UserController.updateUser);
