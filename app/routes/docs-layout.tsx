import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

export default function DocsLayout() {
  return (
    <div className="flex ">
      {/* Sidebar visible on all /docs/* routes */}
      <Sidebar />

      {/* Main content area */}
      <main
        className=" bg-cover bg-fixed bg-center overflow-auto text-white relative"
        style={{ backgroundImage: "url('/pattern-randomized.svg')" }}
      >
        {/* Optional dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
