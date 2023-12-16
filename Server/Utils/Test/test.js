const chai = require('chai');
const chaiHttp = require('chai-http');
const winston = require('winston');
const server = require('../server/server');
const databaseUtils = require('../path/to/databaseUtils'); // Adjust the path accordingly

// Configure Winston for logging to both console and file
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'testResults.log' }),
  ],
});

// Configure Chai
chai.use(chaiHttp);
const expect = chai.expect;

// Test for MongoDB
describe('MongoDB Tests', () => {
  before(async () => {
    // Connect to MongoDB before running tests
    try {
      await databaseUtils.connectToMongoDB();
    } catch (err) {
      logger.error(`Error connecting to MongoDB: ${err.message}`);
      throw err;
    }
  });

  it('should fetch data from MongoDB', async () => {
    try {
      const res = await chai.request(server)
        .get('/api/fetchData')
        .query({
          specialty: 'exampleA',
          experience_level: 'exampleB',
          number_takeouts: 'exampleC',
          sex: 'exampleD',
        });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      // Add more assertions based on your expected response

      logger.info('MongoDB test passed');
    } catch (error) {
      logger.error(`Assertion failed in MongoDB test: ${error.message}`);
      throw error;
    }
  });

  after((done) => {
    // Cleanup after MongoDB tests
    // You might want to disconnect from MongoDB or perform other cleanup steps
    done();
  });
});

// Test for PostgreSQL
describe('PostgreSQL Tests', () => {
  before(async () => {
    // Connect to PostgreSQL before running tests
    try {
      await databaseUtils.connectToPostgreSQL();
    } catch (err) {
      logger.error(`Error connecting to PostgreSQL: ${err.message}`);
      throw err;
    }
  });

  it('should fetch data from PostgreSQL', async () => {
    try {
      const res = await chai.request(server)
        .get('/api/fetchData')
        .query({
          specialty: 'exampleA',
          experience_level: 'exampleB',
          number_takeouts: 'exampleC',
          sex: 'exampleD',
        });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      // Add more assertions based on your expected response

      logger.info('PostgreSQL test passed');
    } catch (error) {
      logger.error(`Assertion failed in PostgreSQL test: ${error.message}`);
      throw error;
    }
  });

  after((done) => {
    // Cleanup after PostgreSQL tests
    // You might want to disconnect from PostgreSQL or perform other cleanup steps
    done();
  });
});
