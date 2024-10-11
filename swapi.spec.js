const request = require('supertest') 

test ('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async () =>{

    const resposta = await request('https://swapi.dev').get('/api/people/1');
    //https://swapi.dev/api             https://swapi.dev/api/people/1
    //  /people/3
    //console.log(`Status: ${resposta.status}`);

    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Luke Skywalker')

   // console.log(resposta.status)
    //console.log(resposta.body)
});

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async () =>{

    const resposta = await request('https://swapi.dev').get('/api/people/9999');

    //console.log(resposta.status);
    //console.log(resposta.body)
    expect(resposta.status).toBe(404);
    expect(resposta.body.detail).toBe('Not found');
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    });
});