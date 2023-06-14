const usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ControllerCuenta = {
  CargarVistaRegistro: async (req, res) => {
    res.render("register");
  },
  CargarVistaLogin: async (req, res) => {
    res.render("login");
  },
  LogearUsuario: async (req, res) => {
    //
    const datosLogeo = req.body;
    console.log(datosLogeo);
    let user = await usuario.findOne({ where: { usuario: datosLogeo.username } });

    if (user == null) {
      res.json({ token: null , resultado: "No exite este usuario" })
    } else {
      let pass = await bcrypt.compare(datosLogeo.password, user.contraseña);
      if (!pass) {
        res.json({ token: null , resultado: "Contraseña incorrecta" });
      } else {
        //generar token
        const token = jwt.sign({ LoginUsuario: datosLogeo.username }, "SegmentationFault", { expiresIn: "10h" });

        res.json({ token: token, resultado : "A inicado sesión" })
        //  res.setHeader("Authorization", token).render("login", { resultado: "A iniciado sesión" });

        //   res.render("login", { resultado: "A iniciado sesión" });

        /*    res.header("Auth-token", token).json({
          error: null,
          data: { token },
        }); */
      }
    }

    //
    /* res.render("login", { resultado: "A iniciado sesión" }); */
  },
  RegistrarUsuario: async (req, res) => {
    const datosRegistro = req.body;

    flag = true;

    if (!datosRegistro.username.match("^@[a-zA-Z0-9\\-_]*$") || datosRegistro.username == "") {
      flag = false;
    }
    if (!datosRegistro.password.match("^[a-zA-Z0-9]{6,10}$") || datosRegistro.password == "") {
      flag = false;
    }
    // return flag;
    console.log(datosRegistro.username);
    console.log(datosRegistro.password);
    console.log(datosRegistro);
    if (flag) {
      try {
        const salt = await bcrypt.genSalt(10);
        datosRegistro.password = await bcrypt.hash(datosRegistro.password, salt);
        console.log(datosRegistro.password);
        await usuario.create({ usuario: datosRegistro.username, contraseña: datosRegistro.password });

        res.render("register", { resultado: "registrado" });
      } catch (error) {
        res.render("register", { resultado: "Error en el registro" });
      }
    } else {
      res.render("register", { resultado: "Error en el registro" });
    }
  },
};

module.exports = ControllerCuenta;
