export default function readUploadedFile(inputFile) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(inputFile);

        reader.onerror = () => {
            reject(console.log('error parsing file'));
        };
        reader.onload = () => {
            resolve(reader.result);
        };
    });
}
