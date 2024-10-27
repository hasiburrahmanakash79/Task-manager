import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onCancel  = () => {
    setIsOpen(false);
    reset()
  }

  const onSubmit = (data) => {
    console.log(data);
    onCancel()
  };
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex flex-col gap-2 mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter title"
              className="input input-bordered rounded"
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              type="text"
              placeholder="Enter your description"
              className="input input-bordered rounded"
            />
            {errors.description && <span>This field is required</span>}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              placeholder="Enter title"
              className="input input-bordered rounded"
            />
            {errors.date && <span>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="label">
              <span className="label-text">Assign to</span>
            </label>
            <select
              {...register("assignedTo", { required: true })}
              type="text"
              placeholder="Enter title"
              className="input input-bordered rounded"
            >
              <option value="MH Tipu">MH Tipu</option>
              <option value="TA Reja">TA Reja</option>
              <option value="AH Rafi">AH Rafi</option>
              <option value="HR Akash">HR Akash</option>
            </select>
            {errors.title && <span>This field is required</span>}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              {...register("priority", { required: true })}
              type="text"
              placeholder="Enter title"
              className="input input-bordered rounded"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

            </select>
            {errors.title && <span>This field is required</span>}
          </div>

          <div className="flex gap-3 justify-end">
            <button onClick={() => onCancel()} type="button" className="btn btn-danger">Cancel</button>
            <button type="submit" className="btn btn-primary">Add Task</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTasksModal;
