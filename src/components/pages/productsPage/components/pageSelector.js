import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./pageSelector.module.css";

export default function PageSelector({ numPages, page, setPage }) {
  return (
    numPages > 0 && (
      <nav className={styles.pageSelector}>
        <span
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          <KeyboardArrowLeftIcon
            style={{ fontSize: "large", transform: "translateY(3px)" }}
          />
        </span>
        {[...Array(numPages)].map((_, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                setPage(i + 1);
              }}
              className={page === i + 1 ? styles.selectedPage : ""}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          onClick={() => {
            if (page < numPages) setPage(page + 1);
          }}
        >
          <KeyboardArrowRightIcon
            style={{ fontSize: "large", transform: "translateY(3px)" }}
          />
        </span>
      </nav>
    )
  );
}
