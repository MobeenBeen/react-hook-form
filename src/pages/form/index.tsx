import { useFieldArray, useForm } from "react-hook-form";
import { userSchema, UserFormSchema } from "@/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getFieldState,
    control,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: { name: "noName",
        users:[{education:'nil', certification:'nil'}]
     },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "users",
  });
  const onSubmit = (data: UserFormSchema) => {
    console.log("FormData", data);
  };

  const genderPreview = watch("gender");
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <h2>dynamic form</h2>
        {fields.map((field,index)=>(
            <div key={field.id}>
            <label>education</label>
            <input {...register(`users.${index}.education`)}/>            
            <label>certification</label>
            <input {...register(`users.${index}.certification`)}/>          

            </div>
        ))}
        <button onClick={()=> append({education:'',certification:''})}>Add more</button>
        <div>
          <label>name</label>
          <input type="text" {...register("name")} />{" "}
          {errors.name && errors.name.message}
        </div>
        <div>
          <label>email</label>
          <input type="text" {...register("email")} />
          {errors.email && errors.email.message}
        </div>
        <div>
          <label>age</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && errors.age.message}
        </div>
        <div>
          <label>Watch: gender</label>
          <input type="text" {...register("gender")} />
          {errors.gender && errors.gender.message}
        </div>
        <p>live preview of gender:{genderPreview}</p>
        <button type="submit">Submit</button>
        <div></div>
        <button onClick={() => console.log(getFieldState("name"))}>
          state of name
        </button>
        <div>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </form>
    </>
  );
}
