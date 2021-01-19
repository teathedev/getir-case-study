const mongoose = require('mongoose');


const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};


module.exports = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL, config);
  console.log('Mongo connected!');
};
