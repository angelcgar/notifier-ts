type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationOptions {
  type?: NotificationType;
  duration?: number; // ms
}

const defaultDuration = 3000;

const styles = `
#ts-notifier-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: sans-serif;
}
.ts-notifier {
  padding: 1rem 1.5rem;
  border-radius: 0.375rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: fadein 0.3s ease-out;
  opacity: 0.95;
}
.ts-notifier.success { background-color: #16a34a; }
.ts-notifier.error   { background-color: #dc2626; }
.ts-notifier.info    { background-color: #2563eb; }
.ts-notifier.warning { background-color: #facc15; color: black; }

@keyframes fadein {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 0.95; transform: translateY(0); }
}
`;

function ensureContainer(): HTMLElement {
  let container = document.getElementById('ts-notifier-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'ts-notifier-container';
    document.body.appendChild(container);
  }
  return container;
}

function injectStyles(): void {
  if (document.getElementById('ts-notifier-style')) return;

  const style = document.createElement('style');
  style.id = 'ts-notifier-style';
  style.textContent = styles;
  document.head.appendChild(style);
}

/**
 *
 * @param message The message to display in the notification.
 * @param options Optional configuration for the notification.
 */
export function notify(message: string, options: NotificationOptions = {}): void {
  injectStyles();
  const container = ensureContainer();

  const notif = document.createElement('div');
  notif.className = `ts-notifier ${options.type || 'info'}`;
  notif.textContent = message;

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
    if (container.children.length === 0) container.remove();
  }, options.duration || defaultDuration);
}
