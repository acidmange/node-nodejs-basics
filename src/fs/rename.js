import * as fs from 'node:fs';

const oldPath = 'src/fs/files/wrongFilename.txt';
const newPath = 'src/fs/files/properFilename.md';

const rename = async () => {
    fs.open(newPath, (noFileErr) => {
        if (noFileErr) {
            fs.stat(oldPath, (_noStatErr, stats) => {
                if (!stats) {
                    throw new Error('FS operation failed');
                } else {
                    fs.rename(oldPath, newPath, (renameErr) => {
                        if (renameErr) {
                            throw new Error(renameErr);
                        }
                    });
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await rename();