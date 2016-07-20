'use strict';

module.exports.handler = function(event, context, cb) {
  event.headers = JSON.parse(event.headers);
  //event.requestId = context.awsRequestId;

  console.log(JSON.stringify(context));
  console.log(JSON.stringify(event));

  // 204 is a blank response
  return cb(null, {
    message: 'success'
  });
};
