WeDeploy
    .url('email-boilerplateemail.wedeploy.io/emails/9209385710/status')
    .get()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });