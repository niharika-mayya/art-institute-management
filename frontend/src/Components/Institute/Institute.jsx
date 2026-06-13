import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import './Institute.css'
import closeIcon from "../../assets/close-icon.svg"
import { useAddInstituteMutation } from '../../api/InstituteApi'
import { toast } from 'react-toastify';
import InstituteMainPage from './InstituteMainPage'

export default function Institute() {
    const [addInstitute] = useAddInstituteMutation()
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        instituteName: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        description: "",
        gstNumber: ""
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await addInstitute(formData);
            if (res?.data) {
                setShowModal(false)
                toast.success(res.data.message);
                setFormData({
                    instituteName: "",
                    email: "",
                    phone: "",
                    address: "",
                    country: "",
                    state: "",
                    city: "",
                    pincode: "",
                    description: "",
                    gstNumber: ""
                });
            }
            else {
                toast.error(err.response.data.message);
            }
        } catch (err) {
            toast.error(err.data?.message || "Server error");
        }

    }
    return (
        <div className='institute-container'>
            <div className='institute-header bold-600'>INSTITUTE</div>
            <div className='flex-end p-2'>
                <button
                    className='btn-fill'
                    onClick={() => setShowModal(true)}
                    title="Add"
                >
                    + 
                </button>
            </div>
            <InstituteMainPage/>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Institute</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='institute-grid'>
                            <div>Institute Name*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='instituteName'
                                    value={formData.instituteName}
                                    onChange={handleChange}
                                    className='input-field'
                                    autoFocus
                                    required
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>Email*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='input-field'
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>Phone*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='input-field'
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>Address*</div>
                            <div className='input-wrapper'>
                                <textarea
                                    type='text'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    className='input-field'
                                    required
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>Country*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='country'
                                    value={formData.country}
                                    onChange={handleChange}
                                    className='input-field'
                                    required
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>State*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='state'
                                    value={formData.state}
                                    onChange={handleChange}
                                    className='input-field'
                                    required
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>City*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='textbox'
                                    name='city'
                                    value={formData.city}
                                    onChange={handleChange}
                                    className='input-field'
                                    required
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>Pincode*</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='pincode'
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className='input-field'
                                    required
                                />
                            </div>
                        </div>

                        <div className='institute-grid'>
                            <div>Description</div>
                            <div className='input-wrapper'>
                                <textarea
                                    type='text'
                                    name='description'
                                    value={formData.description}
                                    onChange={handleChange}
                                    className='input-field'
                                />
                            </div>
                        </div>
                        <div className='institute-grid'>
                            <div>GST Number</div>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='gstNumber'
                                    value={formData.gstNumber}
                                    onChange={handleChange}
                                    className='input-field'
                                />
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button type='submit' className='btn-fill'>
                            Save
                        </button>
                    </ Modal.Footer>
                </form>
            </Modal>
        </div >
    )
}
