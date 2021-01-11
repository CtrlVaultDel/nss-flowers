let retailers = [];

export const getRetailers = () => {
    return fetch('http://localhost:8088/retailers')
    .then(response => response.json())
    .then(parsedRetailers => retailers = parsedRetailers);
};

export const useRetailers = () => retailers.slice();