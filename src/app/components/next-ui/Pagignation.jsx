import React from "react";
import {Pagination} from "@nextui-org/react";

export default function Paging() {
  return (
    <Pagination isCompact showControls total={10} initialPage={1} />
  );
}
