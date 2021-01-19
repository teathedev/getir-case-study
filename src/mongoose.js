const mongoose = require('mongoose');


const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};


module.exports = {
  connect: async () => {
    await mongoose.connect(process.env.MONGO_DB_URL, config);
    if (process.env.NODE_ENV !== 'test') {
      console.log('Mongo connected!');
    }
  },
  disconnect: async () => {
    await mongoose.disconnect();
  }
};

