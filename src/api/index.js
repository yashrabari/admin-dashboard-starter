import axios from 'axios'


const BASE_URL = process.env.PROD ? 'https://api.e-reads.in' : 'http://178.18.250.242:5001';




export const CheckServer = async () => {
    const response = await axios.get(BASE_URL + '/test-server');
    return response;
}