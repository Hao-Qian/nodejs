var elasticsearch = require('elasticsearch')

var client = new elasticsearch.Client();

client.cluster.health(function(err, resp){
	if(err){
		console.error(err.message);
	}else{
		console.dir(resp);
	}
})