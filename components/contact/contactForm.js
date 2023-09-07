import React, { useRef,useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const form = useRef();
    const recapture_site_Key = process.env.NEXT_PUBLIC_APP_RECAPTCHA_SITE_KEY
    const [isValid, setIsValid] = useState(true);
    const [recaptureValue, setRecaptureValue] = useState('');
    const [formData, setFormData] = useState({name: '', email: '', subject: '', message: ''});

   
    const handleChange = (value, name) => {
        setFormData({...formData, [name]: value})
    }

    function recaptchaChanges(value) {
        if(value){
            setRecaptureValue(value)
            setIsValid(false)
        }
        setIsValid(true)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if(isValid){
            let formatted_data = {'g-recaptcha-response': recaptureValue, ...formData}
            fetch('/api/contact', {method: 'POST',body: JSON.stringify(formatted_data)}).then((response) => response.json())
                .then((data) => {
                if(data.message === 'success'){
                    alert('Message sent, We will get back to you soon. Thank you for your interest in VEKIN. Have a nice day!');
                    setIsValid(true)
                    e?.target?.reset();
                }else{
                    alert('Message could not be sent, please try again!');
                }
                })
                .catch((error) => {
                    console.log(error)
                    alert('Message could not be sent, please try again!');
                });
        }else{
            setIsValid(false)  
        }
    };


    return (  
        <section  className="bg-white top-[15%] xl:top-[10%] right-12 xl:right-[12%] rounded-xl md:absolute ">
        <div className="py-8  px-4 mx-auto w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] shadow-md rounded-xl">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-vekin-black hidden md:block">Contact Us</h2>
        
            <form id="contactForm" className="space-y-8" ref={form} onSubmit={sendEmail}>
                <div className='grid gap-5 lg:gap-2 lg:grid-cols-5'>
                <div className='lg:col-span-2'>
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required onChange={(e)=> handleChange(e.target.value,'name')}/>
                </div>
      
                <div className='lg:col-span-3'>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name='email' className="form-input" placeholder="johndoe@vekin.co.th" required onChange={(e)=> handleChange(e.target.value,'email')}/>
                </div>  
                </div>
                <div>
                    <label htmlFor="subject" className="form-label">Subject</label>
                   
                    <select required className="form-input " name='subject' onChange={(e)=> handleChange(e.target.value,'subject')}>
                        <option value=""  selected disabled>Select a subject</option>
                        <option value="Job Application">Job Application</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Feedback">Product Feedback</option>
                        <option value="Partnership Proposal">Partnership Proposal</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Support Request">Support Request</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="form-label ">Your message</label>
                    <textarea id="message" rows="6" className="form-input max-h-40" name='message' placeholder="Leave a message..." onChange={(e)=> handleChange(e.target.value,'message')}></textarea>
                </div>

                <div className="md:flex gap-8 md:items-center">
                    <ReCAPTCHA size="normal" sitekey={recapture_site_Key} onChange={recaptchaChanges} />
                    <div className={(!isValid)?'bg-[#ff4a6e] bg-opacity-20 rounded px-2 py-2 md ':'hidden'}>
                        <p className='text-[12px] font-medium pt-0 text-[#ff4a6e] '>reCAPTCHA verification is required</p>

                    </div>
                </div >
                <button type="submit" className="px-5 py-3 text-sm font-medium text-center rounded-lg bg-vekin text-vekin-white bg-primary-700 sm:w-fit hover:bg-vekin-green-80 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
            </form>
        </div>
      </section>
    );
}
 
export default ContactForm;
