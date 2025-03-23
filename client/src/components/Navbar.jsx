import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100%",
        width: "200px",
        backgroundColor: "#1E3A8A", // Equivalent to Tailwind's bg-blue-600
        color: "white",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Link
          to="/users"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px",
            width: "100%",
            textDecoration: "none",
            color: "white",
            textAlign: "left",
            display: "block",
            borderRadius: "5px",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1E40AF")} // Hover effect
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Users
        </Link>
        <Link
          to="/popular"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px",
            width: "100%",
            textDecoration: "none",
            color: "white",
            textAlign: "left",
            display: "block",
            borderRadius: "5px",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1E40AF")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Popular Posts
        </Link>
        <Link
          to="/latest"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px",
            width: "100%",
            textDecoration: "none",
            color: "white",
            textAlign: "left",
            display: "block",
            borderRadius: "5px",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1E40AF")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Latest Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
