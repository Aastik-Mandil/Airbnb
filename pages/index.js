import Head from 'next/head'

import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }, i) => (
              <SmallCard
                key={i}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div
            className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, i) => (
              <MediumCard
                key={i}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="/airbnbLogo.png"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const local = true;
  var exploreData = [], cardsData = [];
  if (local) {
    exploreData = [
      { "img": "https://links.papareact.com/5j2", "location": "London", "distance": "45-minute drive" },
      { "img": "https://links.papareact.com/1to", "location": "Manchester", "distance": "4.5-hour drive" },
      { "img": "https://links.papareact.com/40m", "location": "Liverpool", "distance": "4.5-hour drive" },
      { "img": "https://links.papareact.com/msp", "location": "York", "distance": "4-hour drive" },
      { "img": "https://links.papareact.com/2k3", "location": "Cardiff", "distance": "45-minute drive" },
      { "img": "https://links.papareact.com/ynx", "location": "Birkenhead", "distance": "4.5-hour drive" },
      { "img": "https://links.papareact.com/kji", "location": "Newquay", "distance": "6-hour drive" },
      { "img": "https://links.papareact.com/41m", "location": "Hove", "distance": "2-hour drive" }
    ];
    cardsData = [
      { "img": "https://links.papareact.com/2io", "title": "Outdoor getaways" },
      { "img": "https://links.papareact.com/q7j", "title": "Unique stays" },
      { "img": "https://links.papareact.com/s03", "title": "Entire homes" },
      { "img": "https://links.papareact.com/8ix", "title": "Pet allowed" }
    ];
  }
  else {
    exploreData = await fetch("https://jsonkeeper.com/b/4G1G")
      .then(res => res.json());
    cardsData = await fetch("https://jsonkeeper.com/b/VHHT")
      .then(res => res.json());
  }
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}