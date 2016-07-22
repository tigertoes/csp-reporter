'use strict';

var AWS = require('aws-sdk');
var s3  = new AWS.S3({ params: { Bucket: process.env.S3_BUCKET_NAME } });

module.exports.handler = function(event, context, cb) {

  event.headers = JSON.parse(event.headers);
  var payload = {
    Key: event.requestId,
    Body: JSON.stringify(event),
    ContentType: 'application/json'
  };

  s3.putObject(payload, function(err, data) {
    if(err) {
      console.error(err, err.stack);
      return cb(err, 'Something went wrong!');
    }
    return cb(null, { message: 'success' });
  });

};
