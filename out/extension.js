'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const vscode = require("vscode");
let bchStatusBarItem;
let otherStatusBarItem;
let thirdStatusBarItem;
let fourthStatusBarItem;
let fithStatusBarItem;
let SixStatusBarItem;
let SevenStatusBarItem;
function activate({ subscriptions }) {
    const config = vscode.workspace.getConfiguration();
    // register a command that is invoked when the status bar
    // item is selected
    // const configuredSymbols = config.get('vscode-stocks.stockSymbols', [])
    //     .map(symbol => symbol);
    const myCommandId = 'extension.helloWorld';
    subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
        //let n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
        //vscode.window.showInformationMessage(`Yeah, ${n} line(s) selected... Keep going!`);
    }));
    // create a new status bar item that we can now manage
    bchStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 800);
    otherStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 700);
    thirdStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 600);
    fourthStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 500);
    fithStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 400);
    SixStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 300);
    SevenStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 200);
    httpGet("");
    setInterval(function () {
        httpGet("");
    }, 10000);
    //
    bchStatusBarItem.command = myCommandId;
    otherStatusBarItem.command = myCommandId;
    thirdStatusBarItem.command = myCommandId;
    fourthStatusBarItem.command = myCommandId;
    fithStatusBarItem.command = myCommandId;
    SixStatusBarItem.command = myCommandId;
    SevenStatusBarItem.command = myCommandId;
    subscriptions.push(bchStatusBarItem);
    subscriptions.push(otherStatusBarItem);
    subscriptions.push(thirdStatusBarItem);
    subscriptions.push(fourthStatusBarItem);
    subscriptions.push(fithStatusBarItem);
    subscriptions.push(SixStatusBarItem);
    subscriptions.push(SevenStatusBarItem);
    //bchStatusBarItem.text = "12345";
    //hvnwy4enps5uhgjh7uwcfwlkgodzrqpcesykcabx7no2y3ejtgjq
    bchStatusBarItem.show();
    otherStatusBarItem.show();
    thirdStatusBarItem.show();
    fourthStatusBarItem.show();
    fithStatusBarItem.show();
    SixStatusBarItem.show();
    SevenStatusBarItem.show();
}
exports.activate = activate;
function httpGet(url) {
    return __awaiter(this, void 0, void 0, function* () {
        // const config = vscode.workspace.getConfiguration();
        // const configuredSymbols = config.get('vscode.aztest.symbol', [])
        // 	.map(symbol => symbol);
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=RVNBTC", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                bchStatusBarItem.text = data.symbol + ' - ' + data.price;
                bchStatusBarItem.show();
            });
        });
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=BTCUSDT", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                otherStatusBarItem.text = data.price;
                otherStatusBarItem.show();
            });
        });
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=ALGOBTC", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                thirdStatusBarItem.text = "ALGO - " + data.price;
                thirdStatusBarItem.show();
            });
        });
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=BATBTC", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                fourthStatusBarItem.text = "BAT - " + data.price;
                fourthStatusBarItem.show();
            });
        });
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=EOSBTC", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                fithStatusBarItem.text = "EOS - " + data.price;
                fithStatusBarItem.show();
            });
        });
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=LINKBTC", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                SixStatusBarItem.text = "LINK - " + data.price;
                SixStatusBarItem.show();
            });
        });
        https.get("https://api.binance.com//api/v3/ticker/price?symbol=ETHBTC", response => {
            //let responseData = '';
            response.on('data', d => {
                //responseData += d;
                var data = JSON.parse(d);
                SevenStatusBarItem.text = "ETH - " + data.price;
                SevenStatusBarItem.show();
            });
        });
        //vsce package buld command
    });
}
//# sourceMappingURL=extension.js.map