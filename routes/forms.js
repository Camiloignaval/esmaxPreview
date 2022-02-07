const { Router } = require('express')
const { traerPlantas, traerEstanques, traerProductos, traerEmpleados, factor13a, volumen, rangeEstanque } = require('../controllers/forms')

const router = Router()

// BASE /api/forms/

// example
router.get('/plantas', traerPlantas)
router.get('/estanques', traerEstanques)
router.get('/productos', traerProductos)
router.get('/empleados', traerEmpleados)
router.post('/factor13', factor13a)
router.post('/volumen', volumen)
router.post('/calibracion', rangeEstanque)

module.exports = router
