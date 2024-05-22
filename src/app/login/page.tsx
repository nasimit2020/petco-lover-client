const LoginPage = () => {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default LoginPage;
