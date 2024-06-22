import React from "react";
import Head from "next/head";

export default function WebTitle() {
  return (
    <Head>
      <title>{"BH`s Blog"}</title>
      <meta name="description" content="BH's Blog Project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
