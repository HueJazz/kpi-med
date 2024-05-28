import { Path } from 'react-hook-form';
import { ContactFormData } from "./components/Contact";
import { LoginFormData } from "./components/Login";

interface SubMenu {
    title: string,
    subtitle?: string | boolean,
    description?: string,
    src?: string
    style?: string,
    buttonStyle?: string,
}

interface Menu {
    title: string,
    submenu?: SubMenu[],
    link?: string
}

export const ABOUT: SubMenu[] = [
    {
        title: "Overview",
        style: "bg-white text-custom",
        buttonStyle: "bg-primary hover:bg-active text-white"
    },
    {
        title: "Why",
        style: "bg-secondary text-custom",
        buttonStyle: "bg-primary hover:bg-active text-white"
    },
    {
        title: "Showcasing",
        subtitle: true,
        style: "bg-active text-white",
        buttonStyle: "bg-white hover:bg-custom hover:text-white text-active"
    }
]

export const SERVICES: SubMenu[] = [
    {
        title: "Classification Pulmonary abnormalities",
        src: require("./images/classification.webp")
    },
    {
        title: "Detection Pulmonary abnormalities",
        src: require("./images/detection.webp")
    },
    {
        title: "COVID",
        src: require("./images/covid.webp")
    },
    {
        title: "Melanoma",
        src: require("./images/melanoma.webp")
    },
    {
        title: "Lyme disease",
        src: require("./images/lyme.webp")
    },
    {
        title: "Histology",
        src: require("./images/histology.webp")
    }
]

export const ASSISTANTS: SubMenu[] = [
    {
        title: "Overview",
        style: "bg-white text-custom",
        buttonStyle: "bg-primary hover:bg-active text-white"
    },
    {
        title: "Assistants",
        description: "DenseNet\nYOLO\nResNet\nInception\nInceptionResNet\nEfficientNet\nXception\nMobileNet",
        style: "bg-secondary text-custom",
        buttonStyle: "bg-primary hover:bg-active text-white"
    },
    {
        title: "Solutions",
        subtitle: "Empower Your Operations with AI-Assistants",
        description: "Unlock the potential of AI-assistants with our advanced solutions. Discover the right AI architecture for your needs, understand its capabilities, and elevate your business processes to new heights. Take control of your digital transformation journey today.",
        style: "bg-active text-white",
        buttonStyle: "bg-white hover:bg-custom hover:text-white text-active"
    }
];

export const MENU: Menu[] = [
    {
        title: "Home",
        link: "kpi-med"
    },
    {
        title: "About",
        submenu: ABOUT,
    },
    {
        title: "Services",
        submenu: SERVICES,
    },
    {
        title: "Assistants",
        submenu: ASSISTANTS,
    },
    {
        title: "Publications",
    },
    {
        title: "Team",
        link: "team"
    },
    {
        title: "Faq",
        link: "faq"
    },
    {
        title: "Contact",
    }
];

interface Cards {
    src: string;
    title: string;
    description: string;
}

export const CARDS: Cards[] = [
    {
        src: require("./images/icon_assistants.png"),
        title: "Doctor Assistants",
        description: "Our artificial intelligence (AI) methods are already working as doctor assistants"
    },
    {
        src: require("./images/icon_services.png"),
        title: "Services",
        description: "Our artificial intelligence (AI) services are ready to use anywhere anytime"
    },
    {
        src: require("./images/icon_publications.png"),
        title: "Publications",
        description: "Our AI services are built on the basis of our thorough scientific research"
    }
];

interface Publications {
    src: string;
    title: string;
}

export const PUBLICATIONS: Publications[] = [
    {
        src: require("./images/publication_1.jpg"),
        title: "Advances in Computer Science for Engineering and Education",
    },
    {
        src: require("./images/publication_2.jpg"),
        title: "Advances in Artificial Systems for Logistics Engineering",
    },
    {
        src: require("./images/publication_3.jpg"),
        title: "Hardware acceleration of artificial intelligence methods in medicine and other fields",
    },
    {
        src: require("./images/publication_4.jpg"),
        title: "Deep Learning: Concepts and Architectures",
    },
    {
        src: require("./images/publication_5.jpg"),
        title: "Principles of increasing the efficiency of deep neural networks",
    },
    {
        src: require("./images/publication_6.jpg"),
        title: "The principles of using new information technologies in medicine",
    }
];

interface Contact {
    id: Path<ContactFormData>;
    label: string;
}

export const CONTACT: Contact[] = [
    {
        id: "name",
        label: "Name"
    },
    {
        id: "email",
        label: "Email"
    },
    {
        id: "number",
        label: "Phone Number"
    },
    {
        id: "message",
        label: "Message"
    }
];

  
interface Login {
    id: Path<LoginFormData>;
    label: string;
}
  
export const LOGIN: Login[] = [{
    id: "email",
    label: "Email"
},
{
    id: "password",
    label: "Password"
}]