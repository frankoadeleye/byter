import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions } from "redux/actions";
import { ButtonBlock } from "./styles";

function Button({ text = "Logout" }) {
  const dispatch = useDispatch();

  const Logout = () => {
    axios.get("/remove_refresh_token_endpoint").then((response: any) => {
      dispatch(LoginActions.Logout());
    });
  };

  return (
    <ButtonBlock className="button" onClick={Logout}>
      {text}
    </ButtonBlock>
  );
}

export default Button;
