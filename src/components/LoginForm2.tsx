import { useState } from "react";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

export function LoginForm2({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handelSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      setError("ایمیل الزامی است");
      return;
    }

    if (!password) {
      setError("رمز عبور الزامی است");
      return;
    }

    setError("");
    onSubmit(email, password);
  }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="email">ایمیل</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">رمز عبور</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">ورود</button>
    </form>
  );
}
