import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const Content = ({ data }) => {
  return (
    <ul>
      <li>개발: {data.developer}</li>
      <li>
        장르:{" "}
        {data.genres.map((g, idx) => (
          <span key={idx}>
            {g}
            {idx !== data.genres.length - 1 && ", "}
          </span>
        ))}
      </li>
      <li>출시일: {data.releaseDate}</li>
      <li>
        선호도:{" "}
        {[...Array(5)].map((_, idx) =>
          idx < data.interestLevel ? (
            <FaStar key={idx} />
          ) : (
            <FaRegStar key={idx} />
          )
        )}
      </li>
      <li>선호하는 이유: {data.reasonForInterest}</li>
    </ul>
  );
};

export default Content;
