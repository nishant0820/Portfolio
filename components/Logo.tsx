import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

const Logo = ({ title, subtitle, className }: Props) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "font-bold text-2xl hover:text-hoverColor hoverEffect group", className
        )}
      >
        {title}{" "}
        <span className="text-lightSky group-hover:text-white hoverEffect">
          {subtitle}
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
