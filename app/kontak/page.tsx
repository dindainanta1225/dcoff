export default function KontakPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-amber-700">
            CONTACT US
          </p>

          <h1 className="text-4xl font-bold text-amber-950 mt-3">
            Hubungi Dcoff
          </h1>

          <p className="text-amber-700 mt-3">
            Punya pertanyaan? Yuk, ngobrol bareng kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-7 text-center">
            <div className="text-5xl mb-4">
              
            </div>

            <h2 className="text-xl font-bold text-amber-950">
              Alamat
            </h2>

            <p className="text-amber-700 mt-3 leading-6">
              Jl. Sungai Bambu No. 21
              <br />
              Jakarta, Indonesia
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-7 text-center">
            <div className="text-5xl mb-4">
            </div>

            <h2 className="text-xl font-bold text-amber-950">
              Telepon
            </h2>

            <p className="text-amber-700 mt-3">
              0812-3456-7890
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-7 text-center">
            <div className="text-5xl mb-4">
            </div>

            <h2 className="text-xl font-bold text-amber-950">
              Email
            </h2>

            <p className="text-amber-700 mt-3">
              kopisenja@gmail.com
            </p>
          </div>

        </div>

        <div className="bg-amber-950 rounded-2xl shadow-md p-8 mt-8 text-center">
          <p className="text-sm tracking-[0.3em] text-amber-300">
            OPENING HOURS
          </p>

          <h2 className="text-2xl font-bold text-amber-50 mt-3">
            Jam Operasional
          </h2>

          <p className="text-amber-200 mt-4">
            Senin - Jumat : 08.00 - 21.00
          </p>

          <p className="text-amber-200 mt-2">
            Sabtu - Minggu : 09.00 - 22.00
          </p>
        </div>

      </div>
    </main>
  );
}