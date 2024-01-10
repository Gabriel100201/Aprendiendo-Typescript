import { type avatar as avatarType } from "../types";

type Props = {
  avatarInfo: avatarType;
};

export const Card: React.FC<Props> = ({ avatarInfo }) => {
  return (
    <>
      <div className="w-24 h-32 flex flex-col justify-center items-center bg-slate-200 rounded-lg">
        <span>{avatarInfo.name}</span>
        <span>{avatarInfo.age}</span>
      </div>
    </>
  );
};
