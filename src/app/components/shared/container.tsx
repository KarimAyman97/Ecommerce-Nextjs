interface containerProps {
  children: React.ReactNode;
}

export const Container: React.FC<containerProps> = ({ children }) => {
  return <div className="px-3.5 md:px-8 lg:px-16 ">{children}</div>;
};
