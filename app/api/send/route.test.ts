/**
 * @vitest-environment node
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST } from './route';

// Create a mock send function that we can control
const mockSend = vi.fn();

// Mock Resend module
vi.mock('resend', () => {
  return {
    Resend: class {
      constructor() {
        // Constructor can accept API key but we don't need it for tests
      }
      emails = {
        send: mockSend,
      };
    },
  };
});

describe('POST /api/send', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    mockSend.mockClear();

    // Setup environment variables
    process.env = {
      ...originalEnv,
      RESEND_API_KEY: 'test-api-key',
      RECIPIENT_EMAIL: 'test@example.com',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('Valid POST request', () => {
    it('should return 200 status and call Resend.send() with correct parameters', async () => {
      // Mock successful email send
      mockSend.mockResolvedValue({
        data: { id: 'test-email-id' },
        error: null,
      });

      const requestBody = {
        name: 'テスト太郎',
        email: 'test@example.com',
        category: 'お問い合わせ',
        message: 'テストメッセージです。',
      };

      const request = new Request('http://localhost/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const response = await POST(request);
      const responseData = await response.json();

      // Verify response
      expect(response.status).toBe(200);
      expect(responseData).toEqual({ success: true });

      // Verify Resend.send() was called with correct parameters
      expect(mockSend).toHaveBeenCalledTimes(1);
      expect(mockSend).toHaveBeenCalledWith({
        from: 'onboarding@resend.dev',
        to: 'test@example.com',
        subject: '【お問い合わせ】お問い合わせ - テスト太郎様より',
        html: expect.stringContaining('テスト太郎'),
      });
    });
  });

  describe('Missing name field', () => {
    it('should return 400 status and not call Resend.send()', async () => {
      const requestBody = {
        email: 'test@example.com',
        category: 'お問い合わせ',
        message: 'テストメッセージです。',
        // name is missing
      };

      const request = new Request('http://localhost/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const response = await POST(request);
      const responseData = await response.json();

      // Verify response
      expect(response.status).toBe(400);
      expect(responseData).toEqual({
        success: false,
        error: '必須項目をすべて入力してください。',
      });

      // Verify Resend.send() was NOT called
      expect(mockSend).not.toHaveBeenCalled();
    });
  });

  describe('Missing email field', () => {
    it('should return 400 status and not call Resend.send()', async () => {
      const requestBody = {
        name: 'テスト太郎',
        category: 'お問い合わせ',
        message: 'テストメッセージです。',
        // email is missing
      };

      const request = new Request('http://localhost/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const response = await POST(request);
      const responseData = await response.json();

      // Verify response
      expect(response.status).toBe(400);
      expect(responseData).toEqual({
        success: false,
        error: '必須項目をすべて入力してください。',
      });

      // Verify Resend.send() was NOT called
      expect(mockSend).not.toHaveBeenCalled();
    });
  });
});

