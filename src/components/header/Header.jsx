

import profile from "../../assets/profile.png"


const Header = () => {
  return (
    <div className="flex justify-between items-center p-4  border-b w-11/12 mx-auto">
        <h3 className="text-3xl font-bold">Knowladge Cafe</h3>
        <img src={profile} alt="" />
    </div>
  )
}



export default Header