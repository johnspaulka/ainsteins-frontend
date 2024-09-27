export const TabNav = () => {
  return (
    <div className="bg-green-700 text-white">
      <div className="container mx-auto flex justify-between py-4 px-8">
        <div className="flex space-x-6">
          <div className="font-bold text-xl">+</div>
          <div>Users</div>
          <div>Patients</div>
          <div>Hospitals</div>
          <div>Notice</div>
          <div>Help Center</div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">John </div>
          <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center">
            J
          </div>
        </div>
      </div>
    </div>
  );
};
