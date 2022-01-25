import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CityContext } from '../context/City';

const UpdateCityModal = ({ id, item }) => {
  const { cityData, setCityData } = useContext(CityContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedData = carData.map((x) =>
      x.id === item.id ? { ...x, ...data } : x
    );
    setCarData(updatedData);
  };
  return (
    <div className='modal fade' id={id}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Update car info
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
                  defaultValue={item.model}
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
                  defaultValue={item.regNo}
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
                  <option value={item.image}>{item.model}</option>
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

export default UpdateCityModal;
