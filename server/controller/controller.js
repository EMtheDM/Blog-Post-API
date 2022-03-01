const axios = require('axios');

const ping = (req, res) => {
    res.status(200).send({
        success: 'true',
    });
};

