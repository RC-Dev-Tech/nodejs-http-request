import * as http from "http";
import { Config } from "../config";

export class Example1 {

    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        // 最基本的http server的創建.
        http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          }).listen(port);
    }
}