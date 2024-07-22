// const fs=require('fs');
// fs.writeFile('fileA.txt','this is file A',(e)=>{
// 	if(e){
// 		console.log('error');
// 	}
// 	else{
// 		console.log('no error');
// 	}

// })
// fs.readFile('fileA.txt','utf-8',(e,data)=>{
// 	if(e){
// 		console.log('error');
// 	}
// 	else{
// 		console.log(data);
// 	}
// })
// fs.appendFile('FileA.txt','new data',(e)=>{
// 	if(e){
// 		console.log('error');
// 	}
// 	else{
// 		console.log('no error');
// 	}

// })
// fs.rename('FileA.txt','aafiya.txt',(e)=>{
// 	if(e){
// 		console.log('error');
// 	}
// 	else{
// 		console.log('no error');
// 	}
// })
// fs.unlink('aafiya.txt',(e)=>{
// 	if(e){
// 		console.log('error');
// 	}
// 	else{
// 		console.log('no error');
// 	}
// })
const http=require('http');
const server=http.createServer(
	(req,res)=>{
		res.statuscode=200;
		res.setHeader('contact-type','text/html')
		const URL=req.url;
		if(URL=='/home'){
			res.write('home page');
			console.log('inside home page');
			res.end();
		}
		else if(URL=="/about"){
			res.write('about page');
			console.log('inside about page');
			res.end();
		}
		else if(URL=="/contact"){
			res.write('contact page');
			console.log('inside contact page');
			res.end();
		}
		else if(URL=="/registerd"){
			res.write('regiseterd page');
			console.log('inside regiseterd page');
			res.end();
		}
		else if(URL=="/feedback"){
			res.write('feedback page');
			console.log('inside feedback page');
			res.end();
		}

	})
	server.listen(3000,()=>{
		console.log('server  started');
	})


