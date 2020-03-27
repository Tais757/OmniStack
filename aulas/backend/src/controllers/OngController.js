const crypto = require('crypto'); /**Criar uma string/texto aleatório */

const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs); 
    },
    
    async create(request, response) {
      const {nome, email, whatsapp, city, uf} = request.body;

      const id = crypto.randomBytes(4).toString('HEX'); /**Gera 4 bytes de caracteres aleatórios e converte em uma string hexadecimal */

      await connection('ongs').insert({
         id,
         nome,
         email,
         whatsapp,
         city,
         uf,
       })

    return response.json({ id });
    }
};