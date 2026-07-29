type ProfileCardProps = {
  name: string;
  bio: string;
};

export function ProfileCard({ name, bio }: ProfileCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <img src="/avatar.png" alt={`profile image ${name}`} />
      <button>follow</button>
      <a href="/profile">Show profile</a>

      <ul>
        <li>post 1</li>
        <li>post 2</li>
      </ul>
    </div>
  );
}
