type Props = {
  placeholder: string;
  isAvaible?: boolean;
};

export const Input: React.FC<Props> = ({ placeholder, isAvaible = true }) => {
  return (
    <>
      <input type="text" placeholder={placeholder} disabled={!isAvaible} />
    </>
  );
};