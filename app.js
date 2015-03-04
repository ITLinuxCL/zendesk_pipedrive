(function() {	
	return {

		requests: {
			fetchContactInfo: function(email, token) {
				return {
					url: 'https://api.pipedrive.com/v1/persons/find?search_by_email=1&term='+email+'&api_token='+token,
					type: 'GET',
					dataType: 'json'
				};
			}	
		},
		
		events: {
			'app.activated': 'doSomething',
			'click #create_contact': 'createContact'
		},
		
		createContact: function(){
			var contact = this.ticket().requester();
			
		},
		
		doSomething: function() {
			var requester_email = this.ticket().requester().email();
			this.ajax('fetchContactInfo', requester_email , this.setting("pipedrive_token") )
			.done(function(data){
				if (data.data) {
					var contact = data.data[0];
					this.switchTo('contact', contact);	
				} else {
					this.switchTo('new_contact');
				}
				
				
			});
		}
	};
}());
