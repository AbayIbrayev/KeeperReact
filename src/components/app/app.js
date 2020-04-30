import React from "react";
import Header from "../header";
import Footer from "../footer";
import Note from "../note";

const app = () => {
  return (
    <>
      <Header />
      <main>
        <Note />
      </main>
      <Footer />
    </>
  );
};

export default app;
