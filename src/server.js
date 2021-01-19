const app = require('./app');
const mongoose = require('./mongoose');

mongoose.connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Application listening at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Something gone wrong', error);
    process.exit(1);
  });
