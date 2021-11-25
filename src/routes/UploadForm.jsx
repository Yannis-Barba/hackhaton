/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../css/UploadForm.css';

function UploadForm() {
  return (
    <div id="formContainer" className="bg-third">
      <form>
        <h2 className="mt-2 font-bold text-center">UPLOAD FORM</h2>
        <span className="flex items-center justify-center gap-1">
          <h3 className="mt-2 font-semibold">Add an image</h3>
          <label htmlFor="avatar" className="labelForInput">
            {' '}
            UPLOAD{' '}
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            required
            className="inputfile mb-6 mx-auto"
          />
        </span>
        <div className="my-1 text-center">
          <input
            type="text"
            className="bg-secondary text-third rounded-3xl w-4/5 p-1 px-4"
            placeholder="Title"
          />
          <textarea
            name="text-area"
            id="text-area"
            className="bg-secondary text-third rounded-2xl mt-5 w-4/5 h-80 p-1 px-4"
            required
            placeholder="Description"
          />
        </div>
        <span className="flex items-center justify-center gap-1 mb-2">
          <h3 className="font-semibold">Add your song</h3>
          <label htmlFor="song" className="labelForInput">
            {' '}
            UPLOAD{' '}
            <input
              type="file"
              name="mp3"
              id="song"
              className="inputfile mb-4 mx-auto"
              accept="audio/mpeg3"
              required
            />
          </label>
        </span>
        <button
          type="submit"
          className="bg-secondary rounded-3xl text-third w-2/5 mx-auto p-2"
        >
          POST
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
