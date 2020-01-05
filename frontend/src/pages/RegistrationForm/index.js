import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { format, parseISO, addMonths } from 'date-fns';

import api from '~/services/api';
import Select from '~/components/Select';
import DatePicker from '~/components/DatePicker';
import ContentHeader from '~/components/ContentHeader';
import { formatPrice } from '~/components/Format';

import {
  createRegistrationRequest,
  updateRegistrationRequest,
} from '~/store/modules/registrations/actions';

import { Container, Content, ContentForm } from './styles';

const schema = Yup.object().shape({
  student_id: Yup.number().required('O Aluno é Obrigatório'),
  plan_id: Yup.number().required('O Plano é Obrigatório'),
  start_date: Yup.date().required('Data inicial é obrigatória'),
});

export default function RegistrationForm({ match }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [registration, setRegistration] = useState(null);

  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }

    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }

    loadPlans();
    loadStudents();
  }, []);

  useEffect(() => {
    if (!match.params.id || !plans.length || !students.length) return;

    async function loadRegistration(id) {
      setLoading(true);

      const response = await api.get(`registrations/${parseInt(id, 10)}`);
      const { plan, student, start_date } = response.data;

      const planSelected = plans.find(item => item.id === plan.id);
      const studentSelected = students.find(item => item.id === student.id);

      setRegistration({
        ...response.data,
        student_id: student,
        plan_id: plan,
      });
      setSelectedStudent(studentSelected);
      setSelectedPlan(planSelected);
      setStartDate(parseISO(start_date));

      setLoading(false);
    }

    loadRegistration(match.params.id);
  }, [match.params.id, plans, students]);

  const headerTitle = useMemo(() => {
    return match.params.id ? 'Edição de matrícula' : 'Cadastro de Matrícula';
  }, [match.params.id]);

  const endDate = useMemo(() => {
    if (!startDate || !selectedPlan) return '';

    return format(addMonths(startDate, selectedPlan.duration), 'dd/MM/yyy');
  }, [selectedPlan, startDate]);

  const totalPrice = useMemo(() => {
    if (!selectedPlan) return '';

    return formatPrice(selectedPlan.duration * selectedPlan.price);
  }, [selectedPlan]);

  function handleCreate(data, { resetForm }) {
    dispatch(createRegistrationRequest(data));
    resetForm();
  }

  function handleUpdate(data) {
    const { id } = match.params;

    dispatch(updateRegistrationRequest(id, data));
  }

  if (loading) {
    return <div />;
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={registration}
        onSubmit={match.params.id ? handleUpdate : handleCreate}
      >
        <ContentHeader title={headerTitle}>
          <Link to="/registrations">
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
            <label>Aluno</label>
            <Select
              name="student_id"
              placeholder="Buscar aluno"
              options={students}
              getOptionLabel={option => option.nome}
              onChange={value => setSelectedStudent(value)}
              value={selectedStudent}
            />

            <ContentForm>
              <div>
                <label>PLANO</label>
                <Select
                  name="plan_id"
                  placeholder="Selecione o plano"
                  options={plans}
                  getOptionLabel={option => option.title}
                  onChange={value => setSelectedPlan(value)}
                  value={selectedPlan}
                />
              </div>

              <div>
                <label>DATA INÍCIO</label>
                <DatePicker
                  name="start_date"
                  placeholder="Escolha a data"
                  dateFormat="dd/MM/yyyy"
                  onChange={date => setStartDate(date)}
                  selected={startDate}
                />
              </div>

              <div>
                <label>DATA DE TÉRMINO</label>
                <Input name="endDate" value={endDate} disabled />
              </div>

              <div>
                <label>VALOR FINAL</label>
                <Input name="totalPrice" value={totalPrice} disabled />
              </div>
            </ContentForm>
          </section>
        </Content>
      </Form>
    </Container>
  );
}

RegistrationForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
