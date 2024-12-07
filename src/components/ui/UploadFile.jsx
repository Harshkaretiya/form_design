import React, { useState } from 'react'

function UploadFile() {

    const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Save the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image');
      return;
    }

    // Create a FormData object to send the file as multipart/form-data
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('Error uploading file');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };
  return (
    <div className="d-flex flex-column border rounded-3 h-100 p-4">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Upload Image
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Upload
      </button>
    </form>
    </div>
  )
}

export default UploadFile
