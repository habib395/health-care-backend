const { client } = require('../config/db');

const downloadCollection = client.db('health-care').collection('download');

exports.getDownloadInfo = async(req, res) =>{
    try {
        const result = await downloadCollection.findOne({})

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'Download Information not found.'
            })
        }
        
        res.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        console.error('Error fetching all download info:', error);
        res.status(500).send({
            success: false,
            message: 'failed to fetch download information.',
            error: error.message
        })
    }
}