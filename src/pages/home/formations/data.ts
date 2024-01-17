import Docker from '../../../assets/docker1.svg';
import Kubernete from '../../../assets/kubernete1.svg';
import Server from '../../../assets/server.svg';

export interface dataProps {
    id: string,
    title: string
    descripition: string,
    img: string,
    status: boolean
}


export const dataCardCurso = [
    {
        id: "1",
        title: "Kubernetes",
        descripition: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam, adipisci accusamus voluptatem nostrum voluptates
        mollitia labore vero itaque quia culpa amet sequi unde illo quasi, 
        deleniti quam ducimus dicta magni.
        `,
        img: Kubernete,
        status: false
    },
    {
        id: "1",
        title: "Tec Docker",
        descripition: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam, adipisci accusamus voluptatem nostrum voluptates
        mollitia labore vero itaque quia culpa amet sequi unde illo quasi, 
        deleniti quam ducimus dicta magni.
        `,
        img: Docker,
        status: true
    },
    {
        id: "1",
        title: "Tec Server",
        descripition: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam, adipisci accusamus voluptatem nostrum voluptates
        mollitia labore vero itaque quia culpa amet sequi unde illo quasi, 
        deleniti quam ducimus dicta magni.
        `,
        img: Server,
        status: false
    }
] satisfies dataProps[]