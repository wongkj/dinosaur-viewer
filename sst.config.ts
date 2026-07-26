import { App, Stack, NextjsSite } from "@serverless-stack/resources";

export default function main(app: App) {
  const stack = new Stack(app, "WebStack");

  new NextjsSite(stack, "dinosaur-viewer", {
    path: ".",
    environment: {
      NEXT_STAGE: process.env.NEXT_STAGE || "",
    },
  });
}
