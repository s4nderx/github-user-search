import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
};

const BASE_URL = 'http://localhost:3000';

export const http_request = ({
    method = 'GET',
    url,
    data,
    params
}: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params
    });
};