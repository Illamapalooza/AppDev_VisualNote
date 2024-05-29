import router from '../../router/app.router';
import { generateNote } from './aiNote.service';

export const aiNoteRoute = router.post('/generate-note', (req, res) => {
  generateNote(req, res);
});

export default aiNoteRoute;
