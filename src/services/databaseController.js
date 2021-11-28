/* eslint-disable import/prefer-default-export */
export async function existsInDb(name, lang) {
    const response = await fetch(
        `/api/dictionary?name=${name}&lang=${lang}`
    ).catch((err) => {
        throw new Error(err);
    });
    return response;
}

// export async function addToDb(name, lang) {}
