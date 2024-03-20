import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!!!!</h1>
      <h1>Error 404</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
