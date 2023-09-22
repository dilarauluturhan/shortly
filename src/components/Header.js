import logo from '../images/logo.svg';

export default function Header() {
  return (
    <>
      <header className='header max-width'>
        <div>
          <img src={logo} alt='' />
          <nav>
            <ul>
              <li><button>Features</button></li>
              <li><button>Pricing</button></li>
              <li><button>Resources</button></li>
            </ul>
          </nav>
        </div>
        <div>
          <ul>
            <li><button>Login</button></li>
            <li><button className='btn-cta'>Sign Up</button></li>
          </ul>
        </div>
      </header>
    </>
  )
};
