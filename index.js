var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

  if(req.url=="/"){
     let item= fs.readFileSync('home.html','utf8');
     res.end(item);
  }
  else if(req.url=="/About"){
      let item= fs.readFileSync('about.html','utf8');
      res.end(item);

  }
  else if(req.url=="/Shop"){

      let item= fs.readFileSync('shop.html','utf8');
      res.end(item);
  }

  else if(req.url=="/Contact"){
      let item= fs.readFileSync('contact.html','utf8');
      res.end(item);
  }

});
server.listen(8080);
console.log("Server Run Success");
