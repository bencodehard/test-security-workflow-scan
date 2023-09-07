import React, { useRef,useState } from 'react';

const AddRecognitions = () => {
    const form = useRef();
    const recapture_site_Key = process.env.NEXT_PUBLIC_APP_RECAPTCHA_SITE_KEY
    const [isValid, setIsValid] = useState(true);
    const [recaptureValue, setRecaptureValue] = useState('');
    const [formData, setFormData] = useState({title: '', type: '', link: '', image: ''});

   
    const handleChange = (value, name) => {
        setFormData({...formData, [name]: value})
    }

    const sendData = (e) => {
        e.preventDefault();

        fetch('/api/addNewRecognition', {method: 'POST',body: JSON.stringify(formData)}).then((response) => response.json())
                .then((data) => {
                if(data.message === 'Recognition added successfully!'){
                    alert('Recognition added successfully!');
                    e?.target?.reset();
                }else{
                    alert('hmhm, something went wrong, please try again');
                }
                })
                .catch((error) => {
                    console.log(error)
                    alert('hmhm, something went wrong, please try again');
                });

        
    }

    return ( 
         <section  className="my-4 bg-white rounded-xl ">
        <div className="py-8  px-4 mx-auto w-[30rem] shadow-md rounded-xl">
            <h2 className="hidden mb-4 text-4xl font-extrabold tracking-tight text-center text-vekin-black md:block">Add Recognition</h2>
        
            <form id="contactForm" className="space-y-8" ref={form} onSubmit={sendData}>
                
                <div className="sm:col-span-2">
                    <label htmlFor="title" className="form-label ">Title of article:</label>
                    <textarea id="title" rows="3" className="form-input max-h-40" name='title' placeholder="title of recognition" onChange={(e)=> handleChange(e.target.value,'title')}></textarea>
                </div>
      
                <div className='lg:col-span-3'>
                    <label htmlFor="type" className="form-label">Type (news, award, etc)</label>
                    <input type="text" id="type" name='type' className="form-input" placeholder="News" required onChange={(e)=> handleChange(e.target.value,'type')}/>
                </div>  

                <div className="sm:col-span-2">
                    <label htmlFor="image" className="form-label ">Image URL (copy any image address from the recognition article):</label>
                    <textarea id="message" rows="3" className="form-input max-h-40" name='image' placeholder="title of recognition" onChange={(e)=> handleChange(e.target.value,'image')}></textarea>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="link" className="form-label ">Link of article:</label>
                    <textarea id="message" rows="3" className="form-input max-h-40" name='link' placeholder="title of recognition" onChange={(e)=> handleChange(e.target.value,'link')}></textarea>
                </div>
                
               
              

                <button type="submit" className="px-5 py-3 text-sm font-medium text-center rounded-lg bg-vekin text-vekin-white bg-primary-700 sm:w-fit hover:bg-vekin-green-80 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Add Recognition</button>
            </form>
        </div>
      </section>
     );
}
 
export default AddRecognitions;
