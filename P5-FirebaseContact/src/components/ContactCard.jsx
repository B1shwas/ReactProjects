import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";
const ContactCard = ({ contact }) => {
  const {isOpen, onOpen, onClose} = useDisclouse();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db,'contacts',id))
      toast.success('Successfully Deleted!')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className="bg-yellow flex items-center  justify-between gap-6 rounded-md p-2 ">
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-profile text-5xl" />
        <div className="">
          <h1 className="font-medium">{contact.name}</h1>
          <p className="text-sm ">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine className="cursor-pointer" 
        onClick={onOpen}/>
        <IoMdTrash className="text-purple cursor-pointer" onClick={()=>deleteContact(contact.id)}/>
      </div>
    </div>
    <AddAndUpdateContact isUpdate isOpen={isOpen} onClose={onClose} contact={contact}/>
    </>
  );
};

export default ContactCard;
