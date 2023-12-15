export default function Header() {
  return (
    <header className="container mx-auto border-b ">
      <div className="flex justify-between items-center py-4  bg-black text-white">
        <h1 className="text-2xl font-bold">Auth w/Passport</h1>
        <div className="flex items-center gap-3">
          <a href="/login" className="p-2  rounded text-white">
            Login
          </a>
          <a className="p-2 bg-white text-black rounded" href="/register">
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
