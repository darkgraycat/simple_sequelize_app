import { Router } from 'express';

import {
  getRoles,
  createRole,
} from './role.controller';

export const router = Router();

router.get('/', getRoles);
router.post('/:roleName/:permissionsIds', createRole);
