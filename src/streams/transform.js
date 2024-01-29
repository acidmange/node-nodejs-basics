import process, { exit, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split("").reverse().join("") + '\n\n');
        },
      });
    
    process.stdin.on("data", data => {
        data = data.toString();
    })
    .pipe(reverse).pipe(stdout);
};

await transform();