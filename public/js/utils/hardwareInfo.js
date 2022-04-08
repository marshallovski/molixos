let api;

fetch('http://localhost:3030/api/sys')
    .then((response) => response.json())
    .then((data) => {
        api = data;
    });



// molix.hardware = {
//     frontendUsage: api.ram
// };