import React from "react";

import { Card, CardBody } from "@nextui-org/react";

const NotFound = () => {
  return (
    <Card className="mx-auto mt-2 max-w-md">
      <CardBody className="text-center">
        <h2 className="text-5xl">404</h2>
        <p className="text-medium">This page cannot found :(</p>
      </CardBody>
    </Card>
  );
};

export default NotFound;
