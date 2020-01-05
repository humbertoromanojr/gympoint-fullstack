import { Sequelize } from 'sequelize';

import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        duration: Yup.string().required(),
        price: Yup.string().required(),
      });
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails :-(' });
      }

      const planExists = await Plan.findOne({
        where: { title: req.body.title },
      });

      if (planExists) {
        return res.status(400).json({ error: 'Plan already exist.' });
      }

      const { id, title, duration, price } = await Plan.create(req.body);

      return res.json({
        id,
        title,
        duration,
        price,
      });
    } catch (err) {
      console.log('ERROR: ', err);
    }
  }

  async update(req, res) {
    const { id: plan_id } = req.params;

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    const { id, title, duration, price } = await plan.update(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async show(req, res) {
    const { id } = req.params;

    const plan = await Plan.findByPk(id, {
      attributes: ['id', 'title', 'price', 'duration'],
    });

    return res.json(plan);
  }

  async index(req, res) {
    const plan = await Plan.findAll({
      attributes: ['id', 'title', 'price', 'duration'],
      order: Sequelize.literal('duration ASC'),
    });

    return res.json(plan);
  }

  async delete(req, res) {
    const planId = req.params.id;
    const plan = await Plan.destroy({ where: { id: planId } });

    return res.json(plan);
  }
}

export default new PlanController();
