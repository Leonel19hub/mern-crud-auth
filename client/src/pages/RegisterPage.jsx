import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounder-md">
      <form
        onSubmit={handleSubmit(async (values) => {
          console.log(values);
          const res = await registerRequest(values)
          console.log(res);
        })}
      >
        <input
          type="text"
          {...register("username", { require: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="username"
        />
        <input
          type="email"
          {...register("email", { require: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="email"
        />
        <input
          type="password"
          {...register("password", { require: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
