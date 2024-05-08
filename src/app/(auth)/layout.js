import React from "react";


function layout({ children }) {
  return (
    <div className="w-100 min-h-screen flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
      {children}
    </div>
  );
}

export default layout;
