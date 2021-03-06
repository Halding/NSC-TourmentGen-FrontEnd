import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { TournamentList } from './tournament-list';
import { UserDto } from "../../users/shared/user.dto";
import { TournamentDto } from "./tournament.dto";
import { TournamentInputDto } from './tournamentinput.dto';
import { WinnerDto } from './winner.dto';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private _http: HttpClient) {
  }

  createTournament(name: string, participants: string): Observable<TournamentDto> {
    return this._http.post<TournamentDto>(environment.api + '/tournament', {
      name,
      participants
    });
  }

  getTournaments(): Observable<TournamentList> {
    return this._http
      .get<TournamentList>(environment.api + '/Tournament');
  }

  getTournament(id: number): Observable<TournamentDto> {
    return this._http
      .get<TournamentDto>(environment.api + '/Tournament/' + id);
  }

  deleteTournament(id: number): Observable<any> {
    return this._http.delete(environment.api + '/Tournament/' + id);

  }

  updateTournament(tournament: TournamentDto): Observable<TournamentDto> {
    return this._http
      .put<TournamentDto>(environment.api + '/Tournament/' + tournament.id, tournament);
  }

  makeWinner(winnerDto: WinnerDto): Observable<TournamentDto> {
    return this._http.put<TournamentDto>(environment.api + "/tournament/winner/" + winnerDto.tournamentId, winnerDto);
  }
}
