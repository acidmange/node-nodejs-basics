import { createGzip } from 'node:zlib';
import * as fs from 'node:fs';

const compress = async () => {
    const path = 'src/zip/files/fileToCompress.txt';
    const newPath = 'src/zip/files/archive.gz';
    const rs = fs.createReadStream(path);
    const ws = fs.createWriteStream(newPath);
    const gzip = createGzip();

    rs.pipe(gzip).pipe(ws);
};

await compress();