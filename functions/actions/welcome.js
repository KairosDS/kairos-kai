const {WebhookClient} = require('dialogflow-fulfillment');

module.exports = (request, response) => {
	console.log('welcome');
	console.log(JSON.stringify(request.body));
	const agent = new WebhookClient({request, response});
	agent.handleRequest((agent) => {
		agent.add('Welcome');
	});
};
