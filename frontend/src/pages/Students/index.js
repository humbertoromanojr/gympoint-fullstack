import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Input } from '@rocketseat/unform';

import NotFound from '~/components/NotFound';
import Modal from '../../components/Modal';
import Loading from '~/components/Loading';

import { Container, Content, Header, InputSearch } from './styles';

import {
  getStudentsRequest,
  deleteStudentRequest,
} from '~/store/modules/students/actions';

function Dashboard() {
  const students = useSelector(state => state.students.data);
  const loading = useSelector(state => state.students.loading);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const [selectStudent, setSelectStudent] = useState(null);

  useEffect(() => {
    dispatch(getStudentsRequest(search));
  }, [dispatch, search]);

  useEffect(() => {
    setOpenModal(false);
  }, [students]);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal(student) {
    setSelectStudent(student);
    setOpenModal(true);
  }

  function handleSubmit() {
    const { id } = selectStudent;
    dispatch(deleteStudentRequest(id));
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciando alunos</h1>
        <div>
          <Link to="/students/new">
            <FaPlus size={14} color="#fff" />
            <label>CADASTRAR</label>
          </Link>

          <InputSearch>
            <FaSearch size={18} color="#999" />
            <Input
              name="search"
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar aluno"
            />
          </InputSearch>
        </div>
      </Header>

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <Content>
          <section>
            {students.length === 0 ? (
              <NotFound />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th align="center">IDADE</th>
                    <th colSpan="2">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>{student.nome}</td>
                      <td>{student.email}</td>
                      <td align="center">{student.idade}</td>
                      <td>
                        <Link to={`/students/${student.id}/edit`}>editar</Link>
                        <button
                          type="button"
                          onClick={() => handleOpenModal(student)}
                        >
                          apagar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </Content>
      )}
      {/* end loading */}
      {openModal && (
        <Modal>
          <p>
            Deseja deletar o aluno: <strong>{selectStudent.nome}</strong>
          </p>
          <button type="button" onClick={handleSubmit}>
            Confirmar
          </button>
          <button type="button" onClick={handleCloseModal}>
            Cancelar
          </button>
        </Modal>
      )}
    </Container>
  );
}

export default Dashboard;
