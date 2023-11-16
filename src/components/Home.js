import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import MainBanner from './MainBanner';
import TittleBanner from './TittleBanner';
import { useState, useEffect } from 'react';

const Home = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [company, setCompany] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [postalCode, setPostalCode] = useState('');
const [province, setProvince] = useState('');
const [ type, setType] = useState('');

const saveUserData = (e) => {
    const data = { firstName, lastName, company, phone, email, address, city, postalCode, province, type };

    if (!firstName || !lastName || !company || !phone || !email || !address || !city || !postalCode || !province || !type) {
     
        return;
    }
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(() => {
        console.log('New user added');
    });
 
    
};

useEffect(saveUserData, [address, city, company, email, firstName, lastName, phone, postalCode, province, type]);

    return (<div >
        <MainBanner />
        <TittleBanner />
        <Form className="m-5" style={{ border: '1px solid', borderRadius: '5px', margin: '5px' }}>
            <h5 style={{marginTop: '10px', textAlign: 'center'}}>Schedule a pickup for recycling of your old electronics</h5>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" onChange={e => setFirstName(e.target.value)}/>

            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" onChange={e => setLastName(e.target.value)}/>

            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Enter your company name" onChange={e => setCompany(e.target.value)}/>

            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" onChange={e => setPhone(e.target.value)}/>

            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e => setAddress(e.target.value)}/>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your city" onChange={e => setCity(e.target.value)}/>

            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" placeholder="Enter your province" onChange={e => setProvince(e.target.value)}/>

            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Enter your postal code" onChange={e => setPostalCode(e.target.value)}/>

            </Form.Group>

            

            <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
                <Form.Select aria-label="Type of E-waste" onChange={e => setType(e.target.value)}>
                    <option>Type of E-waste</option>
                    <option value="TV">TV</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="* Yes, I’d like to receive news, special offers and other information from Eco-Gather Partners. I understand I can unsubscribe at any time." />
            </Form.Group>
            <div id="bt">
                <Button variant="success" type="submit" onClick={(e) => saveUserData(e)}>
                    Schedule My Pickup
                </Button></div>
        </Form>
    </div>);
}

export default Home;