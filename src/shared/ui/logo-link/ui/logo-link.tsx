import "./logo-link.scss"
import { Link } from "@/shared/ui/link";
import { Icon } from "@gravity-ui/uikit";

export interface ILogoLink {
  logoname: string;
  contentText?: string;
  size?: number;
  fill?: string;
  href?: string;
  className?: string;
}

export const LogoLink = ({
  logoname,
  href = "#!",
  size = 14,
  fill = "grey",
  className,
  contentText,
}: ILogoLink) => 

{
  return (
    <Link href={href}>
      <Icon data={logoname} className={className} fill={fill} size={size} />
      <p className="content-text">{contentText}</p>
    </Link>
  );
};
