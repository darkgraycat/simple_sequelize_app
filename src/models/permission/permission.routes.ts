import { Router } from 'express';

import {
  getPermission,
  getPermissions,
  createPermission,
  updatePermission,
  deletePermission,
} from './permission.controller';

export const router = Router();

router.get('/', getPermissions);
router.get('/:permissionId', getPermission);
router.post('/:permissionId', createPermission);
router.patch('/:permissionId', updatePermission);
router.delete('/:permissionId', deletePermission);
