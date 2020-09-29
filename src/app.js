import express from 'express'
import morgan from 'morgan'

import clienteRoutes from './routes/cliente.routes'
import asesorRoutes from './routes/asesor.routes'
import servicioRoutes from './routes/servicio.routes'
import reclamoRoutes from './routes/reclamo.routes'
import atencionRoutes from './routes/atencion.routes'

const app = express();

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'API conectada'})
})

app.use('/api/clientes', clienteRoutes)
app.use('/api/asesores', asesorRoutes)
app.use('/api/servicios', servicioRoutes)
app.use('/api/reclamos', reclamoRoutes)
app.use('/api/atenciones', atencionRoutes)

export default app
