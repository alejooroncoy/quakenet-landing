import Avatar1 from "@/assets/integrants/integrante-1.jpg";
import Avatar2 from "@/assets/integrants/integrante-2.png";
import Avatar3 from "@/assets/integrants/integrante-3.png";
import Avatar4 from "@/assets/integrants/integrante-4.png";
import Avatar5 from "@/assets/integrants/integrante-5.png";
import Avatar6 from "@/assets/integrants/integrante-6.jpg";
import Avatar7 from "@/assets/integrants/integrante-7.png";
import Avatar8 from "@/assets/integrants/integrante-8.png";

interface Integrant {
  name: string;
  avatar: ImageMetadata;
  className?: string;
}

const integrants: Integrant[] = [
  {
    name: "Kevin Chi",
    avatar: Avatar1,
    className: ""
  },
  {
    name: "James Lucas",
    avatar: Avatar2
  },
  {
    name: "Eduardo Rivera",
    avatar: Avatar3
  },
  {
    name: "Gianmarco Jiménez",
    avatar: Avatar4
  },
  {
    name: "Jocelyn Almerco",
    avatar: Avatar5
  },
  {
    name: "Guillermo Tantaleán",
    avatar: Avatar6
  },
  {
    name: "Alejandro Oroncoy",
    avatar: Avatar7
  },
  {
    name: "Fabrizio Orihuela",
    avatar: Avatar8
  }
];

export default integrants;