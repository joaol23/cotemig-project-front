export function chunk(array: Array<any>, size: number) {
    return array.reduce((chunks, item, i) => {
        if (i % size === 0) {
            chunks.push([item]);
        } else {
            chunks[chunks.length - 1].push(item);
        }
        return chunks;
    }, []);
}