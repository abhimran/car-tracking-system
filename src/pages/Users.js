import React, { useContext } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import { OperatorContext } from '../context/Operator';
import AddNewOperator from '../modals/AddNewOperator';
import UpdateOPeratorModal from '../modals/UpdateOPeratorModal';

const Users = () => {
  const { operatorData, setOperatorData } = useContext(OperatorContext);
  const handleDelete = (operatoritem) => {
    const deleteItem = operatorData.filter(
      (item) => item.id !== operatoritem.id
    );
    setOperatorData(deleteItem);
  };
  return (
    <ContentWrapper>
      <div className='operators'>
        <div className='mb-3'>
          <h4 className='mb-2'>
            Total Operators: {operatorData.length ? operatorData.length : 0}{' '}
          </h4>
          <button
            type='button'
            className='btn btn-primary me-2'
            data-bs-toggle='modal'
            data-bs-target='#add_new_operator'
          >
            Add new operator
          </button>
          <AddNewOperator />
        </div>
        <div className='row gx-3 gy-3'>
          {operatorData.map((operator) => (
            <div className='col-md-4' key={operator.id}>
              <div className='single-operator'>
                <div className='operator-img'>
                  <img src={operator.image} alt='operator-img' />
                </div>
                <div className='operator-detail p-3'>
                  <h5 className='mb-2'>Name: {operator.name}</h5>
                  <p className='text-secondary'>{operator.email}</p>
                </div>

                <div className='operator-actions p-3'>
                  <button
                    type='button'
                    className='btn btn-primary me-2'
                    data-bs-toggle='modal'
                    data-bs-target={`#update_operator_${operator.id}`}
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(operator)}
                  >
                    Delete
                  </button>
                </div>
                <UpdateOPeratorModal
                  item={operator}
                  id={`update_operator_${operator.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Users;
