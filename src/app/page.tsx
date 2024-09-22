import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="mx-auto max-w-md">
      <CardBody className="space-y-2 text-center">
        <h1 className="text-5xl">Next.js template</h1>
        <p className="text-medium">
          A simple template for starting work with next.js
        </p>
      </CardBody>
    </Card>
  );
}
