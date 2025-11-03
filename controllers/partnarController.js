const { client } = require('../config/db');

const partnarCollection = client.db('health-care').collection('partners');

exports.getPartnarsInfo = async(req, res)=>{
    try {
        const cursor = partnarCollection.find({});
        const result = await cursor.toArray();

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'No partnars data found.'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Partnars data fetch done',
            data: result
        })
    } catch (error) {
        console.error('Error fetching partnar:', error);
        res.status(500).json({
            success: false,
            message: 'failed to fetch partnar information.',
            error: error.message
        })
    }
}