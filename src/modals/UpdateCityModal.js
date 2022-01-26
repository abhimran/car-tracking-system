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
    const updatedData = cityData.map((x) =>
      x.id === item.id ? { ...x, ...data } : x
    );
    setCityData(updatedData);
  };
  return (
    <div className='modal fade' id={id}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Update city info
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
                  City name
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter city'
                  name='name'
                  defaultValue={item.name}
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>
              <div className='mb-3'>
                <label htmlFor='addCarRegNo' className='form-label'>
                  Latitude
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Latitude'
                  name='lat'
                  defaultValue={item.lat}
                  {...register('lat', { required: true })}
                />
                {errors.lat && (
                  <p className='text-danger mt-1'>This field is required.</p>
                )}
              </div>

              <div className='mb-3'>
                <label htmlFor='addCarRegNo' className='form-label'>
                  Longitude
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Longitude'
                  name='long'
                  defaultValue={item.long}
                  {...register('long', { required: true })}
                />
                {errors.long && (
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
