import { Router } from 'express';

import {
  getPermissions,
  createPermission,
  deletePermission,
} from './permission.controller';

export const router = Router();

router.get('/', getPermissions);
router.post('/', createPermission);
router.delete('/:permissionId', deletePermission);
