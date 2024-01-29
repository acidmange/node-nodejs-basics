import * as fs from 'node:fs';

const dirPath = 'src/fs/files';

const list = async () => {
    fs.stat(dirPath, (_err, stats) => {
        if (!stats) {
            throw new Error('FS operation failed');
        } else {
            fs.readdir(dirPath, { recursive: true }, (err, files) => {
                if (err) {
                    throw new Error(err);
                } else {
                    console.log(files);
                }
            });
        }
    });
};

await list();