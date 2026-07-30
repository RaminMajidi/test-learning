import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserProfileProps = {
  userId: number;
};

export function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError("");

    fetch(`/api/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("user not found!");
        return res.json();
      })
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [userId]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
