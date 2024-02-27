interface ProgressBarProps {
  redProgress: number;
  greenProgress: number;
  blueProgress: number;
}

const ProgressBar = ({ redProgress, greenProgress, blueProgress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-[#757575] h-[14px] overflow-hidden">
      <div className="flex h-full">
        <div className="bg-[#4e4d4d]" style={{ width: `${redProgress}%` }}></div>
        <div className="bg-[#a7a6a6]" style={{ width: `${greenProgress}%` }}></div>
        <div className="bg-[#eae9e9]" style={{ width: `${blueProgress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
