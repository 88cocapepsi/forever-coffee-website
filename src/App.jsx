import { useMemo, useState } from "react";

export default function ForeverLandingPage() {
  const [page, setPage] = useState("home");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      name: "Cà phê đen đá",
      price: "25.000đ",
      category: "Cà phê",
      desc: "Đậm vị, thơm sâu, hậu vị mạnh mẽ.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Cà phê sữa đá",
      price: "28.000đ",
      category: "Cà phê",
      desc: "Cân bằng giữa vị cà phê đậm và sữa ngọt dịu.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Bạc xỉu",
      price: "32.000đ",
      category: "Cà phê",
      desc: "Nhẹ nhàng, thơm sữa, dễ uống cả ngày.",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1fcef?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Latte",
      price: "45.000đ",
      category: "Cà phê",
      desc: "Mượt mà, hiện đại, hợp vibe chill buổi tối.",
      img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Trà đào",
      price: "35.000đ",
      category: "Trà",
      desc: "Thanh mát, thơm đào, dễ uống và tươi sáng.",
      img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Trà tắc",
      price: "30.000đ",
      category: "Trà",
      desc: "Chua nhẹ, mát lạnh, phù hợp ngày nóng.",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Trà vải",
      price: "35.000đ",
      category: "Trà",
      desc: "Hương vải dịu, vị trà thanh, nhẹ nhàng.",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Trà hoa cúc",
      price: "38.000đ",
      category: "Trà",
      desc: "Nhẹ, thư giãn, mang cảm giác an yên.",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Mojito bạc hà",
      price: "42.000đ",
      category: "Signature",
      desc: "Mát lạnh, sảng khoái, phong cách trẻ trung.",
      img: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Soda việt quất",
      price: "40.000đ",
      category: "Signature",
      desc: "Sủi nhẹ, trái cây nổi bật, màu sắc cuốn hút.",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Yaourt đá",
      price: "38.000đ",
      category: "Signature",
      desc: "Mát lạnh, béo nhẹ, hợp cho buổi chiều.",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Cacao đá",
      price: "42.000đ",
      category: "Signature",
      desc: "Đậm đà, ngọt dịu, rất hợp không khí đêm.",
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const categories = ["Tất cả", "Cà phê", "Trà", "Signature"];

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tất cả") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const colors = {
    bg: "#120d0a",
    bg2: "#1a120d",
    card: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.10)",
    text: "#f5e6d3",
    muted: "rgba(245,230,211,0.78)",
    accent: "#d6b58a",
    accentText: "#120d0a",
  };

  const shellStyle = {
    minHeight: "100vh",
    background: colors.bg,
    color: colors.text,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const containerStyle = {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "0 24px",
  };

  const glassCard = {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: 28,
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    backdropFilter: "blur(12px)",
  };

  const navButtonStyle = (active = false) => ({
    background: active ? "rgba(214,181,138,0.15)" : "transparent",
    border: "none",
    color: active ? colors.accent : colors.text,
    fontSize: 15,
    cursor: "pointer",
    padding: "8px 0",
  });

  const pillButton = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    padding: "14px 24px",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease",
  };

  const primaryButton = {
    ...pillButton,
    background: colors.accent,
    color: colors.accentText,
    border: "none",
    boxShadow: "0 10px 24px rgba(214,181,138,0.20)",
  };

  const secondaryButton = {
    ...pillButton,
    background: "rgba(255,255,255,0.05)",
    color: colors.text,
    border: `1px solid ${colors.border}`,
  };

  const menuCategoryBtn = (active) => ({
    borderRadius: 999,
    padding: "12px 20px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    border: active ? "none" : `1px solid ${colors.border}`,
    background: active ? colors.accent : "rgba(255,255,255,0.05)",
    color: active ? colors.accentText : colors.text,
    boxShadow: active ? "0 10px 24px rgba(214,181,138,0.18)" : "none",
  });

  if (page === "menu") {
    return (
      <div style={shellStyle}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: `1px solid ${colors.border}`,
            background: "rgba(18,13,10,0.90)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              ...containerStyle,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 18,
              paddingBottom: 18,
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => setPage("home")} style={secondaryButton}>
              ← Quay lại trang chủ
            </button>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "0.18em" }}>
                FOREVER
              </div>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.30em",
                  color: colors.accent,
                  marginTop: 4,
                }}
              >
                Menu Collection
              </div>
            </div>
          </div>
        </header>

        <section style={{ ...containerStyle, paddingTop: 48, paddingBottom: 60 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 760 }}>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: colors.accent,
                }}
              >
                Menu
              </div>
              <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "14px 0 0", fontWeight: 900 }}>
                Thức uống của FOREVER
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: colors.muted, marginTop: 18 }}>
                Chọn một nhóm đồ uống để khám phá hình ảnh, phong cách và cảm giác của từng món.
                Đây là menu kiểu quảng cáo thương hiệu, tập trung vào trải nghiệm nhìn và cảm xúc.
              </p>
            </div>
            <div style={{ ...glassCard, padding: "16px 20px", fontSize: 14, color: colors.muted }}>
              {filteredItems.length} món đang hiển thị
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={menuCategoryBtn(activeCategory === category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginTop: 32,
            }}
          >
            {filteredItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedItem(item)}
                style={{
                  ...glassCard,
                  overflow: "hidden",
                  padding: 0,
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(18,13,10,0.82), rgba(18,13,10,0.00))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(18,13,10,0.60)",
                      border: `1px solid ${colors.border}`,
                      color: colors.accent,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                    }}
                  >
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: 22 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}
                  >
                    <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.15, fontWeight: 800 }}>{item.name}</h3>
                    <span
                      style={{
                        background: colors.accent,
                        color: colors.accentText,
                        borderRadius: 999,
                        padding: "8px 12px",
                        fontWeight: 800,
                        fontSize: 14,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p style={{ marginTop: 14, marginBottom: 0, color: colors.muted, lineHeight: 1.8, fontSize: 14 }}>
                    {item.desc}
                  </p>
                  <div style={{ marginTop: 18, color: colors.accent, fontWeight: 700, fontSize: 14 }}>
                    Xem chi tiết →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {selectedItem && (
          <div
            onClick={() => setSelectedItem(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(0,0,0,0.72)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 1040,
                overflow: "hidden",
                borderRadius: 32,
                background: colors.bg2,
                border: `1px solid ${colors.border}`,
                boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              <img
                src={selectedItem.img}
                alt={selectedItem.name}
                style={{ width: "100%", height: "100%", minHeight: 360, objectFit: "cover" }}
              />
              <div style={{ padding: 36 }}>
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: 999,
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${colors.border}`,
                    color: colors.accent,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                  }}
                >
                  {selectedItem.category}
                </div>
                <h2 style={{ margin: "18px 0 0", fontSize: 44, lineHeight: 1.1, fontWeight: 900 }}>
                  {selectedItem.name}
                </h2>
                <div style={{ marginTop: 16, fontSize: 28, fontWeight: 800, color: colors.accent }}>
                  {selectedItem.price}
                </div>
                <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.9, color: colors.muted }}>
                  {selectedItem.desc} Món này phù hợp để đưa vào website quảng cáo vì hình ảnh nổi bật,
                  dễ tạo cảm giác ngon mắt và giúp khách muốn ghé quán trực tiếp để trải nghiệm.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                  <button onClick={() => setSelectedItem(null)} style={primaryButton}>
                    Đóng
                  </button>
                  <button onClick={() => setPage("home")} style={secondaryButton}>
                    Về trang chủ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={shellStyle}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: `1px solid ${colors.border}`,
          background: "rgba(18,13,10,0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 18,
            paddingBottom: 18,
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "0.20em" }}>FOREVER</div>
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.35em",
                color: colors.accent,
                marginTop: 4,
              }}
            >
              Coffee & Beer
            </div>
          </div>
          <nav style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("home")} style={navButtonStyle(page === "home")}>
              Trang chủ
            </button>
            <a href="#about" style={{ color: colors.text, textDecoration: "none", fontSize: 15 }}>
              Giới thiệu
            </a>
            <button onClick={() => setPage("menu")} style={navButtonStyle(false)}>
              Menu
            </button>
            <a href="#gallery" style={{ color: colors.text, textDecoration: "none", fontSize: 15 }}>
              Hình ảnh
            </a>
            <a href="#contact" style={{ color: colors.text, textDecoration: "none", fontSize: 15 }}>
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(rgba(18,13,10,0.55), rgba(18,13,10,0.85)), url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            ...containerStyle,
            minHeight: "88vh",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            gap: 40,
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid rgba(214,181,138,0.4)",
                background: "rgba(214,181,138,0.10)",
                color: "#e8c69c",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.30em",
                marginBottom: 18,
              }}
            >
              Forever, nơi bình yên là thật!
            </div>
            <h1 style={{ fontSize: 76, lineHeight: 1.02, margin: 0, fontWeight: 900, maxWidth: 720 }}>
              FOREVER <span style={{ color: colors.accent }}>Coffee & Beer</span>
            </h1>
            <p style={{ marginTop: 24, maxWidth: 640, fontSize: 22, lineHeight: 1.8, color: colors.muted }}>
              Một không gian thư giãn, ấm áp và có chiều sâu. Nơi những ly cà phê, trà, soda và
              những câu chuyện đẹp cùng nhau ở lại lâu hơn một chút.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
              <button onClick={() => setPage("menu")} style={primaryButton}>
                Xem menu
              </button>
              <a href="#contact" style={secondaryButton}>
                Tìm đường đến quán
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            <div style={{ ...glassCard, padding: 24 }}>
              <div
                style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.30em", color: colors.accent }}
              >
                Vibe
              </div>
              <div style={{ fontSize: 40, fontWeight: 800, marginTop: 14, lineHeight: 1.15 }}>
                Ấm áp · Đêm · Chill
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.muted, marginTop: 14 }}>
                Ánh sáng vàng, âm nhạc vừa đủ, đồ uống chỉn chu và không gian mang cảm giác kể chuyện.
              </p>
            </div>
            <div style={{ ...glassCard, padding: 24, background: "rgba(43,28,18,0.80)" }}>
              <div
                style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.30em", color: colors.accent }}
              >
                Thông điệp
              </div>
              <div style={{ fontSize: 40, fontWeight: 800, marginTop: 14, lineHeight: 1.15 }}>
                Ai cũng có tuổi trẻ
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.muted, marginTop: 14 }}>
                FOREVER dừng lại một chút, uống một ly ngon và thấy mình nhẹ hơn.
              </p>
            </div>
            <div
              style={{
                ...glassCard,
                padding: 24,
                gridColumn: "1 / -1",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: 18,
                }}
              >
                <div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: colors.accent }}>2019</div>
                  <div style={{ marginTop: 8, fontSize: 14, color: colors.muted }}>Khởi đầu hành trình thương hiệu</div>
                </div>
                <div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: colors.accent }}>Signature</div>
                  <div style={{ marginTop: 8, fontSize: 14, color: colors.muted }}>
                    Cà phê, trà và đồ uống chill style FOREVER
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: colors.accent }}>Q7</div>
                  <div style={{ marginTop: 8, fontSize: 14, color: colors.muted }}>B38 Đường 4A, P. Tân Hưng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ ...containerStyle, paddingTop: 80, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.30em", color: colors.accent }}>
              Giới thiệu
            </div>
            <h2 style={{ margin: "16px 0 0", fontSize: 56, lineHeight: 1.1, fontWeight: 900 }}>
              Không chỉ là quán cà phê
            </h2>
            <p style={{ marginTop: 24, fontSize: 20, lineHeight: 1.85, color: colors.muted }}>
              FOREVER Coffee & Beer hướng đến cảm giác gần gũi, đẹp vừa đủ và có bản sắc. Đây là nơi
              để gặp bạn bè, thư giãn sau một ngày dài, hoặc ngồi một mình giữa không gian nhẹ nhàng mà
              vẫn có cá tính.
            </p>
            <p style={{ marginTop: 18, fontSize: 20, lineHeight: 1.85, color: colors.muted }}>
              Website này không tập trung bán hàng online, mà tập trung kể câu chuyện thương hiệu, cho
              khách thấy chất riêng của quán và khiến họ muốn ghé trực tiếp.
            </p>
          </div>
          <div
            style={{
              ...glassCard,
              padding: 32,
              background: "linear-gradient(135deg, #2a1c13, #17110d)",
            }}
          >
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.30em", color: colors.accent }}>
              Tuyên ngôn thương hiệu
            </div>
            <div style={{ marginTop: 24, display: "grid", gap: 18, fontSize: 34, lineHeight: 1.4, fontWeight: 700 }}>
              <div>Không hustle — chỉ chill.</div>
              <div>Nơi kể chuyện, tâm sự mỏng.</div>
              <div>Forever, nghe tim mình thương.</div>
              <div>Ai cũng có tuổi trẻ.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" style={{ ...containerStyle, paddingBottom: 80 }}>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.30em", color: colors.accent }}>
          Hình ảnh
        </div>
        <h2 style={{ margin: "16px 0 0", fontSize: 56, lineHeight: 1.1, fontWeight: 900 }}>
          Một chút không khí của FOREVER
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginTop: 32,
          }}
        >
          {menuItems.slice(0, 4).map((item, i) => (
            <div key={i} style={{ ...glassCard, overflow: "hidden" }}>
              <img src={item.img} alt={item.name} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ background: colors.bg2, padding: "80px 0" }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          <div style={{ ...glassCard, padding: 32 }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.30em", color: colors.accent }}>
              Liên hệ
            </div>
            <h2 style={{ margin: "16px 0 0", fontSize: 48, lineHeight: 1.12, fontWeight: 900 }}>
              Ghé quán một tối gần nhất
            </h2>
            <div style={{ marginTop: 28, display: "grid", gap: 14, fontSize: 20, lineHeight: 1.8, color: colors.muted }}>
              <div><span style={{ color: colors.text, fontWeight: 700 }}>Địa chỉ:</span> B38 Đường 4A, P. Tân Hưng, Q.7</div>
              <div><span style={{ color: colors.text, fontWeight: 700 }}>Điện thoại:</span> 0708 888 0891</div>
              <div><span style={{ color: colors.text, fontWeight: 700 }}>Facebook:</span> FOREVER Coffee & Beer</div>
              <div><span style={{ color: colors.text, fontWeight: 700 }}>Giờ mở cửa:</span> 07:00 – 23:00</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={primaryButton}>
                Mở Google Maps
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={secondaryButton}>
                Xem fanpage
              </a>
            </div>
          </div>

          <div style={{ ...glassCard, overflow: "hidden", minHeight: 440 }}>
            <iframe
              title="Forever Coffee & Beer Map"
              src="https://www.google.com/maps?q=B38%20%C4%90%C6%B0%E1%BB%9Dng%204A%2C%20P.%20T%C3%A2n%20H%C6%B0ng%2C%20Q.7&output=embed"
              style={{ width: "100%", height: "100%", minHeight: 440, border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${colors.border}`, background: colors.bg }}>
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            paddingTop: 24,
            paddingBottom: 24,
            fontSize: 14,
            color: "rgba(245,230,211,0.60)",
          }}
        >
          <div>© 2026 FOREVER Coffee & Beer. All rights reserved.</div>
          <div>Thiết kế theo phong cách cinematic · ấm áp · hiện đại</div>
        </div>
      </footer>
    </div>
  );
}
