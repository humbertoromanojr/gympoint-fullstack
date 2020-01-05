import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import Student from '../models/Student';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const student = await Student.findOne({ where: { id } });

    if (!student) {
      return res.status(401).json({ error: 'Student not exist' });
    }

    return res.json({
      student: { id },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
