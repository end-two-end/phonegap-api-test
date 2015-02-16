function authenticate(callback) {
    OAuth.initialize('Aqmf85hhmWlPjjypuuY2hk44A7o');

    alert('Button Clicked');
    OAuth.popup('facebook')
	.done(function(result) {
	    result.get('/me')
	    .done(function (response) {
		//this will display "John Doe" in the console
		alert('My name is: ' + response.name);
	    })
	    .fail(function (err) {
		//handle error with err
	    });
	})
	.fail(function (err) {
	    //handle error with err
	});
}

