import PrimarySideBar from "./PrimarySidebar";
import SecondarySidebar from "./SecondarySidebar";


const Sidebar = ({ toggleSidebar }) => {
    console.log("isToggleSidebar>>>", toggleSidebar)
    // return (toggleSidebar ? <PrimarySideBar /> : <SecondarySidebar />)
    return <PrimarySideBar />
}

export default Sidebar;