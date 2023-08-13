import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1> OH no this route does not exist</h1>
            <Link to="/">

                YOu can go back to the page bby clicking here

            </Link>


        </>
    );


};

export default ErrorPage;