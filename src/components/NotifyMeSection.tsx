import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


const NotifyMeSection = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Regular expression for emails from top 5 providers
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com)$/;

  const handlePreOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setEmailError('');

    // Check if the email matches the regex for the top 5 email providers
    if (!emailRegex.test(email)) {
      setLoading(false);
      setEmailError('Please enter a valid email address from Gmail, Yahoo, Outlook, Hotmail, or iCloud.');
      return;
    }

    // Insert email into Supabase leads table
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      setShowThankYou(true);
    } catch (err) {
      console.error('Error inserting email:', err);
      setError('Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Join the Stickerhammer40k Revolution—Save 20%!</h2>
        <p className="text-xl text-gray-300 mb-12">
          Be among the first to get your hands on these limited edition stickers!
        </p>
        {!showThankYou ? (
          <form onSubmit={handlePreOrder} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-400"
              />
              <button 
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 hover:from-purple-600 hover:to-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Sign up now!
                  </>
                )}
              </button>
            </div>
            {emailError && <p className="text-red-500 mt-4">{emailError}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        ) : (
          <div className="bg-gray-800 p-8 rounded-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-300 mb-6">
              Thanks for joining! What kind of Warhammer stickers would you love to see? Tell us and help shape our collection!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfDl_u7LUpU7ftgpFPXGeD5hbbESoK4OWB7YavYypG7fEPEpQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 hover:from-purple-600 hover:to-yellow-600 transition-colors"
            >
              Share Your Feedback
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default NotifyMeSection;
