import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChipsAutocompleteComponent
    }
  ]
})
export class ChipsAutocompleteComponent implements ControlValueAccessor {
  @ViewChild('elementInput') elementInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  @Input() disabled: boolean = false;
  @Input() showIdChip: boolean = false;
  @Input() label: string = '';
  @Input() allElements: { key: string, value: string }[] = [];
  @Input() tooltip: string;
  @Input() valueInput: string;
  @Input() placeholderInput: string;
  @Input() isWriteMode: boolean;

  onChange = (item) => { };
  onTouched = () => { };
  touched = false;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredItems: Observable<{ key: string, value: string }[]>;
  itemCtrl: FormControl = new FormControl();
  selectedElements: { key: string, value: string }[] = [];

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => this._filter(item)));
  }
  writeValue(obj: any): void {
    this.selectedElements = obj ? this.allElements.filter(el => obj.some(item => item === el.key)): [];
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  remove(item: { key: string, value: string }): void {
    const index = this.selectedElements.map(item => item.key).indexOf(item.key);

    if (index >= 0) {
      this.selectedElements.splice(index, 1);
      this.elementInput.nativeElement.value = '';
      this.itemCtrl.setValue(null);
      this.onChange(this.selectedElements.map(e => e.key));
      this.markAsTouched();
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedElements.push({
      key: event.option.value,
      value: event.option.viewValue
    });
    this.elementInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
    this.onChange(this.selectedElements.map(e => e.key));
    this.markAsTouched();
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  private _filter(filter?: string): { key: string, value: string }[] {
    const filterElements = this.allElements.filter(el => !this.selectedElements.some(item => item.key === el.key));
    if (filter && typeof filter === 'string') {
      const filterLc = filter.toLowerCase();
      return filterElements.filter(item => item.key.toLowerCase().indexOf(filterLc) === 0 || item.value.toLowerCase().indexOf(filterLc) === 0);
    } else if (filter && typeof filter === 'number') {
      let filterLc = filter + '';
      filterLc = filterLc.toLowerCase();
      return filterElements.filter(item => {
        const key = item.key + '';
        return key.toLowerCase().indexOf(filterLc) === 0 || item.value.toLowerCase().indexOf(filterLc) === 0
      });
    }
    return filterElements;
  }

}
