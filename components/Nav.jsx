export default function Nav() {
  return (
    <nav className="w-full fixed top-0 bg-green-600 h-24">
      <div className="flex flex-col-reverse sm:block">
        <p className="text-xs block flex justify-center sm:text-sm sm:absolute sm:left-3 sm:top-3">
          Made by
          <a
            href="https://twitter.com/kobez_01"
            className="px-2 hover:opacity-80 transition ease-in-out duration-150">
            kobez
          </a>
        </p>
        <div className="sm:top-3 mt-3">
          <small className="text-xs flex justify-center">the unofficial</small>
          <h1 className="text-2xl sm:text-4xl md:text-5xl flex justify-center">
            Fren Coin Calculator
          </h1>
        </div>
      </div>
    </nav>
  )
}