import Modal from "../ui/Modal";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Add Task'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus voluptatem nesciunt aliquid reiciendis voluptas asperiores consequatur repellendus, animi aperiam sapiente minus suscipit quibusdam consequuntur voluptates corrupti temporibus totam iusto voluptatum eveniet a? Quae corrupti aliquam numquam doloremque debitis sed?</p>
      </Modal>
    </>
  );
};

export default AddTasksModal;
