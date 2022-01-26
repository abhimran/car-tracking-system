import React, { useRef, useContext } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import * as d3 from 'd3';
import { CityContext } from '../context/City';
import AssignCarAndOPeratorModal from '../modals/AssignCarAndOPeratorModal';
import UpdateCityModal from '../modals/UpdateCityModal';

const City = () => {
  const { cityData, setCityData } = useContext(CityContext);
  const handleDelete = (cityitem) => {
    const deleteItem = cityData.filter((item) => item.id !== cityitem.id);
    setCityData(deleteItem);
  };

  const randomId = Math.floor(Math.random() * 100) + 21;

  const uploadFile = useRef(null);
  const handleFiles = () => {
    // Load csv File
    (async () => {
      const text = await uploadFile.current.files[0].text();
      const data = await d3.csvParse(text);
      const newItem = { ...data[0], id: randomId };
      setCityData([...cityData, newItem]);
    })();
  };

  return (
    <ContentWrapper>
      <div>
        <h6 className='mb-2'>Import CSV file: </h6>
        <div>
          <input
            ref={uploadFile}
            onChange={handleFiles}
            type='file'
            id='input'
          />
        </div>
      </div>

      <div className='py-4'>
        <h6>
          Download Demo csv file:{' '}
          <span className='text-warning'>
            (.csv file must have name, lat and long field)
          </span>
        </h6>

        <div className='mt-2'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://drive.google.com/file/d/1Pyto1rWo3Fs4k5OACq31JjjJd-icitZP/view?usp=sharing'
          >
            <button className='btn btn-secondary me-2'>Nawabganj</button>
          </a>

          <a
            rel='noreferrer'
            target='_blank'
            href='https://drive.google.com/file/d/14Dra4PedBgDQ7hU0tD-evLCKIZRtDVgd/view?usp=sharing'
          >
            <button className='btn btn-secondary me-2'>Naogaon</button>
          </a>

          <a
            rel='noreferrer'
            target='_blank'
            href='https://drive.google.com/file/d/1ZJ1Vpf8haT3DACTZ4tRii_bQFDbApxkh/view?usp=sharing'
          >
            <button className='btn btn-secondary me-2'>Natore</button>
          </a>
        </div>
      </div>

      <div className='citis'>
        <div className='mb-3'>
          <h4 className='mb-2'>
            Total citis: {cityData.length ? cityData.length : 0}{' '}
          </h4>
        </div>
        <div className='row gx-3 gy-3'>
          {cityData.map((city) => (
            <div className='col-md-4' key={city.id}>
              <div className='single-city'>
                <div className='city-detail p-3'>
                  <h5 className='mb-2'>City name: {city.name}</h5>
                  <p className='text-secondary mb-1'>Latitude: {city.lat}</p>
                  <p className='text-secondary mb-1'>Longitude: {city.long}</p>
                  <p className='text-secondary mb-1'>
                    Car: {city.carModel || 'Not assigned yet'}
                  </p>
                  <p className='text-secondary mb-1'>
                    Operator: {city.operatorName || 'Not assigned yet'}
                  </p>
                  <p className='text-secondary mb-1'>
                    Operator code: {city.code || ''}
                  </p>
                </div>

                <div className='city-actions p-3'>
                  <button
                    type='button'
                    className='btn btn-primary me-2 mb-2'
                    data-bs-toggle='modal'
                    data-bs-target={`#update_city_${city.id}`}
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger me-2 mb-2'
                    onClick={() => handleDelete(city)}
                  >
                    Delete
                  </button>

                  <button
                    type='button'
                    className='btn btn-success me-2 mb-2'
                    data-bs-toggle='modal'
                    data-bs-target={`#assign_car_and_operator_${city.id}`}
                  >
                    Assign car and Operator
                  </button>
                </div>
                <AssignCarAndOPeratorModal
                  item={city}
                  id={`assign_car_and_operator_${city.id}`}
                />

                <UpdateCityModal item={city} id={`update_city_${city.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default City;
