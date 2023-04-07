import * as http from "http";
import { Config } from "../config";

export class Example2 {

    run(): void {
        
        // 這邊使用nodejs-express-rest-api範例為api的目標.
        http.get('http://localhost:3001/api/user', (res) => {
            let data = '';

            // 打完api後，如果對方有回覆什麼資料的話，則會放在res的data裡面.
            // 如果對方是分批將資料打過來的話，則這邊會一直接收.
            res.on('data', (chunk) => {
                data += chunk;
            });
        
            // 當對方不在送資料過來之後，則會跑入end方法.
            res.on('end', () => {
                console.log(data);
            });
        // 如果有錯誤，顯示錯誤訊息.
        }).on("error", (err) => {
            console.log("Error: ", err.message);
        });
    }
}