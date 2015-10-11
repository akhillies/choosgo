var request = require('superagent');
request.post('http://api.reimaginebanking.com/accounts/560f0205f8d8770df0ef9ab2/purchases?key=0390079d96b299959e62cdb5a6cdb132').end(function(res){
	purchase-post {
  		"merchant_id": "string",
  		"medium": "balance",
 		"purchase_date": "string",
  		"amount": 0,
  		"status": "pending",
  		"description": "string"
	}
    
});