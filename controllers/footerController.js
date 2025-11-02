const { client } = require('../config/db');

const footerCollection = client.db('health-care').collection('footer');

exports.getFooterInfo = async(req, res) =>{
    try {
        let cursor = footerCollection.find({});
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        console.error('Error fetching all footer info.', error)
        res.status(500).send({
            success: false,
            message: 'Failed to fetch footer information.'
        })
    }
}