import * as fs from 'node:fs';

const filePath = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
    fs.stat(filePath, (_err, stats) => {
        if (!stats) {
            throw new Error('FS operation failed');
        } else {
            fs.rm(filePath, (rmErr) => {
                if (rmErr) {
                    throw new Error(rmErr);
                }
            });
        }
    });
};

await remove();