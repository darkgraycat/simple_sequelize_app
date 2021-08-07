import { Router } from 'express';

import RoleController from './role.controller';

export const router = Router();

router.get('/', RoleController.getRoles);
router.post('/', RoleController.createRole);
