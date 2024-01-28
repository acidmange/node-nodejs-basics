const parseEnv = () => {
    const pattern = 'RSS_';
    const envObj = process.env;
    const keys = Object.keys(envObj);

    const filtKeys = keys.filter((key) => key.startsWith(pattern));
    const filtObj = filtKeys.reduce((acc, key) => {
        return { ...acc, [key]: envObj[key] };
    }, {});

    const result = Object.entries(filtObj).map(([key, value]) => {
        return `${key}=${value}`;
    })

    console.log(...result);
};

parseEnv();