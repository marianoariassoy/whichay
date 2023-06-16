import { useEffect } from "react";
import Layout from "../../layout/Layout";

const Error = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("text-primary");
  }, []);

  return (
    <Layout>
      <section className="absolute -top-24 -z-10 w-full h-screen flex items-center justify-center text-center px-16">
        <h1 className="font-bold text-4xl">Página no encontrada</h1>
      </section>
    </Layout>
  );
};

export default Error;
