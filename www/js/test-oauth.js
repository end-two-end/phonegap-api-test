function authenticate(callback) {
    OAuth.initialize('Aqmf85hhmWlPjjypuuY2hk44A7o');

    OAuth.popup('facebook')
	.done(function(result) {
	    result.me()
	    .done(function (response) {
		
		document.getElementById("firstname").innerHTML = response.firstname;
		document.getElementById("lastname").innerHTML = response.lastname;

	    })
	    .fail(function (err) {
		//handle error with err
	    });
	})
	.fail(function (err) {
	    //handle error with err
	});
}

