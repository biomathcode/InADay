import React, {useState, createContext} from 'react';


export const ToDoContext = createContext()




export const ToDoContextProvider = props => {

    const [categories, setCategories] = useState([
    {value: 'work', label: 'work', color: '#F6A9A9'},
  {value: 'finance', label: 'finance', color: '#F38181'},
  {value: 'health', label : 'health', color: "#FCE38A"},
  {value: 'home', label: 'home', color: "#EAFFD0"},
  {value: 'cooking', label: 'cooking', color: "#95E1D3"},
  {value: 'academia', label: 'academia', color: "#AA96DA"}
    ])


    const [user, setUser] = useState({
        user_id: "",
        user_image: "", 
        user_email: "",
        joined_date: "",
        xp: 0,
        country: "",
    })


    const [todos, setTodo] = useState([{
        id: 12412,
        title: 'Make coffee',
        completed: false,
        category: 'finance'
    },
    {
        id: 12414,
        title: 'web development',
        completed: false,
        category: 'work'
    },
    {
        id: 12411,
        title: 'Make food',
        completed: false,
        category: 'finance'
    }]);

    const [selectedTodo, setSelectedTodo] = useState();

    const addTodo = (todo) => {
        setTodo([...todos, todo])
    }

    const addXP = () => {
        setUser((prevState) => ({
            ...prevState,
            xp: user.xp + 5
        }))
    }

    return (
            <ToDoContext.Provider value={{todos,categories, setCategories, setTodo, addTodo, addXP, user, setUser, selectedTodo, setSelectedTodo}}>
                {props.children}
            </ToDoContext.Provider>
    )
}



// todolist 
// title : String
// category : String
// created-date : String
// completed :- Boolean
// id: String

// Day 
// todos: [todo]
// completed : Boolean
// Day:


//categories
//title:string
// color: string

// User
// email : string
// name: String
// country: string
// XP: string
// joined_date: String
// pro_user: Boolean
