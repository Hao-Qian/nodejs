var http = require('http');
var path = require('path');
var express = require('express'),
cons = require('consolidate'),
crawlerApp = express()
/*
	list all files when http://localhost:8080/list/files accessed.
*/
var dirTobeListed = "/Users/haoqian/Documents/ebooks"; //need a valid default value here for testing
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};


crawlerApp.engine('html', require('ejs').renderFile);
crawlerApp.set('view engine', 'html');

// var crawlerApp = http.createServer(function(request, response){
// 	if(request.method ==='GET' && request.url === '/list/files'){
// 		response.writeHead(200, {'Content-Type': 'text/plain'})
		
// 		var myfileList = [];
// 		var processedfiles = [];
// 		walkSync(dirTobeListed,myfileList);
// 		response.render('page',myfileList);
// 		//response.end(JSON.stringify(myfileList));
// 	}
// });

crawlerApp.get('/list/files', function(req,res){
	var myfileList = [];
    walkSync(dirTobeListed,myfileList);
	res.end(JSON.stringify(myfileList));

})
crawlerApp.set('view engine','jade');
crawlerApp.listen(8080);

