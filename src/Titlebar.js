import { RiMoonFill } from 'react-icons/ri';
import './index.css';

const Titlebar = () => {
  let root = document.documentElement;

  // This function will execute itself when the script is loaded
  (() => {
    // Then set the 'data-theme' attribute to whatever is in localstorage
    root.setAttribute('data-theme', localStorage.getItem('theme'));
  })();

  const handleDarkMode = () => {
    // Check what is the current theme and get the opposite one
    const targetTheme =
      root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    // Set the attribute 'data-theme' to the targetTheme
    root.setAttribute('data-theme', targetTheme);

    // Save the targetTheme to the localstorage
    localStorage.setItem('theme', targetTheme);
  };

  return (
    <nav className="titlebar">
      <h1>Where in the world?</h1>

      {/* <div className="darkmode"> */}
      <button className="darkmode" onClick={handleDarkMode}>
        <RiMoonFill className="moon" />
        <p className="dark-mode">Dark Mode</p>
      </button>
      {/* </div> */}
    </nav>
  );
};

export default Titlebar;
