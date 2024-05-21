export const copyToClipboard = (value:string) => {
    if (window?.navigator) {
        navigator.clipboard.writeText(value);
    }
};
