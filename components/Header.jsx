import TypingAnimation from "./Typinganimation"

const Header = () => {
  return (
      <header className="m-5 flex md:flex-nowrap flex-wrap  md:justify-between items-center ">
        <div>
          <h2 className="text-4xl font-bold ">
            Want To <span className="text-blue-500">Learn</span>
          </h2>
         <p className="my-3 text-xl font-mono font-light text-gray-600">Python <span > |</span></p>
          <p  className="my-3 text-xl font-normal font-sans  text-gray-500 ">We make programming simple & easy to understand.</p>
          <button className="px-4 py-3 my-4 bg-blue-500 text-white rounded  ">Join Apha Plus</button>
        </div>
        <div >
          <img  src="https://sheeninfotech.com/wp-content/uploads/2021/04/25200-student.gif" alt="" />
        </div>
      </header>
   
  )
}

export default Header