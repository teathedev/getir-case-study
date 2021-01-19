const joi = require('joi');

const joiMiddleware = require('./middlewares/joi');
const model = require('./model');


module.exports = (app) => {
  const postScheme = joi.object({
    startDate: joi.date().required(),
    endDate: joi.date().greater(joi.ref('startDate')).required(),
    minCount: joi.number().min(0).required(),
    maxCount: joi.number()
      .greater(joi.ref('minCount'))
      .required()
  });

  app.post(
    '/',
    joiMiddleware(postScheme),
    async (req, res, next) => {
      console.log(JSON.stringify(req.body));
      const results = await model.aggregate([
        {
          $project: {
            key: '$key',
            createdAt: '$createdAt',
            totalCount: { $sum: '$counts' }
          }
        },
        { $match: {
            createdAt: {
              $gte: req.body.startDate,
              $lt: req.body.endDate
            },
            totalCount: {
              $gt: req.body.minCount,
              $lt: req.body.maxCount
            }
          }
        },
      ]).exec();

      res.status(200).json({
        code: 0,
        msg: 'success',
        results
      });
    }
  );
};
