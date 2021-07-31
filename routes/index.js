const express = require('express');
const router = express.Router();

const guzman = 'Guzman';
const colonGuzman = ': Guzman';

const titleBlog = `${guzman} ${colonGuzman}`;

// index page
router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Guzman',
    });
});

// About Page
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: `${guzman} ${colonGuzman}`
    })
});

// Modular B Page
router.get('/modularb', (req, res) => {
    res.render('pages/modularb', {
        // title: 'Modular B : Guzman'
        title: `${guzman} ${colonGuzman}`
    });
});

// Contact Page
router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: titleBlog
    });
});

// router.get('/portfolio', (req, res) => {res.send('Portfolio Page Route')});
// router.get('/contact', (req, res) => {res.send('Contact Page Route')});

// catch 404 and forward to error handler
//The 404 Route (ALWAYS Keep this as the last route)
// router.get('*', (req, res) => {
//     // res.status(404).send('That does not exist');
//     res.status(404).render('pages/404', {
//         title: 'Interesting Page : Guzman'
//     });
// });

module.exports = router;