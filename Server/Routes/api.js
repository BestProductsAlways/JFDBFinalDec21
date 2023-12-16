// API endpoint to fetch data based on selected values
router.get('/fetchData', async (req, res) => {
    try {
        const { valueA, valueB, valueC, valueD } = req.query;

        let result;

        if (databaseType === 'mongodb') {
            result = await databaseUtils.getDataFromMongoDB(valueA, valueB, valueC, valueD);
        } else if (databaseType === 'postgresql') {
            result = await databaseUtils.getDataFromPostgreSQL(valueA, valueB, valueC, valueD);
        } else {
            throw new Error('Invalid database type. Choose either "mongodb" or "postgresql".');
        }

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
