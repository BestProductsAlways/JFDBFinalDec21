// API endpoint to fetch data based on selected values
router.get('/fetchData', async (req, res) => {
    try {
        const { speciality, experience_level, number_takeouts, sex } = req.query;

        let result;

        if (databaseType === 'mongodb') {
            result = await databaseUtils.getDataFromMongoDB(speciality, experience_level, number_takeouts, sex);
        } else if (databaseType === 'postgresql') {
            result = await databaseUtils.getDataFromPostgreSQL(speciality, experience_level, number_takeouts, sex);
        } else {
            throw new Error('Invalid database type. Choose either "mongodb" or "postgresql".');
        }

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
