
const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
        
        {/* Account Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Account Settings</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-600 font-medium">Username</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-indigo-700 transition">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notification Settings</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="emailNotifications" className="ml-3 text-gray-600">
                Enable Email Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="pushNotifications" className="ml-3 text-gray-600">
                Enable Push Notifications
              </label>
            </div>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-indigo-700 transition">
              Update Notifications
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Security Settings</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-600 font-medium">New Password</label>
              <input
                type="password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Confirm new password"
              />
            </div>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-700 transition">
              Save Security Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
