export class Cliente {
  id?: number;
  nome?: string;
}

export class Produto {
  id?: number;
  nome?: string;
  valor?: number;
}

export class Item {
  id?: number;
  produto?: Produto;
  quantidade?: number;
  total?: number;
}

export class Venda {
  id?: number;
  cliente?: Cliente;
  frete: number;
  itens: Array<Item>;
  total: number;

  constructor() {
    this.itens = new Array<Item>();
    this.frete = 0;
    this.total = 0;
  }
}
