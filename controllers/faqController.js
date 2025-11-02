const { client } = require('../config/db');

const faqCollection = client.db('health-care').collection('faq');

exports.getFaqInfo = async(req, res) =>{
    try {
        let cursor = faqCollection.find({});
        const result = await cursor.toArray();
        
        res.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        console.error('Error fetching all faq info,', error);
        res.status(500).send({
            success: false,
            message: 'Failed to fetch faq information.'
        })
    }
}