import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import buketData from "../data/buket.json";

const DetailBuket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [buket, setBuket] = useState(null);

  useEffect(() => {
    const found = buketData.find((b) => b.id === parseInt(id));
    if (found) {
      setBuket(found);
    } else {
      navigate("/katalog");
    }
  }, [id, navigate]);

  if (!buket) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Memuat...</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const whatsappMessage = `Halo, saya tertarik dengan ${
    buket.nama
  } seharga ${formatPrice(buket.harga)}. Apakah masih tersedia?`;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link
          to="/katalog"
          className="inline-flex items-center text-teal-500 hover:text-teal-600 mb-6 transition-colors"
        >
          ← Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="card overflow-hidden">
            <img
              src={buket.gambar}
              alt={buket.nama}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-teal-400 to-emerald-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {buket.kategori}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {buket.nama}
            </h1>

            <div className="mb-6">
              <span className="text-4xl font-bold text-teal-600">
                {formatPrice(buket.harga)}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Deskripsi
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {buket.deskripsi}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`https://wa.me/6285816516892?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block text-lg py-4"
              >
                📱 Pesan via WhatsApp
              </a>

              <Link
                to="/katalog"
                className="btn-secondary w-full text-center block text-lg py-4"
              >
                Lihat Buket Lainnya
              </Link>
            </div>

            {/* Custom Request */}
            <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-200">
              <h3 className="font-semibold mb-3 text-gray-800 flex items-center space-x-2">
                <span>✨</span>
                <span>Custom Request Tersedia!</span>
              </h3>
              <p className="text-gray-700 mb-3">
                Ingin buket dengan desain khusus? Kami bisa membuat buket sesuai
                keinginan dan budget Anda!
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>✓ Pilih warna dan jenis bunga favorit</li>
                <li>✓ Sesuaikan dengan budget Anda</li>
                <li>✓ Konsultasi gratis via WhatsApp</li>
                <li>✓ Desain eksklusif untuk momen spesial</li>
              </ul>
              <a
                href={`https://wa.me/6285816516892?text=${encodeURIComponent(
                  `Halo, saya ingin konsultasi untuk custom buket sesuai budget saya. Apakah bisa?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                💬 Konsultasi Custom Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuket;
