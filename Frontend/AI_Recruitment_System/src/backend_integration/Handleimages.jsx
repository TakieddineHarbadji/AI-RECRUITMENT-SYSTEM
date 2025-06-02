import { useState,useEffect } from 'react';

export function CompanyImage({ id, pre_link = "images", type = "profile" ,alt="",width="24",height="24"}) {
    const [imgUrl, setImgUrl] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    //fetch(`${API_BASE_URL}/${pre_link}/${type}/${id}/`)
    fetch(`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png`)
       .then(res => {
    if (res.ok) {
      setImgUrl(res.url);
    } else {
      throw new Error("Image not found");
    }
  })
  .catch(err => console.error("Image fetch failed 2:", err));
  }, [id, pre_link, type]);

  return imgUrl ? (
    <img
  src={imgUrl}
  alt={alt}
  width={width}
  height={height}
  style={{ display: "block" }}
/>

  ) : (
    <LoadingSpinner />
  );

}
export function CandidateImage({ id, pre_link = "images", type = "profile",alt="",width="24",height="24" }) {
    const [imgUrl, setImgUrl] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    //fetch(`${API_BASE_URL}/${pre_link}/${type}/${id}/`)
    fetch(`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png`)
       .then(res => {
    if (res.ok) {
      setImgUrl(res.url);
    } else {
      throw new Error("Image not found");
    }
  })
  .catch(err => console.error("Image fetch failed 2:", err));
  }, [id, pre_link, type]);

  return imgUrl ? (
    <img
   src={imgUrl}
  alt={alt}
  width={width}
  height={height}
  style={{ display: "block" }}
/>

  ) : (
    <LoadingSpinner />
  );

}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}