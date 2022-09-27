import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './AddItem.module.css';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../Redux/article/articleAction';


function AddItem() {
    const [articleName, setArticleName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    


    const handleNameChange = (e) => {
        setArticleName(e.target.value);
    }
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('articleName', articleName);
        formData.append('selectedFile', selectedFile);
        dispatch(addArticle(formData, token));
    }

    return (
        <div className={classes.form}>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="imageName">
                    <Form.Label> Name of the image</Form.Label>
                    <Form.Control type="text" placeholder=" enter name of the image "
                        onChange={handleNameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="upload image">
                    <Form.Label> pick image</Form.Label>
                    <Form.Control type="file" placeholder=" enter name "
                        accept='image/*' onChange={handleFileChange} />
                </Form.Group>

                <Button variant="primary" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}

export default AddItem