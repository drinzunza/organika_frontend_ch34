import './notFound.css';

function NotFound() {
  return (
    <div className="not-found">
        {/* <img src="/images/404.png" alt=""></img> */}

        <div className='error-text'>
            <a className='btn btn-dark' href='/home'>
                Go back to home
            </a>
        </div>
    </div>
  );
}

export default NotFound;
