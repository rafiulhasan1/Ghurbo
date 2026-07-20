import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;