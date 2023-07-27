'use client'

import { CldUploadWidget } from 'next-cloudinary';

export default function Page()  {
    return (
        <CldUploadWidget uploadPreset="<Upload Preset>">
  {({ open }) => {
    function handleOnClick(e) {
      e.preventDefault();
      open();
    }
    return (
      <button className="button" onClick={handleOnClick}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
    )
}