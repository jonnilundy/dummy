WeDeploy
		.email('email-boilerplateemail.wedeploy.io')
		.auth('0000-0000-0000-0000-0000')
		.from('from@mail.com')
		.to('to@mail.com')
		.subject('Meeting RSVP')
		.message('Can you come on Thursday?')
		.send()
		.then(function(response) {
			console.log(response);
 		})
 		.catch(function(error) {
 			console.log(error);
 		});