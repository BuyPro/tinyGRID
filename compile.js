/*jslint node:true, plusplus:true */
'use strict';

var less = require('less'),
    fs = require('fs'),
    config = {
        src: "src/",
        dest: "dist/",
        compress: false,
        files: [
            {
                src: "main.less",
                dest: "tinygrid.css"
            }
        ]
    },
    i,
    writeCss = function (num, err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Compiled " + (num+1) + " of " + config.files.length);
        }
    },
    bindWriteCss = function (num) {
        return writeCss.bind(undefined, num);
    },
    readLess = function (num, err, data) {
        data = data.toString();
        less.render(data, {paths: [config.src], compress: config.compress}, function (e, less) {
            if(e){
                console.error(e);
            } else {
                fs.writeFile(config.dest + config.files[num].dest, less.css, bindWriteCss(num));
            }
        });
    },
    bindReadLess = function (num) {
        return readLess.bind(undefined, num);
    };

for (i = 0; i < config.files.length; i++) {
    fs.readFile(config.src + config.files[i].src, bindReadLess(i));
}
