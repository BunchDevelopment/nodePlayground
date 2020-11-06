const meowButton = document.getElementById('meow');
const meowDiv = document.getElementById('insertMeowHere');

function getData(url) {
	return fetch(url, {
		method: 'GET'
	}).then(response => {
		if (!response.ok) {
			throw response;
		}
		return response;
	});
}
// My function for creating a new PUT request that includes the needed header for express.json() middleware, and stringifys the body so it reads it properly
function putData(url, data) {
	const options = {
		method: 'PUT',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	};

	if (data) {
		options.body = JSON.stringify(data);
	}
	return fetch(url, options).then(response => {
		if (!response.ok) {
			throw response;
		}
		return response;
	});
}

function updateName() {
	getData('http://localhost:8675/demoForCameron') // url and body of the PUT request
		.then(res => res.json()) // not using axios so i have to .json() the response/ axios does this for you
		.then(response => console.log(response)) // what i wanna do with the response. for now, just console.log it.
		.catch(err => console.log(err)); // catches error in case something screws up
}

function getCharacters() {
	getData('https://swapi.dev/api/people/')
		.then(res => res.json())
		.then(response => {
			const peeps = response.results.map(curr => {
				return `<p>${curr.name}</p>`;
			});
			console.log(peeps);
			meowDiv.innerHTML = peeps;
		})
		.catch(err => {
			console.log(err);
		});
}

meowButton.addEventListener('click', () => {
	getCharacters();
});
