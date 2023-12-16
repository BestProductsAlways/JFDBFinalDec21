// Connect to the selected database
connectToDatabase()
    .then(() => {
        // Serve static files
        app.use(express.static('public'));

        // Use API routes
        app.use('/api', apiRoutes);

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => console.error('Error connecting to the database:', error));