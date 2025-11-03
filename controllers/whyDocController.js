const { client } = require('../config/db');

const whyDocCollection = client.db('health-care').collection('whyDocTime');

exports.getWhyDocController = async(req, res) =>{
    try {
        const result = await whyDocCollection.findOne({})

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        
        console.error('Error fetching all slider info:', error)
        res.status(500).send({
            success: false,
            message: 'Failed to fetch whyDoc information.',
            error: error.message
        })
    }
}