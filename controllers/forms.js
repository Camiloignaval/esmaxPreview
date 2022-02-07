/* eslint-disable no-sequences */
/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
const { selectPlantas, selectEstanques, selectProductos, selectEmpleados, factor13, volNat, rangoEstanque } = require('../database/querys')

const traerPlantas = async (req, res) => {
  try {
    const datos = await selectPlantas(false)
    res.status(200).json({
      datos,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}

const traerEstanques = async (req, res) => {
  try {
    const datos = await selectEstanques(false)
    res.status(200).json({
      datos,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}

const traerProductos = async (req, res) => {
  try {
    const datos = await selectProductos(false)
    res.status(200).json({
      datos,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}

const traerEmpleados = async (req, res) => {
  try {
    const datos = await selectEmpleados(false)
    res.status(200).json({
      datos,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}
const factor13a = async (req, res) => {
  const { api60 } = req.body
  try {
    const fac13 = await factor13(api60)
    res.status(200).json({
      fac13,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}
const volumen = async (req, res) => {
  const { idPlanta, numeroEstanque, altura } = req.body
  console.log(idPlanta, numeroEstanque, altura)
  try {
    const volumen = await volNat(numeroEstanque, idPlanta, altura)
    console.log(volumen)
    res.status(200).json({
      volumen,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}
const rangeEstanque = async (req, res) => {
  const { idPlanta } = req.body
  try {
    const todos = await rangoEstanque(idPlanta)
    const medio = (Object.entries(todos.reduce((a, { numero_estanque, est_altura }) => (a[numero_estanque] = (a[numero_estanque] || '') + String(est_altura + ' '), a), {}))).map((e) => { const obj = {}; obj[e[0]] = [Math.min(...e[1].trim().split(' ').map((e) => Number(e))), Math.max(...e[1].trim().split(' ').map((e) => Number(e)))]; return obj })

    res.status(200).json({
      medio,
      msg: 'Solicitudes cargadas con exito',
      ok: true
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      ok: false
    })
  }
}

module.exports = {
  traerPlantas,
  traerProductos,
  traerEmpleados,
  traerEstanques,
  factor13a,
  volumen,
  rangeEstanque
}
