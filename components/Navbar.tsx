export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
      borderBottom: "1px solid #222",
    }}>
      <h1>Quantum DEX</h1>

      <button style={{
        padding: "8px 16px",
        cursor: "pointer"
      }}>
        Conectar Wallet
      </button>
    </nav>
  );
}
