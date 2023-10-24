const {app, BrowserWindow} = require('electron');
const path = require('path');

async function createWindow(){
    const bw = new BrowserWindow({
        width: 300,
        height: 300
    })
    bw.loadFile(path.join(__dirname, "views", "main.html"));
}

async function main(){
    await app.whenReady();
    await createWindow();
 }

if (typeof require !== 'undefined' && require.main === module){
    main().catch((e)=>console.error(e));
}