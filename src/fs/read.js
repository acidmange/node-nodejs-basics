import * as fs from 'node:fs';

const filePath = 'src/fs/files/fileToRead.txt';

const read = async () => {
    fs.stat(filePath, (_statErr, stats) => {
        if (!stats) {
            throw new Error('FS operation failed');
        } else {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    throw new Error(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
};

await read();