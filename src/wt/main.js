import { Worker } from 'node:worker_threads';
import { resolve } from 'path';
import os from 'os';

const performCalculations = async () => {
    const relPath = 'src/wt/worker.js';
    const absolutePath = resolve(relPath);
    const cores = os.cpus();

    const results = [];

    const promises = cores.map((_value, index) => {
        const worker = new Worker(absolutePath, {
            workerData: {
                value: 10 + index,
            },
        });

        worker.on('message', (result) => {
            results[index] = result;
        });

        worker.on("error", (_err) => {
            result[index] = null;
        });

        return new Promise((resolve) => {
            worker.on('message', (result) => {
                resolve(result);
            });
        });
    });

    await Promise.all(promises);

    const newRes = results.reduce((acc, value) => {
        const status = (value !== null) ? 'resolved' : 'error';
        const data = value;
        const object = { status: [status], data: [data] };
        return [...acc, object];
    }, []);

    console.log(newRes);
};

await performCalculations();