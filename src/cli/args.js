const parseArgs = () => {
    const argArr = process.argv;

    if (argArr.length > 2) {
        const Args = argArr.slice(2);
        const keys = Args.filter((item) => item.startsWith('--'))
            .map((item) => item.slice(2));
        const values = Args.filter((item) => !item.startsWith('--'));
        const result = keys.reduce((acc, item, ind) => {
            return [...acc, `${item} is ${values[ind]}`];
        }, [])
            .join(', ');

        console.log(result);
    }
};

parseArgs();