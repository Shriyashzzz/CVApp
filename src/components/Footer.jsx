import githubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer-link"
        href="https://github.com/Shriyashzzz/CVApp"
        target="_blank"
      >
        <img src={githubIcon} alt="github icon" className="icons github" />
        <p>Shriyashzzz</p>
      </a>
    </footer>
  );
}
