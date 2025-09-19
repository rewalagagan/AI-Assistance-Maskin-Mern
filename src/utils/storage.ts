import { Message } from '../types/chat';

const CHAT_HISTORY_KEY = 'chatbot-history';
const STORAGE_MODE_KEY = 'chatbot-storage-mode'; // 'local' | 'session'

type StorageMode = 'local' | 'session';

const getAvailableStorageOrNull = (storage: Storage): Storage | null => {
  try {
    const testKey = '__storage_test__';
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return storage;
  } catch {
    return null;
  }
};

const getCurrentMode = (): StorageMode => {
  const raw = ((): string | null => {
    try { return localStorage.getItem(STORAGE_MODE_KEY); } catch { return null; }
  })();
  return raw === 'session' ? 'session' : 'local';
};

const getStorage = (): Storage => {
  const mode = getCurrentMode();
  if (mode === 'session') {
    const session = getAvailableStorageOrNull(sessionStorage);
    if (session) return session;
  }
  // Fallback to localStorage
  const local = getAvailableStorageOrNull(localStorage);
  if (local) return local;
  // As a last resort, use an in-memory shim to avoid runtime errors
  const memory: Record<string, string> = {};
  return {
    getItem: (k: string) => (k in memory ? memory[k] : null),
    setItem: (k: string, v: string) => { memory[k] = v; },
    removeItem: (k: string) => { delete memory[k]; },
    clear: () => { Object.keys(memory).forEach(k => delete memory[k]); },
    key: (index: number) => Object.keys(memory)[index] ?? null,
    length: 0
  } as Storage;
};

export const setChatStorageMode = (mode: StorageMode): void => {
  const prevMode = getCurrentMode();
  if (mode === prevMode) return;

  // Migrate existing history if possible
  try {
    const prevStorage = prevMode === 'session' ? sessionStorage : localStorage;
    const nextStorage = mode === 'session' ? sessionStorage : localStorage;
    const saved = prevStorage.getItem(CHAT_HISTORY_KEY);
    if (saved !== null) {
      nextStorage.setItem(CHAT_HISTORY_KEY, saved);
      prevStorage.removeItem(CHAT_HISTORY_KEY);
    }
  } catch {
    // best-effort migration
  }

  try {
    localStorage.setItem(STORAGE_MODE_KEY, mode);
  } catch {
    // ignore
  }
};

export const getChatStorageMode = (): StorageMode => getCurrentMode();

export const saveChatHistory = (messages: Message[]): void => {
  try {
    const storage = getStorage();
    storage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save chat history:', error);
  }
};

export const loadChatHistory = (): Message[] => {
  try {
    const storage = getStorage();
    const saved = storage.getItem(CHAT_HISTORY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
  } catch (error) {
    console.error('Failed to load chat history:', error);
  }
  return [];
};

export const clearChatHistory = (): void => {
  try {
    const storage = getStorage();
    storage.removeItem(CHAT_HISTORY_KEY);
  } catch (error) {
    console.error('Failed to clear chat history:', error);
  }
};