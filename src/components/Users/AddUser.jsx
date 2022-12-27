import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";


const AddUser = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  const errorHandler = () =>{
    setError(null)
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    if (user.trim().length === 0 || age.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age (non-empty values)'
        })
      return;
    }

    if (+age < 1) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid age (greater than 0)'
        })
      return;
    }

    props.onAddUser(user,age);

  
    setUser("");
    setAge("");
  };

  const userChangeHandler = (e) => {
    setUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };



  return (
        <div>

                {error &&   <ErrorModal 
                        title = {error.title}
                        message={error.message}
                        onConfirm = {errorHandler}
                ></ErrorModal>}

          


            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                    id="username"
                    type="text"
                    value={user}
                    onChange={userChangeHandler}
                    />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler} />

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
        );
    
};

export default AddUser;
