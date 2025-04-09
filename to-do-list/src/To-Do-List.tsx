import React, { useState } from "react";

const ToDoList: React.FC = () => {
    const title: string = "오늘 할 일";

    const [todo] = useState(['오늘 할 일', '잠자기', '미팅하기']);

    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <ul>
                    <li>{todo[0]}</li>
                    <li>{todo[1]}</li>
                    <li>{todo[2]}</li>
                </ul>
            </div>
        </div>

    )
}

export default ToDoList;