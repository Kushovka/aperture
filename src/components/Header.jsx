import logo from "/assets/logo.svg";
import { headerItems } from "../const";

const Header = () => {
  return (
    <header className="bg-black01">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between p-[30px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-[32px]">
          {headerItems.map((item, index) => (
            <div key={index}>
              <a href="">{item.name}</a>
            </div>
          ))}
          <button className="px-[20px] py-[10px] bg-white rounded-[14px] text-black">
            Get template
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
