import Head from 'next/head'
import Nav from "../components/Nav";
import SelectBox from "../components/SelectBox";
import { useEffect, useState } from 'react';

export default function Home() {
  const [coinPerDay, setCoinPerDay] = useState(0)
  const [state, setState] = useState({
    xenos: 0,
    femi: 0,
    lochias: 0,
    olu: 0,
    afe: 0,
    ufo: 0
  })
  const [factionEarnings, setFactionEarnings] = useState({
    xenos: 0,
    femi: 0,
    lochias: 0,
    olu: 0,
    ufo: 0
  })

  const ogEarningValue = {
    xenos: 0.25,
    femi: 0.5,
    lochias: 0.75,
    olu: 1,
    afe: 0.1,
    ufo: 1
  }

  useEffect(() => {
    calculateFrenCoin()
  }, [state])

  useEffect(() => {
    calculateAfeEarnings()
  }, [factionEarnings, state])

  function calculateAfeEarnings() {
    let coinEarnings = 1;
    coinEarnings += (factionEarnings.xenos + factionEarnings.femi + factionEarnings.lochias + factionEarnings.olu + factionEarnings.ufo)
    if (state.afe > 0) {
      let afeEarnings = 0
      afeEarnings = state.afe * ogEarningValue.afe
      setCoinPerDay((coinEarnings) * (afeEarnings))
    } else {
      setCoinPerDay(0)
    }
  }

  function calculateFrenCoin() {
    function calculateEarningPerFaction(faction) {
      let thisFactionEarnings = 0;
      if (state[faction] > 0) {
        thisFactionEarnings = ogEarningValue[faction];
        if (state[faction] > 1) {
          if (faction === "ufo") {
            thisFactionEarnings = state[faction] * ogEarningValue[faction];
          } else {
            let thisFactionExtraEarnings = (state[faction] - 1) * (ogEarningValue[faction] / 10);
            thisFactionEarnings += thisFactionExtraEarnings;
          }
        }
        setFactionEarnings(prev => ({ ...prev, [faction]: thisFactionEarnings }))
      } else {
        setFactionEarnings(prev => ({ ...prev, [faction]: 0 }))
      }
    }
    const factionsArray = ['xenos', 'femi', 'lochias', 'olu', 'ufo'];
    for (const faction of factionsArray) {
      calculateEarningPerFaction(faction);
    }
    calculateAfeEarnings();
  }

  return (
    <div>
      <Head>
        <title>Fren Coin Calculator</title>
        <meta name="description" content="Learn how much Fren coin you'll earn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <section className="pt-40 pb-8 md:pb-12 flex justify-center">
          <div>
            <article className="text-center">
              <h2 className="text-lg md:text-2xl mx-6 md:mx-0 mb-2">Check how much Fren coin you'll earn</h2>
              <p className="text-md mx-8 md:mx-0 md:text-lg pt-3">Enter the amount of each fren faction you have in the form below</p>
            </article>
          </div>
        </section>
        <section className="flex justify-center">
          <form className="flex flex-col p-6 max-w-min">
            <div className="flex flex-row">
              <div className="flex flex-col md:flex-row">
                <SelectBox label="Xenos" state={state} setState={setState} />
                <SelectBox label="Femi" state={state} setState={setState} />
              </div>
              <div className="flex flex-col md:flex-row">
                <SelectBox label="Lochias" state={state} setState={setState} />
                <SelectBox label="Olu" state={state} setState={setState} />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <SelectBox label="UFO" state={state} setState={setState} />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div>
                  <span className="flex justify-center my-4 text-3xl">X</span>
                  <div className="flex justify-center">
                    <SelectBox label="AFE" state={state} setState={setState} />

                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <section className="mt-6 flex justify-center">
          <div className="flex flex-col text-center text-lg">
            <h3>You will earn</h3>
            <h2 className="text-3xl">{coinPerDay.toString().substring(0, 5)}</h2>
            <h3>Fren Coin per day</h3>
          </div>
        </section>
      </main>
    </div>
  )
}
