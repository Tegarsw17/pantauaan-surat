# Gunakan base image Node.js
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependensi aplikasi
RUN npm install 

# Salin aplikasi Anda
COPY . .

# Expose port
EXPOSE 5151

# Command untuk menjalankan aplikasi

CMD [ "npm", "run", "start:dev" ]