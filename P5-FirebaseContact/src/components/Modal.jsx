import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 mx-auto min-h-[200px] min-w-[80%] bg-white p-6">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
