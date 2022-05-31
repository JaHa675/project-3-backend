const router = require('express').Router();

import userRoutes from './userRoutes';

router.use('/users', userRoutes);

export default router