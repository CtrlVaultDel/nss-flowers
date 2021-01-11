let flowers = [];

export const getFlowers = () => {
    return fetch('http://localhost:8088/flowers')
    .then(response => response.json())
    .then(parsedFlowers => flowers = parsedFlowers);
};

export const useFlowers = () => flowers.slice();