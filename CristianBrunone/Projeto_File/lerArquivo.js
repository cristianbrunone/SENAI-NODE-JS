var fs = require('fs');

fs.writeFile('novo.txt', 'Olá NodeJS! UNISENAI 2023', function (err) {
    if (err) throw err;

    console.log('Conteudo do arquivo atualizado!!');
});

//Renomear o arquivo
fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    
    console.log('Arquivo renomeado!');
});

//Deletar o arquivo
fs.unlink('ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    
    console.log('Arquivo deletado');
});

// Criar um novo arquivo
fs.writeFile('NovoArquivo.txt', 'Conteúdo do novo arquivo.', function (err) {
    if (err) throw err;
    console.log('Novo arquivo criado!');
});