const fs = require('fs');

const IOhandler = {
    createDir: (dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    },

    createDirs: (dirs) => {
        dirs.forEach((dir) => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        });
    },

    dirExists: (dir) => fs.existsSync(dir),
};

module.exports = IOhandler;
