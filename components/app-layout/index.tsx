import { AppLayoutBlock, ApplayoutContent } from "./styles";
import { useState, useLayoutEffect, useEffect } from "react";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { ModeActions } from "redux/actions";

interface aProps {
  children: any;
}

function AppLayout({ children }: aProps) {
  const dispatch = useDispatch();
  const [darkMode, setMode] = useState(false);

  const handleMode = (): void => {
    if (!darkMode) {
      setMode(true);
      dispatch(ModeActions.Dark());
      localStorage.setItem("darkMode", "dark");
    } else if (darkMode) {
      setMode(false);
      dispatch(ModeActions.Light());
      localStorage.removeItem("darkMode");
    }
  };

  useEffect(() => {
    dispatch(ModeActions.Default(darkMode));
  }, [dispatch, darkMode]);

  useLayoutEffect(() => {
    //this is identical to useEffect in structure and also in function, but a little faster than useEffect because it comes synchronously after all DOM mutations, meaning that it will fire as the page loads not as soon as after it loads that useEffect does, which will only fire after the browser is done with layout and paint, and hence not good for making DOM changes that are visible to the user. The useLayoutEffect is actually the 100% identical effect to class based componentDid mount because it fires synchronously before the browser has a change to paint (which is after when the useEffect is fired, making useEffect slower in response.) It is however recommended to use the useEffect first to see whether the response is slower than what you want before using the useLayoutEffect.
    if (localStorage.getItem("darkMode")) {
      setMode(true);
    } else {
      setMode(darkMode);
    }
  }, [darkMode, setMode]);

  return (
    <AppLayoutBlock>
      <Navbar darkMode={darkMode} handleDarkMode={handleMode} />
      <Sidebar darkMode={darkMode} />
      <ApplayoutContent>{children}</ApplayoutContent>
    </AppLayoutBlock>
  );
}

export default AppLayout;
