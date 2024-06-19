import express from 'express';
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('home', { title: 'Home | Docx For Dev' });
});

// About Us page route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

router.get('/docx', (req, res) => {
    res.render('docx', { title: 'DBH | Docx For Dev' });
});

router.get('/docx/dbh/ukiaio', (req, res) => {
    res.render('ukiaio', { title: 'UptimeKuma in AIO | Docx | DBH<' });
});

// Handling 404 errors
router.use((req, res, next) => {
    res.status(404).render('404', { title: 'Error | 404', message: '404 | Page Not Found' });
});

export default router;