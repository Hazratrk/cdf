import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiMail, FiFileText, FiLogOut, FiTrash2 } from 'react-icons/fi';

const DashboardPage = () => {
    const [messages, setMessages] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('messages'); // 'messages' və ya 'certificates'
    const navigate = useNavigate();

    // Sertifikat forması üçün statelər
    const [newCertTitle, setNewCertTitle] = useState('');
    const [newCertFile, setNewCertFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        const fetchData = async () => {
            try {
                // Mesajları gətirmək
                const messagesResponse = await axios.get('http://localhost:8000/api/admin/messages', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMessages(messagesResponse.data);

                // Sertifikatları gətirmək
                const certsResponse = await axios.get('http://localhost:8000/api/admin/certificates');
                setCertificates(certsResponse.data);

            } catch (err) {
                setError('Məlumatları gətirərkən xəta baş verdi.');
                console.error('Fetching data error:', err);
                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const handleDeleteMessage = async (id) => {
        const confirmDelete = window.confirm("Bu mesajı silmək istədiyinizə əminsinizmi?");
        if (!confirmDelete) return;
    
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }
    
        try {
            await axios.delete(`http://localhost:8000/api/admin/messages/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessages(messages.filter(msg => msg._id !== id));
        } catch (err) {
            console.error('Mesaj silinərkən xəta baş verdi:', err);
            alert('Mesaj silinərkən xəta baş verdi.');
        }
    };
    
    const handleCertificateUpload = async (e) => {
        e.preventDefault();
        setUploading(true);
        setUploadError(null);

        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        if (!newCertFile) {
            setUploadError('Zəhmət olmasa, bir şəkil seçin.');
            setUploading(false);
            return;
        }

        const formData = new FormData();
        formData.append('certificateImage', newCertFile);
        formData.append('title', newCertTitle);

        try {
            const response = await axios.post('http://localhost:8000/api/admin/certificates', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCertificates([...certificates, response.data]);
            setNewCertTitle('');
            setNewCertFile(null);
        } catch (err) {
            setUploadError('Sertifikat yüklənərkən xəta baş verdi.');
            console.error('Upload error:', err);
        } finally {
            setUploading(false);
        }
    };

    const handleDeleteCertificate = async (id) => {
        const confirmDelete = window.confirm("Bu sertifikatı silmək istədiyinizə əminsinizmi?");
        if (!confirmDelete) return;

        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        try {
            await axios.delete(`http://localhost:8000/api/admin/certificates/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCertificates(certificates.filter(cert => cert._id !== id));
        } catch (err) {
            console.error('Sertifikat silinərkən xəta baş verdi:', err);
            alert('Sertifikat silinərkən xəta baş verdi.');
        }
    };

    if (loading) return <div className="flex justify-center items-center min-h-screen bg-gray-100"><p className="text-xl text-gray-700">Yüklənir...</p></div>;
    if (error) return <div className="flex justify-center items-center min-h-screen bg-gray-100"><p className="text-xl text-red-500">{error}</p></div>;

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0b0d27] text-white p-6 flex flex-col items-center shadow-lg">
                <div className="flex items-center mb-10">
                    <img src="https://i.ibb.co/6P1M3zY/logo.png" alt="Logo" className="w-10 h-10 mr-3" />
                    <h1 className="text-2xl font-semibold">Admin Panel</h1>
                </div>
                <nav className="w-full flex-1">
                    <button 
                        onClick={() => setActiveTab('messages')}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === 'messages' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                    >
                        <FiMail className="mr-3" /> Mesajlar
                    </button>
                    <button 
                        onClick={() => setActiveTab('certificates')}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 mt-4 ${activeTab === 'certificates' ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
                    >
                        <FiFileText className="mr-3" /> Sertifikatlar
                    </button>
                </nav>
                <button 
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center p-3 mt-auto border border-white rounded-lg transition-colors duration-200 hover:bg-white hover:text-red-500"
                >
                    <FiLogOut className="mr-2" /> Çıxış
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-auto">
                {activeTab === 'messages' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8">Mesajlar</h2>
                        {messages.length === 0 ? (
                            <p className="text-center text-gray-500">Hələlik heç bir mesaj yoxdur.</p>
                        ) : (
                            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ad</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mesaj</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarix</th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hərəkətlər</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {messages.map((msg) => {
                                            const date = new Date(msg.createdAt);
                                            const formattedDate = date.toLocaleDateString('az-AZ', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            });
                                            return (
                                                <tr key={msg._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{msg.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{msg.email}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-700 max-w-sm overflow-hidden text-ellipsis">{msg.message}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formattedDate}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button 
                                                            onClick={() => handleDeleteMessage(msg._id)}
                                                            className="text-red-600 hover:text-red-900 transition-colors"
                                                            title="Mesajı Sil"
                                                        >
                                                            <FiTrash2 size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                )}
                
                {activeTab === 'certificates' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8">Sertifikatlar</h2>
                        
                        {/* Yeni Sertifikat Yükləmə Forması */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h3 className="text-xl font-semibold mb-4">Yeni Sertifikat Yüklə</h3>
                            <form onSubmit={handleCertificateUpload} className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Başlıq</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={newCertTitle}
                                        onChange={(e) => setNewCertTitle(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">Şəkil Seçin</label>
                                    <input
                                        type="file"
                                        id="file"
                                        accept="image/*"
                                        onChange={(e) => setNewCertFile(e.target.files[0])}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        required
                                    />
                                </div>
                                {uploadError && <p className="text-red-500 text-sm mt-2">{uploadError}</p>}
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                                >
                                    {uploading ? 'Yüklənir...' : 'Yüklə'}
                                </button>
                            </form>
                        </div>

                        {/* Sertifikatların Siyahısı */}
                        {certificates.length === 0 ? (
                            <p className="text-center text-gray-500">Hələlik heç bir sertifikat yoxdur.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certificates.map((cert) => (
                                    <div key={cert._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                                        <img src={cert.imageUrl} alt={cert.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                        <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{new Date(cert.uploadDate).toLocaleDateString('az-AZ')}</p>
                                        <button 
                                            onClick={() => handleDeleteCertificate(cert._id)}
                                            className="text-red-600 hover:text-red-900 transition-colors flex items-center"
                                        >
                                            <FiTrash2 className="mr-1" /> Sertifikatı Sil
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
            </main>
        </div>
    );
};

export default DashboardPage;