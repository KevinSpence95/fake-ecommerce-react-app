import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

export default function StarRating({ stars, handler, size }) {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={crypto.randomUUID()}
            onClick={() => {
              if (handler) handler(i);
            }}
            style={{ cursor: handler ? "pointer" : "" }}
          >
            {stars > i ? (
              <StarOutlinedIcon style={{ fontSize: size }} />
            ) : (
              <StarOutlineOutlinedIcon style={{ fontSize: size }} />
            )}
          </span>
        );
      })}
    </>
  );
}
