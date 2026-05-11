const companyInfo = {
  nombre: "NovaTech Solutions",
  sector: "Desarrollo de software",
  ubicacion: "Guayaquil, Ecuador",
  telefono: "+593 4 600 1234",
  correo: "contacto@novatech.com",
  anioFundacion: 2020,
};

const services = [
  {
    id: 1,
    nombre: "Desarrollo web",
    descripcion: "Creacion de sitios web y sistemas empresariales.",
  },
  {
    id: 2,
    nombre: "Aplicaciones moviles",
    descripcion: "Diseno y desarrollo de apps para Android e iOS.",
  },
  {
    id: 3,
    nombre: "Soporte tecnico",
    descripcion: "Mantenimiento preventivo y correctivo de sistemas.",
  },
];

const employees = [
  {
    id: 1,
    nombre: "Andrea Mena",
    cargo: "Gerente general",
  },
  {
    id: 2,
    nombre: "Luis Cedeno",
    cargo: "Desarrollador backend",
  },
  {
    id: 3,
    nombre: "Sofia Romero",
    cargo: "Disenadora UX/UI",
  },
];

const getWelcome = (req, res) => {
  res.json({
    message: "Bienvenido a la API de NovaTech Solutions",
  });
};

const getCompanyInfo = (req, res) => {
  res.json(companyInfo);
};

const getServices = (req, res) => {
  res.json(services);
};

const getEmployees = (req, res) => {
  res.json(employees);
};

module.exports = {
  getWelcome,
  getCompanyInfo,
  getServices,
  getEmployees,
};
