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

  if (page === "menu") {
    return (
      <div className="min-h-screen bg-[#120d0a] text-[#f5e6d3]">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#120d0a]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <button
              onClick={() => setPage("home")}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
            >
              ← Quay lại trang chủ
            </button>
            <div className="text-right">
              <div className="text-lg font-bold tracking-[0.18em]">FOREVER</div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#d6b58a]">Menu Collection</div>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Menu</p>
              <h1 className="mt-3 text-4xl font-black md:text-6xl">Thức uống của FOREVER</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#f2dfc8]/80 md:text-lg">
                Chọn một nhóm đồ uống để khám phá hình ảnh, phong cách và cảm giác của từng món.
                Đây là menu kiểu quảng cáo thương hiệu, tập trung vào trải nghiệm nhìn và cảm xúc.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-[#f2dfc8]/70 shadow-xl backdrop-blur">
              {filteredItems.length} món đang hiển thị
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#d6b58a] text-[#120d0a] shadow-lg shadow-[#d6b58a]/20"
                      : "border border-white/10 bg-white/5 text-[#f5e6d3] hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a]/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#120d0a]/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#d6b58a] backdrop-blur">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold leading-tight">{item.name}</h3>
                    <span className="rounded-full bg-[#d6b58a] px-3 py-1 text-sm font-bold text-[#120d0a]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#f2dfc8]/75">{item.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d6b58a]">
                    Xem chi tiết <span>→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a120d] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <img src={selectedItem.img} alt={selectedItem.name} className="h-full min-h-[320px] w-full object-cover" />
                <div className="p-8 md:p-10">
                  <div className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#d6b58a]">
                    {selectedItem.category}
                  </div>
                  <h2 className="mt-4 text-4xl font-black">{selectedItem.name}</h2>
                  <div className="mt-4 text-2xl font-bold text-[#d6b58a]">{selectedItem.price}</div>
                  <p className="mt-6 text-base leading-8 text-[#f2dfc8]/80">
                    {selectedItem.desc} Món này phù hợp để đưa vào website quảng cáo vì hình ảnh nổi bật,
                    dễ tạo cảm giác ngon mắt và giúp khách muốn ghé quán trực tiếp để trải nghiệm.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="rounded-2xl bg-[#d6b58a] px-5 py-3 font-semibold text-[#120d0a]"
                    >
                      Đóng
                    </button>
                    <button
                      onClick={() => setPage("home")}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold"
                    >
                      Về trang chủ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#120d0a] text-[#f5e6d3]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120d0a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-[0.2em]">FOREVER</div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#d6b58a]">Coffee & Beer</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <button onClick={() => setPage("home")} className="hover:text-[#d6b58a]">Trang chủ</button>
            <a href="#about" className="hover:text-[#d6b58a]">Giới thiệu</a>
            <button onClick={() => setPage("menu")} className="hover:text-[#d6b58a]">Menu</button>
            <a href="#gallery" className="hover:text-[#d6b58a]">Hình ảnh</a>
            <a href="#contact" className="hover:text-[#d6b58a]">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,13,10,0.55), rgba(18,13,10,0.85)), url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-[#d6b58a]/40 bg-[#d6b58a]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#e8c69c]">
              Forever, nơi bình yên là thật!
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              FOREVER <span className="text-[#d6b58a]">Coffee & Beer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f2dfc8]/85">
              Một không gian thư giãn, ấm áp và có chiều sâu. Nơi những ly cà phê,
              trà, soda và những câu chuyện đẹp cùng nhau ở lại lâu hơn một chút.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("menu")}
                className="rounded-2xl bg-[#d6b58a] px-6 py-3 font-semibold text-[#120d0a] shadow-lg shadow-[#d6b58a]/20 transition hover:-translate-y-0.5"
              >
                Xem menu
              </button>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Tìm đường đến quán
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Vibe</div>
              <div className="mt-4 text-3xl font-bold">Ấm áp · Đêm · Chill</div>
              <p className="mt-3 text-sm leading-7 text-[#f2dfc8]/75">
                Ánh sáng vàng, âm nhạc vừa đủ, đồ uống chỉn chu và không gian mang cảm giác kể chuyện.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#2b1c12]/80 p-6 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Thông điệp</div>
              <div className="mt-4 text-3xl font-bold">Ai cũng có tuổi trẻ</div>
              <p className="mt-3 text-sm leading-7 text-[#f2dfc8]/75">
                FOREVER dừng lại một chút, uống một ly ngon và thấy mình nhẹ hơn.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:col-span-2">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="text-3xl font-black text-[#d6b58a]">2019</div>
                  <div className="mt-2 text-sm text-[#f2dfc8]/75">Khởi đầu hành trình thương hiệu</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#d6b58a]">Signature</div>
                  <div className="mt-2 text-sm text-[#f2dfc8]/75">Cà phê, trà và đồ uống chill style FOREVER</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#d6b58a]">Q7</div>
                  <div className="mt-2 text-sm text-[#f2dfc8]/75">B38 Đường 4A, P. Tân Hưng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Giới thiệu</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Không chỉ là quán cà phê</h2>
            <p className="mt-6 text-lg leading-8 text-[#f2dfc8]/80">
              FOREVER Coffee & Beer hướng đến cảm giác gần gũi, đẹp vừa đủ và có bản sắc.
              Đây là nơi để gặp bạn bè, thư giãn sau một ngày dài, hoặc ngồi một mình giữa
              không gian nhẹ nhàng mà vẫn có cá tính.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#f2dfc8]/80">
              Website này không tập trung bán hàng online, mà tập trung kể câu chuyện thương hiệu,
              cho khách thấy chất riêng của quán và khiến họ muốn ghé trực tiếp.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2a1c13] to-[#17110d] p-8 shadow-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Tuyên ngôn thương hiệu</div>
            <div className="mt-6 space-y-5 text-2xl font-semibold leading-relaxed">
              <div>Không hustle — chỉ chill.</div>
              <div>Nơi kể chuyện, tâm sự mỏng.</div>
              <div>Forever, nghe tim mình thương.</div>
              <div>Ai cũng có tuổi trẻ.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Hình ảnh</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">Một chút không khí của FOREVER</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {menuItems.slice(0, 4).map((item, i) => (
            <div key={i} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
              <img src={item.img} alt={item.name} className="h-80 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#1a120d] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d6b58a]">Liên hệ</p>
            <h2 className="mt-4 text-4xl font-bold">Ghé quán một tối gần nhất</h2>
            <div className="mt-8 space-y-4 text-lg text-[#f2dfc8]/85">
              <p><span className="font-semibold text-white">Địa chỉ:</span> B38 Đường 4A, P. Tân Hưng, Q.7</p>
              <p><span className="font-semibold text-white">Điện thoại:</span> 0708 888 0891</p>
              <p><span className="font-semibold text-white">Facebook:</span> FOREVER Coffee & Beer</p>
              <p><span className="font-semibold text-white">Giờ mở cửa:</span> 07:00 – 23:00</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#d6b58a] px-6 py-3 font-semibold text-[#120d0a]"
              >
                Mở Google Maps
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold"
              >
                Xem fanpage
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <iframe
              title="Forever Coffee & Beer Map"
              src="https://www.google.com/maps?q=B38%20%C4%90%C6%B0%E1%BB%9Dng%204A%2C%20P.%20T%C3%A2n%20H%C6%B0ng%2C%20Q.7&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#120d0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#f2dfc8]/60 md:flex-row md:items-center md:justify-between">
          <div>© 2026 FOREVER Coffee & Beer. All rights reserved.</div>
          <div>Thiết kế theo phong cách cinematic · ấm áp · hiện đại</div>
        </div>
      </footer>
    </div>
  );
}
