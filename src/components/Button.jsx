const Button = ({ styles, text, ileft, iright, onClick }) => {
  return (
    <button
      className={`${styles} rounded-xl cursor-pointer transition-all flex  flex-nowrap items-center justify-center font-semibold text-gray-900 text-sm`}
      onClick={onClick}
    >
      {ileft}
      {text}
      {iright}
    </button>
  );
};
export default Button;
