import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.css']
})
export class InputBusquedaComponent {
  @Output() searchInput = new EventEmitter()
  inputValue: string = '';
  onSearchFood(){
    this.searchInput.emit(this.inputValue)
  }
}
