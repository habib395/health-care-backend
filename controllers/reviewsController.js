const { client } = require('../config/db');

const reviewsCollection = client.db('health-care').collection('reviews');

exports.getReviewsInfo = async(req, res) => {
    try {
        const cursor = reviewsCollection.find({});
        const result = await cursor.toArray()

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'No review data found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Review data fetch done',
            data: result
        })
    } catch (error) {
        console.error('Error fetching reviews', error);
        res.status(500).json({
            success: false,
            message: 'failed to fetch review information',
            error: error.message
        })
    }
}