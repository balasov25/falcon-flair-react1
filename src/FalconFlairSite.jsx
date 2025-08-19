import React from 'react'

export default function FalconFlairSite() {
  // === Brand ===
  const BRAND_GREEN = "#0f2a23"; // dark green from your logo
  const BRAND_GOLD = "#d4af37"; // gold accent
  const LOGO_URL = "/logo.svg"; // public/logo.svg
  const WHATSAPP = "https://wa.me/971581321831";

  function openWA(message) {
    const text = encodeURIComponent(message);
    window.open(`${WHATSAPP}?text=${text}`, "_blank");
  }

  function handleQuick(msg) {
    openWA(
      `Hello Falcon Flair!\n${msg}\nService details: 24/7 • No Deposit • Free Delivery.`
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const msg = `Booking request\nName: ${data.name}\nWhatsApp: ${data.phone}\nCar: ${data.car}\nDates: ${data.start} → ${data.end}\nPickup: ${data.pickup}\nNote: ${data.note || "-"}`;
    openWA(msg);
  }

  const cars = [
    {
      title: "BMW M440i (2025)",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop",
      perks: ["Sport Coupe", "Premium Interior", "City & Highway"],
    },
    {
      title: "Mercedes-AMG C43 (2023)",
      img: "https://images.unsplash.com/photo-1549921296-3a6b3d77c43a?q=80&w=1600&auto=format&fit=crop",
      perks: ["AMG Performance", "Executive Look", "Balanced Ride"],
    },
    {
      title: "Mercedes-AMG CLE53 (2024)",
      img: "https://images.unsplash.com/photo-1612036782180-6f0b6be0d218?q=80&w=1600&auto=format&fit=crop",
      perks: ["New Model", "Luxury Coupe", "Head-Turner"],
    },
    {
      title: "Rox 01 VIP (2025)",
      img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop",
      perks: ["VIP Experience", "Spacious", "Events & Business"],
    },
    {
      title: "Audi RS3 (2024)",
      img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1c?q=80&w=1600&auto=format&fit=crop",
      perks: ["Compact Rocket", "Quattro Grip", "City Friendly"],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_GREEN, color: "#e9e5d0", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-40 w-full" style={{ borderBottom: "1px solid rgba(212,175,55,0.2)", background: "rgba(15,42,35,0.8)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={LOGO_URL} alt="Falcon Flair" style={{ height: 36, width: "auto" }} />
            <span style={{ fontWeight: 600 }}>Falcon Flair Car Rental</span>
          </div>
          <nav style={{ display: "none" }} aria-hidden="true" />
          <button
            onClick={() => handleQuick("I’d like to book a car.")}
            style={{ borderRadius: 16, padding: "8px 14px", fontWeight: 600, backgroundColor: BRAND_GOLD, color: "#0b1f1a", border: "none", cursor: "pointer" }}
          >
            WhatsApp Booking
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative" style={{ overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: -1,
          background: "radial-gradient(1200px 600px at 20% -20%, rgba(212,175,55,0.15), transparent), radial-gradient(1200px 600px at 120% 20%, rgba(212,175,55,0.08), transparent)"
        }} />
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 16px" }}>
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", borderRadius: 999, padding: "6px 10px", marginBottom: 12, background: "rgba(212,175,55,0.12)", color: BRAND_GOLD }}>
                24/7 • No Deposit • Free Delivery
              </span>
              <h1 style={{ fontSize: 40, lineHeight: 1.15, fontWeight: 800, margin: 0 }}>
                Luxury Cars. <span style={{ color: BRAND_GOLD }}>Zero Deposit.</span> 24/7 Dubai Service.
              </h1>
              <p style={{ marginTop: 12, opacity: 0.9, maxWidth: 720 }}>
                Premium luxury & sports car rentals with airport and hotel delivery. Daily, weekly, and monthly options with hassle-free booking.
              </p>
              <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => handleQuick("Please share availability & rates.")}
                  style={{ borderRadius: 16, padding: "12px 18px", fontWeight: 600, background: "transparent", border: `1px solid ${BRAND_GOLD}`, color: BRAND_GOLD, cursor: "pointer" }}
                >
                  Check Availability
                </button>
                <a
                  href="#fleet"
                  style={{ borderRadius: 16, padding: "12px 18px", fontWeight: 600, backgroundColor: BRAND_GOLD, color: "#0b1f1a", textDecoration: "none" }}
                >
                  Explore Fleet
                </a>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.35)", border: `1px solid ${BRAND_GOLD}22` }}>
                <img
                  src="https://images.unsplash.com/photo-1606664437759-99a9011f9b33?q=80&w=2000&auto=format&fit=crop"
                  alt="Dubai skyline with a luxury car"
                  style={{ width: "100%", height: 360, objectFit: "cover" }}
                />
                <div style={{ position: "absolute", left: 16, right: 16, bottom: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, fontSize: 10 }}>
                  {["Free Delivery", "Airport Pick-up", "No Deposit"].map((t, i) => (
                    <div key={i} style={{ textAlign: "center", fontWeight: 700, padding: "8px 10px", borderRadius: 12, background: "rgba(15,42,35,0.85)", border: `1px solid ${BRAND_GOLD}55`, color: BRAND_GOLD }}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 16px" }}>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {[{ title: "24/7 Support", desc: "Round-the-clock assistance and roadside help whenever you need it." }, { title: "No Deposit", desc: "Book your dream car without upfront deposit. Simple, transparent terms." }, { title: "Free Delivery", desc: "Fast delivery to DXB/DWC airports, hotels, and business addresses across Dubai." }].map((f) => (
            <div key={f.title} style={{ borderRadius: 16, padding: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${BRAND_GOLD}22` }}>
              <h3 style={{ color: BRAND_GOLD, margin: 0 }}>{f.title}</h3>
              <p style={{ marginTop: 8, opacity: 0.9 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" style={{ maxWidth: 1120, margin: "0 auto", padding: "16px 16px 48px" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 16 }}>
          <h2 style={{ color: BRAND_GOLD, fontSize: 28, margin: 0 }}>Featured Fleet</h2>
          <button onClick={() => handleQuick("I’d like a recommendation for the best car for my trip.")} style={{ borderRadius: 12, padding: "8px 12px", fontWeight: 600, backgroundColor: BRAND_GOLD, color: "#0b1f1a", border: "none", cursor: "pointer" }}>Get a Quote</button>
        </div>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {cars.map((c) => (
            <div key={c.title} style={{ borderRadius: 20, overflow: "hidden", background: "rgba(255,255,255,0.04)", border: `1px solid ${BRAND_GOLD}22` }}>
              <img src={c.img} alt={c.title} style={{ height: 208, width: "100%", objectFit: "cover" }} />
              <div style={{ padding: 16 }}>
                <h3 style={{ color: BRAND_GOLD, margin: 0 }}>{c.title}</h3>
                <ul style={{ marginTop: 8, opacity: 0.9 }}>
                  {c.perks.map((p) => (<li key={p}>{p}</li>))}
                </ul>
                <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                  <button onClick={() => handleQuick(`Car selected: ${c.title}`)} style={{ borderRadius: 12, padding: "8px 12px", fontWeight: 600, backgroundColor: BRAND_GOLD, color: "#0b1f1a", border: "none", cursor: "pointer" }}>Book</button>
                  <a href="#booking" style={{ borderRadius: 12, padding: "8px 12px", fontWeight: 600, border: `1px solid ${BRAND_GOLD}55`, color: BRAND_GOLD, textDecoration: "none" }}>Check Dates</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="booking" style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 16px" }}>
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ borderRadius: 20, padding: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${BRAND_GOLD}22` }}>
            <h2 style={{ color: BRAND_GOLD, margin: 0 }}>Instant Booking</h2>
            <p style={{ marginTop: 8, opacity: 0.9 }}>Fill the form and we’ll confirm on WhatsApp within minutes.</p>
            <form onSubmit={onSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
              {[["Full Name","name","text"],["WhatsApp Number","phone","text"],["Pick-up Date","start","date"],["Return Date","end","date"]].map(([label,name,type]) => (
                <div key={name}>
                  <label style={{ fontSize: 14, fontWeight: 600 }}>{label}</label>
                  <input required name={name} type={type} style={{ marginTop: 6, width: "100%", borderRadius: 12, padding: "10px 12px", background: "rgba(255,255,255,0.06)", border: `1px solid ${BRAND_GOLD}22`, color: "#e9e5d0" }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Car</label>
                <select name="car" style={{ marginTop: 6, width: "100%", borderRadius: 12, padding: "10px 12px", background: "rgba(255,255,255,0.06)", border: `1px solid ${BRAND_GOLD}22`, color: "#e9e5d0" }}>
                  {cars.map((c) => (<option key={c.title} value={c.title}>{c.title}</option>))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Pick-up Location</label>
                <select name="pickup" style={{ marginTop: 6, width: "100%", borderRadius: 12, padding: "10px 12px", background: "rgba(255,255,255,0.06)", border: `1px solid ${BRAND_GOLD}22`, color: "#e9e5d0" }}>
                  {["DXB Airport","DWC Airport","Hotel (Dubai)","Business Bay","Dubai Mall"].map((p) => (<option key={p} value={p}>{p}</option>))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 14, fontWeight: 600 }}>Notes</label>
                <textarea name="note" rows={3} style={{ marginTop: 6, width: "100%", borderRadius: 12, padding: "10px 12px", background: "rgba(255,255,255,0.06)", border: `1px solid ${BRAND_GOLD}22`, color: "#e9e5d0" }} placeholder="Flight number, special requests, extra driver…" />
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button style={{ borderRadius: 16, padding: "12px 18px", fontWeight: 700, backgroundColor: BRAND_GOLD, color: "#0b1f1a", border: "none", cursor: "pointer" }}>Send to WhatsApp</button>
                <button type="button" onClick={() => handleQuick("I want to book now. Please call me.")} style={{ borderRadius: 16, padding: "12px 18px", fontWeight: 700, border: `1px solid ${BRAND_GOLD}55`, color: BRAND_GOLD, background: "transparent", cursor: "pointer" }}>Call Me Back</button>
              </div>
            </form>
            <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>By submitting, you agree to be contacted on WhatsApp regarding your booking.</p>
          </div>

          <div style={{ borderRadius: 20, padding: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${BRAND_GOLD}22` }}>
            <h3 style={{ color: BRAND_GOLD, margin: 0 }}>What you need</h3>
            <ul style={{ marginTop: 8, opacity: 0.9 }}>
              <li>Valid driving license (International Permit for non-GCC where required)</li>
              <li>Passport copy & UAE entry stamp (tourists) or Emirates ID (residents)</li>
              <li>Card for security hold if applicable (no deposit required policy)</li>
            </ul>
            <div style={{ marginTop: 16, borderRadius: 16, overflow: "hidden", border: `1px solid ${BRAND_GOLD}22` }}>
              <iframe title="Falcon Flair Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115950.114!2d55.17128!3d25.204849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: "100%", height: 256, border: 0 }} />
            </div>
            <div style={{ marginTop: 8 }}>
              <p><strong style={{ color: BRAND_GOLD }}>Address:</strong> Business Bay, Dubai — <em>(replace with your exact address)</em></p>
              <p><strong style={{ color: BRAND_GOLD }}>WhatsApp:</strong> +971 581 321 831 — <em>(update the number at the top too)</em></p>
              <p><strong style={{ color: BRAND_GOLD }}>Email:</strong> bookings@falconflair.ae <em>(placeholder)</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${BRAND_GOLD}22` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "20px 16px", fontSize: 14, color: "#d9d5c2", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={LOGO_URL} alt="Falcon Flair" style={{ height: 24 }} />
            <span>© {new Date().getFullYear()} Falcon Flair Car Rental</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href="#booking" style={{ color: "inherit", textDecoration: "underline" }}>Book</a>
            <span>·</span>
            <a href="#fleet" style={{ color: "inherit", textDecoration: "underline" }}>Fleet</a>
            <span>·</span>
            <button onClick={() => handleQuick("Hello! I have a question.")} style={{ color: "inherit", textDecoration: "underline", background: "transparent", border: 0, cursor: "pointer" }}>WhatsApp</button>
          </div>
        </div>
      </footer>
    </div>
  );
}