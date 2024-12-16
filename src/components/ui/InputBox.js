import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, handlePriority, hanldleDate } = props;

    return (

        <div>
            <input 
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            {/* Priority Selection */}
            <div>
                <label>Priority:</label>
                <select 
                    // value={priority}
                    // onChange={onPriorityChange}
                    className="form-control priority-select"
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            {/* Due Date Selection */}
            <div>
                <label>Due Date:</label>
                <input 
                    type="date" 
                    className="form-control" 
                    // value={dueDate}
                    // onChange={onDueDateChange}
                />
            </div>
        </div>

    );
}

export default enhance(InputBox);
// import React, { useState } from 'react';

// function InputBox(props) {
//     const { value, handleChange, handleKeyUp, handlePriorityChange, handleDueDateChange } = props;

//     const [priority, setPriority] = useState('Medium'); // Default priority
//     const [dueDate, setDueDate] = useState('');

//     // Handle changes for priority and due date
//     const onPriorityChange = (e) => {
//         setPriority(e.target.value);
//         handlePriorityChange(e.target.value);
//     };

//     const onDueDateChange = (e) => {
//         setDueDate(e.target.value);
//         handleDueDateChange(e.target.value);
//     };

//     return (
//         <div>
//             <input 
//                 autoFocus
//                 type="text"
//                 className="form-control add-todo"
//                 value={value}
//                 onKeyUp={handleKeyUp}
//                 onChange={handleChange}
//                 placeholder="Add New"
//             />
//             {/* Priority Selection */}
//             <div>
//                 <label>Priority:</label>
//                 <select 
//                     value={priority}
//                     onChange={onPriorityChange}
//                     className="form-control priority-select"
//                 >
//                     <option value="High">High</option>
//                     <option value="Medium">Medium</option>
//                     <option value="Low">Low</option>
//                 </select>
//             </div>
//             {/* Due Date Selection */}
//             <div>
//                 <label>Due Date:</label>
//                 <input 
//                     type="date" 
//                     className="form-control" 
//                     value={dueDate}
//                     onChange={onDueDateChange}
//                 />
//             </div>
//         </div>
//     );
// }

// export default InputBox;
