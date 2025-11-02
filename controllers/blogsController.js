const { client } = require('../config/db')

const blogsCollection = client.db('health-care').collection('blogs');

exports.getBlogsInfo = async(req, res) => {
    try {
        let cursor = blogsCollection.find({});
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        console.error('Error fetching all blogs info:', error);
        res.status(500).send({
            success: false,
            message: 'Failed to fetch faq information.'
        })
    }
}