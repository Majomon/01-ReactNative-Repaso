import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register } = useForm<FormInputs>({
    defaultValues: {
      email: "mauri@mauri.com",
      password: "ABC123",
    },
  });
  return (
    <>
      <form>
        <h3>Formularios</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Password" {...register("password")} />
          <button>Ingresar</button>
        </div>
      </form>
    </>
  );
};