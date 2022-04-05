import React from 'react';
import Head from "next/head";
import tw, { styled } from "twin.macro";

import { MainContext } from "../context/MainContext";

export default function Home() {

  const { setName } = React.useContext(MainContext);



  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Dashboard
        </h1>
      </main>

    </div>
  );
}
