import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Login from "pages/login";

function PrivateRoute(Component) {
  const Auth = (props) => {
    const router = useRouter();

    interface RootState {
      Login: any;
    }

    const isLoggedIn = useSelector(
      (state: RootState) => state.Login.isLoggedIn
    );

    /*
        if(){
            
            return <Login />
        }
        */

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
}

export default PrivateRoute;
