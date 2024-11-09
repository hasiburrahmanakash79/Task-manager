const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-8 text-center">Settings</h1>
        
        {/* Account Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Account Settings</h2>
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-gray-700 font-medium">Username</label>
              <input
                type="text"
                className="w-full mt-3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your email"
              />
            </div>
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 px-6 rounded-xl mt-5 hover:bg-indigo-700 transition">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Notification Settings</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                className="w-6 h-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition"
              />
              <label htmlFor="emailNotifications" className="ml-4 text-gray-700">
                Enable Email Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                className="w-6 h-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition"
              />
              <label htmlFor="pushNotifications" className="ml-4 text-gray-700">
                Enable Push Notifications
              </label>
            </div>
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 px-6 rounded-xl mt-5 hover:bg-indigo-700 transition">
              Update Notifications
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Security Settings</h2>
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-gray-700 font-medium">New Password</label>
              <input
                type="password"
                className="w-full mt-3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Confirm new password"
              />
            </div>
            <button className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-6 rounded-xl mt-5 hover:bg-red-700 transition">
              Save Security Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
