import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
   const [rows] = await pool.query("SELECT * FROM employee");
   res.json(rows);
};

export const getEmployee = async (req, res) => {
   const id = req.params.id;
   const [rows] = await pool.query("SELECT * FROM employee where id =?", [id]);
   if (rows.length <= 0)
      return res.status(404).json({ message: "no encontrador" });
   res.json(rows[0]);
};
export const createEmployees = async (req, res) => {
   const { name, salary } = req.body;
   const [row] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES(?,?)",
      [name, salary]
   );
   //res.send({ row });
   res.send({
      id: row.insertId,
      name,
      salary,
   });
};

export const updateEmployees = (req, res) => {
   res.send("actualizando empelados");
};

export const deleteEmployees = (req, res) => {
   res.send("eliminando empelados");
};
