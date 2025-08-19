// src/components/CarDetails.jsx
import { Link } from "react-router-dom";

const BRAND_GOLD = "#d4af37";
const WHATSAPP = "https://wa.me/971581321831"; // numaranı burada tut

export default function CarDetails({
  slug,
  title,
  hero,
  gallery = [],
  video,           // YouTube embed URL (opsiyonel)
  specs = [],      // ["2025 • Automatic", "Petrol", ...]
  highlights = [], // ["No Deposit", "Free Delivery", ...]
  priceNote = "Daily, weekly, monthly rates available",
}) {
  const openWA = (msg) => {
    const text = encodeURIComponent(
      `Hello Falcon Flair!\nI want to book: ${title}\n${msg}`
    );
    window.open(`${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 40 }}>
      <Link to="/" style={{ color: BRAND_GOLD }}>&larr; Back to Fleet</Link>

      <h1 style={{ marginTop: 10 }}>{title}</h1>

      {/* badges */}
      <div style={{ margin: "10px 0 18px", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["24/7 Support", "No Deposit", "Free Delivery"].map((t) => (
          <span key={t} className="pill" style={{ borderColor: `${BRAND_GOLD}55` }}>
            {t}
          </span>
        ))}
      </div>

      {/* gallery */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 12 }}>
        <img src={hero} alt={title} style={{ gridColumn: "span 3", width: "100%", borderRadius: 18 }} />
        {gallery.slice(0, 6).map((src, i) => (
          <img key={i} src={src} alt={`${title} ${i+1}`} style={{ width: "100%", borderRadius: 12 }} />
        ))}
      </div>

      {/* video (optional) */}
      {video && (
        <div style={{ marginTop: 18 }}>
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src={video}
              title={`${title} video`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 14 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* details */}
      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <div className="card">
          <h3 style={{ color: BRAND_GOLD, margin: 0 }}>Highlights</h3>
          <ul style={{ margin: "8px 0 0 18px" }}>
            {highlights.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>

        <div className="card">
          <h3 style={{ color: BRAND_GOLD, margin: 0 }}>Specs</h3>
          <ul style={{ margin: "8px 0 0 18px" }}>
            {specs.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>

        <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h3 style={{ color: BRAND_GOLD, margin: 0 }}>Rates</h3>
            <p style={{ margin: 6, opacity: 0.9 }}>{priceNote}</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button className="btn" onClick={() => openWA("Please share availability & rates.")} style={{ border: `1px solid ${BRAND_GOLD}`, color: BRAND_GOLD, background: "transparent" }}>
              Check Availability
            </button>
            <button className="btn" onClick={() => openWA("I would like to book now.")} style={{ background: BRAND_GOLD, color: "#0b1f1a" }}>
              Book on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
