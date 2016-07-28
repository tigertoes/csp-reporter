'use strict';

var BASE_PATH = 'csp/';

// Bootstrap for local testing
if(process.env.SERVERLESS_TEST) {
  var AWSMock = require('mock-aws-s3');
  var s3 = AWSMock.S3({
    params: { Bucket: 'test_report_bucket' }
  });
} else {
  var AWS = require('aws-sdk');
  var s3  = new AWS.S3({ params: { Bucket: process.env.S3_BUCKET_NAME } });
}


module.exports.handler = function(event, context, cb) {
  event.headers = JSON.parse(event.headers);
  var payload = {
    Key: BASE_PATH + event.requestId + '.json',
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
