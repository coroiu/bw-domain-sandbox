import { Observable } from "rxjs";
import { Session } from "../domain/session";

export interface SessionRepository {
  getAll(): Observable<Session[]>;
  save(userId: string, session: Session): Observable<void>;
}
