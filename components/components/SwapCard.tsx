export default function SwapCard() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
      }}
    >
      <h2>Swap</h2>

      <input
        type="text"
        placeholder="Token A"
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="text"
        placeholder="Token B"
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <button style={{ width: "100%", padding: "10px" }}>
        Swap
      </button>
    </div>
  );
}
