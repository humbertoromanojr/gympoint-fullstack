/* Notes
 * https://sequelize.org/v5/variable/index.html#static-variable-Op
 */
import { Op } from 'sequelize';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exist.' });
    }

    const { id, nome, email, peso, idade, altura } = await Student.create(
      req.body
    );

    return res.json({
      id,
      nome,
      email,
      peso,
      idade,
      altura,
    });
  }

  async update(req, res) {
    const { id: studentId } = req.params;
    const { email } = req.body;

    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists' });
      }
    }

    const { id, nome, peso, idade, altura } = await student.update(req.body);

    return res.json({
      id,
      nome,
      email,
      peso,
      idade,
      altura,
    });
  }

  async index(req, res) {
    const { page = 1, q: nome = '' } = req.query;

    const students = await Student.findAll({
      where: {
        nome: {
          [Op.iLike]: `${nome}%`,
        },
      },
      attributes: ['id', 'nome', 'email', 'idade', 'altura', 'peso'],
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(students);
  }

  async show(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id, {
      attributes: ['id', 'nome', 'email', 'idade', 'altura', 'peso'],
    });

    return res.json(student);
  }

  async delete(req, res) {
    const { id: studentId } = req.params;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }

    await student.destroy({ where: { studentId } });

    return res.json(student);
  }
}

export default new StudentController();
