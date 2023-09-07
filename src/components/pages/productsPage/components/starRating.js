import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

export default function StarRating({ stars, handler }) {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={crypto.randomUUID()}
            onClick={() => {
              handler(i);
            }}
            style={{ cursor: "pointer" }}
          >
            {stars > i ? <StarOutlinedIcon /> : <StarOutlineOutlinedIcon />}
          </span>
        );
      })}
    </>
  );
}
