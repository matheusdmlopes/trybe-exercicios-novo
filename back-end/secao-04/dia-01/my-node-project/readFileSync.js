const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
    const data = fs.readFileSync(nomeDoArquivo, 'utf8');
    console.log(data);
} catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
}

const fs2 = require('fs').promises

async function main() {
    try {
        const data = await fs2.readFile(nomeDoArquivo, 'utf-8')
        console.log(data);
    } catch (e) {
        console.log('erro ao ler o arquivo:', e.message)
    }
}

main();