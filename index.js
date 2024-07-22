 const path=require('path');
 const pathA=path.dirname('c:/FolderA/FolderB/FileA.html');
 const pathB=path.basename('c:/FolderA/FolderB/FileA.html');

const pathC=path.extname('c:/FolderA/FolderB/FileA.html');

 const pathD=path.parse('c:/FolderA/FolderB/FileA.html');
 const changeFormat={
root:'c/',
 dir: 'c:/FolderA/FolderB',
  base: 'FileA.html',
  ext: '.html'

 }
 const a=path.join('c:/FolderA/FolderB/FileA.html','c:/FolderA/FolderB/FileA.html');
 console.log(a);

 const b=path.normalize('c:/FolderA/FolderB/FileA.html');
 console.log(b);

 const c=path.resolve('c:/FolderA/FolderB/FileA.html');
 console.log(c);

 const d=path.relative('c:/FolderA/FolderB/FileA.html');
 console.log(d);

 const e=path.relative('c:/FolderA/FolderB/FileA.html');
 console.log(e);



 console.log(pathA);
 console.log(pathB);
 console.log(pathC);
 console.log(pathD);

const fs=require('fs');
fs.writeFileSync('MyFileA.txt','aafiya');
const readdata=fs.readFileSync('MyFileA.txt','utf-8');
fs.renameSync('MyFileA.txt','NewFileA.txt');
console.log(readdata);
