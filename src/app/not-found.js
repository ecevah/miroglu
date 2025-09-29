export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        position: "relative",
        backgroundColor: "#f39c11",
      }}
    >
      <a
        href="/"
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-block",
        }}
        aria-label="Home"
      >
        <img
          src="/logo/logo.svg"
          alt="Logo"
          style={{ height: "clamp(40px, 10vw, 100px)", width: "auto" }}
        />
      </a>

      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 28px)",
          }}
        >
          <img
            src="/images/404.jpg"
            alt="404 - Page not found"
            style={{
              width: "min(92vw, 800px)",
              height: "auto",
              maxHeight: "calc(100svh - 180px)",
              objectFit: "contain",
            }}
          />
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "clamp(10px, 2vw, 14px) clamp(16px, 3vw, 22px)",
              backgroundColor: "#d7231a",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 600,
              borderRadius: 10,
              fontSize: "clamp(14px, 2.4vw, 16px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              transition: "background-color .15s ease",
            }}
            aria-label="Go to homepage"
          >
            Ana sayfaya dön
          </a>
        </div>
      </div>
    </div>
  );
}
