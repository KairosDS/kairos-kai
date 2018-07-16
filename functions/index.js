'use strict';
//process.env.DEBUG = 'actions-on-google:*';
process.env.DEBUG = 'agent:*';
const functions = require('firebase-functions');

exports.fulfillment = functions.https.onRequest(require('./fulfillment'));
