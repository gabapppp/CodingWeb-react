import React, { useEffect, useState } from "react";
import LanguagesDropdown from "./LanguagesDropdown";
import CodeEditorWindow from "./CodeEditorWindows";
import Output from "./Output";
import CustomInput from "./CustomInput";
import useKeyPress from "../hooks/useKeyPress";
import { classnames } from "../utils/general";
import executeService from "../services/execute.service";
//import OutputDetails from "./OutputDetails";

const languageOptions = [
    {
        id: 1,
        name: "Python3",
        label: "Python3",
        value: "python"
    },
    {
        id: 2,
        name: "C++",
        label: "C++",
        value: "cpp"
    },
    {
        id: 3,
        name: "JavaScript",
        label: "JavaScript",
        value: "javascript",
    },
];

function EditorWindows(props) {

    const [name, setName] = useState("filename");
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState(languageOptions[0]);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [path, setPath] = useState("");

    const { fileID, setFileID } = props;

    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
        }
    }, [ctrlPress, enterPress]);

    useEffect(() => {
        if (fileID != null) {
            executeService.getFile(fileID).then((res) => {
                if (res.data.language === "CPP")
                    setLanguage(languageOptions[1])
                else {
                    setLanguage(languageOptions[0])
                }
                setName(res.data.filename);
                setPath(res.data.file);
            })
        }
    }, [fileID]);

    useEffect(() => {
        if (path !== "") {
            executeService.getSource(path).then((res) => {
                setCode(`${res.data}`)
            }).catch((err) => {
                console.log(err)
            })
        }
    },);

    function onSelectChange(sl) {
        console.log("selected Option...", sl);
        setLanguage(sl);
    }

    const handleCompile = () => {
        setProcessing(true);

        executeService.getExecute(fileID, customInput).then((res) => {
            console.log(res);
            setOutputDetails(res.data);
        }).catch((err) => console.log(err));
        setProcessing(false);
    };


    const onChange = (action, data) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };

    if (fileID == null) return (
        <button onClick={() => {
            setFileID(1);
        }}>
            <span >
                Open file, please
            </span>
        </button>
    );


    return (
        <div className="container mx-auto">
            <div className="relative bg-blueGray-100">
                <div className="flex flex-row">
                    <div className="px-4 py-2">
                        <LanguagesDropdown onSelectChange={onSelectChange} />
                    </div>
                    <div className="px-4 py-2">
                        <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mt-2">
                            {name}
                        </h1>
                    </div>
                </div>

                <div className="flex flex-row space-x-4 items-start px-4 py-4">
                    <div className="flex flex-col w-full h-full justify-start items-end">
                        {code !== "" ? (
                            <CodeEditorWindow
                                code={code}
                                onChange={onChange}
                                language={language?.value}
                            />) : (
                            <>
                            </>
                        )}
                    </div>

                    <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
                        <Output outputDetails={outputDetails} />
                        <div className="flex flex-col items-end">
                            <CustomInput
                                customInput={customInput}
                                setCustomInput={setCustomInput}
                            />
                            <button
                                onClick={handleCompile}
                                disabled={!code}
                                className={classnames(
                                    "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                                    !code ? "opacity-50" : ""
                                )}
                            >
                                {processing ? "Processing..." : "Compile and Execute"}
                            </button>
                        </div>
                        {/* {outputDetails && <OutputDetails outputDetails={outputDetails} />} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditorWindows;