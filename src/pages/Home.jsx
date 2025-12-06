import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1920&h=1080&fit=crop"
            alt="Buket Bunga"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/50 to-emerald-200/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Arcy Buket
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Buket Bunga Terindah untuk Setiap Momen Spesial
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami menghadirkan rangkaian bunga terpilih dengan desain elegan dan
            kualitas terbaik. Setiap buket dibuat dengan penuh cinta untuk momen
            berharga Anda.
          </p>

          {/* Info COD & Pemesanan */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-teal-200">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-2xl">🚚</span>
                  <span className="font-semibold">
                    Hanya melayani{" "}
                    <span className="text-teal-600">COD area Tulungagung</span>
                  </span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span className="text-2xl">📅</span>
                  <span className="font-semibold">
                    Pemesanan <span className="text-teal-600">H-4</span>{" "}
                    (minimal 4 hari sebelum acara)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/katalog" className="animated-button btn-primary text-lg">
              Lihat Katalog
            </Link>
            <a
              href="https://wa.me/6285816516892?text=Halo,%20saya%20tertarik%20dengan%20buket%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Custom Request Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Custom Request Tersedia!
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Ingin buket dengan desain khusus? Kami bisa membuat buket sesuai
            keinginan dan budget Anda!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">
                ✓ Pilih Warna & Jenis Bunga
              </h3>
              <p className="text-gray-600 text-sm">
                Sesuaikan dengan tema acara atau preferensi Anda
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">
                ✓ Sesuaikan Budget
              </h3>
              <p className="text-gray-600 text-sm">
                Konsultasi gratis untuk menemukan solusi terbaik
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">
                ✓ Desain Eksklusif
              </h3>
              <p className="text-gray-600 text-sm">
                Buket unik yang dibuat khusus untuk momen spesial
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">
                ✓ Konsultasi Gratis
              </h3>
              <p className="text-gray-600 text-sm">
                Hubungi kami via WhatsApp untuk diskusi
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6285816516892?text=Halo,%20saya%20ingin%20konsultasi%20untuk%20custom%20buket%20sesuai%20budget%20saya.%20Apakah%20bisa?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            💬 Konsultasi Custom Request
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-100 to-emerald-100">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Siap Membuat Momen Spesial?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Jelajahi koleksi buket kami dan temukan yang sempurna untuk orang
            terkasih Anda.
          </p>
          <Link to="/katalog" className="animated-button btn-primary text-lg inline-block">
            Lihat Katalog Lengkap
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
