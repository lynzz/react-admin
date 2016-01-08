var Mock = require('mockjs');

module.exports = {
  'GET /api/users': Mock.mock({
    success: true,
    'data|1-10': [{'name|+1': '@Name'}]
  }),
}
