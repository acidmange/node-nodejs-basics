import * as fs from 'node:fs';
import process from 'node:process';

const read = async () => {
    const fPath = 'src/streams/files/fileToRead.txt';
    let stream = fs.createReadStream(fPath);
    const chunks = [];

    stream.on('readable', () => {
        let chunk;
        while (null !== (chunk = stream.read())) {
            chunks.push(chunk);
        }
    });

    stream.on('end', () => {
        const content = chunks.join('');
        process.stdout.write(content + '\n');
    });
};

await read();