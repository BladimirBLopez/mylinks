import { MessageCircle, Send, Mail, Link2, Music2 } from "lucide-react";
import type { IconoLink } from "@/lib/tiktokers";

function Svg({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.03.68-.32.32-.52.61-.68 1.03-.12.31-.26.78-.3 1.65C4.25 8.16 4.24 8.48 4.24 11.15v.85c0 2.67.01 2.99.06 4.04.04.87.18 1.34.3 1.65.16.42.36.71.68 1.03.32.32.61.52 1.03.68.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.03-.68.32-.32.52-.61.68-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.77 2.77 0 0 0-.68-1.03 2.77 2.77 0 0 0-1.03-.68c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.35-2.02a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
    </Svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.06c0-.89.25-1.5 1.53-1.5h1.63V3.8c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.44-3.96 4.07v2.27H7.68v3.08h2.64V21h3.18z" />
    </Svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M21.58 7.2c-.23-.86-.9-1.53-1.76-1.76C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.86.23-1.53.9-1.76 1.76C2 8.77 2 12 2 12s0 3.23.42 4.8c.23.86.9 1.53 1.76 1.76C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86-.23 1.53-.9 1.76-1.76C22 15.23 22 12 22 12s0-3.23-.42-4.8zM10 15.02V8.98L15.2 12 10 15.02z" />
    </Svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3c-1.15 0-1.9.76-1.9 1.76 0 .97.73 1.76 1.87 1.76h.02c1.18 0 1.9-.79 1.9-1.76C7.12 3.76 6.4 3 5.25 3zM20.45 20h-3.38v-6.16c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.69.71-1.97 1.4-.1.25-.13.6-.13.95V20H9.65s.05-10.6 0-11.5h3.38v1.63c.45-.7 1.25-1.7 3.05-1.7 2.23 0 3.9 1.45 3.9 4.58V20z" />
    </Svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M18.24 3H21l-6.5 7.43L22 21h-6.24l-4.9-6.4L5.2 21H2.4l6.95-7.94L2 3h6.4l4.42 5.83L18.24 3zm-1.1 16.2h1.7L7 4.7H5.16l11.98 14.5z" />
    </Svg>
  );
}

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
      return <InstagramIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "whatsapp":
      return <MessageCircle className={className} />;
    case "telegram":
      return <Send className={className} />;
    case "youtube":
      return <YoutubeIcon className={className} />;
    case "x":
      return <XIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "email":
      return <Mail className={className} />;
    default:
      return <Link2 className={className} />;
  }
}
