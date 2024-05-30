// import React from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css'

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    // Implement your form submission logic here
    // You can access the selected image using selectedImage state

    console.log("Form Submitted!"); // Example log message
    console.log(selectedImage)
    event.preventDefault(); // To prevent the default browser behavior of reloading the page when a form is submitted
  };

  const handleFileInputClick = () => {
    document.getElementById('formFile').click();
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Form style={{ border: '1px solid #ccc', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }} onSubmit={handleSubmit}>
        <h3>Composition breakdown</h3>
        <Form.Group controlId="formFile" className="mb-3" style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
          <Form.Label htmlFor="formFile" style={{ marginRight: '10px' }}>Upload Image:</Form.Label>
          <Form.Control type="file" id="formFile" onChange={handleImageChange} style={{ display: 'none' }} />
          <Button variant="primary" style={{ backgroundColor: '#8BC34A', color: 'white', padding: '5px 10px', borderRadius: '5px', marginRight: '10px' }} onClick={handleFileInputClick}>
            Choose File
          </Button>
          <span style={{ textAlign: 'center' }}>{selectedImage ? selectedImage.name : 'No file selected'}</span>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#8BC34A', color: 'white', padding: '10px 20px', borderRadius: '5px', marginTop: '10px' }}>
          Submit
        </Button>
      </Form>
    </div>
   );
}

export default App;
