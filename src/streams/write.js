import * as fs from 'node:fs';
import process from 'node:process';

const write = async () => {
    const fPath = 'src/streams/files/fileToWrite.txt';
    const writeStream = fs.createWriteStream(fPath);

    process.stdin.pipe(writeStream);
};

await write();