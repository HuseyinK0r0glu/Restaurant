import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization : 
        'Bearer T97YMWlFK4HJfVk5WZSQIJC3t3U3E-2FVAir-rsiHod3QAwhNww1sM4sx5hIuIycDIXTJtqdssEq0YqW9aM_RlV9dk3lF0ee2d47FOJjXowQDJ4dIkDdRimq9AozZnYx',
    }
});