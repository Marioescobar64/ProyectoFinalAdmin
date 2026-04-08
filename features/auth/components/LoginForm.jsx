export const LoginForm = () => {
  return (
    <form className="space-y-6">

      <div>
        <input
          type="text"
          placeholder="Email ID"
          className="w-full bg-transparent border-b border-white/50 
          text-white placeholder-white/70 py-2 
          focus:outline-none focus:border-white"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent border-b border-white/50 
          text-white placeholder-white/70 py-2 
          focus:outline-none focus:border-white"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-950 
        text-white py-3 mt-4 tracking-widest"
      >
        LOGIN
      </button>

    </form>
  );
};