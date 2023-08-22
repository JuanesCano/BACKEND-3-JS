import {Router} from 'express';
import postCtrl from '../controllers/postController.js';
import { upload } from '../middleware/imgUpload.js';

const route = Router();

route.get('/', postCtrl.listar);
route.get('/:id', postCtrl.listOne);

route.post("/", upload.single("img"),postCtrl.add);

route.put('/:id', upload.single("img"), postCtrl.update);

route.delete('/:id', postCtrl.delete);

export default route;