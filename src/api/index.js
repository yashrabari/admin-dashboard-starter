const BASE_URL = 'https://api.github.com/';




export const checkServer = async () => {
    const response = await fetch(BASE_URL + '/api/checkServer');
    const body = await response.json();
    return body;
}