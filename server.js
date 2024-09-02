const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

//console.log(process.env);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});