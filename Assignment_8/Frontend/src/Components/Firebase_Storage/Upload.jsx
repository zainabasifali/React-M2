import React, { useState } from 'react';
import { storage } from '../../config/fb-conf';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [upload,setupload] = useState(false)
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setupload(true);
        });
      });
    }
  };

  return (
    <div>
        <h1>Upload Files here:</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {upload && <h3>File uploaded</h3> }
    </div>
  );
}

export default UploadFile;