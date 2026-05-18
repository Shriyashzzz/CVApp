import githubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer class="footer">
      <a
        class="footer-link"
        href="https://github.com/Shriyashzzz/battleship"
        target="_blank"
      >
        <img src={githubIcon} alt="github icon" class="icons github" />
        <p>Shriyashzzz</p>
      </a>
    </footer>
  );
}
