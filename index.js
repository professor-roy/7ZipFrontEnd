const {app, BrowserWindow} = require('electron');

async function createWindow(){
    const bw = new BrowserWindow({
        width: 300,
        height: 300
    })
    bw.loadURL('about:blank');
}

async function main(){
    await app.whenReady();
    await createWindow();
 }

if (typeof require !== 'undefined' && require.main === module){
    main().catch((e)=>console.error(e));
}