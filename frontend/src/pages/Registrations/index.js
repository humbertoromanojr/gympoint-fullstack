import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlus, FaCheckCircle } from 'react-icons/fa';

import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import NotFound from '~/components/NotFound';
import Modal from '~/components/Modal';
import api from '~/services/api';

import { Container, Header } from './styles';
import {
  getRegistrationsRequest,
  deleteRegistrationRequest,
} from '~/store/modules/registrations/actions';

export default function Registrations() {
  const dispatch = useDispatch();

  const [registrations, setRegistrations] = useState([]);
  const [selectRegistration, setSelectRegistration] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRegistrations() {
      const response = await api.get('registrations');

      const data = response.data.map(registration => ({
        ...registration,
        startDateFormatted: format(
          parseISO(registration.start_date),
          "dd 'de' MMMM 'de' Y",
          {
            locale: ptBR,
          }
        ),
        endDateFormatted: format(
          parseISO(registration.end_date),
          "dd 'de' MMMM 'de' Y",
          {
            locale: ptBR,
          }
        ),
      }));

      setRegistrations(data);
    }

    getRegistrations();
  }, []);

  useEffect(() => {
    dispatch(getRegistrationsRequest());
  }, [dispatch]);

  useEffect(() => {
    setOpenModal(false);
  }, [registrations]);

  function closeModalForm() {
    setOpenModal(false);
  }

  function openModalForm(registration) {
    setSelectRegistration(registration);
    setOpenModal(true);
  }

  function handleSubmit() {
    const { id } = selectRegistration;

    dispatch(deleteRegistrationRequest(id));

    setLoading(true);

    setOpenModal(false);
  }

  if (loading) {
    return <div />;
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciando matrículas</h1>
        <Link to="/registrations/new">
          <FaPlus size={14} color="#fff" />
          <label>CADASTRAR</label>
        </Link>
      </Header>

      <section>
        {registrations.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th align="center">PLANO</th>
                <th align="center">INÍCIO</th>
                <th align="center">TÉRMINO</th>
                <th align="center">ATIVA</th>
                <th colSpan="2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map(registration => (
                <tr key={registration.id}>
                  <td>{registration.student.nome}</td>
                  <td align="center">{registration.plan.title}</td>
                  <td align="center">{registration.startDateFormatted}</td>
                  <td align="center">{registration.endDateFormatted}</td>
                  <td align="center">
                    <FaCheckCircle
                      size={20}
                      color={registration.active ? '#42cb59' : '#ddd'}
                    />
                  </td>
                  <td>
                    <Link to={`/registrations/${registration.id}/edit`}>
                      editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => openModalForm(registration)}
                    >
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

      {openModal && (
        <Modal>
          <p>
            Deseja deletar a matrícula:{' '}
            <strong>#{selectRegistration.id}</strong>?
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
