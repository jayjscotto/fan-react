import { useState } from 'react';

const useLoginForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    callback();
  };

  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
  }
  return {
    handleSubmit,
    handleChange,
    inputs
  };
};

export default useLoginForm;
