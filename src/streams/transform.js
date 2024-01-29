import process from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join("") + '\n\n');
        },
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();