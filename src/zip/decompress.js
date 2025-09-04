import * as fs from 'node:fs';
import * as zlib from 'node:zlib';

const decompress = async () => {
    const path = 'src/zip/files/archive.gz';
    const newPath = 'src/zip/files/fileToCompress.txt';
    const rs = fs.createReadStream(path);
    const ws = fs.createWriteStream(newPath);
    const unzip = zlib.createUnzip();

    rs.pipe(unzip).pipe(ws);
};

await decompress();