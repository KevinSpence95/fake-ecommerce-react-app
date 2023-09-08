import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function PageSelector({ numPages, page, setPage }) {
  return (
    numPages > 0 && (
      <nav className="pageSelector">
        <span
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          <KeyboardArrowLeftIcon />
        </span>
        {[...Array(numPages)].map((_, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                setPage(i + 1);
              }}
              className={page === i + 1 ? "selectedPage" : ""}
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
          <KeyboardArrowRightIcon />
        </span>
      </nav>
    )
  );
}
