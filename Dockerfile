# Use a imagem base de Node.js (recomendo a versão LTS)
FROM node:16-slim

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Comando para iniciar o servidor de desenvolvimento Vite
CMD ["npm", "run", "dev", "--", "--host"]
