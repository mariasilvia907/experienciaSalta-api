// Levantar el server con nodemon en el index, para asi poder usar la API !

require('./db/mongoose');
const express = require('express');
const app = express();
const port = 3001;
const Experience = require('./model/experiences');
const blogNote = require('./model/blognotes')

app.use(express.json());

// Read-- Mostrar todas las experiencias
app.get('/experiences', (req, res) => {
    Experience.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Experiencia a la DB
app.post('/experience', (req, res) => {
    const experience = new Experience(req.body)
    experience.save()
        .then(() => {
            res.status(201).send(experience);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// Update
// app.update()

// Delete
// app.delete()

// Read-- Mostrar todas las Notas de Blog
app.get('/blognotes', (req, res) => {
    blogNote.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Nota de Blog a la DB
app.post('/blognote', (req, res) => {
    const blognote = new blogNote(req.body)
    blognote.save()
        .then(() => {
            res.status(201).send(blognote);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});

