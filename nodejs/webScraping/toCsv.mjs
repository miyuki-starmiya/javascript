
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import csv from 'csv';
import fs from 'fs';

const { JSDOM } = jsdom;

// 非同期関数
async function getArchive(page) {
    const res = await fetch('https://techlife.cookpad.com/archive?page=' + String(page));
    // resが返るまでwait
    const html = await res.text();
    // htmlが返るまでwait
    const dom = new JSDOM(html);
    const document = dom.window.document;
    // native JSと同じように処理
    const titles = document.querySelectorAll('.entry-title-link');
    const dates = document.querySelectorAll('time');

    let nodeArray = [];
    for (let i=0; i < titles.length; i++) {
        let array = [];
        let reDate = dates[i].textContent.replace(/\s/g, '');
        array.push(num, titles[i].href, titles[i].textContent, reDate);
        nodeArray.push(array);
        num ++;
    };
    writeCsv(nodeArray)
    console.log(nodeArray);
};

// write
const writeCsv = function(data) {
    console.log('write start');
    csv.stringify(data, (error, output) => {
        fs.appendFile('data/cookpad.json', output, (error) => {
            console.log('write end');
        });
    });
};

// decide and run
let num = 1;
(async function() {
    for (let page=1; page<25; page++) {
        await getArchive(page);
    }
})();




