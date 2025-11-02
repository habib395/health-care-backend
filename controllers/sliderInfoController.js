const { client } = require('../config/db');

const sliderInfoCollection = client.db('health-care').collection('slider');

exports.getAllSliderInfo = async(req, res) => {
    try {
        let cursor = sliderInfoCollection.find({});
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            data: result,
        })


    } catch (error) {
        console.error('Error fetching all slider info:', error);
        res.status(500).send({
            success: false,
            message: 'Failed to fetch slider information.',
            error: error.message,
        })
    }
}