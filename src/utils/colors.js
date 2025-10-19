/**
 * Color System Documentation for Love Letter
 *
 * Usage Examples:
 *
 * Primary (Blue) - Trust & Security
 * - Buttons, Links, Active states
 * - className="bg-primary-600 text-white"
 * - className="text-primary-700"
 *
 * Secondary (Green) - Growth & Success
 * - Success messages, Positive indicators
 * - className="bg-secondary-600 text-white"
 * - className="text-secondary-700"
 *
 * Accent (Orange/Gold) - Attention & Warmth
 * - Call-to-actions, Highlights, Warnings
 * - className="bg-accent-500 text-white"
 * - className="text-accent-600"
 *
 * Status Colors:
 * - Success: text-success, bg-success-light
 * - Error: text-error, bg-error-light
 * - Warning: text-warning, bg-warning-light
 * - Info: text-info, bg-info-light
 */

export const colors = {
  primary: {
    main: '#2563eb',
    light: '#3b82f6',
    dark: '#1e40af',
  },
  secondary: {
    main: '#16a34a',
    light: '#22c55e',
    dark: '#15803d',
  },
  accent: {
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
  },
  status: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};

export default colors;
