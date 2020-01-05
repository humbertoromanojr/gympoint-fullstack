import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { parseISO } from 'date-fns';

import api from '~/services/api';

import {
  createStudentRequest,
  updateStudentRequest,
} from '~/store/modules/students/actions';
import ContentHeader from '~/components/ContentHeader';
import { Container, Content, ContentForm } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome Obrigatório'),
  email: Yup.string()
    .email()
    .required('Email Obrigatório'),
  idade: Yup.string().required('Data de nascimento é Obrigatório'),
  peso: Yup.string().required('Peso Obrigatorio'),
  altura: Yup.string().required('Altura Obrigatória'),
});

export default function StudentForm({ match }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [idade, setIdade] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (!match.params.id) return;

    async function getStudent(id) {
      setLoading(true);

      const response = await api.get(`students/${parseInt(id, 10)}`);
      const { idade: studentIdade } = response.data;

      setStudent(response.data);
      setIdade(parseISO(studentIdade));

      setLoading(false);
    }

    getStudent(match.params.id);
  }, [match.params.id]);

  const headerTitle = useMemo(() => {
    return match.params.id ? 'Edição de aluno' : 'Cadastro de aluno';
  }, [match.params.id]);

  function handleCreate(data, { resetForm }) {
    dispatch(createStudentRequest(data));
    resetForm();
  }

  function handleUpdate(data) {
    const { id } = match.params;

    dispatch(updateStudentRequest(id, data));
  }

  if (loading) {
    return <div />;
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={student}
        onSubmit={match.params.id ? handleUpdate : handleCreate}
      >
        <ContentHeader title={headerTitle}>
          <Link to="/dashboard">
            <FaChevronLeft size={14} color="#fff" />
            <label>voltar</label>
          </Link>

          <button type="submit">
            <FaCheck size={14} color="#fff" />
            <label>salvar</label>
          </button>
        </ContentHeader>

        <Content>
          <section>
            <label>Nome completo</label>
            <Input name="nome" placeholder="John Doe" />

            <label>Endereço de E-mail</label>
            <Input name="email" placeholder="exemplo@email.com" />

            <ContentForm>
              <div>
                <label>IDADE</label>
                <Input
                  name="idade"
                  selected={idade}
                  onChange={date => setIdade(date)}
                />
              </div>

              <div>
                <label>Peso (em Kg)</label>
                <Input name="peso" />
              </div>

              <div>
                <label>Altura</label>
                <Input name="altura" />
              </div>
            </ContentForm>
          </section>
        </Content>
      </Form>
    </Container>
  );
}

StudentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
