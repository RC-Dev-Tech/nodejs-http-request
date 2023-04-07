import * as http from "http";

export class Example3 {

    run(): void {

        // 這邊使用nodejs-express-rest-api範例為api的目標.
        const options = {
            hostname: 'localhost',                    // api 的位置.
            port: 3001,                               // api 的port號.
            path: '/api/user',                        // api 的路由路徑.
            method: 'POST',                           // api 的模式 (GET、POST、PUT、DELETE).
            headers: {                                // api 的標頭設定.
              'Content-Type': 'application/json'
            }
          };

          // 打給對方api所要帶過去的資料.
          const postData = JSON.stringify({
            "name": "ricky",
            "age": 18
          });

          const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
            res.setEncoding('utf8');
            let data = '';
          
            // 為了避免收到的資料太大而造成記憶體問題，
            // 這邊使用以下的方式逐步讀取收到的資料，
            // 並將它們儲存在data這個變數.
            res.on('data', chunk => {
              data += JSON.stringify(chunk);
            });
          
            // 當所有資料都讀取完畢之後，則觸發end.
            res.on('end', () => {
              try {
                const jsonData = JSON.parse(data);
                console.log(jsonData);
              } catch (error) {
                console.error(error);
              }
            });
          });
          
          // 如果有錯誤，顯示錯誤訊息.
          req.on('error', error => {
            console.error(error);
          });
          
          // 寫入打對方api所要帶入的資料.
          req.write(postData);
          // 結束請求.
          req.end();
    }
}