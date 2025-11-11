const { client } = require("../config/db");

const clinicCollection = client.db('health-care').collection('explore');

exports.getClinicInfo = async(req, res) =>{
    try {
        let cursor = clinicCollection.find({});
        const result = await cursor.toArray();

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'No clinic data found.'
            })
        }

        res.status(200).send({
            success: true,
            message: 'Clinic data fetch done',
            data: result
        })
    } catch (error) {
        console.error('Error fetching clinic information.', error)
        res.status(500).json({
            success: false,
            message: 'failed to fetch clinic information.',
            error: error.message
        })
    }
}