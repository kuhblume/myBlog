const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;

let server = http.createServer();
server.on('request', doRequest);

// ファイルモジュールを読み込む
let fs = require('fs');

// リクエストの処理
function doRequest(req, res) {

    // // ファイルを読み込んだら、コールバック関数を実行する。
    // fs.readFile('../html/index.html', 'utf-8' , doReard );
    //
    // // コンテンツを表示する。
    // function doReard(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end();
    // }

    switch (req.url) {
        case '/':
            fs.readFile('../html/index.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
                console.log('loaded index.html');
            });
            break;
        case '/css/style.css':
            fs.readFile('../css/style.css', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
                console.log('loaded style.css');
            });
            break;
        case '/js/main.js':
            fs.readFile('../js/main.js', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(data);
                res.end();
                console.log('loaded main.js');
            });
            break;
    }
}

server.listen(port, hostname, () => {
    console.log("===================");
    console.log(`Server running at http://${hostname}:${port}/`);
});