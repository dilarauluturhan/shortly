import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import logo from '../images/logo-footer.svg';

export default function Footer() {
  return (
    <>
      <footer className='bg-slate-900 py-10 lg:py-20'>
        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5'>
          <article>
            <img src={logo} alt='logo' />
          </article>
          <article>
            <h3 className='text-white text-lg font-bold tracking-wide'>Features</h3>
            <ul>
              <li><button className='text-slate-200 text-sm mt-1'>Link Shortening</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Branded Links</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Analytics</button></li>
            </ul>
          </article>
          <article>
            <h3 className='text-white text-lg font-bold tracking-wide'>Resources</h3>
            <ul>
              <li><button className='text-slate-200 text-sm mt-1'>Blog</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Developers</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Support</button></li>
            </ul>
          </article>
          <article>
            <h3 className='text-white text-lg font-bold tracking-wide'>Company</h3>
            <ul>
              <li><button className='text-slate-200 text-sm mt-1'>About</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Our Team</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Careers</button></li>
              <li><button className='text-slate-200 text-sm mt-1'>Contact</button></li>
            </ul>
          </article>

          <article>
            <ul className='flex items-center gap-3'>
              <li><img src={facebook} alt='facebook' /></li>
              <li><img src={twitter} alt='twitter' /></li>
              <li><img src={pinterest} alt='pinterest' /></li>
              <li><img src={instagram} alt='instagram' /></li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
};
