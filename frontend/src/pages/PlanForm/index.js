import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import {
  createPlanRequest,
  updatePlanRequest,
} from '~/store/modules/plan/actions';
import ContentHeader from '~/components/ContentHeader';
import { Container, Content, ContentForm } from './styles';
import { formatPrice } from '~/components/Format';

const schema = Yup.object().shape({
  title: Yup.string().required('Título Obrigatório'),
  duration: Yup.string().required('Duração é Obrigatório'),
  price: Yup.string().required('Preço é Obrigatorio'),
});

export default function PlanForm({ match }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const [totalDuration, setTotalDuration] = useState(1);
  const [priceConfig, setPriceConfig] = useState(0);

  useEffect(() => {
    if (!match.params.id) return;

    async function getPlan(id) {
      setLoading(true);

      const response = await api.get(`plans/${parseInt(id, 10)}`);
      const { price, duration } = response.data;

      setPlan(response.data);
      setPriceConfig(price);
      setTotalDuration(duration);

      setLoading(false);
    }

    getPlan(match.params.id);
  }, [match.params.id]);

  const headerTitle = useMemo(() => {
    return match.params.id ? 'Edição de plano' : 'Cadastro de plano';
  }, [match.params.id]);

  const totalPrice = useMemo(() => formatPrice(priceConfig * totalDuration), [
    priceConfig,
    totalDuration,
  ]);

  function handleCreate({ title, duration, price }, { resetForm }) {
    dispatch(createPlanRequest({ title, duration, price }));
    resetForm();
  }

  function handleUpdate({ title, duration, price }) {
    const { id } = match.params;

    dispatch(updatePlanRequest(id, { title, duration, price }));
  }

  if (loading) {
    return <div />;
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={plan}
        onSubmit={match.params.id ? handleUpdate : handleCreate}
      >
        <ContentHeader title={headerTitle}>
          <Link to="/plans">
            <FaChevronLeft size={12} color="#fff" />
            <label>voltar</label>
          </Link>

          <button type="submit">
            <FaCheck size={14} color="#fff" />
            <label>salvar</label>
          </button>
        </ContentHeader>

        <Content>
          <section>
            <label>Título do Plano</label>
            <Input name="title" />

            <ContentForm>
              <div>
                <label>DURAÇÃO (em meses)</label>
                <Input
                  type="number"
                  name="duration"
                  value={totalDuration}
                  onChange={e => setTotalDuration(e.target.value)}
                />
              </div>

              <div>
                <label>PREÇO MENSAL</label>
                <Input
                  type="number"
                  name="price"
                  step="0.01"
                  min="0.00"
                  value={priceConfig}
                  onChange={e => setPriceConfig(e.target.value)}
                />
              </div>

              <div>
                <label>PREÇO TOTAL</label>
                <Input name="totalPrice" value={totalPrice} disabled />
              </div>
            </ContentForm>
          </section>
        </Content>
      </Form>
    </Container>
  );
}

PlanForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
