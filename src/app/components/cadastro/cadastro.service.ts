import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Cadastro } from "./cadastro.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CadastroService {
  baseUrl = "http://localhost:3001/cadastros";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cadastro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${this.baseUrl}/${cadastro.id}`;
    return this.http.put<Cadastro>(url, cadastro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cadastro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
