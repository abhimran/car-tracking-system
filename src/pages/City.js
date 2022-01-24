import React, { useState, useRef } from 'react';
import ContentWrapper from '../components/ContentWrapper';
import * as d3 from 'd3';
import { CityData } from '../data/CityData';

const City = () => {
  const [parsed, setParsed] = useState({});
  const uploadFile = useRef(null);
  const handleFiles = () => {
    // Load csv File
    (async () => {
      const text = await uploadFile.current.files[0].text();
      const data = await d3.csvParse(text);
      setParsed(data);
    })();
  };

  console.log(parsed);
  return (
    <ContentWrapper>
      <div>
        <h5>Import CSV file: </h5>
        <div>
          <input
            ref={uploadFile}
            onChange={handleFiles}
            type='file'
            id='input'
          />
        </div>
        <h5>File Data:</h5>{' '}
      </div>

      <div className='citis'>
        <div className='mb-3'>
          <h4 className='mb-2'>
            Total citis: {CityData.length ? CityData.length : 0}{' '}
          </h4>
        </div>
        <div className='row gx-3 gy-3'>
          {CityData.map((city) => (
            <div className='col-md-4' key={city.id}>
              <div className='single-city'>
                <div className='city-detail p-3'>
                  <h5 className='mb-2'>City name: {city.name}</h5>
                  <p className='text-secondary mb-1'>Latitude: {city.lat}</p>
                  <p className='text-secondary mb-1'>Longitude: {city.long}</p>
                  <p className='text-secondary mb-1'>Car: Not assigned yet</p>
                  <p className='text-secondary mb-1'>
                    Operator: Not assigned yet
                  </p>
                  <p className='text-secondary mb-1'>Operator code:</p>
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
                    // onClick={() => handleDelete(car)}
                  >
                    Delete
                  </button>

                  <button
                    type='button'
                    className='btn btn-success me-2 mb-2'
                    // onClick={() => handleDelete(car)}
                  >
                    Assign car
                  </button>

                  <button
                    type='button'
                    className='btn btn-secondary me-2 mb-2'
                    // onClick={() => handleDelete(car)}
                  >
                    Assign operator
                  </button>
                </div>
                {/* <UpdateCarModal item={car} id={`update_car_${car.id}`} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default City;
