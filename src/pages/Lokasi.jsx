const Lokasi = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Lokasi Kami
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Kunjungi toko kami atau hubungi kami untuk informasi lebih lanjut
        </p>

        {/* COD Notice */}
        <div className="mb-8 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border-2 border-teal-200">
          <div className="flex items-center justify-center space-x-3">
            <div className="text-4xl">🚚</div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Layanan COD (Cash On Delivery)</h3>
              <p className="text-gray-700 font-semibold">
                Hanya melayani COD untuk area <span className="text-teal-600">TULUNGAGUNG, JAWA TIMUR</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="card overflow-hidden">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1234567890!2d111.9023456789!3d-8.0654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDMnNTUuNSJTIDExMcKwNTQnMDguNCJF!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Arcy Buket - Tulungagung"
                aria-label="Peta lokasi Arcy Buket di Tulungagung"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-semibold">📍 Tulungagung, Jawa Timur</p>
              </div>
              <a
                href="https://maps.app.goo.gl/yGoZ2qfxaCwgGrvj6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-semibold text-sm inline-flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Buka di Maps</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Tulungagung<br />
                      Jawa Timur<br />
                      Indonesia
                    </p>
                    <a
                      href="https://maps.app.goo.gl/yGoZ2qfxaCwgGrvj6?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 font-semibold mt-2 inline-block"
                    >
                      Lihat di Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
                <a
                  href="https://wa.me/6285816516892?text=Halo,%20saya%20ingin%20bertanya%20tentang%20buket%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block text-lg py-4 inline-flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Hubungi via WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/arcy_buket29?igsh=MXVzNHY4dHg5Znc4dQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block text-lg py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Follow Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="mt-12 card p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Cara Menuju Lokasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="font-semibold mb-2">Dengan Kendaraan Pribadi</h3>
              <p className="text-gray-600 text-sm">
                Parkir tersedia di area toko. Akses mudah dari jalan utama.
              </p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <div className="text-3xl mb-2">🚇</div>
              <h3 className="font-semibold mb-2">Dengan Transportasi Umum</h3>
              <p className="text-gray-600 text-sm">
                Akses mudah dengan angkutan umum di area Tulungagung
              </p>
            </div>
            <div className="text-center p-4 bg-pastel-mint rounded-lg">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold mb-2">Layanan COD</h3>
              <p className="text-gray-600 text-sm">
                <span className="font-bold text-teal-600">Hanya melayani COD</span> untuk area Tulungagung, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lokasi

