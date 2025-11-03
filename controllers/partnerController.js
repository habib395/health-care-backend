const { client } = require('../config/db');

const partnerCollection = client.db('health-care').collection('partner');

exports.getPartnerInfo = async(req, res) =>{
    try {
        const result = await partnerCollection.findOne({})

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'partner data found'
            })
        };

        res.status(200).json({
            success: true,
            message: 'Partner data fetch done',
            data: result
        })
    } catch (error) {
        console.error('Error fetching partner:', error);

        res.status(500).json({
            success: false,
            message: 'failed to fetch partner information.',
            error: error.message
        })
    }
}