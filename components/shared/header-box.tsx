interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtitle: string;
  user?: string;
}

export const HeaderBox = ({ type, title, subtitle, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && <span className="text-[#AA5EFE]">{user}</span>}
      </h1>
      <p className="header-box-subtext">{subtitle}</p>
    </div>
  );
};
