// eslint-disable-next-line 
import React, { useState, useEffect } from "react";
// eslint-disable-next-line 
import Editor, { useMonaco } from "@monaco-editor/react";
// eslint-disable-next-line 
import executeService from "../services/execute.service";

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

const CodeEditorWindow = ({ onChange, language, code }) => {
    const [value, setValue] = useState(code || "");
    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
    };

    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
                height="85vh"
                width={`100%`}
                language={language}
                value={value}
                theme="vs-dark"
                defaultValue={pythonDefault}
                onChange={handleEditorChange}
            />
        </div>
    );
};
export default CodeEditorWindow;