import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
  defaultValues: {
    firstName: "",
    secondName: "",
    sex: "",
    email: "",
    password: "",
    phone: ""
  }
})

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <h1>Вход</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("firstName", {
          required: "Заполните имя",
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё]+$/,
            message: "Имя должно содержать только буквы"
          }
        })} 
        placeholder = 'Имя'
        /> 
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <input {...register("secondName", {
          required: "Заполните фамилию",
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё]+$/,
            message: "Фамилия должна содержать только буквы"
          }
        })} 
        placeholder = 'Фамилия'
        /> 
        {errors.secondName && <p>{errors.secondName.message}</p>}
      </div>

      <select {...register("sex")}>
        <option value="female">Женщина</option>
        <option value="male">Мужчина</option>
        <option value="other">Другое</option>
      </select>

      <div>
        <input {...register("email", {
          required: "Заполните email",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Некорректный emal"
          }
        })} 
        placeholder = 'Почта'
        /> 
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input {...register("password", {
          required: "Заполните Пароль",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Некорректный пароль"
          }
        })} 
        placeholder = 'пароль'
        /> 
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <input {...register("phone", {
          required: "Заполните номер",
          pattern: {
            value: /^\+?[1-9]\d{9,14}$/,
            message: "Некорректный номер телефона"
          }
        })} 
        placeholder = 'Номер телефона'
        /> 
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <input type="submit" />
    </form>
    </>
  )
}
