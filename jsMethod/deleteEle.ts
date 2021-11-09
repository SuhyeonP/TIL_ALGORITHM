
export const deleteCommand = (arr: any, some: string, arg: string) => {
    const itemToFind = arr.find((item: any) => item[arg] === some);
    const idx = arr.indexOf(itemToFind);

    if (idx > -1) {
        arr.splice(idx, 1);
    }
    return arr;
};