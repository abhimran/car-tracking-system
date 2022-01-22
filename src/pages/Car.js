import React, { useContext } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import { CarContext } from '../context/Car';
import AddNewCarModal from '../modals/AddNewCarModal';
import UpdateCarModal from '../modals/UpdateCarModal';

const Car = () => {
  const { carData, setCarData } = useContext(CarContext);
  const handleDelete = (caritem) => {
    const deleteItem = carData.filter((item) => item.id !== caritem.id);
    setCarData(deleteItem);
  };
  return (
    <ContentWrapper>
      <div className='cars'>
        <div className='mb-3'>
          <h4 className='mb-2'>
            Total cars: {carData.length ? carData.length : 0}{' '}
          </h4>
          <button
            type='button'
            className='btn btn-primary me-2'
            data-bs-toggle='modal'
            data-bs-target='#add_new_car'
          >
            Add new car
          </button>
          <AddNewCarModal />
        </div>
        <div className='row gx-3 gy-3'>
          {carData.map((car) => (
            <div className='col-md-4' key={car.id}>
              <div className='single-car'>
                <div className='car-img'>
                  <img src={car.image} alt='car-img' />
                </div>
                <div className='car-detail p-3 text-center'>
                  <h5 className='mb-2'>{car.model}</h5>
                  <p className='text-secondary'>{car.regNo}</p>
                </div>

                <div className='car-actions p-3'>
                  <button
                    type='button'
                    className='btn btn-primary me-2'
                    data-bs-toggle='modal'
                    data-bs-target={`#update_car_${car.id}`}
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(car)}
                  >
                    Delete
                  </button>
                </div>
                <UpdateCarModal item={car} id={`update_car_${car.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Car;
