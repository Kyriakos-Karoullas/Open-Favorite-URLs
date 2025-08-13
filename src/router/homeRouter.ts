import Router from 'express';
import homeController from '../controllers/homeController.js'

const router = Router();

router.get('/', homeController.home);
router.post('/addFav', homeController.addFav)
router.delete('/deleteFav/:id', homeController.deleteFav)

export default router;