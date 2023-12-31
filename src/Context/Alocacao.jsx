import { createContext } from "react";

export const AlocacaoContext = createContext();

export const AlocacaoProvider = ({ children }) => {
    const alocacao = [
        { id: 1, area: 1, automovel: 1, concessionaria: 1, quantidade: 8 },
        { id: 2, area: 2, automovel: 2, concessionaria: 2, quantidade: 1 },
        { id: 3, area: 4, automovel: 3, concessionaria: 3, quantidade: 4 },
        { id: 4, area: 7, automovel: 4, concessionaria: 4, quantidade: 6 },
        { id: 5, area: 8, automovel: 5, concessionaria: 5, quantidade: 4 },
        { id: 6, area: 9, automovel: 6, concessionaria: 1, quantidade: 4 },
        { id: 7, area: 10, automovel: 7, concessionaria: 2, quantidade: 1 },
        { id: 8, area: 1, automovel: 8, concessionaria: 2, quantidade: 7 },
        { id: 9, area: 2, automovel: 9, concessionaria: 3, quantidade: 2 },
        { id: 10, area: 4, automovel: 10, concessionaria: 4, quantidade: 6 },
        { id: 11, area: 7, automovel: 11, concessionaria: 5, quantidade: 3 },
        { id: 12, area: 8, automovel: 12, concessionaria: 1, quantidade: 9 },
        { id: 13, area: 9, automovel: 13, concessionaria: 2, quantidade: 9 },
        { id: 14, area: 10, automovel: 14, concessionaria: 3, quantidade: 6 },
        { id: 15, area: 1, automovel: 15, concessionaria: 3, quantidade: 4 },
        { id: 16, area: 2, automovel: 16, concessionaria: 4, quantidade: 1 },
        { id: 17, area: 4, automovel: 17, concessionaria: 5, quantidade: 8 },
        { id: 18, area: 7, automovel: 18, concessionaria: 1, quantidade: 4 },
        { id: 19, area: 8, automovel: 19, concessionaria: 2, quantidade: 10 },
        { id: 20, area: 9, automovel: 20, concessionaria: 3, quantidade: 10 },
        { id: 21, area: 10, automovel: 21, concessionaria: 4, quantidade: 7 },
        { id: 22, area: 1, automovel: 22, concessionaria: 4, quantidade: 3 },
        { id: 23, area: 2, automovel: 23, concessionaria: 5, quantidade: 5 },
        { id: 24, area: 4, automovel: 24, concessionaria: 1, quantidade: 4 },
        { id: 25, area: 7, automovel: 25, concessionaria: 2, quantidade: 3 },
        { id: 26, area: 8, automovel: 26, concessionaria: 3, quantidade: 3 },
        { id: 27, area: 9, automovel: 27, concessionaria: 4, quantidade: 10 },
        { id: 28, area: 10, automovel: 28, concessionaria: 5, quantidade: 4 },
        { id: 29, area: 1, automovel: 29, concessionaria: 1, quantidade: 2 },
        { id: 30, area: 2, automovel: 30, concessionaria: 2, quantidade: 3 },
        { id: 31, area: 4, automovel: 31, concessionaria: 3, quantidade: 4 },
        { id: 32, area: 7, automovel: 32, concessionaria: 4, quantidade: 2 },
        { id: 33, area: 8, automovel: 33, concessionaria: 5, quantidade: 3 },
        { id: 34, area: 9, automovel: 34, concessionaria: 1, quantidade: 4 },
        { id: 35, area: 10, automovel: 35, concessionaria: 2, quantidade: 3 },
        { id: 36, area: 1, automovel: 36, concessionaria: 3, quantidade: 2 },
        { id: 37, area: 2, automovel: 37, concessionaria: 4, quantidade: 3 },
        { id: 38, area: 4, automovel: 38, concessionaria: 5, quantidade: 3 },
        { id: 39, area: 7, automovel: 39, concessionaria: 1, quantidade: 2 },
        { id: 40, area: 8, automovel: 40, concessionaria: 2, quantidade: 1 }
      ];

      return (
        <AlocacaoContext.Provider value={{ alocacao }}>
          {children}
        </AlocacaoContext.Provider>
      );
      
}