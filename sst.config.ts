export default async function main(app: any) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const { Stack, NextjsSite } = await import("@serverless-stack/resources");

  const stack = new Stack(app, "WebStack");

  new NextjsSite(stack, "dinosaur-viewer", {
    path: ".",
    environment: {
      NEXT_STAGE: process.env.NEXT_STAGE || "",
    },
  });
}
