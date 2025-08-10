import { ButtonProps } from "@/interface";

const Button = ({ buttonLabel, buttonSize = 'text-sm', buttonBackgroundColor, action }: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor ? {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  }[buttonBackgroundColor] : 'bg-slate-500';

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;