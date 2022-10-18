import logo from './logo.svg';
import './App.css';
import { TextInput } from '@mantine/core';
import { Select } from '@mantine/core';
import { Radio } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { Button } from '@mantine/core';
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState({
  name: '',
  location:'',
   age:  '',
   gender:'',
   framework:'',
   library:''

  })
  console.log(input)
  const getValueForInput = (incoming) => {
    let value;
    if (incoming.target) {
      if (incoming.target.value !== undefined) {
        value = incoming.target.value;
      }
    } else {
      value = incoming;
    }
    return value;
  };

  const changeHandler = (name) => (inputValue) => {
    const value = getValueForInput(inputValue);
    setInput((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit=(e)=>{
    // setInput({...input, name:'',email:'',address:''})
    alert('information saved');

  }

  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 ">
    <div className="row col-12 d-flex justify-content-center text-white ">
    <div  style={{ width: '500px' }} className="grid grid-cols-2 gap-x-4 sm:grid-cols-1">

<h1>Registration Form</h1>
<TextInput
      placeholder="Name"
      label=" Name"
      value={input.name}
      onChange={changeHandler('name')}
      
    />

<TextInput
      placeholder="Enter location"
      label=" Location"
      value={input.location}
      onChange={changeHandler('location')}
    />

<NumberInput
      placeholder="Enter your age"
      label="Age"
      value={input.age}
      onChange={changeHandler('age')}
    />


<TextInput
      placeholder="Gender"
      label="Gender"
      value={input.gender}
      onChange={changeHandler('gender')}
    />


<Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'javascript', label: 'javascript' },
        { value: 'mantine', label: 'mantine' },
      ]}
      value={input.framework}
      onChange={changeHandler('framework')}
    />

<Radio.Group
      name="favoriteFramework"
      label="Select your favorite framework/library"
      value={input.library}
      onChange={changeHandler('library')}     
    >
      <Radio value="react" label="React" />
      <Radio value="javscript" label="javscript" />
      <Radio value="ng" label="Angular" />
      <Radio value="mantine" label="mantine" />
      
    </Radio.Group>
<br/>
    <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={handleSubmit}>Submit</Button>
    
    </div>
       </div>
       <div></div>
       </figure>
  );
}

export default App;
