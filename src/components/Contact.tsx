import { useEffect } from "react";
import Form from "./Form";
import { useDataContext } from "../context/useDataContext";
import ChangeHeaderColor from "../utils/ChangeHeaderColor";

const Contact = () => {
  const { lan } = useDataContext();

  useEffect(() => {
    ChangeHeaderColor("#contact");
  }, []);

  return (
    <section id="contact">
      <div className="container px-14 py-24 m-auto max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-16">{lan === "es" ? "Contacto" : "Contact"}</h1>
        <div className="m-auto max-w-3xl">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
