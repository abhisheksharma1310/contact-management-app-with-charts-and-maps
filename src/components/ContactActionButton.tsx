import {
    faEye,
    faTrashCan,
    faPenToSquare,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { deleteContact } from "../features/contact";
  
type propType = {
    id: string
}

  const ContactActionButton = ({id}: propType) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    //hadle contact delete
    const handleDelete = () => {
      // eslint-disable-next-line no-restricted-globals
      const deleteUser = confirm("Are you sure to delete this contact?");
      if(deleteUser){
        dispatch(deleteContact(id))
      }
    }
  
    return (
      <div className="flex justify-around items-center gap-x-2 lg:gap-10">
        <FontAwesomeIcon icon={faEye} className="lg:w-5 lg:h-5 w-3 h-3 cursor-pointer" onClick={() => navigate(`/contact/view/${id}`)}/>
        <FontAwesomeIcon icon={faPenToSquare} className="lg:w-5 lg:h-5 w-3 h-3 cursor-pointer" onClick={() => navigate(`contact/edit/${id}`)} />
        <FontAwesomeIcon icon={faTrashCan} className="lg:w-5 lg:h-5 w-3 h-3 cursor-pointer" onClick={handleDelete} />
      </div>
    );
  };
  
  export default ContactActionButton;
  