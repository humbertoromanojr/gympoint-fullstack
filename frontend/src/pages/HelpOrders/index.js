import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  updateHelpOrderRequest,
  getHelpOrdersRequest,
} from '~/store/modules/helpOrders/actions';

import Modal from '~/components/Modal';
import ContentHeader from '~/components/ContentHeader';
import NotFound from '~/components/NotFound';

import { Container } from './styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('A resposta é obrigatória'),
});

export default function HelpOrders() {
  const dispatch = useDispatch();
  const helpOrders = useSelector(state => state.helpOrders.data);

  const [openModal, setOpenModal] = useState(true);
  const [selectedHelpOrder, setSelectedHelpOrder] = useState(false);

  useEffect(() => {
    dispatch(getHelpOrdersRequest());
  }, [dispatch]);

  useEffect(() => {
    setOpenModal(false);
  }, [helpOrders]);

  function handleOpenModal(helpOrder) {
    setSelectedHelpOrder(helpOrder);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleSubmit({ answer }) {
    dispatch(updateHelpOrderRequest(selectedHelpOrder.id, answer));
  }

  return (
    <Container>
      <ContentHeader title="Pedidos de auxílio" />

      <section>
        {helpOrders.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {helpOrders.map(helpOrder => (
                <tr key={helpOrder.id}>
                  <td>{helpOrder.student.nome}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(helpOrder)}
                    >
                      responder
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
        <Modal size="big">
          <Form schema={schema} onSubmit={handleSubmit}>
            <div>
              <label>Pergunta do aluno</label>
              <button type="button" onClick={() => handleCloseModal()}>
                X
              </button>
            </div>
            <p>{selectedHelpOrder.question}</p>

            <label>Resposta da Gympoint</label>
            <Input name="answer" multiline placeholder="Escreva sua resposta" />

            <button type="submit">Responder ao aluno</button>
          </Form>
        </Modal>
      )}
    </Container>
  );
}
