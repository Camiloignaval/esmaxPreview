const { Pool } = require('pg')

const pool = new Pool({
  user: 'tellocmc_felipe_galarce',
  host: 'localhost',
  password: 'Alastriste18',
  database: 'tellocmc_Esmax',
  port: 5432
})

// example:
const selectPlantas = async () => {
  const query = 'select * from public.plantas'
  try {
    const res = await pool.query(query)
    console.log(res)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}

const selectEstanques = async () => {
  const query = 'select * from estanques'

  try {
    const res = await pool.query(query)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}

const selectProductos = async () => {
  const query = 'select * from productos'

  try {
    const res = await pool.query(query)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}

const selectEmpleados = async () => {
  const query = 'select * from empleados'
  try {
    const res = await pool.query(query)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}

const factor13 = async (input) => {
  const query = `select Factor13 from factor13 where API60 = ${input}`

  try {
    const res = await pool.query(query)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}

const volNat = async (numeroEstanque, idPlanta, altura) => {
  const query = `select est_volumen from calibracion where numero_estanque = ${numeroEstanque} and id_planta=${idPlanta} and est_altura=${altura}`
  try {
    const res = await pool.query(query)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}
const rangoEstanque = async (idPlanta) => {
  const query = `select est_altura, numero_estanque from calibracion where id_planta=${idPlanta}`
  try {
    const res = await pool.query(query)
    return res.rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  selectPlantas,
  selectEstanques,
  selectProductos,
  selectEmpleados,
  factor13,
  volNat,
  rangoEstanque
}
