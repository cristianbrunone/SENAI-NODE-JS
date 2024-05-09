import Express from 'Express';

const app = Express();

// Array de carros com nome, preço e marca
let carros = [
  { nome: 'Fiesta', preco: 25000, marca: 'Ford' },
  { nome: 'Saveiro', preco: 40000, marca: 'Volkswagen' },
  { nome: 'Onix', preco: 35000, marca: 'Chevrolet' },
  { nome: 'Cruze', preco: 60000, marca: 'Chevrolet' },
  { nome: 'Gallardo', preco: 200000, marca: 'Lamborghini' },
  { nome: 'Diablo', preco: 250000, marca: 'Lamborghini' }
];

app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/cars', (req, res) =>
  res.json(carros)
);

app.post('/cars/add', (req, res) => {
  const novoCarro = req.body;
  carros.push(novoCarro);
  return res.json(carros);
});

app.put('/cars/update/:id', (req, res) => {
  const id = req.params.id;
  const novosDadosCarro = req.body;
  carros[id] = { ...carros[id], ...novosDadosCarro };
  return res.json(carros[id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    const id = req.params.id;
    const carroExcluido = carros.splice(id, 1)[0]; // Remove o carro e armazena o carro excluído
  
    if (carroExcluido) {
      return res.send(`Carro "${carroExcluido.nome}" excluído com sucesso.`);
    } else {
      return res.status(404).send('Carro não encontrado.');
    }
  });

app.listen(3000, () =>
  console.log('Servidor iniciado na porta 3000')
);
