WeDeploy
	.data('http://data.boilerplatedata.wedeploy.io')
 	.orderBy('id', 'desc')
 	.limit(5)
 	.get('tasks')
	.then(function(response) {
		appendTasks(response);
	})
	.catch(function(error) {
		console.error(error);
	});