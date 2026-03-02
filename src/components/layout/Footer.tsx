export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-400">
        © {new Date().getFullYear()} TSJCommunity — Proyecto Universitario
      </div>
    </footer>
  );
}
