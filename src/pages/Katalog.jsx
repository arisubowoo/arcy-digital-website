import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buketData from "../data/buket.json";

const Katalog = () => {
  const [bukets, setBukets] = useState([]);

  useEffect(() => {
    setBukets(buketData);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Katalog Buket
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Pilih buket yang sempurna untuk momen spesial Anda
        </p>

        {/* Buket Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bukets.map((buket) => (
            <div key={buket.id} className="card">
              <Link to={`/buket/${buket.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={buket.gambar}
                    alt={buket.nama}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-teal-600">
                    {buket.kategori}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="animated-title text-xl font-bold mb-2 text-gray-800">
                    {buket.nama}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {buket.deskripsi}
                  </p>
                  <div className="mb-3 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-xs text-yellow-700 font-semibold">
                      ✨ Bisa Request Sesuai Keinginan & Budget
                    </p>
                  </div>
                  <div className="flex items-center justify-start">
                    <span className="text-2xl font-bold text-teal-600">
                      {formatPrice(buket.harga)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Katalog;
