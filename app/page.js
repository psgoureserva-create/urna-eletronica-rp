export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#101827",
      color: "white",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px" }}>URNA ELETRÔNICA RP</h1>
      <p style={{ color: "#b8c4d6" }}>
        Sistema de votação do seu servidor
      </p>

      <button style={{
        marginTop: "25px",
        padding: "15px 30px",
        background: "#1769e0",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        Entrar com Discord
      </button>

      <p style={{ marginTop: "40px", color: "#8290a5" }}>
        Sistema de eleições • RP
      </p>
    </main>
  );
}
