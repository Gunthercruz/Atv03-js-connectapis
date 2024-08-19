// consulta 1
async function fetchFeriados() {
    try {
        const response = await fetch('https://brasilapi.com.br/api/feriados/v1/2024');
        const data = await response.json();
        document.getElementById('result1').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('result1').textContent = `Erro ao buscar feriados: ${error}`;
    }
}

// Consulta 2
async function fetchTaxasCambio() {
    try {
        const response = await fetch('https://brasilapi.com.br/api/taxas/v1');
        const data = await response.json();
        document.getElementById('result2').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('result2').textContent = `Erro ao buscar taxas de câmbio: ${error}`;
    }
}



async function buscarDDD() {
    const ddd = document.getElementById('dddInput').value;
    const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;

    try {
        document.getElementById('resultado').innerHTML = '';

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();

        let { state, cities } = data;
        let meuElemento = document.createElement("p");
        meuElemento.innerHTML = "Estado: " + state;
        document.getElementById('resultado').appendChild(meuElemento);

        for (let i = 0; i < cities.length; i++) {
            const element = cities[i];
            let meuElemento = document.createElement("p");
            meuElemento.innerHTML = element;
            document.getElementById('resultado').appendChild(meuElemento);
        }

    } catch (error) {
        document.getElementById('resultado').textContent = 'Erro ao buscar DDD';
        console.error('Erro:', error);
    }
}

async function buscarTipo() {
    const cep = document.getElementById('cepInput').value;
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    try {
        document.getElementById('resultadoCep').innerHTML = '';

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();

        let meuElemento = document.createElement("p");
        meuElemento.innerHTML = `Cidade: ${data.city}, Estado: ${data.state}`;
        document.getElementById('resultadoCep').appendChild(meuElemento);

    } catch (error) {
        document.getElementById('resultadoCep').textContent = 'Erro ao buscar CEP';
        console.error('Erro:', error);
    }
}





// Exercício a) Promise.race
async function fetchRace() {
    const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
    const api2 = fetch('https://swapi.dev/api/people/1/');
    const api3 = fetch('https://dog.ceo/api/breeds/image/random');

    try {
        const result = await Promise.race([api1, api2, api3]);
        const data = await result.json();
        document.getElementById('raceResult').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('raceResult').textContent = `Erro: ${error}`;
    }
}

// Exercício b) Promise.all
async function fetchAll() {
    const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
    const api2 = fetch('https://swapi.dev/api/people/1/');
    const api3 = fetch('https://dog.ceo/api/breeds/image/random');

    try {
        const results = await Promise.all([api1, api2, api3]);
        const data = await Promise.all(results.map(res => res.json()));
        document.getElementById('allResult').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('allResult').textContent = `Erro: ${error}`;
    }
}

