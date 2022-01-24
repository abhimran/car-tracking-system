import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { OperatorContext } from '../context/Operator';
const UpdateOPeratorModal = ({ id, item }) => {
  const { operatorData, setOperatorData } = useContext(OperatorContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedData = operatorData.map((x) =>
      x.id === item.id ? { ...x, ...data } : x
    );
    setOperatorData(updatedData);
  };
  return (
    <div className='modal fade' id={id}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Update operator info
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
                  placeholder='Enter operator model'
                  name='name'
                  defaultValue={item.name}
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
                  defaultValue={item.email}
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
                  <option value={item.image}>{item.name}</option>
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

export default UpdateOPeratorModal;
