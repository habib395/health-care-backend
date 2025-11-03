const { client } = require('../config/db');

const starCollection = client.db('health-care').collection('icons');

exports.getAllStarInfo = async(req, res) =>{

    try {   
        const cursor = starCollection.find({});
        const result = await cursor.toArray();
    
        res.status(200).json({
            success: true,
            message: 'fetch star data successful.',
            data: result
        })
    } catch (error) {
        console.error('error fetch on star data.', error)

        res.status(500).json({
            success: false,
            message: 'fetch star data failed',
            error: error.message
        })
    }

}
