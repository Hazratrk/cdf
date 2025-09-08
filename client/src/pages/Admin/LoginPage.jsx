import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/admin/login', { password });
      
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Parol yanlışdır. Zəhmət olmasa, yenidən cəhd edin.');
      }
    } catch (err) {
      setError('Giriş zamanı xəta baş verdi. Zəhmət olmasa, serverin işlədiyinə əmin olun.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Paneli</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Parol</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Yoxlanılır...' : 'Daxil ol'}
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;