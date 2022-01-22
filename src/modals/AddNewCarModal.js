import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CarContext } from '../context/Car';

const AddNewCarModal = () => {
  const { carData, setCarData } = useContext(CarContext);
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
    setCarData([...carData, newItem]);
    if (data) {
      removeShowCLass();
    }
  };

  return (
    <div className='modal fade' id='add_new_car'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add new car
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
                <label htmlFor='addCarModel' className='form-label'>
                  Model
                </label>
                <input
                  id='addCarModel'
                  type='text'
                  className='form-control'
                  placeholder='Enter car model'
                  name='model'
                  {...register('model', { required: true })}
                />
                {errors.model && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>
              <div className='mb-3'>
                <label htmlFor='addCarRegNo' className='form-label'>
                  Reg No
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter car reg no'
                  id='addCarRegNo'
                  name='regNo'
                  {...register('regNo', { required: true })}
                />
                {errors.regNo && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>

              <div className='mb-3'>
                <label className='form-label'>Select a car</label>
                <select
                  className='form-select'
                  {...register('image', { required: true })}
                >
                  <option value=''>Select a car</option>
                  <option value='/images/car-4.jpg'>Audi</option>
                  <option value='/images/car-3.jpg'>Lambargini</option>
                  <option value='/images/car-2.jpg'>Toyota</option>
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

                <button type='submit' className='btn btn-primary'>
                  Add a car
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCarModal;
