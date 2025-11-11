const { client } = require('../config/db');

const premiumCollection = client.db('health-care').collection('premium');

exports.getPremiumInfo = async(req, res) =>{
    try {
        const result = await premiumCollection.findOne({});

        
        if(!result){
            return res.status(404).json({
                success: false,
                message: 'No premium numbers.'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Premium member fetch done',
            data: result
        })
    } catch (error) {
        console.error('Error fetching premium information:', error );
        res.status(500).json({
            success: false,
            message: 'failed to fetch premium partner.',
            error: error.message
        })
    }
}