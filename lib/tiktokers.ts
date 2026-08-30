export type IconoLink =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "telegram"
  | "youtube"
  | "x"
  | "linkedin"
  | "email"
  | "link";

export type Tema = "rosa" | "morado" | "azul" | "oscuro" | "atardecer";

export type Link = { titulo: string; url: string; icono?: IconoLink };

export type Tiktoker = {
  usuario: string;
  nombre: string;
  foto: string;
  bio?: string;
  tema?: Tema;
  links: Link[];
};

export const tiktokers: Tiktoker[] = [
  {
    usuario: "eun7",
    nombre: "eun7",
    foto: "https://res.cloudinary.com/dkq95jus0/image/upload/v1788115811/eunperifltiktok_enr9rs.png",
    bio: "",
    tema: "morado",
    links: [
      { titulo: "Mi TikTok", url: "https://tiktok.com/@eun7", icono: "tiktok" },
    ],
  },
];
