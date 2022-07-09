
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

// 非同期関数
async function getArchive(url, page=1) {
    const res = await fetch(url + String(page));
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
})

// decide and run
let nodeArray = [];
let url = 'https://tech.uzabase.com/archive/category/Blog?page=';
(async function(filename) {
    for (let page=1; page<5; page++) {
        await getArchive(url, page);
        await sleep();
        console.log(page);
    }
    writeJson(nodeArray, filename);
})('UZABASE');




