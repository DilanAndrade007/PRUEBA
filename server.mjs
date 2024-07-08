import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postmark from 'postmark';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY); // Tu API Key de Postmark

const mongoClient = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let verificationCodes = {};

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    await mongoClient.connect();
    const database = mongoClient.db('test'); // Cambia 'test' por el nombre de tu base de datos
    const collection = database.collection('users'); // Cambia 'users' por el nombre de tu colección
    const user = await collection.findOne({ email });

    if (user) {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiration = new Date(Date.now() + 3600000);

      verificationCodes[email] = { code, expiration };

      await client.sendEmail({
        From: 'andres.zambrano03@epn.edu.ec', // Reemplaza con tu correo
        To: email,
        Subject: 'Código de verificación',
        TextBody: `Tu código de verificación es: ${code}`,
        HtmlBody: `<p>Tu código de verificación es: <b>${code}</b></p>`
      });
      res.send('Correo enviado');
    } else {
      res.status(404).send('Correo no encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar la solicitud');
  } finally {
    await mongoClient.close();
  }
});

app.post('/verify-code', async (req, res) => {
  const { email, code, newPassword } = req.body;

  const verificationData = verificationCodes[email];

  if (!verificationData || verificationData.code !== code || verificationData.expiration < new Date()) {
    return res.status(400).send('Código de verificación incorrecto o expirado');
  }

  try {
    await mongoClient.connect();
    const database = mongoClient.db('test');
    const collection = database.collection('users');
    const result = await collection.updateOne(
      { email },
      { $set: { password: newPassword, updatedAt: new Date() } }
    );

    if (result.matchedCount === 1) {
      res.send('Contraseña cambiada con éxito');
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar la solicitud');
  } finally {
    await mongoClient.close();
  }

  delete verificationCodes[email];
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
