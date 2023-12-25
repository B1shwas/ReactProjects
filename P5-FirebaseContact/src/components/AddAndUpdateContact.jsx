import { Form, Formik, Field, ErrorMessage } from "formik";
import Modal from "./Modal";
import { db } from "../config/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from 'yup'


const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email('Invalid Email').required("Email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
      onClose();
      toast.success("Successfully Added!");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      await updateDoc(contactsRef, contact);
      onClose();
      toast.success("Successfully Added!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        validationSchema={contactSchemaValidation}
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(value) => {
          console.log(value);
          isUpdate ? updateContact(value, contact.id) : addContact(value);
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border px-2" />
            <div className="text-xs text-red">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="h-10 border px-2" />
            <div className="text-red text-xs">
              <ErrorMessage name="email" />
            </div>
          </div>
          <button
            className="bg-profile self-end border px-3 py-1.5"
            type="submit"
          >
            {isUpdate ? "Update " : "Add "}Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
