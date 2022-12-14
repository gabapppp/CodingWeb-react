import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import EditorWindows from "../components/Editor";


function CodePage() {
    const [fileID, setFileID] = useState(1);

    return (
        <div className="flex">
            <Sidebar fileID={fileID} setFileID={setFileID} />
            <EditorWindows fileID={fileID} setFileID={setFileID} />
        </div>
    );
}
export default CodePage;