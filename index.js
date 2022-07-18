import express from 'express';
import { StatusCodes } from 'http-status-codes';
const app = express();

const PORT = 3000;
let users = [
    { id: 1, name: 'Rafael Ribeiro', age: 31 },
    { id: 2, name: 'Gabriel Custodio', age: 27 },
];

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.json());

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>')
});

app.get('/users', (request, response) => {
    return response.send(users);
});

app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
        return (user.id === Number(userId))
    })
    return response.send(user);
});

app.post('/users', (request, response) => {
    const newUser = request.body;

    users.push(newUser);

    return response.status(StatusCodes.CREATED).send(newUser);
});