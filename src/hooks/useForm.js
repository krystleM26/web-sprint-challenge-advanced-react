// write your custom hook here to control your checkout form
import React, {useState} from 'react';

const useForm = ( initialValue) => {
    const [form, setForm] = useState(initialValue);
    return [form, setForm];
}

export default useForm;