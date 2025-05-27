import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyThreats = [
  { id: 1, title: 'Ransomware attack via phishing', timestamp: '2 hours ago' },
  { id: 2, title: 'Fake domain targeting online banking', timestamp: '4 hours ago' },
  { id: 3, title: 'DDoS attack attempts on FI #17', timestamp: '1 day ago' },
];

const dummyStats = [
  { name: 'Week 1', incidents: 5 },
  { name: 'Week 2', incidents: 8 },
  { name: 'Week 3', incidents: 4 },
  { name: 'Week 4', incidents: 9 },
];

export default function Dashboard() {
  const [incidents, setIncidents] = useState({
    active: 3,
    underReview: 4,
    closed: 18,
    lastReported: '2 hrs ago',
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Bank Threat Platform</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-blue-600 font-semibold">Dashboard</a>
          <a href="#" className="block text-gray-700">Reports</a>
          <a href="#" className="block text-gray-700">Threat Feed</a>
          <a href="#" className="block text-gray-700">Resources</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="text-sm text-gray-600">Logged in as: Analyst</div>
        </header>

        {/* Incident Summary */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Active Incidents</h3>
            <p className="text-xl font-bold text-red-600">{incidents.active}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Under Review</h3>
            <p className="text-xl font-bold text-yellow-600">{incidents.underReview}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Closed</h3>
            <p className="text-xl font-bold text-green-600">{incidents.closed}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-sm text-gray-500">Last Report</h3>
            <p className="text-xl font-bold">{incidents.lastReported}</p>
          </div>
        </section>

        {/* Threat Intelligence Feed */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Latest Shared Threat Intelligence</h2>
          <ul className="space-y-2">
            {dummyThreats.map(threat => (
              <li key={threat.id} className="bg-white p-4 rounded-xl shadow-md">
                <p className="font-semibold">{threat.title}</p>
                <span className="text-sm text-gray-500">{threat.timestamp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Incident Reports Chart */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Incident Reports This Month</h2>
          <div className="bg-white p-4 rounded-xl shadow-md h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyStats}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="incidents" fill="#3182ce" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
}
