import { useState } from 'react';

// ─── SETUP ──────────────────────────────────────────────────────────────────
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form and copy the form ID (looks like "xpwzabcd").
// 3. Replace YOUR_FORM_ID below with that ID.
// Free tier: 50 submissions/month, no backend needed.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
// ────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Unable to send — please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-full bg-parchment-50 flex flex-col">
      {/* Page header */}
      <div className="bg-scripture-800 text-white px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-3xl mb-2">💬</p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-2">Share Your Suggestions</h1>
          <p className="text-scripture-200 text-sm md:text-base">
            Have an idea for a new feature, a topic you'd like covered, or just general feedback? I'd love to hear it.
          </p>
        </div>
      </div>

      {/* Form card */}
      <div className="flex-1 px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="font-serif text-xl font-bold text-scripture-800 mb-2">Thank you!</h2>
              <p className="text-gray-600 text-sm mb-6">Your suggestion has been received. I appreciate you taking the time to reach out!</p>
              <button
                onClick={() => setStatus('idle')}
                className="px-5 py-2 bg-scripture-700 text-white text-sm font-medium rounded-lg hover:bg-scripture-800 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="sg-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="sg-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scripture-400 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="sg-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-gray-400 font-normal">(optional — only if you'd like a reply)</span>
                </label>
                <input
                  id="sg-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scripture-400 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="sg-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Suggestion or Feedback <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="sg-message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="Tell me what you'd like to see — a new feature, a Bible topic, a study section, anything at all..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scripture-400 focus:border-transparent resize-none"
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting' || !message.trim()}
                className="w-full py-2.5 bg-scripture-700 text-white text-sm font-semibold rounded-lg hover:bg-scripture-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Suggestion'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Submitted suggestions are sent directly to the developer. Your email is never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
