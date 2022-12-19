import React, { useEffect, useState } from "react";
import LanguagesDropdown from "./LanguagesDropdown";
import CodeEditorWindow from "./CodeEditorWindows";
import Output from "./Output";
//import CustomInput from "./CustomInput";
import useKeyPress from "../hooks/useKeyPress";
import { classnames } from "../hooks/general";
import { AiFillHome } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { executeCode } from "../services/execute.service";


export const languageOptions = [
    {
        id: 1,
        name: "Python3",
        label: "Python3",
        value: "python",
        version: 3
    },
    {
        id: 2,
        name: "C++",
        label: "C++",
        value: "cpp",
        version: 1
    },
    {
        id: 3,
        name: "Java",
        label: "Java",
        value: "java",
        version: 8
    },
    {
        id: 4,
        name: "Python2",
        label: "Python2",
        value: "python",
        version: 2
    },
    {
        id: 5,
        name: "Shell",
        label: "Shell",
        value: "shell",
        version: 2
    }
];

function EditorWindows(props) {

    //    const [name, setName] = useState("filename");
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState(languageOptions[0]);
    //    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);
    //    const [path, setPath] = useState("");

    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
        }
    }, [ctrlPress, enterPress]);

    function onSelectChange(sl) {
        setLanguage(sl);
    }

    const handleCompile = (e) => {
        e.preventDefault();
        setProcessing(true);
        executeCode(code, language.value, language.version).then((res) => {
            setOutputDetails(res.data)
            console.log(res);
        }).catch((err) => {
            console.log(err.message)
        })
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

    const navigate = useNavigate()
    const homeOnClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <>
            <div className="flex flex-row">
                <div className="px-2 py-2">
                    <button className="py-2 pl-4" onClick={homeOnClick}>
                        <AiFillHome className="w-8 h-8" />
                    </button>
                </div>
                <div className="px-4 py-2">
                    <LanguagesDropdown onSelectChange={onSelectChange} />
                </div>
            </div>

            <div className="flex flex-row space-x-4 items-start px-4 py-2">
                <div className="flex flex-col w-full h-full justify-start items-end">
                    <CodeEditorWindow
                        code={code}
                        onChange={onChange}
                        language={language?.value}
                    />
                </div>

                <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
                    <Output outputDetails={outputDetails} />
                    <div className="flex flex-col items-end">
                        {/*<CustomInput
                                customInput={customInput}
                                setCustomInput={setCustomInput}
                            />*/}
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
        </>
    );
}
export default EditorWindows;