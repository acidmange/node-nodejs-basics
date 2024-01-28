import * as fs from 'node:fs';

const content = 'I am fresh and young';
const path = 'src/fs/files/fresh.txt';

const create = async () => {
    fs.stat(path, (extErr = null, stats) => {
        if (!stats) {
            fs.writeFile(path, content, intErr => {
                if (intErr) {
                    throw new Error(intErr);
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();