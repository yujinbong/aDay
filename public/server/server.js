//웹서버를 구성해서 동작하는가
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
console.log('Start server : Local : Host : 3000');
}); 

//set에 정의되어있는 파일에서 다양한 html파일을 불러온다.  dirname->현재 디렉토리
app.set('views', __dirname + '/views'); 
app.set('view engin', 'ejs'); 
//ejs(Embedded JavaScript ) : html안에서 JavaScript를 같이 사용할수있게 해주는 템플릿
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {   //router
    //res.send('hello world') //I'm going to send this message.
    res.render('index.html') 
})

app.get('/about', function (req, res) {   //about
    res.send('about page')
})
