
async function doAsync(what) {
    return what;
};

doAsync('hoge').then(val => {
    console.log(val);
});

function doAsync(what) {
    return new Promise((resolve) => {
        resolve(what);
    });
};

doAsync('hoge').then(val => {
    console.log(val);
});
