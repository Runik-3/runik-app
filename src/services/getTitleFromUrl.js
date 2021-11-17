export default function getTitleFromUrl(urlString) {
    // https://malazan.fandom.com/
    const domain = urlString.split('//');
    const periodSeparated = domain[1].split('.');
    const title = periodSeparated[0];
    return title;
}
