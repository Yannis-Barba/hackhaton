import React from 'react';

export default function Example() {
  return (
    <div className="relative mx-6 flex justify-center content-center items-center lg:w-4/5">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-four" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-secondary text-third font-bold">MY SONGS</span>
      </div>
    </div>
  );
}
