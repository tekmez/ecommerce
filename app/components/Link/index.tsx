import Link from "next/link";
import "@/app/styles/link.css";

interface LinkProps {
  url: string;
}

const MyLink = ({ url, ...rest }: LinkProps) => {
  return (
    <Link className="link" href={`/${url}`} {...rest}>
      Add to Cart
    </Link>
  );
};

export default MyLink;
