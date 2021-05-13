import axios from 'axios';

//https://api.hgbrasil.com/weather?key=ff12de9f&lat=-23.682&lon=-46.875

export const key = 'ff12de9f';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;