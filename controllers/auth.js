
const login = async (req, res) => {
//   const { rut: rutReq, password } = req.body
//   try {
//     const resp = await buscarUsuarioPorRutdeClientes([rutReq])
//     const {
//       contraseña: contraseñaBBDD,
//       id_usuario,
//       nombre,
//       apellido,
//       fecha_nacimiento,
//       email,
//       rut,
//       id_cargo,
//       foto,
//       telefono,
//       solicitud_revisada,
//       fecha_baja_usuario,
//       bloqueado,
//       fecha_rechazo_usuario
//     } = resp[0]
//     const comprobacion = bcrypt.compareSync(password, contraseñaBBDD)
//     // Si solicitud aun no ha sido aprobada
//     if (!solicitud_revisada) {
//       return res.status(400).json({
//         ok: false,
//         msg: 'Tu solicitud aun no ha sido aprobada'
//       })
//       // Si cliente fue rechazado
//     } else if (solicitud_revisada && fecha_rechazo_usuario !== null) {
//       return res.status(400).json({
//         ok: false,
//         msg: 'Tu solicitud ha sido rechazada, contacta a un adminsitrador'
//       })
//       // Si usuario se dio de baja, o fue bloqueado
//     } else if (fecha_baja_usuario !== null || bloqueado) {
//       return res.status(400).json({
//         ok: false,
//         msg: 'Tu cuenta no esta activa, porfavor contacta a un administrador'
//       })
//     }
//     // Si comprobacion de credenciales han sido correctas
//     if (comprobacion) {
//       const token = await generarJWT(id_usuario, id_cargo, rut)
//       res.status(200).json({
//         ok: true,
//         token,
//         data: {
//           id_usuario,
//           nombre,
//           apellido,
//           fecha_nacimiento,
//           email,
//           rut,
//           id_cargo,
//           foto,
//           telefono
//         }
//       })
//       // Si credenciales son incorrectas
//     } else {
//       res.status(400).json({
//         ok: false,
//         msg: 'Credenciales incorrectas'
//       })
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(400).json({
//       ok: false,
//       msg: 'Ha ocurrido un error, porfavor contactar con administración'
//     })
//   }
}

module.exports = {
  login
}
