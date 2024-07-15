"use client";

import { Button, Pagination } from "@nextui-org/react";
import React from "react";

const PaginationUI = ({ count, page, pageSize, setPage }) => {
  return (
    <div className="flex gap-2 ">
      {page !== 1 && (
        <Button
          className="w-100 h-100 font-bold"
          color="light"
          onPress={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          {`Previous`}
        </Button>
      )}
      <Pagination
        total={Math.ceil(count / pageSize)}
        className="flex justify-end z-0"
        color="primary"
        page={page}
        onChange={setPage}
      />

     { page!==Math.ceil(count / pageSize) && <Button
        className="w-100 h-100 font-bold"
        color="light"
        onPress={() => setPage((prev) => (prev < 10 ? prev + 1 : prev))}
      >
        {`Next`}
      </Button>}
    </div>
  );
};

export default PaginationUI;
