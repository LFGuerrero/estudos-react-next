import { User } from "../types/user";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))


export async function getUsers(): Promise<User[]> {
    await delay(2000); // Espera 2 segundos para simular a internet lenta

  // Retorna dados mockados
  return [
    { id: "1", firstName: "Tony", lastName: "Stark", role: "Engineer" },
    { id: "2", firstName: "Steve", lastName: "Rogers", role: "Captain" },
    { id: "3", firstName: "Natasha", lastName: "Romanoff", role: "Spy" },
    { id: "4", firstName: "Bruce", lastName: "Banner", role: "Scientist" },
  ];
}