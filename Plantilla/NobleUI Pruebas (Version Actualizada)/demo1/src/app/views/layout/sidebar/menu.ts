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
    label: 'Generales',
    isTitle: true
  },
  {
    id:7,
    label: 'Departamentos',
    icon: 'map',
    link: '/departamentos'
  },
  {
    id:8,
    label: 'Municipios',
    icon: 'map',
    link: '/municipios'
  },
  {
    id:12,
    label: 'Estados Civiles',
    icon: 'heart',
    link: '/estadosciviles'
  },
  {
    id:10,
    label: 'Metodos de Pago',
    icon: 'credit-card',
    link: '/metodospago'
  },
  {
    id:11,
    label: 'Direcciones',
    icon: 'map-pin',
    link: '/direcciones'
  },
  {
    label: 'Actividades',
    isTitle: true
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
    id:19,
    label: 'Encargados',
    icon: 'user-check',
    link: '/encargados'
  },
  {
    id:18,
    label: 'Actividades',
    icon: 'sun',
    link: '/actividades'
  },
  {
    id:3,
    label: 'Reservaciones',
    icon: 'star',
    link: '/reservaciones'
  },
  {
    label: 'Acceso',
    isTitle: true
  },
  {
    id:17,
    label: 'Roles',
    icon: 'users',
    link: '/roles'
  },
  {
    id:16,
    label: 'Usuarios',
    icon: 'user-plus',
    link: '/usuarios'
  },
];
