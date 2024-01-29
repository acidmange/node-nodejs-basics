import * as fs from 'node:fs';

const dirPath = 'src/fs/files';
const newDirPath = 'src/fs/files_copy';

const copy = async () => {
    fs.opendir(newDirPath, (err) => {
        if (err) {
            fs.mkdir(newDirPath, (err) => {
                if (err) {
                    throw new Error(err);
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    });

    fs.readdir(dirPath, { recursive: true }, (err, files) => {
        if (err)
            throw new Error('FS operation failed');
        else {
            files.forEach((file) => {
                const filePath = `${dirPath}/${file}`;
                const newFilePath = `${newDirPath}/${file}`;
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        throw new Error(err);
                    } else {
                        fs.writeFile(newFilePath, data, (err) => {
                            if (err) {
                                throw new Error(err);
                            }
                        });
                    }
                });
            });
        }
    });
};

await copy();
