import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="footer">
      <a href="">
        <FontAwesomeIcon icon={["fab", "github"]} className="github" />
      </a>
      <p>&copy; Copyright by avanich28</p>
    </footer>
  );
}
