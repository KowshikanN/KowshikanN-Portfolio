import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute left-full w-[32.625rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
