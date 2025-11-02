const { client } = require('../config/db');

const contactCollection = client.db('health-care').collection('contactUs');

exports.postContactInfo = async(req, res) =>{
    try {
        const { name, email, concern, query } = req.body;
        if( !name || !email || !concern || !query){
            return res.status(400).json({
                success : false,
                message: 'Name, email, concern, query are required!'
            })
        }
        const queryData = {
            name, 
            email,
            concern, 
            query,
            createdAt: new Date()
        }
        const result = await contactCollection.insertOne(queryData)

        res.status(201).json({
            success: true,
            message: 'Your query have been submitted successful.',
            queryId: result.insertedId
        })
    } catch (error) {
        console.error('Error submitting query:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit query due to server error.',
            error: error.message
        })
    }
}