'use strict';

var AWS = require('aws-sdk');
var firehose = new AWS.Firehose({
  params: {
    DeliveryStreamName: process.env.FIREHOSE_STREAM
  }
});

module.exports.handler = function(event, context, cb) {
  event.headers = JSON.parse(event.headers);
  event.time    = new Date();

  var payload = JSON.stringify(event) + "\n";

  firehose.putRecord({
    Record: {
      Data: payload,
    }
  }, function(err, data){
    if(err) {
      console.error(err, err.stack);
      return cb(err, 'Could not write data!');
    } else {
      return cb(null, { message: 'success' });
    }
  });

};
