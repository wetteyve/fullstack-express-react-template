import { MailOutlined, HomeOutlined } from '@ant-design/icons';

export const menues = [
  {
    key: "startseite",
    icon: HomeOutlined
  },
  {
    key: "spielbetrieb",
    label: "Spielbetrieb",
    subMenues: [
      {
        key: "infos",
        label: "Infos"
      },
      {
        key: "kategorien",
        label: "Kategorien"
      },
      {
        key: "ranglisten",
        label: "Ranglisten"
      },
    ]
  },
  {
    key: "anmeldung",
    label: "Anmeldung"
  },
  {
    key: "infos_uht",
    label: "Infos zum UHT"
  },
  {
    key: "fotos",
    label: "Fotos"
  },
  {
    key: "organisation",
    label: "Organisation"
  },
  {
    key: "sponsoren",
    label: "Sponsoren"
  },
  {
    key: "kontakt",
    icon: MailOutlined
  }
];