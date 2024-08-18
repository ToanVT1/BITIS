import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Card } from "../../atoms/card";
import { useTitle } from "../../../common/hooks";

function Men() {
  const [listMen, setListMen] = useState([]);
  useTitle("Men");

  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "https://665f0fcd1e9017dc16f2a71a.mockapi.io/api/bitis/1",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
        },
      });

      // setListMen(data.data.productVariants.filter((i) => i.type));
    })();
  }, []);

  return (
    <>
    <div className="flex justify-center gap-4 mt-4">

      {listMen.map((i) => {
        return (
          <>
            <Link to={`/movie/${i.id}`}>
              <Card image={i.image} name={i.product} />
            </Link>
          </>
        );
      })}
      </div>

    </>
  );
}

export default Men;
