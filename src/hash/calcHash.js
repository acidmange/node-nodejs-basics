import * as fs from 'node:fs';
import crypto from 'node:crypto';

const calculateHash = async () => {
    const txtPath = 'src/hash/files/fileToCalculateHashFor.txt';
    let stream = fs.createReadStream(txtPath);
    let hash = crypto.createHash('sha256');

    stream.on('readable', () => {
        const data = stream.read();
        if (data)
          hash.update(data);
        else {
          console.log(`${hash.digest('hex')}`);
        }
      });
};

await calculateHash();