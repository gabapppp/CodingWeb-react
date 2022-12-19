import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//import Sidebar from "../components/SideBar";
import EditorWindows from "../components/Editor";


function CodePage() {
    // const [fileID, setFileID] = useState(1);
    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        < EditorWindows />
    );
}
export default CodePage;