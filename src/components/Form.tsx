import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import type { DataContact } from "../types/types";

const Error = () => {
  return <div className="text-sm mb-4 mt-2">Por favor completá este campo</div>;
};

const Form = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  1;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: DataContact) => {
    setSending(true);
    const sender = {
      to: " ",
      from: "no-reply@thk-avalos.com",
      from_name: "Salta OK",
      subject: "Contacto",
    };

    axios
      .post("https://thk-avalos.com/backend/send-email.php", { ...data, ...sender })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  const text = {
    es: {
      name: "Nombre y Apellido",
      email: "E-Mail",
      message: "Mensaje",
      send: "Contactanos",
      thanks: "Gracias por contactarte con nosotros.",
      error: "Se produjo un error al enviar el mensaje :-(",
    },
  };

  return (
    <>
      {error ? (
        <span className="text-xl font-bold">{text["es"].error}</span>
      ) : sended ? (
        <span className="text-xl font-bold">{text["es"].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input {...register("name", { required: true })} placeholder={text["es"].name} className="w-full h-11 p-3  border rounded-md text-sm text-black" />
            {errors.name && <Error />}
          </div>

          <div className="mb-4">
            <input {...register("email", { required: true })} placeholder={text["es"].email} className="w-full h-11 p-3 border rounded-md text-sm text-black" />
            {errors.email && <Error />}
          </div>

          <div className="mb-4">
            <textarea {...register("message", { required: true })} className="w-full p-3 h-32 border rounded-md text-sm text-black" placeholder={text["es"].message} />
            {errors.message && <Error />}
          </div>

          <div>{sending ? <BeatLoader /> : <button className="bg-primary rounded-md font-bold px-10 py-2 hover:text-white hover:bg-black">{text["es"].send}</button>}</div>
        </form>
      )}
    </>
  );
};

export default Form;
