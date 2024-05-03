import React, { useEffect, useState } from 'react';
import { storage, getStorage, ref, listAll } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';


function DisplayImage() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchLastImage = async () => {
      const storageRef = ref(getStorage());
    
      const imageList = await listAll(ref(storageRef, 'images'));

      if (imageList.items.length > 0) {
        const lastImageRef = imageList.items[imageList.items.length - 1]; 

        const lastImageUrl = await getDownloadURL(lastImageRef);
        setUrl(lastImageUrl);
      } else {
        console.log('No images found in storage');
      }
    };

    fetchLastImage();
  }, []);

  return (
    <div>
        <h1>Last image uploaded:</h1>
      <img src={url} alt="Uploaded" />
    </div>
  );
}

export default DisplayImage;
