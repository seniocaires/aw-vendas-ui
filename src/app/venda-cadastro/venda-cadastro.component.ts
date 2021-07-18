import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClientesService } from '../vendas/clientes.service';
import { ProdutosService } from '../vendas/produtos.service';
import { Item, Venda } from '../vendas/venda';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  venda = new Venda();
  item = new Item();

  clientes: Array<any> = [];
  produtos: Array<any> = [];

  @Output()
  vendaSalva: EventEmitter<Venda> = new EventEmitter<Venda>();

  constructor(private clientesService: ClientesService,
    private produtosService: ProdutosService,
    private vendaService: VendasService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.clientesService.listar().subscribe(clientes => this.clientes = clientes);
    this.produtosService.listar().subscribe(produtos => this.produtos = produtos);
  }

  incluirItem() {
    if (this.item.produto && this.item.produto.valor && this.item.quantidade) {
      if (!this.venda.itens) {
        this.venda.itens = new Array<Item>();
      }
      this.item.total = this.item.produto.valor * this.item.quantidade;
      this.venda.itens.push(this.item);
      this.item = new Item();
    }

    this.calcularTotal();
  }

  calcularTotal() {
    const totalItens = this.venda.itens.map(item => ((item.produto && item.produto?.valor && item.quantidade) ? item.produto?.valor * item.quantidade : 0)).reduce((total, valorCorrete) => (total ? total : 0) + (valorCorrete ? valorCorrete : 0), 0);

    this.venda.total = (totalItens ? totalItens : 0) + this.venda.frete;
  }

  adicionar(form:any) {
    this.vendaService.salvar(this.venda).subscribe(venda => {
      form.reset();
      this.venda = new Venda();
      this.item = new Item();

      this.vendaSalva.emit(venda);
      this.messageService.add({severity:'success', summary:'Sucesso', detail:'Venda cadastrada com sucesso!'});
    });
  }
}
