
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

// 非同期関数
async function getArchive(url, year) {
    const res = await fetch(url+String(year));
    // resが返るまでwait
    const html = await res.text();
    // htmlが返るまでwait
    const dom = new JSDOM(html);
    const document = dom.window.document;
    // native JSと同じように処理
    const titles = document.querySelectorAll('.entry-title-link');
    const dates = document.querySelectorAll('time');

    for (let i=0; i < titles.length; i++) {
        let reDate = dates[i].textContent.replace(/\s/g, '');
        nodeArray.push({
            url: titles[i].href,
            title: titles[i].textContent,
            date: reDate,
        })
    };
};

// write
const writeJson = function(data, filename) {
    console.log('write start');
    fs.appendFile('data/'+filename+'.json', JSON.stringify(data, null, '    '), (error) => {
        console.log('write end');
    });
};

// wait
const sleep = () => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, 5000)
});

// decide and run
let nodeArray = [];
let url = 'https://techlife.cookpad.com/archive/';
(async function(filename) {
    for (let year=2021; year>2007; year--) {
        await getArchive(url, year);
        await sleep();
        console.log(year);
    }
    writeJson(nodeArray, filename);
})('cookpad');




