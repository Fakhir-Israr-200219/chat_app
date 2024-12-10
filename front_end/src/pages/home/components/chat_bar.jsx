import { FaUserCircle } from 'react-icons/fa';

const ChatBar = () => {
  const users = [
    { id: 1, name: "John Doe", image: null },
    { id: 2, name: "Jane Smith", image: "https://via.placeholder.com/40" },
    { id: 3, name: "Alice Johnson", image: null },
  ];

  return (
    <div className="border-2  border-neutral-500 rounded-md p-4 w-[25%] flex flex-col space-y-4">
      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md"
          >
            {/* User Image or Icon */}
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-10 h-10 text-gray-400" />
            )}
            {/* User Name */}
            <span className="text-gray-700 font-medium">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBar;


