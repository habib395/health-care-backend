const { client } = require('../config/db');

const buyOnlineCollection = client.db('health-care').collection('buy-online');

exports.getBuyOnlineInfo = async(req, res) =>{
    try {
        let cursor = buyOnlineCollection.find();
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            data: result
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
