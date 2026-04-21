export default function App() {
  const menu = {
    coffee: [
      { name: 'Cà phê đen đá', price: '25.000đ' },
      { name: 'Cà phê sữa đá', price: '28.000đ' },
      { name: 'Bạc xỉu', price: '32.000đ' },
      { name: 'Latte', price: '45.000đ' },
    ],
    tea: [
      { name: 'Trà đào', price: '35.000đ' },
      { name: 'Trà tắc', price: '30.000đ' },
      { name: 'Trà vải', price: '35.000đ' },
      { name: 'Trà hoa cúc', price: '38.000đ' },
    ],
    special: [
      { name: 'Mojito bạc hà', price: '42.000đ' },
      { name: 'Soda việt quất', price: '40.000đ' },
      { name: 'Yaourt đá', price: '38.000đ' },
      { name: 'Cacao đá', price: '42.000đ' },
    ],
  }

  const gallery = [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517701550927-30cf4ba1fcef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
  ]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">FOREVER</div>
            <div className="brand-subtitle">Coffee & Beer</div>
          </div>
          <nav className="desktop-nav">
            <a href="#home">Trang chủ</a>
            <a href="#about">Giới thiệu</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Hình ảnh</a>
            <a href="#contact">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-badge">Forever, Nơi bình yên là thật!</p>
            <h1>
              FOREVER <span>Coffee & Beer</span>
            </h1>
            <p className="hero-description">
              Một không gian thư giãn, ấm áp và có chiều sâu. Nơi những ly cà phê,
              trà, soda và những câu chuyện đẹp cùng nhau ở lại lâu hơn một chút.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="button button-primary">
                Xem menu
              </a>
              <a href="#contact" className="button button-secondary">
                Tìm đường đến quán
              </a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="glass-card">
              <div className="card-label">Vibe</div>
              <div className="card-title">Ấm áp · Đêm · Chill</div>
              <p>
                Ánh sáng vàng, âm nhạc vừa đủ, đồ uống chỉn chu và không gian mang
                cảm giác kể chuyện.
              </p>
            </div>

            <div className="solid-card">
              <div className="card-label">Thông điệp</div>
              <div className="card-title">Ai cũng có tuổi trẻ</div>
              <p>FOREVER dừng lại một chút, uống một ly ngon và thấy mình nhẹ hơn.</p>
            </div>

            <div className="glass-card full-width-card">
              <div className="stat-grid">
                <div>
                  <div className="stat-title">2019</div>
                  <div className="stat-text">Khởi đầu hành trình thương hiệu</div>
                </div>
                <div>
                  <div className="stat-title">Signature</div>
                  <div className="stat-text">Cà phê, trà và đồ uống chill style FOREVER</div>
                </div>
                <div>
                  <div className="stat-title">Q7</div>
                  <div className="stat-text">B38 Đường 4A, P. Tân Hưng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section container two-column-section">
        <div>
          <p className="section-label">Giới thiệu</p>
          <h2>Không chỉ là quán cà phê</h2>
          <p className="section-copy">
            FOREVER Coffee & Beer hướng đến cảm giác gần gũi, đẹp vừa đủ và có bản sắc.
            Đây là nơi để gặp bạn bè, thư giãn sau một ngày dài, hoặc ngồi một mình giữa
            không gian nhẹ nhàng mà vẫn có cá tính.
          </p>
          <p className="section-copy">
            Website này không tập trung bán hàng online, mà tập trung kể câu chuyện thương hiệu,
            cho khách thấy chất riêng của quán và khiến họ muốn ghé trực tiếp.
          </p>
        </div>

        <div className="manifesto-card">
          <div className="card-label">Tuyên ngôn thương hiệu</div>
          <div className="manifesto-list">
            <div>Không hustle — chỉ chill.</div>
            <div>Nơi kể chuyện, tâm sự mỏng.</div>
            <div>Forever, nghe tim mình thương.</div>
            <div>Ai cũng có tuổi trẻ.</div>
          </div>
        </div>
      </section>

      <section id="menu" className="section section-dark">
        <div className="container">
          <p className="section-label">Menu nổi bật</p>
          <h2>Đồ uống dành cho buổi chiều và những tối đẹp</h2>
          <div className="menu-grid">
            {[
              { title: 'Cà phê', items: menu.coffee },
              { title: 'Trà', items: menu.tea },
              { title: 'Signature & Chill', items: menu.special },
            ].map((group) => (
              <div key={group.title} className="menu-card">
                <h3>{group.title}</h3>
                <div className="menu-list">
                  {group.items.map((item) => (
                    <div key={item.name} className="menu-item">
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section container">
        <p className="section-label">Hình ảnh</p>
        <h2>Một chút không khí của FOREVER</h2>
        <div className="gallery-grid">
          {gallery.map((src, i) => (
            <div key={i} className="gallery-card">
              <img src={src} alt={`Forever gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section section-dark">
        <div className="container contact-grid">
          <div className="contact-card">
            <p className="section-label">Liên hệ</p>
            <h2>Ghé quán một tối gần nhất</h2>
            <div className="contact-list">
              <p><span>Địa chỉ:</span> B38 Đường 4A, P. Tân Hưng, Q.7</p>
              <p><span>Điện thoại:</span> 0708 888 0891</p>
              <p><span>Facebook:</span> FOREVER Coffee & Beer</p>
              <p><span>Giờ mở cửa:</span> 07:00 – 23:00</p>
            </div>
            <div className="hero-actions">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="button button-primary">
                Mở Google Maps
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="button button-secondary">
                Xem fanpage
              </a>
            </div>
          </div>

          <div className="map-card">
            <iframe
              title="Forever Coffee & Beer Map"
              src="https://www.google.com/maps?q=B38%20%C4%90%C6%B0%E1%BB%9Dng%204A%2C%20P.%20T%C3%A2n%20H%C6%B0ng%2C%20Q.7&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>© 2026 FOREVER Coffee & Beer. All rights reserved.</div>
          <div>Thiết kế theo phong cách cinematic · ấm áp · hiện đại</div>
        </div>
      </footer>
    </div>
  )
}
