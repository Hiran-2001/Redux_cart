import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function SkeletonEffect({ count }) {
  return (
    <div style={{marginTop:42    }} className="main">
      {count.map((e) => {
        return (
             <Stack  spacing={1}>
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"21rem"}
              height={"16rem"}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={"10rem"}
              height={"25px"}
              style={{ marginLeft: "1.5rem" }}
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={"5rem"}
              height={"25px"}
              style={{ marginLeft: "1.5rem" }}
              sx={{ fontSize: "1rem" }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"18rem"}
              style={{ marginLeft: "1.5rem" }}
              height={"30px"}
            />
          </Stack> 

        );
      })}
    </div>
  );
}

export default SkeletonEffect;
