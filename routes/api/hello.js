module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
};

// const express = require('express');
// const router = express.Router();

// router.get('/api/hello', (req, res) => {
//     try {
//         res.json ({
//             status: 200,
//             message: 'Get data has successfully',
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send('Server error');
//     }
// });

// module.exports = router;