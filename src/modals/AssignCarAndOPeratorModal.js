import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../context/Car';
import { CityContext } from '../context/City';
import { OperatorContext } from '../context/Operator';

const AssignCarAndOPeratorModal = ({ id, item }) => {
  const { cityData, setCityData } = useContext(CityContext);
  const { operatorData } = useContext(OperatorContext);
  const { carData } = useContext(CarContext);

  const [state, setState] = useState({
    carModel: '',
    operatorName: '',
  });

  const [sixDigitCode, setSixdigitCode] = useState('');

  useEffect(() => {
    if (state.carModel && state.operatorName) {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      setSixdigitCode(randomCode);
    }
  }, [state]);

  const handleSubmit = () => {
    const newItem = { ...state, code: sixDigitCode };
    const updatedData = cityData.map((x) =>
      x.id === item.id ? { ...x, ...newItem } : x
    );
    setCityData(updatedData);
  };

  return (
    <div className='modal fade' id={id}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Assign Car and Operator
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='addCarModel' className='form-label'>
                  Car model
                </label>
                <select
                  onChange={(e) =>
                    setState({ ...state, carModel: e.target.value })
                  }
                  value={state.carModel}
                  className='form-select'
                >
                  <option value=''>Select a car</option>
                  {carData.map((item) => (
                    <option key={item.id} value={item.model}>
                      {item.model}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='addCarRegNo' className='form-label'>
                  Operator name
                </label>
                <select
                  onChange={(e) =>
                    setState({ ...state, operatorName: e.target.value })
                  }
                  value={state.operatorName}
                  className='form-select'
                >
                  <option value=''>Select a car</option>
                  {operatorData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mb-3'>
                <p>6 digit code: {sixDigitCode}</p>
              </div>
            </form>
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
              disabled=''
              onClick={handleSubmit}
              className='btn btn-primary'
              data-bs-dismiss='modal'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignCarAndOPeratorModal;
