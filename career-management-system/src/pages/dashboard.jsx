import Sidebar from "../components/Sidebar";

function Dashboard(){

return(
    <div className="flex">

        {/* side bar start */}

        <div className="w-64 min-h-screen bg-[#0a161c]">
        <Sidebar/>
        </div>

         {/* side bar end */}


        {/* Dashbord start */}

        <div className="flex-1">
        <h1>Dashboard</h1>
        </div>

        {/* Dashbord start */}


    </div>
);

}

export default Dashboard;