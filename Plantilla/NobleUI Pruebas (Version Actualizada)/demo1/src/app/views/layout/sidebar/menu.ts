import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Inicio',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    id:6,
    label: 'Playas',
    icon: 'sunset',
    link: '/listplayitas'
  },
  {
    id:15,
    label: 'Equipos',
    icon: 'box',
    link: '/equipos'
  },
  {
    id:4,
    label: 'Mantenimientos',
    icon: 'settings',
    link: '/mantenimientos'
  },
  {
    id:1,
    label: 'Clientes',
    icon: 'users',
    link: '/clientes'
  },
  {
    label: 'Encargados',
    icon: 'user-check',
    link: '/encargados'
  },
  {
    label: 'Actividades',
    icon: 'sun',
    link: '/actividades'
  },
  {
    id:3,
    label: 'Reservaciones',
    icon: 'sun',
    link: '/reservaciones'
  },
  {
    id:7,
    label: 'Departamentos',
    icon: 'home',
    link: '/departamentos'
  },
  {
    id:8,
    label: 'Municipios',
    icon: 'home',
    link: '/municipios'
  },
  {
    id:12,
    label: 'Estados Civiles',
    icon: 'home',
    link: '/estadosciviles'
  },
  {
    id:10,
    label: 'Metodos de Pago',
    icon: 'home',
    link: '/metodospago'
  },
  {
    id:11,
    label: 'Direcciones',
    icon: 'home',
    link: '/direcciones'
  },
  {
    id:17,
    label: 'Roles',
    icon: 'home',
    link: '/roles'
  },
  {
    id:16,
    label: 'Usuarios',
    icon: 'home',
    link: '/usuarios'
  },
];
