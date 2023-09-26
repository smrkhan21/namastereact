import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div className="main">
            <h1>Oops!!</h1>
            <h2>Something wend wrong</h2>
            <h3>
                {err.status} : {err.statusText}
            </h3>
        </div>
    )
}

export default Error;