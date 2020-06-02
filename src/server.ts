import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Fabricio',
        'Roberta',
        'Ana',
        'Luck'
    ]);
});

app.listen(3333);