WeDeploy
		.url('email-boilerplateemail.wedeploy.io/emails')
		.auth('0000-0000-0000-0000-0000')
		.form('from', 'from@mail.com')
		.form('to', 'to@mail.com')
		.form('subject', 'Meeting RSVP')
		.form('message', 'Can you come on Thursday?')
		.post()
		.then(function(response) {
			console.log(response);
 		})
 		.catch(function(error) {
 			console.log(error);
 		});