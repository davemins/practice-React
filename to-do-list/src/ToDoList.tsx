import React, { useState } from "react";
import TodoModal from "./TodoModal";
import { Button } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

const ToDoList: React.FC = () => {
    const title: string = "오늘 할 일";

    const [todo, setTodo] = useState<Todo[]>([
        { id: 1, text: '공부하기', isChecked: false },
        { id: 2, text: '잠자기', isChecked: false },
        { id: 3, text: '미팅하기', isChecked: false }
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId: number) => {
        setTodo((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        )
    }

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodo([...todo, { id: Date.now(), text: newTodo, isChecked: false }])
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) => {
        setTodo(todo.filter((todo) => todo.id !== id))
    }

    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true)
        setSelectedTodo(todo)
    }

    const handleCloseDetail = () => {
        setShowDetail(false)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className='container'>
                <div>
                    <input type="text"
                        placeholder="할 일 입력"
                        style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button onClick={addTodo}>추가</Button>
                </div>
            </div>
            <p></p>
            <div className="container">
                <div className="board">
                    <ul>
                        {
                            todo.map((todo, index) => (
                                <li key={todo.id}>
                                    <input type="checkbox" onChange={() => {
                                        handleCheckedChange(todo.id);
                                    }}></input>
                                    <span>
                                        {
                                            todo.isChecked ?
                                                <del>{todo.text}</del> : <span>{todo.text}</span>
                                        }
                                    </span>
                                    <button
                                        onClick={() => removeTodo(todo.id)}
                                        className='delbutton'>삭제</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
        </div >

    )
}

export default ToDoList;