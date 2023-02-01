# Simples Chat com criação de sala

Esta aplicação foi criada usando Node.js, Express, EJS e Socket.io. A peça fundamental é o Socket.io, pois é ele quem realiza a conexão entre cliente e servidor e faz com que a conexão persista. Assim, não é mais necessário fazer múltiplas requisições ao servidor, de modo que a página sequer atualiza quando usamos o Socket.io.

## Requisitos

- express
- ejs
- socket.io

## Instalação

Para instalar esta aplicação, siga os seguintes passos:

1. Clone o repositório usando o comando `git clone https://github.com/wdpedroborges/chat-com-socket`
2. Instale as dependências do projeto usando o comando `npm install`
3. Inicie o servidor usando o comando `node app.js`

## Funcionalidades

- Enviar mensagens para todos os usuários
- Enviar mensagens privadas
- Criar uma sala e enviar mensagens só para os usuários que estão na sala

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.txt) para mais detalhes.