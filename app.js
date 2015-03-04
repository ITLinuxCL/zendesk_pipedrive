(function() {	
	return {
		buildContactObject: function(ticket){
			requester = ticket.requester();
			organization = ticket.organization();
			return {
				name: requester.name(),
				email: requester.email()
			}
		},

		requests: {
			fetchContactInfo: function(email, token) {
				return {
					url: 'https://api.pipedrive.com/v1/persons/find?search_by_email=1&term='+email+'&api_token='+token,
					type: 'GET',
					dataType: 'json'
				};
			},
			pushContactInfo: function(contact, token){
				return {
					url: 'https://api.pipedrive.com/v1/persons/?api_token='+token,
					type: 'POST',
					dataType: 'json',
					data: contact
				};
			},
			fetchOrganizationInfo: function(organization_name, token){
				return {
					url: 'https://api.pipedrive.com/v1/organizations/find?limit=1&term='+organization_name+'&api_token='+token,
					type: 'GET',
					dataType: 'json'
				};
			}
			
		},
		
		events: {
			'app.activated': 'showContactInfo',
			'click #create_contact': 'createContact'
		},
		
		getOrganization: function(org_name){
			var organization = null;
			this.ajax('fetchOrganizationInfo', org_name, this.setting("pipedrive_token"))
			.done(function(data){
				if (data.data){
					organization = data.data[0];
					console.log(organization);
				}
			});
			return organization;
		},
		
		createContact: function(){
			var contact = this.buildContactObject(this.ticket());
			this.ajax('pushContactInfo', contact, this.setting("pipedrive_token"))
			.done(function(data){
				console.log(data);
				person = data.data;
				contact = {name: person.name, email: person.email[0].value, id: person.id , org_name: null, phone: null};
				console.log(console);
				this.switchTo('contact', contact);
			});
		},
		
		showContactInfo: function() {
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
		},
	};
}());
