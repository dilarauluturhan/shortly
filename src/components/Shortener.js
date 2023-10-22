import { useEffect, useState } from 'react';
import bgMobile from '../images/bg-shorten-mobile.svg';
import bgDesktop from '../images/bg-shorten-desktop.svg';

const getLocalStorage = () => {
  let links = localStorage.getItem('links')

  if (links) {
    return JSON.parse(localStorage.getItem('links'))
  } else {
    return []
  }
};

export default function Shortener() {
  const [text, setText] = useState('');
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState('Copy');

  const bitlyAccessToken = process.env.ACCESS_TOKEN;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
    } else {
      try {
        const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bitlyAccessToken}`
          },
          body: JSON.stringify({ long_url: text })
        });

        console.log(response);

        if (response.ok) {
          const data = await response.json();
          setLinks([
            ...links,
            {
              original_link: text,
              full_short_link: data.link,
            },
          ]);
          setText('');
        } else {
          alert('Link shortening failed. Please try again later.');
        }
      } catch (error) {
        console.log(error);
        alert('Link shortening failed. Please try again later.');
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText('Copied!');
  };

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links]);

  return (
    <>
      <section className='max-width shortener relative'>
        <picture>
          <source media='(min-width: 768px)' srcSet={bgDesktop} />
          <img src={bgMobile} alt='' />
        </picture>

        <form className='form' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row'>
            <input
              type='url'
              placeholder='Shorten a link here'
              className='w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type='submit'
              className='btn-cta rounded-lg w-full md:w-40 md:ml-5'
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>

        <div className='flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow-md'>
          <article>
            <h6 className='mb-3 md:mb-0'>{links.original_link}</h6>
          </article>

          <article>
            <ul className='md:flex md:items-center'>
              <li className='md:mr-5'>
                <button className='text-cyan-500'>{links.full_short_link}</button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className='btn-cta rounded-lg text-sm focus:bg-slate-800'
                >
                  {buttonText}
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
};
