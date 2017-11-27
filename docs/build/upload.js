const fs = require('fs');
const glob = require('glob');
const request = require('request');

const formData = {};

glob('dist/**', {nodir: true}, function (err, files) {
    files.forEach((file) => {
        const fullPath = `/var/www/html${process.env.npm_package_cdnPath.slice(1)}/${file.replace(/^dist/, '')}`;
        formData[fullPath] = fs.createReadStream(file);
    });

    request.post({
        url: 'http://192.168.181.73:3000',
        formData: formData
    }, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
})
