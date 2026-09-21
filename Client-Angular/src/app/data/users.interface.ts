import { User } from "../interfaces/users.interface";

/**
 * Listado de usuarios del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {User[]}
 */
export const USERS: User[] = [
  {
    id: 1,
    name: 'Carlos',
    lastName: 'Ramírez',
    age: 22,
    email: 'carlos.ramirez@example.com',
    engineering: 'Sistemas'
  },
  {
    id: 2,
    name: 'Ana',
    lastName: 'Gómez',
    age: 20,
    email: 'ana.gomez@example.com',
    engineering: 'Industrial'
  },
  {
    id: 3,
    name: 'Luis',
    lastName: 'Martínez',
    age: 23,
    email: 'luis.martinez@example.com',
    engineering: 'Electronica'
  },
  {
    id: 4,
    name: 'María',
    lastName: 'Lopez',
    age: 21,
    email: 'maria.lopez@example.com',
    engineering: 'Ambiental'
  },
  {
    id: 5,
    name: 'Jorge',
    lastName: 'Fernández',
    age: 24,
    email: 'jorge.fernandez@example.com',
    engineering: 'Sistemas'
  },
  {
    id: 6,
    name: 'Paola',
    lastName: 'Ríos',
    age: 19,
    email: 'paola.rios@example.com',
    engineering: 'Biomedica'
  },
  {
    id: 7,
    name: 'Andrés',
    lastName: 'Torres',
    age: 22,
    email: 'andres.torres@example.com',
    engineering: 'Electronica'
  },
  {
    id: 8,
    name: 'Lucía',
    lastName: 'Mendoza',
    age: 23,
    email: 'lucia.mendoza@example.com',
    engineering: 'Industrial'
  },
  {
    id: 9,
    name: 'Sofía',
    lastName: 'Pérez',
    age: 20,
    email: 'sofia.perez@example.com',
    engineering: 'Ambiental'
  },
  {
    id: 10,
    name: 'Miguel',
    lastName: 'Castro',
    age: 25,
    email: 'miguel.castro@example.com',
    engineering: 'Sistemas'
  }
];