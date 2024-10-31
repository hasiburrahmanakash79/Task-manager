import { useSelector } from 'react-redux';
import TaskCard from '../components/tasks/TaskCard';

const Archive = () => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  
  // Filter tasks to get archived ones
  const archiveTasks = tasks.filter((item) => item.status === 'archive');

  return (
    <div className="p-10">
      <div>
        <h1 className="text-xl font-semibold mb-10">Archive Board</h1>
      </div>
      {archiveTasks.length === 0 ? (
        <div className="text-center text-gray-600 mt-10">
          <p>No archived tasks found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {archiveTasks.map((item) => (
            <TaskCard key={item.id} task={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
