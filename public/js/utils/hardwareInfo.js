molix.hardware = {
    memoryUsage: fetch('http://localhost:3030/api/sys')
        .then((response) => response.json())
        .then((data) => {
            return data.memoryUsage
        })

};