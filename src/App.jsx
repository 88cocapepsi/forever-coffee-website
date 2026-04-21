import { useMemo, useState } from "react";

export default function ForeverLandingPage() {
  const [page, setPage] = useState("home");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedItem, setSelectedItem] = useState(null);

  const img = (file) => `/drinks/${file}`;

  const categoryMap = [
    {
      label: "Cà phê",
      items: [
        {
          name: "Cà phê đá/nóng",
          price: "20k",
          desc: "Đậm vị cà phê truyền thống, phù hợp buổi sáng và những người thích vị mạnh.",
          image: img("IMG_0096.JPG"),
        },
        {
          name: "Cà phê sữa",
          price: "23k",
          desc: "Cà phê sữa đá quen thuộc, cân bằng giữa vị cà phê và sữa.",
          image: img("IMG_0100.JPG"),
        },
        {
          name: "Bạc xỉu",
          price: "23k",
          desc: "Béo nhẹ, thơm sữa, dễ uống và rất hợp khách thích vị ngọt dịu.",
          image: img("IMG_0097.JPG"),
        },
        {
          name: "Cà phê đá xay",
          price: "30k",
          desc: "Mát lạnh, đậm vị cà phê, phong cách trẻ trung và dễ thưởng thức.",
          image: img("IMG_0099.JPG"),
        },
        {
          name: "Cà phê đá xay bạc hà",
          price: "30k",
          desc: "Biến tấu mát lạnh với bạc hà, hợp những buổi chiều cần cảm giác sảng khoái.",
          image: img("IMG_0106.JPG"),
        },
        {
          name: "Cà phê sữa bạc hà",
          price: "28k",
          desc: "Sữa cà phê kết hợp bạc hà, vị lạ miệng và hiện đại.",
          image: img("IMG_0098.JPG"),
        },
        {
          name: "Cà phê latte",
          price: "33k",
          desc: "Latte mượt mà, đẹp mắt, phù hợp phong cách chill của FOREVER.",
          image: img("IMG_0094.JPG"),
        },
        {
          name: "Matcha latte",
          price: "33k",
          desc: "Matcha dịu, thơm sữa, xanh mát và rất hợp chụp ảnh.",
          image: img("IMG_0093.JPG"),
        },
      ],
    },
    {
      label: "Sữa",
      items: [
        {
          name: "Sữa tươi đá/nóng",
          price: "25k",
          desc: "Món nhẹ nhàng, phù hợp mọi lứa tuổi.",
          image: img("IMG_0100.JPG"),
        },
        {
          name: "Sữa tươi trân châu",
          price: "28k",
          desc: "Sữa tươi kết hợp topping, dễ uống và trẻ trung.",
          image: img("IMG_0100.JPG"),
        },
        {
          name: "Sữa tươi cà phê",
          price: "28k",
          desc: "Sữa tươi pha cà phê, dịu hơn cà phê sữa truyền thống.",
          image: img("IMG_0097.JPG"),
        },
        {
          name: "Sữa chanh sữa tắc",
          price: "28k",
          desc: "Chua ngọt thanh mát, phù hợp ngày nóng.",
          image: img("IMG_0144.JPG"),
        },
        {
          name: "Sâm dứa sữa sâm",
          price: "28k",
          desc: "Mùi thơm dịu, cảm giác mát và lạ miệng.",
          image: img("IMG_0142.JPG"),
        },
        {
          name: "Dừa sữa đá xay",
          price: "28k",
          desc: "Béo thơm vị dừa, mát lạnh, dễ uống.",
          image: img("IMG_0135.JPG"),
        },
        {
          name: "Matcha đá xay",
          price: "33k",
          desc: "Đá xay matcha đậm vị, mềm mịn và đẹp mắt.",
          image: img("IMG_0095.JPG"),
        },
      ],
    },
    {
      label: "Cacao",
      items: [
        {
          name: "Cacao nóng/đá",
          price: "28k",
          desc: "Cacao đậm đà, ngọt dịu, phù hợp ngày mưa hoặc buổi tối.",
          image: img("IMG_0104.JPG"),
        },
        {
          name: "Cacao sữa dầm",
          price: "30k",
          desc: "Béo, ngọt nhẹ, đậm vị cacao sữa.",
          image: img("IMG_0101.JPG"),
        },
        {
          name: "Cacao đá xay",
          price: "30k",
          desc: "Mát lạnh, chocolate rõ vị, rất hợp khách trẻ.",
          image: img("IMG_0105.JPG"),
        },
        {
          name: "Cacao đá xay bạc hà",
          price: "33k",
          desc: "Cacao kết hợp bạc hà tạo cảm giác mát và khác biệt.",
          image: img("IMG_0106.JPG"),
        },
        {
          name: "Cacao đá xay oreo",
          price: "33k",
          desc: "Béo thơm với oreo, đậm chất món signature kiểu dessert drink.",
          image: img("IMG_0102.JPG"),
        },
        {
          name: "Cacao dừa",
          price: "33k",
          desc: "Cacao pha vị dừa, béo thơm và mềm mịn.",
          image: img("IMG_0103.JPG"),
        },
      ],
    },
    {
      label: "Trà",
      items: [
        { name: "Hồng trà phúc bồn tử", price: "28k", desc: "Trà trái cây vị phúc bồn tử, thơm và nổi bật.", image: img("IMG_0113.JPG") },
        { name: "Hồng trà việt quất", price: "28k", desc: "Vị việt quất chua ngọt, màu sắc nổi bật.", image: img("IMG_0108.JPG") },
        { name: "Hồng trà ổi", price: "28k", desc: "Trà ổi thanh nhẹ, dễ uống.", image: img("IMG_0142.JPG") },
        { name: "Hồng trà dâu", price: "28k", desc: "Hương dâu dịu, hợp khách thích vị ngọt thanh.", image: img("IMG_0110.JPG") },
        { name: "Hồng trà đào", price: "28k", desc: "Đào thơm, nhẹ nhàng, rất phổ biến.", image: img("IMG_0114.JPG") },
        { name: "Hồng trà xí muội tắc", price: "28k", desc: "Chua mặn ngọt nhẹ, rất bắt vị.", image: img("IMG_0145.JPG") },
        { name: "Hồng trà dưa hấu", price: "28k", desc: "Trà trái cây mát nhẹ với sắc đỏ tươi.", image: img("IMG_0151.JPG") },
        { name: "Hồng trà lựu", price: "28k", desc: "Lựu đỏ đẹp mắt, vị thanh mát.", image: img("IMG_0143.JPG") },
        { name: "Hồng trà vải", price: "28k", desc: "Vị vải thanh, thơm nhẹ và dễ uống.", image: img("IMG_0109.JPG") },
        { name: "Hồng trà nho", price: "28k", desc: "Vị nho nổi bật, màu sắc cuốn hút.", image: img("IMG_0111.JPG") },
        { name: "Hồng trà xoài", price: "28k", desc: "Vị xoài nhiệt đới, hợp khẩu vị số đông.", image: img("IMG_0107.JPG") },
        { name: "Hồng trà gừng", price: "28k", desc: "Ấm nhẹ và thư giãn.", image: img("IMG_0147.JPG") },
        { name: "Hồng trà tắc", price: "28k", desc: "Chua thanh, mát, giải khát tốt.", image: img("IMG_0144.JPG") },
        { name: "Trà sữa trân châu", price: "28k", desc: "Vị trà sữa quen thuộc, dễ uống.", image: img("IMG_0100.JPG") },
        { name: "Trà sữa cà phê caramel", price: "33k", desc: "Pha trộn giữa trà sữa, cà phê và caramel.", image: img("IMG_0101.JPG") },
        { name: "Trà la hán hoa cúc", price: "28k", desc: "Dịu nhẹ, thiên về cảm giác thư giãn.", image: img("IMG_0147.JPG") },
        { name: "Trà hoa đậu biếc", price: "28k", desc: "Màu sắc đẹp mắt, thanh nhẹ.", image: img("IMG_0108.JPG") },
        { name: "Trà atiso", price: "28k", desc: "Vị thảo mộc nhẹ, phù hợp khách thích đồ uống dịu.", image: img("IMG_0143.JPG") },
        { name: "Trà lipton chanh", price: "28k", desc: "Vị chanh quen thuộc, dễ uống, giải khát tốt.", image: img("IMG_0144.JPG") },
        { name: "Lipton sữa trân châu", price: "30k", desc: "Biến tấu sữa trân châu phong cách lipton.", image: img("IMG_0100.JPG") },
      ],
    },
    {
      label: "Sinh tố",
      items: [
        { name: "Sinh tố bơ", price: "30k", desc: "Sinh tố bơ béo mịn, rất hợp phong cách quán.", image: img("IMG_0140.JPG") },
        { name: "Sinh tố mít", price: "30k", desc: "Mùi mít rõ, ngọt thơm và dễ uống.", image: img("IMG_0128.JPG") },
        { name: "Sinh tố xoài", price: "30k", desc: "Xoài chín thơm, màu vàng đẹp mắt.", image: img("IMG_0132.JPG") },
        { name: "Sinh tố dâu", price: "30k", desc: "Màu hồng nổi bật, vị dâu dễ uống.", image: img("IMG_0138.JPG") },
        { name: "Sinh tố đu đủ", price: "30k", desc: "Ngọt dịu, chất trái cây rõ.", image: img("IMG_0137.JPG") },
        { name: "Sinh tố chuối", price: "30k", desc: "Béo nhẹ, hợp khách thích món mềm vị.", image: img("IMG_0139.JPG") },
        { name: "Sinh tố dưa gang", price: "30k", desc: "Mát nhẹ, màu sắc thanh dịu.", image: img("IMG_0136.JPG") },
        { name: "Sinh tố mãng cầu", price: "30k", desc: "Chua ngọt mềm vị, khá dễ uống.", image: img("IMG_0133.JPG") },
        { name: "Sinh tố khoai môn", price: "30k", desc: "Màu tím nhẹ, vị béo đặc trưng.", image: img("IMG_0134.JPG") },
        { name: "Sinh tố sapoche", price: "30k", desc: "Mùi sapoche đặc trưng, ngọt dịu.", image: img("IMG_0130.JPG") },
        { name: "Sinh tố dừa", price: "30k", desc: "Thơm dừa, mát và béo nhẹ.", image: img("IMG_0135.JPG") },
        { name: "Sinh tố phúc bồn tử", price: "30k", desc: "Màu đẹp, vị berry nổi bật.", image: img("IMG_0131.JPG") },
        { name: "Sinh tố việt quất", price: "30k", desc: "Màu tím đẹp, vị việt quất thanh nhẹ.", image: img("IMG_0129.JPG") },
      ],
    },
    {
      label: "Nước ép",
      items: [
        { name: "Nước ép ổi", price: "30k", desc: "Ổi xanh mát, thanh và rất hợp ngày nóng.", image: img("IMG_0142.JPG") },
        { name: "Nước ép cam", price: "30k", desc: "Cam tươi, vị chua ngọt tự nhiên.", image: img("IMG_0147.JPG") },
        { name: "Nước ép thơm", price: "30k", desc: "Thơm mát, tươi sáng và dễ uống.", image: img("IMG_0141.JPG") },
        { name: "Nước ép cà rốt", price: "30k", desc: "Màu cam đẹp, nhẹ nhàng và tốt cho sức khỏe.", image: img("IMG_0150.JPG") },
        { name: "Nước ép cà chua", price: "30k", desc: "Đậm màu, vị thanh và nổi bật.", image: img("IMG_0151.JPG") },
        { name: "Cam sữa", price: "30k", desc: "Cam kết hợp sữa, mềm vị hơn nước ép cam truyền thống.", image: img("IMG_0148.JPG") },
        { name: "Nước ép dưa hấu", price: "30k", desc: "Giải khát tốt, màu đỏ tươi bắt mắt.", image: img("IMG_0143.JPG") },
        { name: "Đá chanh", price: "30k", desc: "Mát, chua nhẹ, cực kỳ giải khát.", image: img("IMG_0144.JPG") },
        { name: "Chanh muối", price: "30k", desc: "Vị chanh muối quen thuộc, mát và dễ uống.", image: img("IMG_0145.JPG") },
        { name: "Chanh dây", price: "30k", desc: "Chua thơm, cực hợp mùa nóng.", image: img("IMG_0146.JPG") },
        { name: "Cam mật ong", price: "30k", desc: "Cam tươi pha mật ong, ngọt dịu và dễ chịu.", image: img("IMG_0149.JPG") },
      ],
    },
    {
      label: "Soda",
      items: [
        { name: "Soda bạc hà", price: "30k", desc: "Mát lạnh, the nhẹ, màu sắc tươi sáng.", image: img("IMG_0119.JPG") },
        { name: "Soda chanh dây", price: "30k", desc: "Chanh dây sủi bọt, chua ngọt nổi bật.", image: img("IMG_0127.JPG") },
        { name: "Soda chanh đường", price: "30k", desc: "Thanh mát, phù hợp giải khát.", image: img("IMG_0126.JPG") },
        { name: "Soda dâu", price: "30k", desc: "Màu đỏ đẹp mắt, trẻ trung.", image: img("IMG_0124.JPG") },
        { name: "Soda đào", price: "30k", desc: "Đào thanh ngọt, nhìn rất bắt mắt.", image: img("IMG_0125.JPG") },
        { name: "Soda nho", price: "30k", desc: "Màu tím nổi bật, vị nho trẻ trung.", image: img("IMG_0122.JPG") },
        { name: "Soda phúc bồn tử", price: "30k", desc: "Berry đỏ đậm, vị dễ nhớ.", image: img("IMG_0120.JPG") },
        { name: "Soda vải", price: "30k", desc: "Thanh nhẹ, trong trẻo và dễ uống.", image: img("IMG_0118.JPG") },
        { name: "Soda việt quất", price: "30k", desc: "Sủi bọt, xanh tím nổi bật.", image: img("IMG_0117.JPG") },
        { name: "Soda ổi", price: "30k", desc: "Màu nhẹ, vị ổi thanh mát.", image: img("IMG_0121.JPG") },
        { name: "Soda xoài", price: "30k", desc: "Xoài vàng đẹp, cảm giác nhiệt đới.", image: img("IMG_0116.JPG") },
        { name: "Soda kiwi", price: "30k", desc: "Kiwi xanh sáng, rất hợp hình ảnh quảng cáo.", image: img("IMG_0123.JPG") },
      ],
    },
    {
      label: "Yaourt",
      items: [
        { name: "Yaourt đá", price: "25k", desc: "Yaourt đá mát lạnh, đơn giản và dễ uống.", image: img("IMG_0101.JPG") },
        { name: "Yaourt ổi", price: "28k", desc: "Yaourt kết hợp vị ổi thanh dịu.", image: img("IMG_0142.JPG") },
        { name: "Yaourt vải", price: "28k", desc: "Nhẹ nhàng, thanh và thơm vải.", image: img("IMG_0109.JPG") },
        { name: "Yaourt dâu", price: "28k", desc: "Hồng tươi, ngọt nhẹ và dễ uống.", image: img("IMG_0138.JPG") },
        { name: "Yaourt đào", price: "28k", desc: "Mùi đào nhẹ nhàng, hợp khẩu vị số đông.", image: img("IMG_0114.JPG") },
        { name: "Yaourt nho", price: "28k", desc: "Vị nho nổi bật, màu sắc đẹp.", image: img("IMG_0111.JPG") },
        { name: "Yaourt thơm", price: "28k", desc: "Chua ngọt nhẹ, tropical.", image: img("IMG_0141.JPG") },
        { name: "Yaourt cam tươi", price: "28k", desc: "Cam dịu mát pha cùng yaourt.", image: img("IMG_0147.JPG") },
        { name: "Yaourt việt quất", price: "28k", desc: "Việt quất thanh, màu đẹp.", image: img("IMG_0129.JPG") },
        { name: "Yaourt chanh dây", price: "28k", desc: "Chua thơm, mát và dễ uống.", image: img("IMG_0146.JPG") },
        { name: "Yaourt phúc bồn tử", price: "28k", desc: "Berry đỏ đậm, nổi bật trên menu.", image: img("IMG_0131.JPG") },
        { name: "Yaourt trái cây dầm", price: "32k", desc: "Nhiều hương vị trái cây trong một món, phù hợp làm món nổi bật.", image: img("IMG_0148.JPG") },
      ],
    },
    {
      label: "Mojito",
      items: [
        { name: "Mojito bạc hà", price: "39k", desc: "Phiên bản cơ bản mát lạnh, chuẩn mojito.", image: img("IMG_0115.JPG") },
        { name: "Mojito dâu", price: "39k", desc: "Dâu đỏ nổi bật, trẻ trung và cuốn hút.", image: img("IMG_0110.JPG") },
        { name: "Mojito dưa gang", price: "39k", desc: "Dịu màu, mát vị, phù hợp phong cách nhẹ.", image: img("IMG_0112.JPG") },
        { name: "Mojito đào", price: "39k", desc: "Đào thơm, hợp ánh sáng chiều và vibe tropical.", image: img("IMG_0114.JPG") },
        { name: "Mojito nho", price: "39k", desc: "Nho tím bắt mắt, rất hợp menu quảng cáo.", image: img("IMG_0111.JPG") },
        { name: "Mojito phúc bồn tử", price: "39k", desc: "Berry đỏ đậm, rất nổi trên hình.", image: img("IMG_0113.JPG") },
        { name: "Mojito vải", price: "39k", desc: "Ly trong trẻo, thanh mát, dịu vị.", image: img("IMG_0109.JPG") },
        { name: "Mojito việt quất", price: "39k", desc: "Màu tối đẹp, tạo cảm giác sang hơn.", image: img("IMG_0108.JPG") },
        { name: "Mojito xoài", price: "39k", desc: "Tropical rõ rệt, màu sắc rực rỡ.", image: img("IMG_0107.JPG") },
      ],
    },
    {
      label: "Beer & Cocktail",
      items: [
        { name: "Beer Ruby", price: "20k", desc: "Bia nhẹ cho menu beer cơ bản của quán.", image: img("IMG_0152.JPG") },
        { name: "Beer Heniken", price: "28k", desc: "Lựa chọn quen thuộc, phù hợp nhóm khách chill tối.", image: img("IMG_0152.JPG") },
        { name: "Beer Sài Gòn Xanh", price: "23k", desc: "Dòng bia phổ biến, dễ bán và dễ nhận diện.", image: img("IMG_0152.JPG") },
        { name: "Beer Tiger", price: "25k", desc: "Bia quen thuộc cho khách đi nhóm.", image: img("IMG_0152.JPG") },
        { name: "Beer úp ngược trái cây", price: "40k", desc: "Biến tấu nổi bật, hợp hình ảnh quảng cáo.", image: img("IMG_0152.JPG") },
        { name: "Beer úp ngược rượu", price: "45k", desc: "Phong cách mạnh hơn, phù hợp menu buổi tối.", image: img("IMG_0152.JPG") },
      ],
    },
  ];

  const categories = ["Tất cả", ...categoryMap.map((c) => c.label)];

  const allItems = categoryMap.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.label,
    }))
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tất cả") return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, allItems]);

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

  const featuredGallery = [
    img("IMG_0094.JPG"),
    img("IMG_0117.JPG"),
    img("IMG_0138.JPG"),
    img("IMG_0147.JPG"),
  ];

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
                Menu thật của quán
              </div>
              <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "14px 0 0", fontWeight: 900 }}>
                Thức uống của FOREVER
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: colors.muted, marginTop: 18 }}>
                Menu được cập nhật theo bảng món thật của quán, kết hợp ảnh đồ uống thật
                để khách có thể xem trực quan trước khi ghé quán.
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
                key={`${item.category}-${item.name}`}
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
                    src={item.image}
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
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: 28, lineHeight: 1.15, fontWeight: 800 }}>
                      {item.name}
                    </h3>
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
                src={selectedItem.image}
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
                  {selectedItem.desc}
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
            "linear-gradient(rgba(18,13,10,0.55), rgba(18,13,10,0.85)), url(/drinks/IMG_0153.JPG)",
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
              Menu thật, ảnh thật, không gian chill thật. Một nơi để gặp bạn bè, ngồi lại lâu hơn,
              thưởng thức cà phê, trà, soda, mojito và những ly đồ uống mang chất riêng của FOREVER.
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
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.30em",
                  color: colors.accent,
                }}
              >
                Vibe
              </div>
              <div style={{ fontSize: 40, fontWeight: 800, marginTop: 14, lineHeight: 1.15 }}>
                Ấm áp · Đêm · Chill
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.muted, marginTop: 14 }}>
                Ánh sáng vàng, đồ uống thật, hình ảnh thật và cảm giác gần gũi đúng chất FOREVER.
              </p>
            </div>
            <div style={{ ...glassCard, padding: 24, background: "rgba(43,28,18,0.80)" }}>
              <div
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.30em",
                  color: colors.accent,
                }}
              >
                Menu thật
              </div>
              <div style={{ fontSize: 40, fontWeight: 800, marginTop: 14, lineHeight: 1.15 }}>
                {allItems.length} món đồ uống
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: colors.muted, marginTop: 14 }}>
                Cập nhật từ bảng menu thật của quán và ảnh đồ uống thật anh đã làm.
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
                  <div style={{ marginTop: 8, fontSize: 14, color: colors.muted }}>
                    Khởi đầu hành trình thương hiệu
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: colors.accent }}>
                    9 nhóm
                  </div>
                  <div style={{ marginTop: 8, fontSize: 14, color: colors.muted }}>
                    Cà phê, trà, sữa, cacao, sinh tố, nước ép, soda, yaourt, mojito
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: colors.accent }}>Q7</div>
                  <div style={{ marginTop: 8, fontSize: 14, color: colors.muted }}>
                    B38 Đường 4A, P. Tân Hưng
                  </div>
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
              khách thấy món thật, ảnh thật và vibe thật của quán.
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
          {featuredGallery.map((src, i) => (
            <div key={i} style={{ ...glassCard, overflow: "hidden" }}>
              <img src={src} alt={`Forever ${i + 1}`} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
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
