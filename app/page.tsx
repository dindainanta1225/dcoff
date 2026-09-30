import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f4eee6] text-[#3b1f14]">

      <section className="min-h-[calc(100vh-72px)] grid grid-cols-1 md:grid-cols-2">

        <div className="h-[500px] md:h-auto">
          <img
            src="/images/tempat.jpg"
            alt="dcoff coffee shop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center px-8 py-16 md:px-16 lg:px-24 bg-[#f4eee6]">
          <div className="max-w-xl">

            <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
              Welcome to dcoff
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-5">
              Great Coffee
              <br />
              For Some Joy
            </h1>

            <p className="text-[#795548] leading-7 mt-6 max-w-lg">
              Nikmati kopi dan suasana nyaman di dcoff. Tempat sederhana
              untuk menikmati waktu, berbagi cerita, dan menemukan
              minuman favorit kamu.
            </p>

            <Link
              href="/menu"
              className="inline-block mt-8 bg-[#6b3218] text-white px-7 py-3 font-semibold hover:bg-[#4f2411] transition duration-300"
            >
              Lihat Menu
            </Link>

          </div>
        </div>

      </section>

      <section className="py-16 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">

            <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
              Our Menu
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Best Seller
            </h2>

            <p className="text-[#795548] mt-3">
              Pilihan favorit yang paling banyak dinikmati di dcoff.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            <div className="bg-[#f4eee6]">

              <img
                src="/images/lat.jpg"
                alt="Latte"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  Latte
                </h3>

                <p className="text-[#795548] leading-6 mt-3">
                  Perpaduan espresso dan susu dengan rasa lembut
                  yang cocok untuk menemani waktu santai.
                </p>

                <Link
                  href="/menu"
                  className="inline-block mt-5 border border-[#6b3218] text-[#6b3218] px-5 py-2 hover:bg-[#6b3218] hover:text-white transition duration-300"
                >
                  Lihat Menu
                </Link>

              </div>

            </div>

            <div className="bg-[#f4eee6]">

              <img
                src="/images/salt.jpg"
                alt="Salt Bread"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  Salt Bread
                </h3>

                <p className="text-[#795548] leading-6 mt-3">
                  Roti lembut dengan rasa gurih yang pas untuk
                  menjadi teman menikmati secangkir kopi.
                </p>

                <Link
                  href="/menu"
                  className="inline-block mt-5 border border-[#6b3218] text-[#6b3218] px-5 py-2 hover:bg-[#6b3218] hover:text-white transition duration-300"
                >
                  Lihat Menu
                </Link>

              </div>

            </div>

            <div className="bg-[#f4eee6]">

              <img
                src="/images/matc.jpg"
                alt="Matcha"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  Matcha
                </h3>

                <p className="text-[#795548] leading-6 mt-3">
                  Minuman matcha dengan rasa creamy dan lembut
                  untuk pilihan selain kopi.
                </p>

                <Link
                  href="/menu"
                  className="inline-block mt-5 border border-[#6b3218] text-[#6b3218] px-5 py-2 hover:bg-[#6b3218] hover:text-white transition duration-300"
                >
                  Lihat Menu
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-20 px-6 bg-[#3b1f14] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm tracking-[0.35em] text-[#d9a066] uppercase">
            dcoff
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Coffee, Comfort, and Stories
          </h2>

          <p className="text-[#dbc8ba] leading-7 mt-5">
            Temukan minuman favoritmu dan nikmati setiap momen
            bersama dcoff.
          </p>

          <Link
            href="/menu"
            className="inline-block mt-8 bg-[#d9a066] text-[#3b1f14] px-7 py-3 font-semibold hover:bg-[#c48b50] transition duration-300"
          >
            Explore Our Menu
          </Link>

        </div>

      </section>

    </main>
  );
}