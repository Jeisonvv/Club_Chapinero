// src/data/servicios.ts

export interface Servicio {
  slug: string;
  data: {
    title: string;
    img: string;
  };
}

export const servicios: Servicio[] = [
  {
    slug: "Poker",
    data: {
      title: "Mesa de poker",
      img: "/servicios/Mesa_De_Poker.jpg",
    },
  },
  {
    slug: "restaurante",
    data: {
      title: "Restaurante",
      img: "/servicios/Restaurante.png",
    },
  },
  {
    slug: "torneos",
    data: {
      title: "Torneos",
      img: "/servicios/Torneos.png",
    },
  },
  {
    slug: "reserva",
    data: {
      title: "Reserva",
      img: "/servicios/reserva_mesa.jpg",
    },
  },
];
