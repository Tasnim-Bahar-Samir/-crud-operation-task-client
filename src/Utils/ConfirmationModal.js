import React from "react";

const ConfirmationModal = ({ title, message,data, closeModal, modalAction }) => {
  return (
    <div>
      <input type="checkbox" id="confirmationModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-outline">Cancel</button>
            <label onClick={()=> modalAction(data)} className="btn btn-error">Confirm</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
