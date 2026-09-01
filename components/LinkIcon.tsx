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

function TikTokIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.74V9.42a6.35 6.35 0 1 0 5.45 6.25V8.96a8.2 8.2 0 0 0 4.8 1.55V7.07a4.84 4.84 0 0 1-1.03-.38z" />
    </Svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0-0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </Svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.06c0-.89.25-1.5 1.53-1.5h1.63V3.8c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.44-3.96 4.07v2.27H7.68v3.08h2.64V21h3.18z" />
    </Svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.49h.01c6.58 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.49-8.44zM12.09 21.8c-1.81 0-3.58-.49-5.13-1.42l-.37-.22-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.51-5.21c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 0 1 6.97 2.89 9.8 9.8 0 0 1 2.89 6.98c0 5.43-4.42 9.85-9.85 9.85zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </Svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M21.6 3.2 2.5 10.57c-.87.35-.86.83-.16 1.05l4.9 1.53 1.88 5.82c.23.64.12.9.79.9.52 0 .75-.24 1.03-.52l2.39-2.32 4.97 3.67c.91.5 1.56.24 1.79-.84l3.25-15.33c.34-1.32-.5-1.92-1.74-1.34zM8 12.8l10.99-6.93c.54-.33 1.03-.15.62.2l-8.9 8.04-.35 3.75L8 12.8z" />
    </Svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.55 16.1V7.9L16.8 12l-7.25 4.1z" />
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

function EmailIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.5l9 5.5 9-5.5V7H3zm18 10V9.83l-8.48 5.19a1 1 0 0 1-1.04 0L3 9.83V17h18z" />
    </Svg>
  );
}

function LinkDefaultIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M10.59 13.41a1.99 1.99 0 0 0 2.82 0l3.59-3.59a2 2 0 0 0-2.83-2.83l-1.59 1.59-1.41-1.41 1.59-1.59a4 4 0 0 1 5.66 5.66l-3.59 3.59a4 4 0 0 1-5.66 0l1.42-1.42zm2.82-2.82a1.99 1.99 0 0 0-2.82 0L7 14.18a2 2 0 1 0 2.83 2.83l1.59-1.59 1.41 1.41-1.59 1.59a4 4 0 0 1-5.66 0l-3.59-3.59a4 4 0 0 1 0-5.66l1.42 1.42z" />
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
      return <TikTokIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
    case "telegram":
      return <TelegramIcon className={className} />;
    case "youtube":
      return <YoutubeIcon className={className} />;
    case "x":
      return <XIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "email":
      return <EmailIcon className={className} />;
    default:
      return <LinkDefaultIcon className={className} />;
  }
}
