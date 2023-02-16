import React,{createContext, useContext,useState} from 'react';

const StateContext = createContext();

//Pocetne vrednosti
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider =({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode,setCurrentMode] = useState('Light');
    const[themeSettings, setThemeSettings] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false)
    }
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState,[clicked]: true});
    }
    return (
        <StateContext.Provider
        value ={{activeMenu, 
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize, 
            setScreenSize,
            currentColor,currentMode, setMode,
            setColor,themeSettings,setThemeSettings, validateForm,
        handleSubmit, setEmail,setPassword,email,password}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

