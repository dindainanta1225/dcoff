export default function TentangPage() {
  return (
    <main className="bg-[#f4eee6] text-[#3b1f14]">

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        <div className="h-[500px] md:h-auto">
          <img
            src="/images/cof.jpg"
            alt="dcoff coffee shop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center px-8 py-16 md:px-16 lg:px-20 bg-[#f4eee6]">
          <div className="max-w-xl">

            <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
              About Us
            </p>

            <h1 className="text-5xl font-bold mt-5">
              Tentang dcoff
            </h1>

            <p className="text-xl text-[#6b3218] mt-5">
              Coffee, Comfort, and Stories.
            </p>

            <p className="text-[#795548] leading-7 mt-6">
              dcoff adalah tempat untuk menikmati kopi, minuman,
              dan makanan dalam suasana yang nyaman. Kami hadir
              sebagai tempat untuk beristirahat sejenak, menikmati
              secangkir kopi, dan menghabiskan waktu bersama orang
              terdekat.
            </p>

            <p className="text-[#795548] leading-7 mt-4">
              Bagi kami, kopi bukan hanya tentang rasa. Setiap
              kunjungan bisa menjadi bagian dari cerita yang
              menyenangkan.
            </p>

          </div>
        </div>

      </section>

      <section className="bg-white py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">

            <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
              What We Offer
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Kenapa dcoff?
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            <div className="bg-[#f4eee6] p-8 text-center">
              <h3 className="text-2xl font-semibold">
                Quality Coffee
              </h3>

              <p className="text-[#795548] leading-6 mt-4">
                Pilihan kopi yang cocok untuk menemani berbagai
                suasana dan waktu.
              </p>
            </div>

            <div className="bg-[#f4eee6] p-8 text-center">
              <h3 className="text-2xl font-semibold">
                Comfortable Place
              </h3>

              <p className="text-[#795548] leading-6 mt-4">
                Suasana nyaman untuk bersantai, ngobrol, atau
                menikmati waktu sendiri.
              </p>
            </div>

            <div className="bg-[#f4eee6] p-8 text-center">
              <h3 className="text-2xl font-semibold">
                Good Stories
              </h3>

              <p className="text-[#795548] leading-6 mt-4">
                Setiap kopi punya rasa dan setiap kunjungan
                punya cerita.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#3b1f14] text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm tracking-[0.35em] text-[#d9a066] uppercase">
            dcoff
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Your Coffee, Your Story
          </h2>

          <p className="text-[#dbc8ba] leading-7 mt-5">
            Datang, nikmati kopi, dan buat cerita kamu sendiri
            bersama dcoff.
          </p>

        </div>

      </section>

    </main>
  );
}