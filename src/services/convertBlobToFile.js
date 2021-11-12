export default function convertBlobToFile(blob, fileName, fileType) {
    const newFile = new File([blob], fileName, {
        type: `application/${fileType}`,
    });
    return newFile;
}
