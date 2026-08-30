import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
  Mail,
  Link2,
  Music2,
} from "lucide-react";
import type { IconoLink } from "@/lib/tiktokers";

export function LinkIcon({
  icono,
  className,
}: {
  icono?: IconoLink;
  className?: string;
}) {
  switch (icono) {
    case "tiktok":
      return <Music2 className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "whatsapp":
      return <MessageCircle className={className} />;
    case "telegram":
      return <Send className={className} />;
    case "youtube":
      return <Youtube className={className} />;
    case "x":
      return <Twitter className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "email":
      return <Mail className={className} />;
    default:
      return <Link2 className={className} />;
  }
}
