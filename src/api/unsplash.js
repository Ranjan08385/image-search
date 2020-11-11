import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID fGnRi5sjMg0myU0vwphiAJe2a2orCA09MzHnGJLTWDs"
    }
});