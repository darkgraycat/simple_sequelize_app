import { Router } from 'express';

import PermissionController from './permission.controller';

export const router = Router();

router.get('/', PermissionController.getPermissions);
router.post('/', PermissionController.createPermission);
router.delete('/:permissionId', PermissionController.deletePermission);
