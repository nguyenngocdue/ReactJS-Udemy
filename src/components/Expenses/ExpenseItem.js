import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props)=> {
    // function clickEle(a, b) {};
    let title  = props.name;
    const clickHandler = () => {
        title = "Hello";
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{console.log(title)}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change title</button>
        </Card>
    );
}

export default ExpenseItem;