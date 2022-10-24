import React, { useEffect, useState } from "react";
import axios from "axios";
import LanguagesDropdown from "./LanguagesDropdown";
import CodeEditorWindow from "./CodeEditorWindows";
import Output from "./Output";
import CustomInput from "./CustomInput";
import useKeyPress from "../hooks/useKeyPress";
import { classnames } from "../utils/general";
//import OutputDetails from "./OutputDetails";

const pythonDefault = `# Iterative Binary Search Function
# It returns index of x in given array arr if present,
# else returns -1
def binary_search(arr, x):
	low = 0
	high = len(arr) - 1
	mid = 0

	while low <= high:

		mid = (high + low) // 2

		# If x is greater, ignore left half
		if arr[mid] < x:
			low = mid + 1

		# If x is smaller, ignore right half
		elif arr[mid] > x:
			high = mid - 1

		# means x is present at mid
		else:
			return mid

	# If we reach here, then the element was not present
	return -1


# Test array
arr = [ 2, 3, 4, 10, 40 ]
x = 10

# Function call
result = binary_search(arr, x)

if result != -1:
	print("Element is present at index", str(result))
else:
	print("Element is not present in array")

`;

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

function Homepage() {
    /*
    const btnClick = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/source/',
            data: JSON.stringify({
                code: code,
                language: 'python'
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            setOutput(response.data['output']);
        }).catch((error) => {
            console.log(error);
        })
    }
*/

    const [code, setCode] = useState(pythonDefault);
    const [language, setLanguage] = useState(languageOptions[0]);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);

    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
        }
    }, [ctrlPress, enterPress]);



    function onSelectChange(sl) {
        console.log("selected Option...", sl);
        setLanguage(sl);
    }

    const handleCompile = () => {
        setProcessing(true);
        const formData = {
            language: language.value,
            // encode source code in base64
            //source_code: btoa(code),
            //stdin: btoa(customInput),
            source_code: code,
            stdin: customInput
        };
        const options = {
            method: "POST",
            url: 'http://localhost:8000/api/execute/',
            params: {},
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
            },
            data: formData,
        };
        axios.request(options).then((res) => {
            console.log(res.data.status);
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
    return (
        <>

            <div className="flex flex-row">
                <div className="px-4 py-2">
                    <LanguagesDropdown onSelectChange={onSelectChange} />
                </div>
            </div>

            <div className="flex flex-row space-x-4 items-start px-4 py-4">
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
        </>
    );
}
export default Homepage;