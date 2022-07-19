import Head from 'next/head'
import Nav from "../components/Nav";
import Form from "../components/Form";
import {useEffect, useState} from 'react';

export default function Home() {
  const [state, setState] = useState({
    xenos: 0,
    femi: 0,
    lochias: 0,
    olu: 0,
    afe: 0,
    ufo: false
  })
  const [factionEarnings, setFactionEarnings] = useState({
    xenos: 0,
    femi: 0,
    lochias: 0,
    olu: 0,
  })
  const ogEarningValue = {
    xenos: 0.25,
    femi: 0.5,
    lochias: 0.75,
    olu: 1,
    afe: 0.1,
  }
  const [coinPerDay, setCoinPerDay] = useState(0)

  useEffect(() => {
    calculateFrenCoin()
  }, [state])

  useEffect(() => {
    let coinEarnings = 0;
    coinEarnings = (factionEarnings.xenos + factionEarnings.femi + factionEarnings.lochias + factionEarnings.olu)
    console.log("coinEarnings 38", coinEarnings)
    if (state.afe > 0) {
      let afeEarnings = state.afe * ogEarningValue.afe
      console.log("afeEarnings: ", afeEarnings)
      console.log("CoinEarnings: ", coinEarnings)
      setCoinPerDay((coinEarnings > 0 ? coinEarnings + 1 : 1) * (afeEarnings))
    } else {
      setCoinPerDay(0)
    }
  }, [factionEarnings, state])

  function calculateFrenCoin() {
    const { xenos, femi, lochias, olu, afe, ufo } = state;
    let xenosEarnings = 0;
    let femiEarnings = 0;
    let lochiasEarnings = 0;
    let oluEarnings = 0;



    if (xenos) {
      xenosEarnings = ogEarningValue.xenos;
      if (xenos > 1) {
        let xenosExtraEarnings = (xenos - 1) * (ogEarningValue.xenos / 10);
        xenosEarnings += xenosExtraEarnings;
      }
      setFactionEarnings({ ...factionEarnings, xenos: xenosEarnings })
    }
    if (femi) {
      femiEarnings = ogEarningValue.femi;
      if (femi > 1) {
        let femiExtraEarnings = (femi - 1) * (ogEarningValue.femi / 10);
        femiEarnings += femiExtraEarnings;
      }
      setFactionEarnings({ ...factionEarnings, femi: femiEarnings })
    }
    if (lochias) {
      lochiasEarnings = ogEarningValue.lochias;
      if (lochias > 1) {
        let lochiasExtraEarnings = (lochias - 1) * (ogEarningValue.lochias / 10);
        lochiasEarnings += lochiasExtraEarnings;
      }
      setFactionEarnings({ ...factionEarnings, lochias: lochiasEarnings })
    }
    if (olu) {
      oluEarnings = ogEarningValue.olu;
      if (olu > 1) {
        let oluExtraEarnings = (olu - 1) * (ogEarningValue.olu / 10);
        oluEarnings += oluExtraEarnings;
      }
      setFactionEarnings({ ...factionEarnings, olu: oluEarnings })
    }
    console.log("factionEarnings", factionEarnings)
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
        <section className="pt-28 pb-12 flex justify-center">
          <div>
            <h2>Determine how much Fren coin you'll earn</h2>
            <p>Enter the number of each fren you have in the form below</p>
          </div>
        </section>
        <Form state={state} setState={setState} />
        {/*<CoinOutput coinPerDay={coinPerDay} />*/}
        <section className="flex justify-center">
          <div className="flex flex-col text-center text-lg">
            <h3>You will earn</h3>
            <h2 className="text-3xl">{coinPerDay}</h2>
            <h3>Fren Coin per day</h3>
          </div>
        </section>
      </main>

    </div>
  )
}
