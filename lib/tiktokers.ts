export type Link = { titulo: string; url: string };

export type Tiktoker = {
  usuario: string;   // slug -> mylinks.vercel.app/usuario
  nombre: string;
  foto: string;       // URL de Cloudinary
  bio?: string;
  links: Link[];
};

export const tiktokers: Tiktoker[] = [
  {
    usuario: "eun7",
    nombre: "eun7",
    foto: "https://res.cloudinary.com/dkq95jus0/image/upload/v1788115811/eunperifltiktok_enr9rs.png",
    bio: "",
    links: [
      { titulo: "Mi TikTok", url: "https://tiktok.com/@eun7" },
    ],
  },
];
