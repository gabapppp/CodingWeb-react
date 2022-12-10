import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import EditorWindows from "./Editor";


function Homepage() {
    const [fileID, setFileID] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser)
            navigate("/login");
        // eslint-disable-next-line
    }, [])

    return (
        <div className="flex">
            <Sidebar fileID={fileID} setFileID={setFileID} />
            <EditorWindows fileID={fileID} setFileID={setFileID} />
        </div>
    );
}
export default Homepage;