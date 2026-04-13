const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const errorHandler = require('./middlewares/errorHandler');

const estudiantesRoutes = require('./routes/estudiantes.routes');
const docentesRoutes = require('./routes/docentes.routes');
const materiasRoutes = require('./routes/materias.routes');
const cursosRoutes = require('./routes/cursos.routes');
const notasRoutes = require('./routes/notas.routes');

const app = express();

app.use(cors());
app.use(express.json());

//'/health' => Es una petición de prueba
app.get('/health', (req, res) => res.json({ ok: true, status: 'UP' }));

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/docentes', docentesRoutes);
app.use('/api/materias', materiasRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/notas', notasRoutes);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`API corriendo en http://localhost:${env.port}`);
});