// const {WebhookClient} = require('dialogflow-fulfillment');
const {join} = require('path');
const actionHandler = require('./utils/actionHandler');

const ACTIONS_FOLDER = 'actions';
const ACTIONS_PATH = join(__dirname, ACTIONS_FOLDER);


module.exports = (request, response) => {
	const action = request.body.queryResult.action;
	const handler = actionHandler(ACTIONS_PATH, action);
	return handler(request, response);
}
