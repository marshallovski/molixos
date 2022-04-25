let api;

fetch('http://localhost:3030/api/sys')
    .then((response) => response.json())
    .then((data) => {
    molix.hardware = {
    	frontendUsage: data.ram.frontendUsage
	};
    });

