import React from 'react';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className="homepage">
      <article>
        <div className={styles.heading}>
          <h2>Exploring the Vibrant Night Market Culture in Taiwan</h2>
          <div role="doc-subtitle">
            The Epicentre of Taiwanese Life after Dusk
          </div>
        </div>
        <h3 className={styles['article-section']}>Introduction</h3>
        <p>
          Imagine a busy bustling scene filled with delicious aromas, vibrant
          colours, endless chatter and the occasional shout from vendors
          marketing their goods. This description encapsulates what one would
          expect when venturing into the famous night markets of Taiwan. Indeed,
          the night market culture in this exciting East Asian destination is
          not just a part of everyday life, it’s a cornerstone of Taiwan’s
          cultural identity that attracts millions of locals and tourists every
          year.
        </p>
        <h3 className={styles['article-section']}>The Gastronomic Havens</h3>
        <p>
          It’s impossible to discuss Taiwan’s night markets without an
          enthusiastic nod to the diverse and mouth-watering foods on offer. The
          night markets are an exhibition of the best of Taiwan’s colourful
          cuisine. With an array of stalls showcasing a plethora of dishes, from
          the stinky tofu and oyster omelettes to pork-filled buns and fruity
          shaved ice, there’s no better place for foodies eager to savour the
          tantalising flavours of authentic Taiwanese food. Each bite or sip
          offers a culinary journey of discovery that leaves your palate begging
          for more of the vibrant and flavourful tastes.
        </p>
        <h3 className={styles['article-section']}>
          Retail Therapy and Entertainment
        </h3>
        <p>
          Going beyond the amazing array of food apparent in Taiwan’s night
          markets, the vibrant ‘Old Streets’ are filled with innumerable stalls
          selling all sorts of wares from clothing and accessories to handmade
          crafts and tech gadgets. Renowned markets like Shilin, Raohe and Feng
          Chia give a new meaning to the term ‘retail therapy’. In addition,
          some markets offer amusement parks and mini-games like ring tosses,
          balloon shooting, super-size claw machines, and fishing games creating
          a lively and entertaining atmosphere throughout the day and well into
          the night.
        </p>
        <h3 className={styles['article-section']}>Cultural Immersion</h3>
        <p>
          Taiwan’s night markets serve as more than culinary destinations or
          retail outlets. These bustling bazaars provide a unique insight into
          Taiwan’s local lifestyle; they’re a place where tradition, food,
          crafts, and lifestyle intersect and where cultural exchanges occur
          naturally. Eye-catching lanterns light up the night sky, traditional
          Hakka clothing are displayed, indigenous artistry takes centre stage,
          and a charming calligraphy stands can be found tucked away in
          lesser-known corners of these markets. For tourists, they are the
          perfect platforms to immerse in Taiwan’s rich culture and history.
        </p>
        <h3 className={styles['article-section']}>Conclusion</h3>
        <p>
          The night markets of Taiwan are an embodiment of the country’s soul.
          They allow for a deeper, hands-on appreciation of the island’s culture
          beyond the customary sightseeing. Stepping into the lively streets,
          lined with a thousand twinkling lights and brimming with countless
          flavours and aromas, one can truly feel the heartbeat of Taiwan.
          Whether one is seeking affordable street food, exclusive handcrafted
          items, or thrilling entertainment options, the captivating night
          market culture in Taiwan has something for everyone. It is a nocturnal
          adventure that is an absolute must on every traveller’s itinerary.
        </p>
      </article>
    </main>
  );
}
