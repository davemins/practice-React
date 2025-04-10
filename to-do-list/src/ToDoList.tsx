import React, { useState } from "react";

type Todo = {
    id: number;
    text: string;
    isCheck: boolean;
}

const ToDoList: React.FC = () => {
    const title: string = "오늘 할 일";

    const [todo, setTodo] = useState<Todo[]>([
        {id : 1, text : '공부하기', isCheck : false},
        {id : 2, text : '잠자기', isCheck : false},
        {id : 3, text : '미팅하기', isCheck : false}
    ]);

    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div className="board">
                    <ul>
                        
                        <li>{todo[0].text}</li>
                        <li>{todo[1].text}</li>
                        <li>{todo[2].text}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ToDoList;