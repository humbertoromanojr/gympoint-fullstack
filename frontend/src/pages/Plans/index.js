import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import NotFound from '~/components/NotFound';
import Modal from '~/components/Modal';
import api from '~/services/api';

import { Container, Content, Header } from './styles';
import { deletePlanRequest } from '~/store/modules/plan/actions';

export default function Plans() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [plans, setPlans] = useState([]);
  const [selectPlan, setSelectPlan] = useState(null);

  useEffect(() => {
    async function getAllPlans() {
      const response = await api.get('plans');

      const data = response.data.map(plan => ({
        ...plan,
      }));

      setPlans(data);
    }

    getAllPlans();
  }, []);

  useEffect(() => {
    setOpenModal(false);
  }, [plans]);

  function closeModalForm() {
    setOpenModal(false);
  }

  function openModalForm(plan) {
    setSelectPlan(plan);
    setOpenModal(true);
  }

  function handleSubmit() {
    const { id } = selectPlan;

    dispatch(deletePlanRequest(id));

    setOpenModal(false);
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciando planos</h1>
        <div>
          <Link to="/plans/new">
            <FaPlus size={14} color="#fff" />
            <label>CADASTRAR</label>
          </Link>
        </div>
      </Header>
      <Content>
        <section>
          {plans.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th width="45%">TÍTULO</th>
                  <th align="center">DURAÇÃO</th>
                  <th align="center">VALOR p/MÊS</th>
                  <th colSpan="2">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {plans.map(plan => (
                  <tr key={plan.id}>
                    <td>{plan.title}</td>
                    <td align="center">
                      {plan.duration > 1 ? `meses` : 'mês'}
                    </td>
                    <td align="center">R${plan.price}</td>
                    <td>
                      <Link to={`/plans/${plan.id}/edit`}>editar</Link>
                      <button type="button" onClick={() => openModalForm(plan)}>
                        apagar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NotFound />
          )}
        </section>
      </Content>

      {openModal && (
        <Modal>
          <p>
            Deseja deletar este Plano: <strong>{selectPlan.title}</strong>
          </p>
          <button type="button" onClick={handleSubmit}>
            Confirmar
          </button>
          <button type="button" onClick={closeModalForm}>
            Cancelar
          </button>
        </Modal>
      )}
    </Container>
  );
}
