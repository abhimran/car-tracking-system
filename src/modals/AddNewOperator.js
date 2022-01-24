import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { OperatorContext } from '../context/Operator';

const AddNewOperator = () => {
  const { operatorData, setOperatorData } = useContext(OperatorContext);
  const randomId = Math.floor(Math.random() * 100) + 10;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   REMOVE MODAL SHOW CLASS AFTER SUBMIT
  const removeShowCLass = () => {
    const removeClass = document.querySelectorAll('.show');
    removeClass.forEach((el) => el.classList.remove('show'));
  };

  const onSubmit = (data) => {
    const newItem = { ...data, id: randomId };
    setOperatorData([...operatorData, newItem]);
    if (data) {
      removeShowCLass();
    }
  };
  return (
    <div className='modal fade' id='add_new_operator'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add new operator
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label htmlFor='addOperatorName' className='form-label'>
                  Name
                </label>
                <input
                  id='addOperatorName'
                  type='text'
                  className='form-control'
                  placeholder='Enter operator name'
                  name='name'
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>
              <div className='mb-3'>
                <label htmlFor='addOperatorEmail' className='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter operator email'
                  id='addOperatorEmail'
                  name='email'
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>

              <div className='mb-3'>
                <label className='form-label'>Select a image</label>
                <select
                  className='form-select'
                  {...register('image', { required: true })}
                >
                  <option value=''>Select a operator</option>
                  <option value='/images/operator-2.jpg'>
                    Operator name two
                  </option>
                  <option value='/images/operator-4.jpg'>
                    Operator name four
                  </option>
                  <option value='/images/operator-5.jpg'>
                    Operator name five
                  </option>
                </select>
                {errors.image && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>

              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>

                <button
                  type='submit'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewOperator;
