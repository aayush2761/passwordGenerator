import { useState, useCallback, useEffect, useRef } from 'react';
import bg from "./assets/bg.jpg";
import bg2 from "./assets/fabio-oyXis2kALVg-unsplash (1).jpg";
import aboutSvg from "./assets/padlock.svg";
import aboutimg from "./assets/pad.jpg";
import logo from "./assets/logo2.svg";


function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*(){}/*-+[]_';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
     <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
        <span className="text-[#36c4f1]">Azure</span>
        <span className="text-[#0062cd]">Pass</span>
      </span>
    </a>
    <div className="flex md:order-2">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <div className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 bg-opacity-80 bg-gray-700 text-center'>
          <h1 className='text-white text-3xl font-bold'>Password Generator</h1>
          <input
            ref={passwordRef}
            type='text'
            value={password}
            readOnly
            className='mt-4 mb-6 w-full p-2 text-center text-black bg-white rounded-md'
          />
          <div className='flex justify-center gap-2'>
            <button onClick={passGenerator} className='px-4 py-2 text-white bg-blue-500 rounded-md'>Generate</button>
            <button onClick={copyPasswordToClipboard} className='px-4 py-2 text-white bg-green-500 rounded-md'>Copy</button>
          </div>
          <div className='mt-4'>
            <label className='block mb-2 text-white'>
              Length: {length}
            </label>
            <input
              type='range'
              min='4'
              max='100'
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='w-full'
            />
          </div>
          <div className='mt-4'>
            <label className='block mb-2 text-white'>
              <input
                type='checkbox'
                checked={numberAllowed}
                onChange={(e) => setNumberAllowed(e.target.checked)}
                className='mr-2'
              />
              Include Numbers
            </label>
            <label className='block mb-2 text-white'>
              <input
                type='checkbox'
                checked={charAllowed}
                onChange={(e) => setCharAllowed(e.target.checked)}
                className='mr-2'
              />
              Include Special Characters
            </label>
          </div>
        </div>
      </div>

      <section id="services" className="py-12 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Service 1</h3>
                <p className="text-gray-700 mb-4">Generate passwords with lengths ranging from 1 to 100 characters to meet various security needs.</p>
                <a href="#" className="mt-auto text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Service 2</h3>
                <p className="text-gray-700 mb-4">Enhance password complexity by including numbers and special characters.</p>
                <a href="#" className="mt-auto text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Service 3</h3>
                <p className="text-gray-700 mb-4">Generate and copy multiple passwords of the same specified length effortlessly.</p>
                <a href="#" className="mt-auto text-blue-500 hover:underline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-white   ">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2">
            <img src={aboutimg} alt="About Us Illustration" />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
              At AzurePass, we are dedicated to providing a reliable and user-friendly password generator that ensures the highest level of security. Our tool is designed to create strong, customizable passwords that meet diverse security requirements, helping you protect your online presence with ease.
              </p>
              <p className="text-gray-700 mb-4">
              Our mission is to empower users with a secure and strict password generation service that combines simplicity with robust protection. We strive to deliver a tool that not only meets but exceeds industry standards for password security, ensuring your data remains safe from unauthorized access.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
