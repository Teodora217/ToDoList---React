export default function ToDoItem({_id, text, isCompleted, changeStatusHandler}){

    const onChangeStatusClick = () =>{
        changeStatusHandler(_id);
    }

 return(
    <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
    <td>{text}</td>
    <td>{isCompleted ? 'Complated' : 'InComplated'}</td>
    <td className="todo-action">
    <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
    </td>
    </tr>
 );
}


