const { client } = require('../config/db');

const massMediaCollection = client.db('health-care').collection('massMedia');

exports.getMassMediaInfo = async(req, res) =>{
    try {
        const cursor = massMediaCollection.find({});
        const result = await cursor.toArray();

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'No media data found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Media data fetch done',
            data: result
        })
    } catch (error) {

        console.error('Error fetching media:',error);
        res.status(500).json({
            success: false,
            message: 'failed to fetch media information',
            error: error.message
        })
    }
}