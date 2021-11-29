/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export async function findDict(name, targetFormat, lang) {
    const response = await fetch(`/api/dictionary?name=${name}`).catch(
        (err) => {
            throw new Error(err);
        }
    );
    return response;
}

// export async function addToDb(name, lang) {}
