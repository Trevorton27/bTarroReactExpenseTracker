import React from 'react';

const UserInput = (props) => {
  return (
    <div className='userinput'>
      <form onSubmit={props.handleSubmit}>
        <div className='form-row'>
          <div className='col'>
            <input
              id='description'
              type='text'
              className='form-control'
              placeholder='What was your expense?'
              name='description'
              value={props.description}
              onChange={props.handleChange}
              required
            ></input>
          </div>
          <div className='col'>
            <input
              id='location'
              type='text'
              className='form-control'
              placeholder='Expense location?'
              name='location'
              value={props.location}
              onChange={props.handleChange}
              required
            ></input>
          </div>
        </div>
        <br></br>
        <div className='form-row'>
          <div className='col'>
            <input
              id='date'
              type='date'
              className='form-control'
              name='date'
              value={props.date}
              onChange={props.handleChange}
              required
            ></input>
          </div>
          <div className='col'>
            <input
              id='amount'
              type='currency'
              className='form-control'
              placeholder='$'
              value={props.amount}
              onChange={props.handleChange}
              name='amount'
              required
            ></input>
          </div>
        </div>
        <br></br>
        <div>
          <div className='form-row'>
            <button className='btn btn-secondary form-control' type='submit'>
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
