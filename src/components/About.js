import MeBig from "../assets/MeBig.png"
import Logo from "../assets/Logo.png"

function About() {

    return(
        <>
        <section className="text-white body-font bg-bgGray">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-144 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={MeBig}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center ">
          <div className="w-12 justify-center">
        <img className="mb-2" src={Logo} />
        </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-400 text-lg">Andrew Haight</h2>
            <div className="w-12 h-1 bg-blue-600 rounded mt-2 mb-4"></div>
            <p className="text-base">Aspiring UI developer with a background in illustration and design.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            TL;DR</p>
            <p className="leading-relaxed text-lg mb-4">🐱‍💻 I love being a UI developer and designer!</p>
            <p className="leading-relaxed text-lg mb-4">✏️ Illustration and design are a part of my background.</p>
            <p className="leading-relaxed text-lg mb-4">🧠 My brain is always asking "Why?" and I love the process of discovery.</p>
            <p className="leading-relaxed text-lg mb-4">🤓 I love being helpful and working on team projects.</p>
            <p className="leading-relaxed text-lg mb-4">🔥 When given a task I focus and get it done</p> 

          
          <a className="text-amber-300 inline-flex items-center">LinkedIn
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default About;