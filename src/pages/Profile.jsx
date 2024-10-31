
const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden md:flex border">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center bg-gradient-to-br from-indigo-700 to-purple-600 p-6 text-white md:w-1/3">
          <div className="relative w-48 h-48 mb-4">
            <img
              className="w-full h-full rounded-full border-4 border-white object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrAy-GMBjhx8aZOISJzhB2QE_kgKX-xfcYg&s"
              alt="User Profile"
            />
            {/* Edit Icon */}
            <button className="absolute bottom-0 right-6 bg-slate-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-4.036L10.5 10.5m1 4H7m6.5-6.5v.01M20.5 3.5a2.121 2.121 0 11-3 3L10 14v3h3l7.5-7.5a2.121 2.121 0 013-3z"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-2xl font-semibold">HR Akash</h2>
          <p className="text-indigo-200">hrakash@example.com</p>
        </div>

        {/* Profile Details Section */}
        <div className="flex-1 p-8">
          {/* Task Stats */}
          <div className="flex justify-between mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Total Tasks</h3>
              <p className="text-2xl font-bold text-indigo-600">34</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
              <p className="text-2xl font-bold text-green-600">28</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Pending</h3>
              <p className="text-2xl font-bold text-red-600">6</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
            <p className="mt-2 text-gray-600">
              Hello! I’m Akash, a task management enthusiast with a knack for
              organization and productivity. I strive to complete my tasks with
              efficiency and enjoy working collaboratively on projects.
            </p>
          </div>

          {/* Edit Profile Button */}
          <div className="flex justify-center">
            <button className="bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
