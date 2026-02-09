import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Submitted", {data});
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name: </label>
        <input className={errors.firstName? 'input-error' : ""}
        {...register("firstName", 
          { 
            required: true, 
            minLength:{value: 3, message:'Min Length at least 3'}, 
            maxLength:{value: 6, message:'Max Length at most 6'}
          })} />
          <br/>
          {errors.firstName && <p className='error-msg'> {errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label> Middle Name: </label>
        <input className={errors.middleName? 'input-error' : ""}
        {...register("middleName", 
          { 
            required: true, 
            minLength:{value: 3, message:'Min Length at least 3'}, 
            maxLength:{value: 6, message:'Max Length at most 6'}
          })} />
          <br/>
          {errors.middleName && <p className='error-msg'> {errors.middleName.message}</p>}
      </div>
      <br/>
      <div>
        <label> Last Name: </label>
        <input className={errors.lastNameName? 'input-error' : ""}
        {...register("lastName", 
          { 
            required: true, 
            minLength:{value: 3, message:'Min Length at least 3'}, 
            maxLength:{value: 6, message:'Max Length at most 6'}
          })} />
          <br/>
          {errors.lastName && <p className='error-msg'> {errors.lastName.message}</p>}
      </div>
      <br/>
      <input type="Submit" disabled = {isSubmitting}
      value = {isSubmitting? 'Submitting': 'Submit'} />
    </form>
  )
}

export default App
