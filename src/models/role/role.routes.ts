import { Router } from 'express';

import {
  getRole,
  getRoles,
  createRole,
  updateRole,
  deleteRole,
} from './role.controller';

export const router = Router();

router.get('/', getRoles);
router.get('/:roleId', getRole);
router.post('/:roleId', createRole);
router.patch('/:roleId', updateRole);
router.delete('/:roleId', deleteRole);
