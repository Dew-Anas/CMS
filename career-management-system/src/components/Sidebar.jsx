
function Sidebar(){
    return(
        <div>

            {/* main */}
            <div className="flex flex-col gap-3 py-4">
                <h2 className="text-[rgb(143,163,168)]">Main</h2>

                <div className="text-[#e8f4f3] flex flex-col gap-2">
                <a>Dashboard</a>

                <a>Daily Tasks</a>

                <a>Upcoming Lessons</a>

                <a>Progress</a>
                </div>
            </div>

            {/* end main */}


            {/*Account */}
            <div className=" flex flex-col gap-3 py-8">
                <h2 className="text-[#8fa3a8] ">Account</h2>

                <div className="flex flex-col text-[#e8f4f3] gap-2">
                <a>Profile</a>
                <a>Settings</a>
                <a>Log Out</a>
                </div>

            </div>
            {/* End Account */}


        </div>
    );
}

export default Sidebar;