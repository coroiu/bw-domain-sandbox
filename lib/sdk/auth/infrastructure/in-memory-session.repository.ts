import { Observable, of } from "rxjs";
import { Session } from "../domain/session";
import { SessionRepository } from "../ports/session.repository";

export class InMemorySessionRepository implements SessionRepository {
  private sessions = new Map<string, Session>();

  getAll(): Observable<Session[]> {
    const values = Array.from(this.sessions.values());
    return of(values);
  }

  save(userId: string, session: Session): Observable<void> {
    this.sessions.set(userId, session);
    return of(undefined);
  }
}
