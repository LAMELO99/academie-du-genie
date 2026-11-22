"use client";

import { useSyncExternalStore } from "react";
import type { Attempt } from "./types";
import { dayKey } from "./dates";

export interface ProgressState {
  version: 1;
  attempts: Attempt[];
  activityDays: string[];
}

const KEY = "academie-du-genie:progress";
const EVENT = "academie-du-genie:progress-change";
const EMPTY: ProgressState = { version: 1, attempts: [], activityDays: [] };

let cache: ProgressState | null = null;
let cacheRaw: string | null = null;

function read(): ProgressState {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return cache ?? EMPTY;
  }
  if (raw === cacheRaw && cache) return cache;
  cacheRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as Partial<ProgressState>) : null;
    cache = {
      version: 1,
      attempts: Array.isArray(parsed?.attempts) ? parsed.attempts : [],
      activityDays: Array.isArray(parsed?.activityDays) ? parsed.activityDays : [],
    };
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(state: ProgressState) {
  const raw = JSON.stringify(state);
  cache = state;
  cacheRaw = raw;
  try {
    window.localStorage.setItem(KEY, raw);
  } catch {
    // Stockage indisponible (navigation privée…) : on garde l'état en mémoire.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) cb();
  };
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", onStorage);
  };
}

/** État de progression, lu depuis localStorage (vide pendant le rendu serveur). */
export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

/** true une fois côté client (évite les écarts d'hydratation). */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function recordAttempt(a: Omit<Attempt, "date">): Attempt {
  const state = read();
  const attempt: Attempt = { ...a, date: new Date().toISOString() };
  const today = dayKey();
  write({
    version: 1,
    attempts: [...state.attempts, attempt],
    activityDays: state.activityDays.includes(today)
      ? state.activityDays
      : [...state.activityDays, today],
  });
  return attempt;
}

export function resetProgress() {
  write(EMPTY);
}

export function exportProgress(): string {
  return JSON.stringify(read(), null, 2);
}

export function importProgress(json: string): boolean {
  try {
    const parsed = JSON.parse(json) as ProgressState;
    if (!Array.isArray(parsed.attempts)) return false;
    write({
      version: 1,
      attempts: parsed.attempts,
      activityDays: Array.isArray(parsed.activityDays) ? parsed.activityDays : [],
    });
    return true;
  } catch {
    return false;
  }
}
